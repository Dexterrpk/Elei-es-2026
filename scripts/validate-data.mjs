import { CANDIDATES, REGISTRATION_CHANGES } from '../src/data/candidates.js';
import { SOURCES } from '../src/data/sources.js';
import { APP_META } from '../src/data/content.js';

const errors = [];
const warnings = [];
const sourceIds = new Set(SOURCES.map(s => s.id));
const ids = new Set();
const proposalIds = new Set();
const banned = [
  /\bmelhor\b/i, /\bpior\b/i, /\bvencedor\b/i, /\bmais preparado\b/i,
  /\bnota\b/i, /\branking\b/i, /\bficha limpa\b/i
];

const fail = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);
const verifySourceIds = (owner, list = []) => {
  if (!list.length) fail(`${owner}: sem fonte.`);
  for (const id of list) if (!sourceIds.has(id)) fail(`${owner}: sourceId inexistente: ${id}`);
};
const checkNeutralText = (owner, text = '') => {
  for (const rx of banned) if (rx.test(text)) fail(`${owner}: termo editorial proibido encontrado (${rx}).`);
};

for (const source of SOURCES) {
  if (!source.id || !source.name || !source.url || !source.consultedAt) fail(`Fonte incompleta: ${source.id || source.name || '(sem id)'}`);
  if (!/^https:\/\//.test(source.url || '')) fail(`Fonte ${source.id}: URL não HTTPS.`);
  if (source.consultedAt > APP_META.lastUpdated) fail(`Fonte ${source.id}: consultada depois da atualização do painel.`);
}

for (const c of CANDIDATES) {
  if (ids.has(c.id)) fail(`ID de candidato duplicado: ${c.id}`); else ids.add(c.id);
  for (const field of ['name','party','number','office','vice','status']) if (!c[field]) fail(`${c.id}: campo obrigatório ausente: ${field}`);
  verifySourceIds(`${c.id} (perfil)`, c.sources);
  checkNeutralText(`${c.id} (perfil)`, `${c.name} ${c.notes?.join(' ') || ''}`);
  for (const p of c.proposals) {
    if (proposalIds.has(p.id)) fail(`ID de proposta duplicado: ${p.id}`); else proposalIds.add(p.id);
    if (!p.theme || !p.title || !p.summary || !p.type || !p.consultedAt) fail(`${c.id}/${p.id}: proposta incompleta.`);
    verifySourceIds(`${c.id}/${p.id}`, p.sourceIds);
    checkNeutralText(`${c.id}/${p.id}`, `${p.title} ${p.summary}`);
  }
  for (const pos of c.positions) {
    if (!pos.theme || !pos.label || !pos.detail || !pos.consultedAt) fail(`${c.id}/${pos.theme}: posição incompleta.`);
    verifySourceIds(`${c.id}/${pos.theme}`, pos.sourceIds);
    checkNeutralText(`${c.id}/${pos.theme}`, `${pos.label} ${pos.detail}`);
  }
  for (const t of c.timeline) verifySourceIds(`${c.id}/timeline/${t.title}`, t.sourceIds);
}

for (const change of REGISTRATION_CHANGES) {
  if (!change.person || !change.status || !change.date || !change.summary) fail(`Alteração de registro incompleta: ${change.id}`);
  verifySourceIds(`alteração/${change.id}`, change.sourceIds);
}

const presidents = CANDIDATES.filter(c => c.office === 'Presidente');
const governors = CANDIDATES.filter(c => c.office === 'Governador da Bahia');
if (presidents.length !== 12) fail(`Esperadas 12 chapas presidenciais ativas; encontradas ${presidents.length}.`);
if (governors.length !== 6) fail(`Esperadas 6 candidaturas deferidas ao Governo da Bahia; encontradas ${governors.length}.`);

const uniqueWithinOffice = (list, label) => {
  const numbers = new Set();
  for (const c of list) {
    if (numbers.has(c.number)) warn(`${label}: número ${c.number} repetido na lista ativa; revisar contexto.`);
    numbers.add(c.number);
  }
};
uniqueWithinOffice(presidents, 'Presidência');
uniqueWithinOffice(governors, 'Bahia');

console.log(`Mapa Eleitoral 2026 — validação ${APP_META.lastUpdated}`);
console.log(`Candidaturas: ${CANDIDATES.length} (${presidents.length} Presidência; ${governors.length} Bahia)`);
console.log(`Propostas carregadas: ${CANDIDATES.reduce((n,c)=>n+c.proposals.length,0)}`);
console.log(`Posições documentadas: ${CANDIDATES.reduce((n,c)=>n+c.positions.length,0)}`);
console.log(`Fontes catalogadas: ${SOURCES.length}`);
if (warnings.length) {
  console.log('\nAvisos:'); warnings.forEach(w => console.log(`- ${w}`));
}
if (errors.length) {
  console.error('\nERROS:'); errors.forEach(e => console.error(`- ${e}`));
  process.exit(1);
}
console.log('\nOK: integridade estrutural e regras editoriais básicas aprovadas.');
