# 📦 Guia Completo — Como Adicionar e Configurar Produtos

Este guia cobre tudo que você precisa saber para gerenciar os produtos da MANTO BRASIL sem mexer em nenhum código HTML ou JavaScript.

---

## 🗂️ Onde ficam os produtos?

**Arquivo principal:** `data/produtos.json`

Tudo (nome, preço, vídeos, fotos, tamanhos, link de compra) é controlado **só por este arquivo**. A loja lê e exibe os dados automaticamente.

---

## ➕ Como adicionar um produto novo

### Passo 1 — Prepare os arquivos de mídia

Crie uma pasta para o produto dentro de `assets/Produtos/`. Exemplo:

```
assets/
└── Produtos/
    └── Camisa Branca 2026/      ← nova pasta
        ├── video-principal.mp4
        ├── thumb_branca.png
        ├── foto-frente.png
        └── foto-costas.png
```

> **Dicas de mídia:**
> - Vídeos: preferencialmente `.mp4` comprimido (máx. 10MB para não travar no mobile)
> - Thumbnail: PNG ou JPG, mínimo 600×400px
> - Galeria: pode ter até 5 imagens ou vídeos misturados

---

### Passo 2 — Copie o bloco de produto

Abra `data/produtos.json` e adicione um novo objeto dentro de `"produtos": [...]`.  
**Copie este template e preencha:**

```json
{
  "id": 5,
  "slug": "camisa-branca-home-2026",
  "colecao": "lancamentos-2026",
  "nome": "Camisa Home Branca 2026",
  "subtitulo": "Edição Especial Home",
  "descricao": "Texto curto que aparece no card da home. Máx 2 linhas.",
  "descricao_longa": "Texto completo que aparece na página de detalhe do produto. Pode ser longo, com várias frases.",
  "caracteristicas": [
    "Tecido Dryfit Premium Anti-Suor",
    "Escudo Bordado com Fio Dourado",
    "Corte Oficial Seleção Brasileira",
    "Numeração Limitada — Edição 2026"
  ],
  "preco_original": "349.90",
  "preco_atual": "197.90",
  "link_compra": "https://SEU-LINK-CHECKOUT-AQUI.com",
  "video": "assets/Produtos/Camisa Branca 2026/video-principal.mp4",
  "thumbnail": "assets/Produtos/Camisa Branca 2026/thumb_branca.png",
  "galeria": [
    "assets/Produtos/Camisa Branca 2026/video-principal.mp4",
    "assets/Produtos/Camisa Branca 2026/thumb_branca.png",
    "assets/Produtos/Camisa Branca 2026/foto-frente.png",
    "assets/Produtos/Camisa Branca 2026/foto-costas.png"
  ],
  "badge": "Novidade",
  "tamanhos": ["P", "M", "G", "GG", "XGG"],
  "cor": "branca",
  "estoque": "Alta procura nesta semana"
}
```

---

### Passo 3 — Escolha a coleção (colecao)

O campo `"colecao"` define em qual bloco do carrossel da home o produto vai aparecer.

| Valor no JSON | Título exibido na home |
|---|---|
| `"lancamentos-2026"` | LANÇAMENTOS 2026 |
| `"the-prince-collection"` | THE PRINCE COLLECTION |

