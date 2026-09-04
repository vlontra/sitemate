# DESIGN.md: sistema visual de referência Credix

> Objetivo: usar a homepage da Credix como referência de sistema para novas interfaces fintech/SaaS. Reproduzir a linguagem visual e os padrões de composição, sem copiar marca, textos, imagens ou ativos proprietários.

## Fonte e escopo

- URL principal: https://ovo-credix.webflow.io/
- Data da captura: 2026-09-04
- Escopo: homepage de marketing, desktop-first, com regras responsivas observadas no CSS publicado.
- Evidências locais: `./.firecrawl/ovo-screenshot.png`, `./.firecrawl/ovo-branding.json`, `./.firecrawl/ovo-page.json`, `./.firecrawl/ovo-raw.html` e `./.firecrawl/ovo-styles.css`.
- Evidência complementar: captura paginada em PDF fornecida pelo usuário, com 5 páginas.
- Legenda: **observado** = extraído do site/CSS; **medido** = derivado da captura; **inferido** = aproximação prática para implementação.

## Captura de referência

![Captura completa da homepage Credix](./.firecrawl/ovo-screenshot.png)

Use a captura como fonte de verdade para hierarquia, densidade, contraste e ritmo. Use os tokens abaixo para a implementação. A captura em PDF mostra alguns estados de animação e sobreposição diferentes da captura automática; essas variações devem ser tratadas como movimento, não como layouts independentes.

## Resumo do design

A linguagem combina confiança financeira com leveza tecnológica. O fundo lavanda quase branco sustenta a maior parte da página; azul-marinho frio concentra títulos, ícones, cards de destaque e grandes blocos de contraste. O sistema evita sombras pesadas e cria profundidade com sobreposição, blur, transparência, imagens recortadas e movimentos 3D discretos.

Princípios que devem permanecer em qualquer adaptação:

1. **Contraste calmo:** grandes superfícies claras e poucos blocos escuros de alto impacto.
2. **Produto como prova:** screenshots e dispositivos em escala grande, quase sempre maiores do que o texto ao redor.
3. **Geometria macia:** cantos de 12 a 36 px; CTAs e tags em formato pill.
4. **Ritmo cinematográfico:** alternar seções informativas compactas com momentos visuais amplos.
5. **Conteúdo curto:** título forte, uma frase de apoio e ação direta.
6. **Movimento com função:** revelar hierarquia, simular profundidade e conduzir o scroll; nunca competir com a leitura.

## Design tokens

### Cores

| Papel | Token recomendado | Valor | Status | Uso |
|---|---|---:|---|---|
| Fundo principal | `--color-canvas` | `#F5F4FD` | observado | Fundo da página e seções claras |
| Texto/tinta | `--color-ink` | `#2E335B` | observado | Títulos, ícones, cards escuros e CTA primário |
| Texto secundário | `--color-ink-muted` | `rgba(46, 51, 91, 0.80)` / `#565A7B` sobre o canvas | observado | Parágrafos e links secundários |
| Superfície azul-clara | `--color-surface` | `#DFE7F9` | observado | Cards, ícones circulares, footer e painéis |
| Borda | `--color-border` | `#CDD0E5` | observado | Inputs, tabs, divisores e contornos sutis |
| Acento translúcido | `--color-ink-40` | `rgba(46, 51, 91, 0.40)` | observado | Tags e linhas discretas |
| Gradiente de botão A | `--color-button-a` | `#D4DBEB` | observado | Topo/base de botões claros |
| Gradiente de botão B | `--color-button-b` | `#E2E9FB` | observado | Centro de botões claros |
| Branco | `--color-white` | `#FFFFFF` | observado | Texto sobre fundos escuros e superfícies elevadas |
| Vidro claro | `--color-glass` | `rgba(255, 255, 255, 0.10)` | observado | Campo do hero e navbar sobre mídia |
| Moldura translúcida | `--color-frame` | `rgba(217, 217, 217, 0.30)` | observado | Moldura do screenshot principal |

Regras:

