# Guia: Como Gerenciar Depoimentos (Reviews)

A seção de depoimentos na Home (`index.html`) é fundamental para gerar confiança e converter vendas.

## 📝 Como Editar um Depoimento Existente
No arquivo `index.html`, procure pela seção `<section class="reviews-section"`. Cada depoimento é um bloco `div` com a classe `review-card`.

Você pode alterar:
1. **`review-avatar`**: A letra inicial do cliente.
2. **`review-name`**: O nome do cliente.
3. **`review-meta`**: Estrelas e a localização (Ex: São Paulo, SP).
4. **`review-text`**: O texto do depoimento entre aspas.
5. **`review-product-badge`**: Qual produto ele comprou.

## ⭐ Alterando a Nota Geral
No topo da seção de depoimentos, existe um bloco chamado `reviews-aggregate`.
- Altere o número `4.9` para a nota desejada.
- Altere o texto `247 avaliações` para o número total que deseja exibir.

## 📸 Usando Fotos Reais
Se você tiver fotos reais dos clientes, substitua:
```html
<div class="review-avatar">R</div>
```
Por uma tag de imagem:
```html
<img src="caminho/para/foto.jpg" class="review-avatar-img" />
```
*(Nota: Pode ser necessário ajustar o CSS para `review-avatar-img` no style do index.html)*