> Para criar uma **nova coleção**, veja a seção [Criando uma nova coleção](#criando-uma-nova-cole%C3%A7%C3%A3o).

---

### Passo 4 — Configure o badge

O `"badge"` aparece no canto superior esquerdo do card em destaque dourado.  
Exemplos usados: `"Mais Vendida"`, `"Edição Limitada"`, `"Lançamento 26/27"`, `"Novidade"`, `"Exclusivo"`

---

### Passo 5 — Configure o estoque

O campo `"estoque"` controla o texto de urgência exibido no card.  
**Exemplos:**
- `"Últimas unidades disponíveis"` → ponto vermelho (urgência alta)
- `"Apenas 50 unidades restantes"` → ponto laranja (urgência média)
- `"Alta procura nesta semana"` → ponto laranja
- `"Produto disponível"` → sem urgência

> A cor do ponto é definida pelo campo `"cor"` do produto: `"preta"` = vermelho, qualquer outro = laranja.

---

## ✏️ Como editar um produto existente

Encontre o produto pelo `"id"` ou `"nome"` no arquivo `data/produtos.json` e altere apenas os campos desejados.

### Trocar preço
```json
"preco_original": "349.90",   ← preço riscado
"preco_atual": "197.90",      ← preço de venda
```

### Trocar vídeo do card da home
```json
"video": "assets/Produtos/NomeDaPasta/novo-video.mp4",
```
> Se deixar `"video": ""`, o card exibe a thumbnail como imagem estática.

### Trocar thumbnail (capa do card)
```json
"thumbnail": "assets/Produtos/NomeDaPasta/nova-thumb.png",
```

### Trocar link de compra (checkout)
```json
"link_compra": "https://checkout.corvex.com.br/pay/id-do-produto",
```
> Veja a seção [Como configurar o link de checkout](#como-configurar-o-link-de-checkout) para instruções completas.

### Trocar galeria do produto
```json
"galeria": [
  "assets/Produtos/Pasta/video.mp4",
  "assets/Produtos/Pasta/foto1.png",
  "assets/Produtos/Pasta/foto2.png"
]
```
> O primeiro item da galeria é exibido como mídia principal na página de produto.

---

## 🛒 Como configurar o link de checkout

Após criar seu produto no checkout (Corvex, Kiwify, Hotmart, etc.), você receberá um link de compra. Cole ele no campo `"link_compra"` do produto.

### Opção A — Parâmetros na URL (Recomendado para rastrear tamanho)

A maioria dos checkouts aceita parâmetros extras na URL. Assim você sabe qual tamanho o cliente quer **antes** de entrar em contato.

```
https://checkout.corvex.com.br/pay/PRODUTO-ID?sku=G
```

O site já está preparado para montar essa URL automaticamente.  
Quando o cliente clica em "G" e depois em "Comprar agora", o sistema envia:

```
link_compra + ?tamanho=G&genero=masculina
```

> ✅ **Você vê isso no painel do checkout via UTM/parâmetros.**

---

### Opção B — Seleção de tamanho no checkout (Zero configuração na LP)

Configure o produto no seu checkout com **Variações** (tamanhos P, M, G, GG, XGG).  
Deixe o link normal sem parâmetros. O cliente escolhe o tamanho dentro do checkout.

```json
"link_compra": "https://checkout.corvex.com.br/pay/camisa-canarinha"
```

> ✅ **Mais simples, mas você não vê o tamanho antes do pagamento.**

---

### Opção C — Confirmação por WhatsApp pós-venda

Não configure nada especial no link. Após o pagamento, acione o cliente via WhatsApp:

> *"Olá [Nome]! Vi que garantiu sua camisa do Brasil 🇧🇷  Qual tamanho desejado? P / M / G / GG / XGG"*

> ✅ **Zero configuração técnica. Ideal para começar.**  
> ⚠️ Requer agilidade no atendimento para evitar chargeback.

---

## 📁 Criando uma nova coleção

### 1. Adicione os produtos com o novo ID de coleção no JSON

```json
"colecao": "colecao-especial-copa"
```

### 2. Adicione o título da coleção em `index.html`

Encontre o array `collectionsConfig` no final do `<script>` e adicione:

```javascript
const collectionsConfig = [
  { id: 'lancamentos-2026',       titulo: 'LANÇAMENTOS 2026'       },
  { id: 'the-prince-collection',  titulo: 'THE PRINCE COLLECTION'  },
  { id: 'colecao-especial-copa',  titulo: 'COLEÇÃO ESPECIAL — COPA' }  // ← novo
];
```

> A nova coleção vai aparecer automaticamente como um carrossel separado na home.

---

## 🔢 IDs — Importante!

O campo `"id"` deve ser **único por produto** e sequencial.

| Atual | Próximo |
|---|---|
| id 1, 2, 3, 4 | próximo deve ser **5** |

---

## 📋 Checklist antes de publicar um produto novo

```
[ ] id único (número que não existe no JSON)
[ ] slug único, sem espaços e sem acentos (ex: "camisa-preta-edicao-especial")
[ ] Pasta de mídia criada em assets/Produtos/
[ ] Thumbnail existe e o caminho está correto
[ ] Vídeo (se tiver) menor que 15MB
[ ] preco_original MAIOR que preco_atual
[ ] link_compra preenchido (não deixar placeholder)
[ ] badge definido
[ ] tamanhos definidos como array: ["P", "M", "G", "GG"]
[ ] colecao definida e corresponde a um item do collectionsConfig
[ ] estoque com texto de urgência adequado
[ ] Fez commit e push para develop
[ ] PR aprovado e merged para main → deploy automático
```

---

## 🚀 Fluxo depois de editar

```
1. Editar data/produtos.json (e assets se necessário)
2. git add .
3. git commit -m "Adiciona produto: [Nome do Produto]"
4. git push origin develop
5. Abrir PR: develop → main no GitHub
6. Confirmar merge → Netlify faz deploy automático
```

---

## ❓ Perguntas frequentes

**Posso ter o mesmo produto em duas coleções?**  
Não diretamente. Duplique o produto com um `id` e `slug` diferente se precisar.

**Como tirar um produto do ar sem deletar?**  
Remova o objeto do array `"produtos"` no JSON ou mova para uma coleção que não está no `collectionsConfig`.

**O vídeo não aparece no card, por quê?**  
Verifique: (1) caminho correto, (2) arquivo existe na pasta, (3) extensão `.mp4` correta.

**Como mostrar desconto em porcentagem?**  
Coloque no `badge`: `"% OFF"` — ex: `"badge": "43% OFF"`.