- A página deve ser majoritariamente `--color-canvas`; `--color-ink` entra em aproximadamente 15% a 25% da área visível.
- Parágrafos nunca devem usar cinza neutro puro. O tom secundário é o azul-marinho com opacidade.
- Não introduzir gradientes coloridos saturados. Os gradientes existentes são quase monocromáticos ou vêm da fotografia do céu.
- Estados de erro/sucesso não são visualmente definidos pela referência. Para produto real, acrescentar tokens semânticos acessíveis sem alterar a paleta-base.

### Tipografia

| Papel | Família | Tamanho desktop | Peso | Altura de linha | Tracking | Status |
|---|---|---:|---:|---:|---:|---|
| Display do hero | Manrope | `69px` | `700` | `1.1` | `-2px` | observado |
| H1 padrão | Manrope | `60px` | `400` | `1.2` | normal | observado |
| H2 | Manrope | `48px` | `500` | `1.2` | normal | observado |
| H3 | Manrope | `42px` | `500` | `1.2` | normal | observado |
| H4 | Manrope | `32px` | `500` | `1.2` | normal | observado |
| H5/card title | Manrope | `26px` | `500` | `1.2` | normal | observado |
| Display de produto | Manrope | `100px` | `600` | `1.0-1.1` | inferido | observado/inferido |
| Parágrafo | Inter | `16px` | `400` | `1.5` | `1px` | observado |
| Navegação/CTA/tag | Inter | `15px` | `400-500` | `1.2` | `0-0.4px` | observado |

Regras tipográficas:

- Manrope cria a voz visual; Inter carrega leitura, navegação, formulário e microcopy.
- Títulos usam sentence case, poucas linhas e largura limitada. O hero fica em até 720 px; títulos de seção em até 760 px.
- Parágrafos centrais usam até 540 px. Textos de cards devem ficar entre 2 e 4 linhas no desktop.
- Evitar bold excessivo. O peso 700 é reservado ao hero; o restante usa 400 ou 500.
- Fallbacks: `Manrope, ui-sans-serif, system-ui, sans-serif` e `Inter, ui-sans-serif, system-ui, sans-serif`.

### Escala espacial

O CSS declara unidade-base de 8 px, mas o sistema real também usa múltiplos de 4 px.

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-15: 60px;
--space-20: 80px;
--space-28: 110px;
--space-30: 120px;
--space-38: 150px;
```

- Gap interno comum: 12 px em cards compactos; 20 px no hero; 40 px em grupos e grids.
- Espaçamento vertical de seção: 110 a 120 px no desktop; 60 a 70 px no mobile.
- Seções editoriais longas podem usar 120 a 150 px entre blocos.
- O excesso de espaço em branco é intencional. Não comprimir a página para “caber mais”.

### Largura, grid e alinhamento

- Container principal: `max-width: 1200px`, centralizado, padding lateral de 32 px. **Observado**.
- Telas a partir de 1440 px: `max-width: 1270px`. **Observado**.
- Mobile até 479 px: padding lateral de 16 px. **Observado**.
- Grade principal: 12 colunas como abstração de implementação. A referência usa grids locais de 2 e 3 colunas.
- Grid de benefícios: 3 colunas no desktop, 2 em tablet e 1 em mobile.
- Grid de depoimentos: 3 colunas no desktop, 2 abaixo de 991 px e 1 abaixo de 767 px.
- Blocos editoriais “Why us”: 2 colunas com gap de 120 px; viram uma coluna abaixo de 991 px.
- Alinhamento predominante: títulos de seção centralizados; blocos de explicação e footer alinhados à esquerda.

### Raios, bordas e profundidade

| Token | Valor | Aplicação |
|---|---:|---|
| `--radius-sm` | `12px` | Tabs, imagens pequenas e controles |
| `--radius-md` | `16px` | Depoimentos e cards compactos |
| `--radius-lg` | `20px` | Cards em tablet/mobile |
| `--radius-xl` | `28px` | Mídia de dispositivo |
| `--radius-2xl` | `32px` | Cards grandes, fotos, CTA e carousel |
| `--radius-dashboard` | `36px` | Moldura principal do dashboard |
| `--radius-pill` | `999px` | Botões, tags, inputs e ícones circulares |

- Bordas padrão: 1 px; bordas de CTA mobile: 2 px.
- Sombras são quase ausentes. Preferir `backdrop-filter: blur(10px-19px)`, overlays translúcidos e um blur azul de 20 px.
- Fotografias recebem overlay em gradiente `#2E335B` na base, transparente por volta de 40% da altura.

