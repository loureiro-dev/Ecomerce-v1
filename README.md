# MANTO BRASIL — Guia Completo de Edição

## 📂 Estrutura do Projeto (organização oficial)

```
USEMANTOBR/
│
├── HOME PAGE
│   └── index.html                          ← Página principal com seções e coleções
│
├── COLEÇÕES (renderizadas na home)
│   ├── LANÇAMENTOS 2026                    ← Carrossel 1
│   └── THE PRINCE COLLECTION               ← Carrossel 2
│
├── PRODUTOS
│   ├── data/produtos.json                  ← Cadastro dos produtos (coleção, preço, mídia)
│   ├── components/CardProduto.js           ← Card de produto usado na home
│   ├── product.html                        ← Página individual de produto (detalhes)
│   └── assets/Produtos/                    ← Pastas de imagens por produto
│
├── PÁGINAS
│   ├── politica-troca.html                 ← Política de troca
│   └── privacidade.html                    ← Privacidade
│
├── ESTILO
│   ├── styles/theme.css
│   └── styles/animations.css
│
└── GERAL
    ├── assets/images/
    ├── assets/videos/
    └── TUTORIAL_LOCAL.md
```

---

## ✏️ O QUE EDITAR E ONDE

### 1. PRODUTOS (preços, vídeos, descrições)
**Arquivo:** `data/produtos.json`

```json
{
  "nome": "Camisa Titular \"Canarinha\"",  // Nome do produto
  "preco_original": "349.90",              // Preço riscado
  "preco_atual": "197.90",                 // Preço em destaque (DOURADO)
  "link_compra": "https://SEU-LINK.com",   // Link do checkout ← IMPORTANTE
  "video": "../camis preta e amarela/...", // Caminho do vídeo
  "thumbnail": "../CAPA.png",              // Imagem de fallback
  "estoque": "Últimas unidades"            // Texto de estoque
}
```

### 2. NÚMERO DE WHATSAPP
Busque por `5511999999999` no `index.html` e troque pelo seu número:
- **Formato:** `55` + DDD + Número (sem espaços ou traços)
- **Exemplo:** `5511987654321`

### 3. LINKS DO CHECKOUT
No `produtos.json`, troque em cada produto:
```json
"link_compra": "https://SEU-LINK-DE-COMPRA-AQUI.com"
```
Por exemplo: link do Hotmart, Kiwify, Eduzz, etc.

### 4. IMAGEM DO HERO (Banner Principal)
No `index.html`, localize a classe `.hero-bg` no CSS embutido:
```css
.hero-bg {
  background-image: url('./CAPA.png');  /* ← Troque aqui */
}
```

### 5. CORES
**Arquivo:** `styles/theme.css`

As principais variáveis:
```css
--color-gold:    #C5A059;   /* Dourado dos botões e preços */
--color-bg:      #101010;   /* Fundo preto fosco */
--color-gold-dark: #B8860B; /* Dourado escuro */
```

### 6. TEXTOS DO HERO
No `index.html`, localize os comentários com `═` e edite:
```html
<h1 class="hero-title">
  O <span class="gold">HEXA</span><br />
  COMEÇA <span class="gold">AGORA.</span>   <!-- ← Edite aqui -->
</h1>
```

### 7. INSTAGRAM / REDES SOCIAIS
No `index.html`, localize `id="footer-instagram"` e troque o `href`:
```html
<a href="https://instagram.com/SEU-INSTAGRAM" ...>
```

---

## 🚀 COMO ABRIR NO NAVEGADOR

1. **Clique duas vezes** no arquivo `index.html`  
   OU  
2. Arraste o `index.html` para o Chrome/Edge  
   OU  
3. Use a extensão **Live Server** no VS Code  

> ⚠️ Para os **vídeos** carregarem corretamente, use um servidor local.
> No VS Code: instale **Live Server** → clique com botão direito no `index.html` → "Open with Live Server"

---

## 🎨 PERSONALIZAÇÕES RÁPIDAS

| O que mudar | Onde |
|-------------|------|
| Preços | `data/produtos.json` |
| Link de compra | `data/produtos.json` → `link_compra` |
| Vídeos dos produtos | `data/produtos.json` → `video` |
| WhatsApp | `index.html` → buscar `5511999999999` |
| Imagem do hero | `index.html` → `.hero-bg` → `background-image` |
| Título principal | `index.html` → `<h1 class="hero-title">` |
| Subtítulo | `index.html` → `<p class="hero-subtitle">` |
| Cores | `styles/theme.css` → variáveis `:root` |
| Nome da loja | `index.html` → `<div class="logo-main">` |
| Tamanhos disponíveis | `data/produtos.json` → `tamanhos` |
| Badges dos produtos | `data/produtos.json` → `badge` |

---

## 📱 RESPONSIVO

A página já é **100% responsiva**:
- **Desktop:** Grid de 2 colunas
- **Tablet:** Grid de 1 coluna centralizado  
- **Mobile:** Menu hambúrguer, layout empilhado

---

## 💡 DICAS

- **Vídeos pesados?** Converta para `.webm` — até 70% menor
- **Imagens?** Use `.webp` para melhor performance
- **SEO:** Edite o `<title>` e `<meta name="description">` no topo do `index.html`
- **Domínio:** Troque `https://SEU-DOMINIO-AQUI.com` na tag `og:url`
