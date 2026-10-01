export const APP_META = {
  name: 'MAPA ELEITORAL 2026',
  subtitle: 'Compare propostas, posições públicas e informações oficiais. A decisão é sua.',
  lastUpdated: '2026-10-01',
  electionDate: '2026-10-04',
  disclaimer: 'Este painel é informativo. Não atribui notas, não faz ranking e não recomenda candidaturas.'
};

export const THEMES = [
  'Economia', 'Segurança', 'Saúde', 'Educação', 'Trabalho', 'Impostos',
  'Infraestrutura', 'Meio ambiente', 'Tecnologia', 'Agricultura',
  'Assistência social', 'Habitação', 'Transporte', 'Energia',
  'Política externa', 'Administração pública', 'Transparência', 'Justiça',
  'Direitos civis', 'Aborto', 'Drogas', 'Armas', 'Privatizações',
  'Programas sociais', 'Inteligência Artificial', 'Religião e Estado'
];

export const POSITION_TOPICS = [
  'Aborto', 'Drogas', 'Armas', 'Segurança pública', 'Prisões', 'Maioridade penal',
  'Privatizações', 'Empresas estatais', 'Impostos', 'Reforma administrativa',
  'Reforma tributária', 'Meio ambiente', 'Agronegócio', 'Direitos trabalhistas',
  'Programas sociais', 'Saúde pública', 'Educação pública', 'Ensino técnico',
  'Ciência e tecnologia', 'Inteligência Artificial', 'Segurança digital',
  'Liberdade de expressão', 'Política externa', 'Relações com EUA',
  'Relações com China', 'Relações com Rússia', 'Direitos humanos', 'Religião e Estado'
];

export const COMPARE_TOPICS = [
  'Economia', 'Segurança', 'Saúde', 'Educação', 'Impostos', 'Aborto', 'Drogas',
  'Armas', 'Privatizações', 'Meio ambiente', 'Trabalho', 'Tecnologia',
  'Programas sociais', 'Política externa'
];

export const OFFICE_GUIDES = {
  president: {
    title: 'Presidente da República',
    canDo: [
      'Dirigir o Poder Executivo federal e coordenar políticas federais.',
      'Nomear ministros e outras autoridades nos limites constitucionais.',
      'Propor projetos de lei, medidas provisórias e a proposta de orçamento federal.',
      'Sancionar ou vetar projetos aprovados pelo Congresso.',
      'Conduzir relações internacionais e exercer atribuições constitucionais ligadas às Forças Armadas.'
    ],
    limits: [
      'Mudanças legais dependem do Congresso quando a Constituição ou a lei exigem aprovação legislativa.',
      'Gastos dependem de orçamento, regras fiscais e disponibilidade de recursos.',
      'Atos do Executivo podem ser controlados pelo Judiciário e pelos órgãos de fiscalização.',
      'Muitas políticas dependem de cooperação com estados e municípios.'
    ]
  },
  governor: {
    title: 'Governador da Bahia',
    canDo: [
      'Dirigir o Poder Executivo estadual e coordenar políticas estaduais.',
      'Administrar estruturas estaduais de saúde, educação, segurança e infraestrutura.',
      'Coordenar Polícia Militar, Polícia Civil e demais órgãos estaduais conforme a legislação.',
      'Propor o orçamento estadual e projetos de lei à Assembleia Legislativa.',
      'Executar programas e investimentos dentro das competências do estado.'
    ],
    limits: [
      'Mudanças de competência federal não podem ser feitas isoladamente pelo governador.',
      'Novas despesas dependem do orçamento estadual e das regras fiscais.',
      'Mudanças legais relevantes dependem da Assembleia Legislativa.',
      'Obras e políticas podem depender de municípios, União, licenças e decisões judiciais.'
    ]
  }
};

export const METHODOLOGY = [
  {
    title: 'Evidência antes de resumo',
    text: 'Uma afirmação só entra no painel quando possui fonte identificada. Quando a evidência é insuficiente, o painel mostra “Não localizado nas fontes consultadas”.'
  },
  {
    title: 'Sem inferência ideológica',
    text: 'O sistema não deduz posição a partir do partido, coligação, histórico familiar ou proximidade política.'
  },
  {
    title: 'Situação jurídica com contexto',
    text: 'Investigação, processo, denúncia, condenação, absolvição, arquivamento e anulação são categorias diferentes e nunca são tratadas como equivalentes.'
  },
  {
    title: 'Mudanças não são apagadas',
    text: 'Substituições, indeferimentos, desistências e alterações de registro aparecem em histórico próprio em vez de serem silenciosamente sobrescritos.'
  },
  {
    title: 'Fonte primária tem prioridade',
    text: 'TSE, TRE-BA, tribunais e documentos oficiais têm prioridade. Imprensa é usada como complemento e aparece claramente identificada.'
  }
];