## Arquitetura da homepage

| Ordem | Padrão | Composição | Regra reutilizável |
|---:|---|---|---|
| 1 | Navbar fixa | Logo, 5 links, CTA pill | 70 px de altura; vidro sobre o hero e superfície sólida após scroll |
| 2 | Hero imersivo | Vídeo/foto de céu, headline, subtítulo, captura de e-mail e dashboard | Conteúdo central; mídia do produto domina a metade inferior |
| 3 | Transição de produto | Dashboard em parallax com texto lateral | Grande área negativa para suportar movimento 3D |
| 4 | Marquee de logos | Logos monocromáticos repetidos | Movimento horizontal lento; fades nas bordas |
| 5 | Grade de benefícios | Tag, título, subtítulo e 6 benefícios | 3 x 2 no desktop, ícone circular acima do texto |
| 6 | Narrativa “Why us” | Cabeçalho central e linhas alternadas texto/foto | Grid de duas colunas com mídia arredondada e overlay |
| 7 | Carousel de capacidades | Tag, título e cards parcialmente fora da viewport | Card ativo pode usar imagem; alternar claro/escuro |
| 8 | Momento de produto escuro | Display tipográfico, Apple Watch central e CTA | Bloco full-bleed em azul-marinho, leitura centralizada |
| 9 | Tabs explicativas | Título, 4 tabs e painel ilustrado | Tabs horizontais no desktop; 2 x 2 em tablet; coluna em mobile |
| 10 | Prova social | Intro lateral e cards de depoimento | 3 colunas desktop; cards azul-claro altos e simples |
| 11 | CTA pré-footer | Painel escuro, headline, microcopy, botão e dashboard cortado | Card de 32 px de raio sobreposto ao footer |
| 12 | Footer | Newsletter, 3 grupos de links, sociais e créditos | Fundo azul-claro; divisor superior e layout responsivo |

## Componentes

### Navbar

- Posição fixa, `z-index: 20+`, altura de 70 px.
- Container interno usa a mesma largura da página.
- Estado sobre hero: fundo branco a 5%-10%, borda branca a 8% e blur de 10 px.
- Estado após scroll: `--color-canvas` com borda `--color-border`.
- Links: Inter 15/400, padding aproximado de `6px 12px 4px`, raio 6 px.
- Transição de estado: 400-600 ms, `ease`.
- Abaixo de 991 px, colapsar para menu; não reduzir links até ficarem ilegíveis.

### Hero com formulário

- Hero começa atrás da navbar: margem superior de -70 px e padding superior de 120 px.
- Fundo: vídeo/foto de céu em `cover`, opacidade 0.8, com gradiente de 400 px para o canvas na base.
- Headline: largura máxima de 720 px, branca, 69/1.1/700.
- Subtítulo: largura máxima de 540 px e branco com leve redução de opacidade.
- Formulário: 500 px de largura, input de 52 px, pill, blur de 19 px. CTA fica dentro da extremidade direita.
- Dashboard: imagem em 100% da largura do container, moldura translúcida com 4 px de padding e raio de 36 px.

### Botões, inputs e tags

- Botão claro: gradiente vertical `#D4DBEB -> #E2E9FB -> #D4DBEB`, texto `#2E335B`, borda azul translúcida, `padding: 12px 32px`.
- Botão escuro: `#2E335B`, texto branco e mesma geometria pill.
- Hover: `translateY(-2px)` ou escala até `1.02`; duração 250-325 ms; usar easing `cubic-bezier(.175,.885,.32,1.275)` apenas nos CTAs.
- Input: 52 px de altura, padding esquerdo de 22 px, 18 px Inter, borda de 1 px.
- Focus: borda azul-marinho e anel externo de 3 px com 15% de opacidade. Este anel é uma melhoria de acessibilidade, não aparece claramente na referência.
- Tag: uppercase, 15/500, `padding: 6px 20px`, borda 1 px e raio 30 px.

