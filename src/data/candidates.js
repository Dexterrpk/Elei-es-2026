const consultedAt = '2026-10-01';
const divCand = 'https://divulgacandcontas.tse.jus.br/divulga/';
const tsePlans = 'https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026/planos-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026';
const tseOpenData = 'https://dadosabertos.tse.jus.br/pt_BR/dataset/candidatos-2026';

const p = (id, theme, title, summary, sourceIds, type = 'Plano de governo') => ({
  id, theme, title, summary, type, sourceIds, date: '2026', consultedAt
});

const pos = (theme, label, detail, sourceIds) => ({
  theme, label, detail, sourceIds, date: '2026', consultedAt
});

const base = ({ id, name, fullName, party, number, vice, office, status, coalition = null, proposals = [], positions = [], sources = [], notes = [] }) => ({
  id, name, fullName, party, number, vice, office, status, coalition,
  photoUrl: null,
  governmentPlanUrl: office === 'Presidente' ? tsePlans : tseOpenData,
  officialProfileUrl: divCand,
  proposals,
  positions,
  legalHistory: [],
  timeline: [
    { year: 2026, title: 'Candidatura registrada', description: 'Registro eleitoral de 2026. Consulte o DivulgaCand para o andamento processual completo.', sourceIds: ['tse-divulgacand'] },
    { year: 2026, title: `Situação atual: ${status}`, description: `Situação exibida conforme as fontes consultadas até ${consultedAt.split('-').reverse().join('/')}.`, sourceIds: sources }
  ],
  sources: Array.from(new Set(['tse-divulgacand', ...sources])),
  notes
});

