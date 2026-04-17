# Guia de Customização do Tema — MANTO BRASIL

Este guia explica como alterar as cores, fontes e o estilo visual da sua loja através do arquivo `styles/theme.css`.

## 🎨 Cores Principais
Abra o arquivo `styles/theme.css` e procure pela seção `:root`. Lá você encontrará as variáveis de cor:

- **`--color-gold`**: A cor de destaque (Ouro). Usada em botões e títulos.
- **`--color-bg-primary`**: O fundo principal (Preto profundo - #101010).
- **`--color-bg-secondary`**: Fundos de cards e seções secundárias (#1a1a1a).
- **`--color-text-primary`**: Cor principal dos textos (#ffffff).

> [!TIP]
> Para mudar o tema para "Prata e Preto", basta trocar o valor de `--color-gold` para um tom de cinza metálico como `#C0C0C0`.

## 字体 Fontes (Typography)
O projeto usa **Cinzel** para títulos majestosos e **Montserrat/Inter** para o corpo do texto. 

Para trocar, você deve:
1. Adicionar o novo link do Google Fonts no `<head>` do `index.html` e `product.html`.
2. Atualizar as variáveis `--font-titulo` e `--font-display` no `theme.css`.

## 🛠️ Botões e Bordas
- **`--radius-md`**: Controla o quão arredondados são os botões e cards.
- **`--transition-base`**: Controla a velocidade das animações de hover (passar o mouse).