### Cabeçalho de seção

- Empilhar `tag -> título -> subtítulo` com gap de 12 px.
- Largura máxima de 760 px, centralizada.
- Use títulos entre 5 e 9 palavras e subtítulo de uma frase.
- Preserve 40-60 px até o conteúdo seguinte; se a seção for visualmente pesada, use 80-110 px.

### Benefício compacto

- Ícone de 52 x 52 px, circular, fundo `--color-surface` e traço `--color-ink`.
- Título Manrope 20-26/500; descrição Inter 14-16/1.5.
- Card sem caixa visível: o agrupamento depende de alinhamento e espaço, não de sombra.
- Grade com gap de 40 px.

### Bloco editorial com imagem

- Desktop: texto e imagem em duas colunas; gap de 120 px.
- Foto ocupa toda a coluna, raio de 32 px e `overflow: hidden`.
- Aplicar overlay de azul-marinho na base e legenda branca quando necessário.
- Alternar posição de texto e imagem a cada linha para criar ritmo.

### Carousel de cards

- Máscara central de 380 px por card e overflow horizontal visível.
- Card de 32 px de raio, conteúdo com `min-height: 500px` e padding de 32 px.
- Variações: navy sólido, azul-claro sólido e céu com overlay.
- O card anterior e o seguinte devem aparecer parcialmente para sinalizar interação.
- Setas em pills azul-claro, posicionadas fora da máscara principal.
- Duração de slide observada: aproximadamente 1250 ms.

### Bloco de dispositivo escuro

- Fundo full-bleed `--color-ink`; conteúdo branco.
- Display tipográfico grande parcialmente mascarado cria profundidade atrás do dispositivo.
- Dispositivo central em imagem recortada, largura máxima aproximada de 230 px.
- CTA claro pequeno abaixo do texto.
- Em mobile, o display cai de 100 px para 47-70 px e o dispositivo pode ocupar até 57% da largura.

### Tabs

- Tabs sem fundo, apenas borda inferior de 1 px.
- Cada tab usa padding horizontal de 41 px e peso 500.
- Estado ativo: borda `--color-ink`, texto integral; inativos podem usar 65%-80% de opacidade.
- Painel: superfície `--color-surface`, imagem/ilustração com raio de 12 px.
- Não esconder o texto explicativo em telas pequenas; mover para baixo da ilustração.

### Depoimentos

- Card: `--color-surface`, borda `#E4E4E7`, raio 16 px, padding 32 px.
- Altura desktop próxima de 460-480 px; usar `height: 100%` dentro do grid.
- Avatar pode ser um ícone monocromático, sem foto.
- Nome em Manrope 20-24/600; citação em Inter 16/1.5.
- Em mobile, remover altura mínima para evitar vazios artificiais.

### CTA pré-footer

- Container navy com raio de 32 px e conteúdo em grid `1fr / .75fr`.
- Padding visual de aproximadamente 60 px.
- Dashboard interno recortado na base; holder de 330 px no desktop, 240 px em tablet e 120 px em mobile.
- O bloco invade o footer com margem negativa de aproximadamente 326 px; reservar espaço equivalente no footer.

### Footer

- Fundo `--color-surface`; padding superior de 300 px para acomodar o CTA sobreposto.
- Newsletter com 320 px de largura no desktop e 100% no mobile.
- Links Inter 16/1.2, organizados em três colunas de conteúdo.
- Divisor de 2 px `--color-border`, margem superior de 120 px e padding superior de 40 px.
- Em mobile, empilhar tudo; reduzir divisor para margem/padding de 20 px.

## Movimento e interação

### Padrões observados

