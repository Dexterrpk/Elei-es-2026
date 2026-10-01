# MAPA ELEITORAL 2026

Dashboard eleitoral factual, mobile-first e sem ranking.

> Compare propostas, posições públicas e informações oficiais. A decisão é sua.

## Objetivo

Organizar informações verificáveis sobre as Eleições Brasileiras de 2026 sem recomendar candidaturas, atribuir notas, criar ranking ou inferir preferência política do usuário.

## Recursos

- Presidência da República
- Governo da Bahia
- perfis de candidaturas
- propostas por tema
- posições públicas documentadas
- comparador sem vencedor/nota
- busca global
- central de fontes
- histórico de alterações de candidatura
- seção didática sobre competências de Presidente e Governador
- layout responsivo e mobile-first
- dados separados da interface
- validação editorial antes de atualização

## Fontes prioritárias

A base prioriza TSE, DivulgaCandContas, Dados Abertos do TSE, TRE-BA e documentos oficiais. Fontes jornalísticas aparecem apenas como complemento e são identificadas como tal.

## Regras editoriais

- Investigação não é condenação.
- Processo não é condenação.
- Absolvição, arquivamento e anulação devem aparecer com o status correspondente.
- “Não localizado nas fontes consultadas” não significa inexistência.
- Nenhuma posição é inferida apenas por partido ou grupo político.
- Toda afirmação carregada deve apontar para fonte identificável.
- O comparador não determina melhor, pior, vencedor ou mais preparado.

## Estrutura

```text
index.html
styles.css
manifest.webmanifest
netlify.toml
package.json
assets/
scripts/
src/
  app.js
  data/
    candidates.js
    content.js
    sources.js
  utils/
    search.js
```

## Executar localmente

```bash
npm run dev
```

Acesse `http://localhost:5173`.

## Validar dados

```bash
npm run validate
```

## Publicar na Netlify

O projeto é estático e não precisa de backend nem build de frontend.

1. Importe este repositório na Netlify.
2. Branch: `main`.
3. Build command: deixe vazio.
4. Publish directory: `.`
5. Publique.

O arquivo `netlify.toml` já contém a configuração de publicação e cabeçalhos básicos de segurança.

## Atualização dos dados

Antes de publicar qualquer atualização:

1. confira novamente o DivulgaCandContas/TSE;
2. confirme situação do registro, partido, número e vice;
3. leia a fonte original da proposta;
4. atualize `src/data/sources.js` quando necessário;
5. atualize `src/data/candidates.js`;
6. rode `npm run validate`;
7. revise o comportamento mobile e desktop.

## Snapshot

Dados consultados em **01/10/2026**. Situações de registro podem mudar e devem ser reconferidas na Justiça Eleitoral.
