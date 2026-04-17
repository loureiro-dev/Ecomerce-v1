# Guia: Configurar Meta Pixel (Facebook Ads)

Para rastrear suas vendas e otimizar seus anúncios, você precisa instalar o Meta Pixel.

## 1. Colar o Código do Pixel
O Meta fornece um script base. Você deve colá-lo dentro da tag `<head>` em **TODAS** as páginas:
- `index.html`
- `product.html`
- `pages/politica-troca.html`
- `pages/privacidade.html`

## 2. Rastrear eventos de clique
No seu projeto, já deixamos as IDs prontas. Você pode usar o "Configurador de Eventos" do Facebook para clicar nos botões ou usar o código abaixo no final do seu script:

### Rastrear o Botão "Comprar"
No arquivo `product.html`, você pode adicionar este rastreio manual:
```javascript
document.getElementById('buy-now-btn').addEventListener('click', () => {
  fbq('track', 'AddToCart', {
    content_name: 'Camisa Brasil',
    currency: 'BRL',
    value: 197.90
  });
});
```

## 3. Rastrear o botão flutuante do WhatsApp
O botão do WhatsApp tem o ID `whatsapp-float-btn`. É recomendável rastreá-lo como o evento **`Contact`**.