export const CANDIDATES = [
  base({
    id: 'lula', name: 'Lula', fullName: 'Luiz Inácio Lula da Silva', party: 'PT', number: '13', office: 'Presidente', vice: 'Geraldo Alckmin (PSB)', status: 'Deferido', coalition: 'Brasil Pronto Pra Mais',
    proposals: [
      p('lula-economia', 'Economia', 'Indústria e infraestrutura', 'Mantém programas de investimento e política industrial como eixos do plano.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente']),
      p('lula-seguranca', 'Segurança', 'Crime organizado e fronteiras', 'Prevê fortalecer o combate financeiro ao crime e a atuação nas fronteiras.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente'])
    ],
    positions: [pos('Armas', 'Defende maior controle', 'O plano registra fortalecimento do controle de armas no eixo de segurança.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente'])],
    sources: ['tse-presidencia-12', 'tse-planos-presidente']
  }),
  base({
    id: 'flavio-bolsonaro', name: 'Flavio Bolsonaro', fullName: 'Flávio Nantes Bolsonaro', party: 'PL', number: '22', office: 'Presidente', vice: 'Alfredo Gaspar (PL)', status: 'Deferido',
    proposals: [
      p('flavio-saude', 'Saúde', 'Digitalização do SUS', 'Propõe prontuário eletrônico e maior uso de telessaúde.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente']),
      p('flavio-seguranca', 'Segurança', 'Tecnologia e sistema penal', 'Prevê reconhecimento facial e mudanças em regras penais.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente'])
    ],
    positions: [pos('Maioridade penal', 'Defende alteração', 'O plano inclui mudança da maioridade penal.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente'])],
    sources: ['tse-presidencia-12', 'tse-planos-presidente']
  }),
  base({
    id: 'ronaldo-caiado', name: 'Ronaldo Caiado', fullName: 'Ronaldo Ramos Caiado', party: 'PSD', number: '55', office: 'Presidente', vice: 'Gilberto Kassab (PSD)', status: 'Deferido',
    proposals: [
      p('caiado-economia', 'Economia', 'Produtividade e equilíbrio fiscal', 'O plano combina produtividade, reindustrialização e controle de despesas.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente']),
      p('caiado-saude', 'Saúde', 'Regulação e hospitais digitais', 'Prevê medidas para filas, hospitais digitais e atenção primária.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente'])
    ],
    sources: ['tse-presidencia-12', 'tse-planos-presidente']
  }),
  base({
    id: 'rui-costa-pimenta', name: 'Rui Costa Pimenta', fullName: 'Rui Costa Pimenta', party: 'PCO', number: '29', office: 'Presidente', vice: 'Antônio Carlos (PCO)', status: 'Deferido',
    proposals: [
      p('rui-trabalho', 'Trabalho', 'Salários e jornada', 'Propõe aumento salarial e redução da jornada de trabalho.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente']),
      p('rui-economia', 'Economia', 'Reestatização', 'Defende reestatizar empresas privatizadas e ampliar controle estatal.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente'])
    ],
    positions: [pos('Privatizações', 'É contrário', 'O plano registra proposta de reestatização de empresas privatizadas.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente'])],
    sources: ['tse-presidencia-12', 'tse-planos-presidente']
  }),
  base({
    id: 'samara', name: 'Samara', fullName: 'Samara Martins da Silva Feitosa', party: 'UP', number: '80', office: 'Presidente', vice: 'Raquel Brício (UP)', status: 'Deferido',
    proposals: [
      p('samara-trabalho', 'Trabalho', 'Jornada e salário mínimo', 'Propõe escala 4x3 e forte aumento do salário mínimo.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente']),
      p('samara-habitacao', 'Habitação', 'Produção pública de moradias', 'Prevê produção pública de moradias e reforma urbana.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente'])
    ],
    positions: [pos('Empresas estatais', 'Defende maior controle estatal', 'O plano inclui nacionalização dos bancos.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente'])],
    sources: ['tse-presidencia-12', 'tse-planos-presidente']
  }),
  base({
    id: 'zema', name: 'Zema', fullName: 'Romeu Zema Neto', party: 'NOVO', number: '30', office: 'Presidente', vice: 'Eduardo Girão (NOVO)', status: 'Deferido',
    proposals: [
      p('zema-economia', 'Economia', 'Privatizações e reforma administrativa', 'O plano prevê privatização de estatais e reforma administrativa.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente']),
      p('zema-saude', 'Saúde', 'Telemedicina e parcerias', 'Propõe telemedicina e parcerias privadas para reduzir filas.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente'])
    ],
    positions: [
      pos('Privatizações', 'Defende', 'O plano registra privatização de estatais.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente']),
      pos('Política externa', 'Defende saída do BRICS', 'A proposta aparece no programa registrado.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente'])
    ],
    sources: ['tse-presidencia-12', 'tse-planos-presidente']
  }),
  base({
    id: 'hertz-dias', name: 'Hertz Dias', fullName: 'Hertz da Conceição Dias', party: 'PSTU', number: '16', office: 'Presidente', vice: 'Vanessa Portugal (PSTU)', status: 'Deferido',
    proposals: [
      p('hertz-trabalho', 'Trabalho', 'Jornada de 36 horas', 'Propõe redução da jornada e fim da escala 6x1.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente']),
      p('hertz-saude', 'Saúde', 'SUS estatal', 'Defende expansão do SUS com gestão integralmente estatal.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente'])
    ],
    positions: [pos('Drogas', 'Defende descriminalização', 'O plano inclui descriminalização das drogas.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente'])],
    sources: ['tse-presidencia-12', 'tse-planos-presidente']
  }),
  base({
    id: 'edmilson-costa', name: 'Edmilson Costa', fullName: 'Edmilson Silva Costa', party: 'PCB', number: '21', office: 'Presidente', vice: 'Cleusa Santos (PCB)', status: 'Deferido',
    proposals: [
      p('edmilson-trabalho', 'Trabalho', 'Jornada de 30 horas', 'Propõe jornada de 30 horas sem redução salarial.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente']),
      p('edmilson-saude', 'Saúde', 'Expansão pública da saúde', 'Defende sistema de saúde integralmente público e estatal.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente'])
    ],
    positions: [
      pos('Aborto', 'Defende legalização', 'A legalização consta no programa registrado.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente']),
      pos('Drogas', 'Defende descriminalização do uso', 'A descriminalização do uso aparece no programa.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente'])
    ],
    sources: ['tse-presidencia-12', 'tse-planos-presidente']
  }),
  base({
    id: 'renan-santos', name: 'Renan Santos', fullName: 'Renan Antonio Ferreira dos Santos', party: 'MISSÃO', number: '14', office: 'Presidente', vice: 'Aroldo Medina (MISSÃO)', status: 'Deferido',
    proposals: [
      p('renan-saude', 'Saúde', 'Integração de dados clínicos', 'Propõe prontuário interoperável e classificação nacional de risco.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente']),
      p('renan-seguranca', 'Segurança', 'Superpresídios e tecnologia', 'Prevê superpresídios, drones e reconhecimento facial.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente'])
    ],
    sources: ['tse-presidencia-12', 'tse-planos-presidente']
  }),
  base({
    id: 'wilson-grassi', name: 'Veterinário Wilson Grassi', fullName: 'Wilson Grassi Junior', party: 'DEMOCRATA', number: '35', office: 'Presidente', vice: 'Suêd Haidar (DEMOCRATA)', status: 'Deferido',
    proposals: [
      p('grassi-impostos', 'Impostos', 'Simplificação tributária', 'Propõe imposto federal único sobre movimentação financeira.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente']),
      p('grassi-saude', 'Saúde', 'Fila única', 'Prevê fila única para cirurgias e diagnósticos.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente'])
    ],
    sources: ['tse-presidencia-12', 'tse-planos-presidente']
  }),
  base({
    id: 'clariana-barao', name: 'Clariana Barão', fullName: 'Clariana Zacarkim Barão', party: 'DC', number: '27', office: 'Presidente', vice: 'Fabiana Torquato (DC)', status: 'Deferido',
    proposals: [
      p('clariana-saude', 'Saúde', 'Saúde digital', 'Propõe telemedicina e regulação digital das filas.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente']),
      p('clariana-seguranca', 'Segurança', 'Fronteiras e inteligência', 'Prevê monitoramento tecnológico de fronteiras e inteligência financeira.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente'])
    ],
    sources: ['tse-presidencia-12', 'tse-planos-presidente']
  }),
  base({
    id: 'augusto-cury', name: 'Escritor Augusto Cury', fullName: 'Augusto Jorge Cury', party: 'AVANTE', number: '70', office: 'Presidente', vice: 'Júlio Delgado (AVANTE)', status: 'Deferido', coalition: 'Brasil dos Nossos Sonhos',
    proposals: [
      p('cury-economia', 'Economia', 'Banco do Empreendedor', 'Propõe crédito e programas voltados à formação de empreendedores.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente']),
      p('cury-saude', 'Saúde', 'Saúde mental e telemedicina', 'Prevê programa nacional de saúde mental e telemedicina.', ['tse-planos-presidente', 'agencia-cidades-planos-presidente'])
    ],
    sources: ['tse-presidencia-12', 'tse-planos-presidente']
  }),
  base({
    id: 'jeronimo-rodrigues', name: 'Jerônimo Rodrigues', fullName: 'Jerônimo Rodrigues Souza', party: 'PT', number: '13', office: 'Governador da Bahia', vice: 'Geraldo Júnior (MDB)', status: 'Deferido', coalition: 'Mais Bahia, Mais Brasil',
    proposals: [
      p('jeronimo-educacao', 'Educação', 'Ensino médio integral', 'Propõe ampliar a oferta de ensino médio em tempo integral.', ['tse-dados-candidatos', 'bdf-ba-planos']),
      p('jeronimo-infra', 'Infraestrutura', 'VLT, metrô e grandes obras', 'Prevê continuidade de VLT, ponte Salvador-Itaparica e expansão do metrô.', ['tse-dados-candidatos', 'bdf-ba-planos'])
    ],
    sources: ['agora-ba-candidatos', 'treba-divulgacand', 'tse-dados-candidatos']
  }),
  base({
    id: 'ariel-capistrano', name: 'Ariel Capistrano', fullName: 'Ariel da Silva Capistrano', party: 'DC', number: '27', office: 'Governador da Bahia', vice: 'Zé Augusto (DC)', status: 'Deferido',
    proposals: [
      p('ariel-saude', 'Saúde', 'Rede hospitalar', 'Propõe ampliar leitos e modernizar hospitais regionais.', ['tse-dados-candidatos', 'bdf-ba-planos']),
      p('ariel-educacao', 'Educação', 'Ensino profissionalizante', 'Prevê expansão do ensino profissionalizante.', ['tse-dados-candidatos', 'bdf-ba-planos'])
    ],
    sources: ['agora-ba-candidatos', 'treba-divulgacand', 'tse-dados-candidatos']
  }),
  base({
    id: 'maria-bona', name: 'Maria Bona', fullName: 'Maria Bona Carrara de Sumbuy', party: 'PCO', number: '29', office: 'Governador da Bahia', vice: 'Zé Ricardo (PCO)', status: 'Deferido',
    proposals: [
      p('bona-trabalho', 'Trabalho', 'Salários e jornada', 'O programa apresentado pelo partido propõe aumento salarial e jornada menor.', ['tse-dados-candidatos', 'bdf-ba-planos']),
      p('bona-economia', 'Economia', 'Reestatização', 'O programa defende reestatização e maior controle estatal da economia.', ['tse-dados-candidatos', 'bdf-ba-planos'])
    ],
    positions: [pos('Privatizações', 'É contrário', 'O programa utilizado na candidatura defende reestatização.', ['tse-dados-candidatos', 'bdf-ba-planos'])],
    sources: ['agora-ba-candidatos', 'treba-divulgacand', 'tse-dados-candidatos']
  }),
  base({
    id: 'acm-neto', name: 'ACM Neto', fullName: 'Antonio Carlos Peixoto de Magalhães Neto', party: 'UNIÃO', number: '44', office: 'Governador da Bahia', vice: 'Zé Cocá (PP)', status: 'Deferido', coalition: 'Unidos Para Mudar a Bahia',
    proposals: [
      p('acm-saude', 'Saúde', 'Regulação em fila única', 'Propõe reorganizar a regulação estadual em uma fila integrada.', ['tse-dados-candidatos', 'bdf-ba-planos']),
      p('acm-educacao', 'Educação', 'Recomposição de aprendizagem', 'O plano prevê rever a política de aprovação e reforçar aprendizagem.', ['tse-dados-candidatos', 'bdf-ba-planos'])
    ],
    sources: ['agora-ba-candidatos', 'treba-divulgacand', 'tse-dados-candidatos']
  }),
  base({
    id: 'ronaldo-mansur', name: 'Ronaldo Mansur', fullName: 'Ronaldo Mansur Santos Silva', party: 'PSOL', number: '50', office: 'Governador da Bahia', vice: 'Prof. Meire Reis (PSOL)', status: 'Deferido', coalition: 'Federação PSOL REDE',
    proposals: [
      p('mansur-saude', 'Saúde', 'Fortalecimento do SUS', 'O programa propõe ampliar e fortalecer a rede pública estadual de saúde.', ['tse-dados-candidatos', 'bdf-ba-planos']),
      p('mansur-gestao', 'Administração pública', 'Orçamento participativo', 'Propõe ampliar participação popular por meio de orçamento participativo.', ['tse-dados-candidatos', 'bdf-ba-planos'])
    ],
    positions: [pos('Segurança pública', 'Defende desmilitarização', 'O programa inclui desmilitarização das polícias.', ['tse-dados-candidatos', 'bdf-ba-planos'])],
    sources: ['agora-ba-candidatos', 'treba-divulgacand', 'tse-dados-candidatos']
  }),
  base({
    id: 'aroldo-felix', name: 'Aroldo Felix', fullName: 'Aroldo Felix de Azevedo Junior', party: 'UP', number: '80', office: 'Governador da Bahia', vice: 'Marilia do MLB (UP)', status: 'Deferido',
    proposals: [
      p('aroldo-educacao', 'Educação', 'Mais investimento público', 'O programa apresentado defende maior investimento público em educação.', ['tse-dados-candidatos', 'bdf-ba-planos']),
      p('aroldo-economia', 'Economia', 'Maior presença estatal', 'Defende reestatização e maior presença do Estado na economia.', ['tse-dados-candidatos', 'bdf-ba-planos'])
    ],
    positions: [pos('Segurança pública', 'Defende desmilitarização', 'A proposta de desmilitarização aparece na síntese do programa.', ['tse-dados-candidatos', 'bdf-ba-planos'])],
    sources: ['agora-ba-candidatos', 'treba-divulgacand', 'tse-dados-candidatos', 'meuvoto-aroldo'],
    notes: ['O plano registrado em 2026 aparece como arquivo digitalizado em fonte complementar; esta versão não atribui páginas específicas sem leitura manual do documento.']
  })
];

