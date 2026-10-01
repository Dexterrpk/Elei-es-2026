const normalize = (value = '') => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase();

const aliases = {
  ia: ['inteligencia artificial', 'tecnologia'],
  imposto: ['impostos', 'tributaria', 'tributario', 'tributacao'],
  impostos: ['imposto', 'tributaria', 'tributario', 'tributacao'],
  arma: ['armas', 'seguranca'],
  armas: ['arma', 'controle de armas', 'seguranca'],
  sus: ['saude'],
  emprego: ['trabalho', 'empreendedorismo'],
  drogas: ['descriminalizacao'],
  privatizacao: ['privatizacoes', 'reestatizacao'],
  privatizacoes: ['privatizacao', 'reestatizacao']
};

export function expandQuery(query) {
  const q = normalize(query).trim();
  if (!q) return [];
  return [q, ...(aliases[q] || [])].map(normalize);
}

export function matches(text, query) {
  const haystack = normalize(text);
  return expandQuery(query).some((term) => haystack.includes(term));
}

export function searchCandidates(candidates, query) {
  const terms = expandQuery(query);
  if (!terms.length) return { candidates: [], proposals: [], positions: [] };

  const candidateResults = [];
  const proposalResults = [];
  const positionResults = [];

  candidates.forEach((candidate) => {
    const core = [candidate.name, candidate.fullName, candidate.party, candidate.number, candidate.office, candidate.vice].join(' ');
    if (terms.some((term) => normalize(core).includes(term))) candidateResults.push(candidate);

    candidate.proposals.forEach((proposal) => {
      const text = `${proposal.theme} ${proposal.title} ${proposal.summary} ${candidate.name}`;
      if (terms.some((term) => normalize(text).includes(term))) proposalResults.push({ candidate, proposal });
    });

    candidate.positions.forEach((position) => {
      const text = `${position.theme} ${position.label} ${position.detail} ${candidate.name}`;
      if (terms.some((term) => normalize(text).includes(term))) positionResults.push({ candidate, position });
    });
  });

  return { candidates: candidateResults, proposals: proposalResults, positions: positionResults };
}