- Entrada do hero em sequência: `translateY(45px)`, escala `0.96` e opacidade `0 -> 1`.
- Dashboard usa perspectiva de 3000 px, rotação no eixo Y e translação ligada ao scroll.
- Conteúdo principal também sofre parallax vertical; a captura em PDF registra posições intermediárias.
- Navbar muda cor de texto, fundo e borda conforme sai do hero.
- Logos funcionam como marquee contínuo, com gradiente de 120 px nas bordas.
- Botões e inputs usam transições entre 250 e 475 ms.
- Elementos decorativos usam blur e opacidade; não há sombras duras.

### Especificação recomendada

- Reveal padrão: 600 ms, `cubic-bezier(.22,1,.36,1)`, deslocamento de 24-45 px.
- Sequência do hero: atrasos de 80 ms entre título, texto, formulário e dashboard.
- Parallax: limitar a 8%-12% da altura do elemento e rotação a no máximo 6 graus em produção.
- Carousel: 700-900 ms para interação manual; 1250 ms se reproduzir fielmente o comportamento observado.
- Respeitar `prefers-reduced-motion`: remover parallax/rotação, manter apenas fade de até 150 ms.
- Não usar autoplay agressivo. Se existir, pausar em hover, foco e aba oculta.

## Responsividade

| Faixa | Regras principais |
|---|---|
| `>= 1440px` | Container de 1270 px; hero com 110 px de padding vertical; área anterior ao marquee mais longa |
| `992-1439px` | Container de 1200 px com 32 px laterais; hero 69 px; grids em 3 colunas |
| `768-991px` | Navegação colapsada; hero 60 px; grids editoriais em 1 coluna; benefícios/depoimentos em 2 colunas |
| `480-767px` | H1 padrão 30 px, H2 28 px; depoimentos em coluna; tabs em 2 x 2; footer em coluna |
| `<= 479px` | Container com 16 px laterais; hero 32 px; formulário e CTAs empilhados; cards e slider em largura total; tabs verticais |

Regras de adaptação:

- Não apenas reduzir tamanhos. Reordenar blocos para texto preceder a mídia quando isso melhora a compreensão.
- Imagens editoriais devem manter `aspect-ratio` estável e usar `object-fit: cover`.
- O dashboard pode ultrapassar a largura no mobile, mas nenhum controle interativo pode ficar fora da viewport.
- Reduzir raios grandes de 32-36 px para 11-20 px em telas pequenas.

## Imagem e iconografia

- Direção fotográfica: céu azul difuso, luz natural, cenas cotidianas e tecnologia pessoal.
- Cor das fotos: fria ou neutra, contraste moderado, sem saturação publicitária intensa.
- Imagens de produto: screenshots nítidos, frontais, com muito detalhe e moldura mínima.
- Ícones: linha simples, monocromáticos, 20-24 px, traço consistente e cantos levemente arredondados.
- Logos de parceiros: monocromáticos e com baixa ênfase, apresentados em marquee.

Ativos-chave observados para consulta visual:

- Dashboard: https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f82d4295804261dec89f6a_Dashboard.png
- Céu: https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f82d42ec43970ad6c6ece4_Sky.avif
- Foto editorial A: https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f8371c7509847ef60cfc13_Feature%20Images%20(2).jpg
- Foto editorial B: https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f8371c1726da58cf00eedb_Feature%20Images%20(1).jpg
- Apple Watch: https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/6819ec25d3bcde4e48399758_Apple%20Watch.png
- Lista completa: `./.firecrawl/ovo-branding.json`.

Esses links documentam a referência. Não reutilize logo, imagens ou ilustrações em um novo produto sem confirmar licença e autorização.

## Estilo de conteúdo

- Tom: profissional, seguro, simples e otimista; energia média.
- Headlines: promessa concreta em linguagem cotidiana; evitar jargão técnico.
- Subtítulos: uma frase explicando segurança, rapidez ou controle.
- CTAs: verbo + resultado, normalmente 2-4 palavras.
- Tags: 1-2 palavras em uppercase, usadas como orientação de seção, não como decoração repetitiva.
- Cards: benefício no título; explicação em 1-2 frases; nenhum parágrafo longo.
- Prova social: citação curta, nome e identificação mínima.

Estrutura recomendada de copy:

```text
[TAG DA SEÇÃO]
[Benefício principal em 5-9 palavras]
[Uma frase que reduz risco ou explica o mecanismo]
[Ação curta]
```

## CSS inicial

```css
:root {
  --color-canvas: #f5f4fd;
  --color-ink: #2e335b;
  --color-ink-muted: rgba(46, 51, 91, 0.8);
  --color-surface: #dfe7f9;
  --color-border: #cdd0e5;
  --color-button-a: #d4dbeb;
  --color-button-b: #e2e9fb;
  --font-heading: "Manrope", ui-sans-serif, system-ui, sans-serif;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  --container: 1200px;
  --radius-card: 32px;
  --radius-control: 999px;
  --transition-ui: 250ms ease;
  --transition-reveal: 600ms cubic-bezier(.22, 1, .36, 1);
}

body {
  margin: 0;
  color: var(--color-ink);
  background: var(--color-canvas);
  font-family: var(--font-heading);
  font-size: 14px;
  line-height: 1.2;
}

p {
  margin: 0 0 10px;
  color: var(--color-ink-muted);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 1px;
}

.container {
  width: min(100% - 64px, var(--container));
  margin-inline: auto;
}

@media (min-width: 1440px) {
  :root { --container: 1270px; }
}

@media (max-width: 479px) {
  .container { width: min(100% - 32px, var(--container)); }
}
```

## Instruções para agentes de implementação

1. Comece pelos tokens; não escolha cores, tipografia ou raios localmente em cada componente.
2. Construa os componentes estruturais antes do motion: navbar, hero, section header, benefit grid, editorial split, carousel, product moment, tabs, testimonials, CTA e footer.
3. Use mídia própria do novo produto. Preserve apenas tratamento, escala, enquadramento e contraste.
4. Faça o produto aparecer cedo: o principal screenshot deve estar visível antes da primeira dobra ou tocar a borda inferior dela.
5. Alterne fundos claros e blocos navy para criar ritmo; não use navy em todas as seções.
6. Preserve áreas negativas grandes ao redor de elementos em parallax.
7. Implemente os quatro breakpoints observados: 1440, 991, 767 e 479 px.
8. Só adicione animação depois que o layout estático estiver correto em todos os breakpoints.
9. Não codifique textos de marca, logo Credix ou URLs dos assets de referência no produto final.
10. Se a stack não tiver Webflow, reproduza o comportamento com CSS e a biblioteca de motion já existente no projeto; não introduza dependência apenas para um fade simples.

## Critérios de aceite

- O fundo dominante é lavanda quase branco; títulos e elementos de alta ênfase usam azul-marinho frio.
- Manrope é usada em títulos e Inter em parágrafos/controles.
- A página contém ao menos um product shot grande, um bloco navy full-bleed e um CTA escuro pré-footer.
- Cards grandes usam raio de 32 px no desktop e reduzem o raio no mobile.
- Benefícios têm ícones circulares e não dependem de sombras.
- O layout funciona em 1440, 1024, 768, 390 e 320 px sem overflow horizontal de controles.
- Focus visível, contraste de texto, teclado, labels e `prefers-reduced-motion` estão implementados.
- Imagens usam dimensões reservadas, formatos modernos e lazy loading abaixo da dobra.
- A experiência lembra a referência pela composição e pelos tokens, não por copiar sua identidade.

## Limitações e decisões

- A página publicada contém conteúdo de template e alguns textos provisórios; eles não devem orientar a voz final do produto.
- Algumas imagens editoriais não aparecem na captura automática por causa do estado das animações, mas estão presentes na captura em PDF e no HTML.
- Valores de cor, fontes, breakpoints, dimensões principais e várias transições são observados no CSS. Limites de parallax, delays de reveal e proporções de área são recomendações inferidas para uma implementação robusta.
- A spec cobre uma homepage representativa, não todo o site nem páginas internas.

## Rerun inputs

```yaml
workflow: firecrawl-website-design-clone
source_url: https://ovo-credix.webflow.io/
capture_date: 2026-09-04
target_stack: agnostic
output: DESIGN.md
scope: single representative homepage
```
