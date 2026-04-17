# MANTO BRASIL — Guia de Edição por Seções

Este projeto está organizado para você editar rápido sem se perder.

## Estrutura principal

```text
USEMANTOBR/
├── index.html                # Home page
├── product.html              # Página de produto (detalhes e compra)
├── pages/
│   ├── politica-troca.html   # Página legal
│   └── privacidade.html      # Página legal
├── data/
│   └── produtos.json         # Cadastro de produtos
├── components/
│   └── CardProduto.js        # Card usado na home
├── styles/
│   ├── theme.css             # Cores e tema
│   └── animations.css        # Animações
├── assets/
│   ├── Produtos/             # Fotos e vídeos por produto
│   ├── images/               # Logo, favicon e imagens gerais
│   └── videos/               # Vídeos gerais
├── netlify.toml              # Config de deploy Netlify
└── docs/
    ├── DEPLOY_NETLIFY.md        # Passo a passo de deploy
    ├── TUTORIAL_LOCAL.md        # Como rodar localmente
    ├── CONFIGURAR_META_PIXEL.md # Como instalar Pixel de rastreio
    ├── CUSTOMIZACAO_TEMA.md     # Manual de cores e logos
    ├── GERENCIAR_REVIEWS.md     # Guia para alterar as avaliações
    └── COMO_ADICIONAR_PRODUTOS.md # Guia de uso do JSON
```

---

## HOME PAGE

### Arquivo
- `index.html`

### O que editar aqui
- Hero (texto principal, CTA e mídia de fundo)
- Coleções e carrosséis da home
- Seção de confiança

### Dados dos produtos na home
- Vêm de `data/produtos.json`
- Renderização dos cards: `components/CardProduto.js`

---

## CABEÇALHO

### Onde editar
- `index.html` (bloco do header)

### Itens comuns
- Logo: `./assets/images/LOGO.png`
- Favicon: `./assets/images/FAVICON.png`
- Menu e links do topo
- Cor do fundo: variável `--color-bg-header` em `styles/theme.css`

---

## RODAPÉ

### Onde editar
- `index.html` (bloco do footer)

### Itens comuns
- Links de suporte e redes
- Links legais:
  - `./politica-troca.html`
  - `./privacidade.html`

---

## PRODUTOS

### Cadastro (principal)
- `data/produtos.json`

### Campos mais importantes por produto
- `nome`
- `preco_original`
- `preco_atual`
- `link_compra`
- `thumbnail`
- `video`
- `galeria`
- `tamanhos`
- `colecao`

### Organização das mídias
- Mantenha arquivos de cada produto em sua pasta dentro de `assets/Produtos/`
- Exemplo:
  - `assets/Produtos/Canarinha 2026/...`
  - `assets/Produtos/The Prince Black/...`

---

## PÁGINAS (detalhes e legais)

### Página de produto
- `product.html`
- Contém:
  - galeria
  - bloco de preço e economia
  - modelagem (masculina/feminina)
  - tamanhos
  - frete por cidade (IP aproximado)
  - gatilhos e CTAs

### Páginas legais
- `politica-troca.html`
- `privacidade.html`

---

## DEPLOY

### Netlify
- Config já pronta em `netlify.toml`
- Guia rápido: `DEPLOY_NETLIFY.md`

### Fluxo recomendado
1. Editar conteúdo
2. Commit/push para `main`
3. Redeploy no Netlify

---

## Edição rápida (resumo)

- **Trocar preço**: `data/produtos.json`
- **Trocar vídeo**: `data/produtos.json` (`video` e `galeria`)
- **Trocar thumb**: `data/produtos.json` (`thumbnail`)
- **Trocar checkout**: `data/produtos.json` (`link_compra`)
- **Trocar logo/fav**: `assets/images/` + `index.html`
- **Trocar cores**: `styles/theme.css`

---

## ESTRATÉGIA DE VENDAS E COMBOS (ABORDAGEM HÍBRIDA)

O site foi estruturado para manter o alto nível de conversão rápida, mantendo a tela limpa:
1. **Compras Individuais (80% do público):** Cliente clica em `COMPRAR AGORA` na home e é levado para focar na compra individual em `product.html`. Lá vai direto para o gateway com 1 clique (com o Yampi/Checkout direto).
2. **Pacotes e Diversos:** Embaixo do botão de compra existe um botão "Atendimento VIP via WhatsApp". Ali a equipe fecha pacotes customizados manualmente.
3. **Combos Prontos:** (Em breve) Kits como 'Masculino + Feminino' ganharão seus próprios itens fixos no arquivo `produtos.json`, servindo como links separados com seu próprio link no Gateway de pagamentos já fechado com desconto.