export const REGISTRATION_CHANGES = [
  {
    id: 'prtb-marcal',
    scope: 'Presidência',
    person: 'Pablo Marçal / Leonardo Avalanche',
    status: 'Registro indeferido',
    date: '2026-09-11',
    summary: 'O TSE indeferiu o pedido de registro da chapa então apresentada pelo PRTB. O registro não integra a lista de 12 chapas validadas pelo Tribunal.',
    sourceIds: ['tse-presidencia-12']
  },
  {
    id: 'prtb-avalanche',
    scope: 'Presidência',
    person: 'Leonardo Avalanche',
    status: 'Desistência anunciada',
    date: '2026-09-30',
    summary: 'Após tentativa posterior de substituição, Leonardo Avalanche anunciou desistência. A fonte jornalística deve ser conferida junto ao cadastro mais recente do TSE.',
    sourceIds: ['agencia-brasil-avalanche', 'tse-divulgacand']
  },
  {
    id: 'ba-estevao',
    scope: 'Governo da Bahia',
    person: 'Estêvão',
    status: 'Indeferido',
    date: '2026-09',
    summary: 'O registro aparece como indeferido nas fontes sincronizadas com os dados da Justiça Eleitoral e não integra a lista de candidaturas deferidas exibida no painel.',
    sourceIds: ['agora-ba-candidatos', 'treba-divulgacand']
  }
];

export const getCandidate = (id) => CANDIDATES.find((candidate) => candidate.id === id);
