# Como abrir localmente (sem erro no `fetch` do JSON)

Sua página usa `fetch('./data/produtos.json')`. Por isso, o ideal é abrir com **um servidor local** (em vez de dar duplo clique no `index.html`).

## Opção 1) VS Code / Cursor (recomendado) — Live Server
- Instale a extensão **Live Server**.
- Clique com o botão direito em `index.html` → **Open with Live Server**.
- Ele vai abrir algo como `http://127.0.0.1:5500/`.

## Opção 2) Python (rápido, sem instalar extensão)
No PowerShell, dentro da pasta do projeto (`USEMANTOBR`):

```bash
python -m http.server 5500
```

Abra no navegador:
- `http://localhost:5500/`

## Opção 3) Node (se você já tiver Node instalado)
```bash
npx serve .
```

Abra o endereço que aparecer no terminal.

## Dicas rápidas
- Se **produtos não aparecem**, o problema quase sempre é abrir via `file://` (sem servidor).
- Se **vídeos/imagens não carregam**, confira se os arquivos existem exatamente nos caminhos usados em:
  - `index.html` (Hero)
  - `data/produtos.json` (cards)
