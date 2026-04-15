# Deploy no Netlify (rápido)

## 1) Subir no Netlify
- Acesse [Netlify](https://app.netlify.com/).
- Clique em **Add new site**.
- Escolha:
  - **Deploy manually** (arrastando a pasta), ou
  - **Import from Git** (conectando repositório).

## 2) Configuração já pronta
Este projeto já tem `netlify.toml` com:
- pasta de publicação `.` (raiz),
- headers de segurança,
- cache adequado para `html` e `assets`.

## 3) Antes de publicar
- Ajuste os links reais em `data/produtos.json` (`link_compra`).
- Confirme URLs de WhatsApp/Instagram em `index.html`.
- Teste:
  - `index.html`
  - `product.html?slug=...`
  - `pages/politica-troca.html`
  - `pages/privacidade.html`

## 4) Pós deploy
- No painel do Netlify, adicione seu domínio customizado.
- Ative HTTPS (normalmente é automático).
