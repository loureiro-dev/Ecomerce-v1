/**
 * MANTO BRASIL — CardProduto.js
 * Renderiza o card de produto com vídeo em loop, preço e botão de compra.
 * 
 * COMO EDITAR:
 * Os dados vêm de /data/produtos.json — edite lá para mudar preços, vídeos e descrições.
 */

class CardProduto {
  /**
   * @param {Object} produto - Objeto do produto (vem do produtos.json)
   * @param {HTMLElement} container - Elemento onde o card será inserido
   */
  constructor(produto, container) {
    this.produto = produto;
    this.container = container;
  }

  /**
   * Renderiza o card e insere no container
   */
  render() {
    const card = document.createElement('article');
    card.className = 'product-card card-3d shimmer-wrapper hover-lift will-animate';
    card.setAttribute('data-product-id', this.produto.id);
    card.setAttribute('data-animate', 'scaleIn');
    card.innerHTML = this._buildHTML();
    this.container.appendChild(card);
    this._bindEvents(card);
    return card;
  }

  /**
   * Monta o HTML interno do card
   */
  _buildHTML() {
    const p = this.produto;
    const detalhesHref = p.slug ? `./product.html?slug=${encodeURIComponent(p.slug)}` : '#catalogo';
    const hasVideo = Boolean(p.video);

    // Formata preços para o padrão BR
    const precoOriginal = parseFloat(p.preco_original).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    const precoAtual = parseFloat(p.preco_atual).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    // Texto de estoque personalizado
    const estoqueClass = p.cor === 'preta' ? 'stock-low' : 'stock-medium';

    return `
      <!-- Badge de destaque -->
      <div class="card-badge-wrapper">
        <span class="badge badge-dark card-edition-badge">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
            <polygon points="4,0 5,3 8,3 5.5,5 6.5,8 4,6 1.5,8 2.5,5 0,3 3,3"/>
          </svg>
          ${p.badge}
        </span>
      </div>

      <!-- Área do Vídeo / Mídia do Produto -->
      <a href="${detalhesHref}" class="card-media" style="text-decoration: none; cursor: pointer; display: block;">
        <div class="card-media-inner">
          <!-- 
            ╔═══════════════════════════════════════════════╗
            ║  TROQUE "src" PELO CAMINHO DO SEU VÍDEO      ║
            ╚═══════════════════════════════════════════════╝
          -->
          ${hasVideo ? `
            <video
              class="product-video effect-float"
              src="${p.video}"
              poster="${p.thumbnail}"
              autoplay
              loop
              muted
              playsinline
              preload="metadata"
              aria-label="Vídeo do produto ${p.nome}"
            ></video>
          ` : `
            <img
              class="product-video effect-float"
              src="${p.thumbnail}"
              alt="Imagem do produto ${p.nome}"
              loading="lazy"
            />
          `}
          
          <!-- Overlay gradiente no fundo do vídeo -->
          <div class="card-media-overlay"></div>

          <!-- Overlay: Visualizar -->
          <div class="card-media-zoom" aria-hidden="true">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path d="M15 3h6m0 0v6m0-6-7 7M9 21H3m0 0v-6m0 6 7-7"/>
            </svg>
          </div>
        </div>
      </a>

      <!-- Corpo do Card -->
      <div class="card-body">

        <!-- Título e Subtítulo -->
        <header class="card-header">
          <p class="card-subtitle">${p.subtitulo}</p>
          <h3 class="card-title">${p.nome}</h3>
        </header>

        <!-- Preço -->
        <div class="card-price-block" id="price-product-${p.id}">
          <!-- Preço Riscado (original) -->
          <span class="price-original">De R$ ${precoOriginal}</span>
          
          <!-- Preço Atual (destacado) -->
          <div class="price-current-wrapper">
            <span class="price-label">Por apenas</span>
            <span class="price-current">
              <span class="price-value"> R$ ${precoAtual}</span>
            </span>
          </div>

          <!-- Economia -->
          <span class="price-economy">
            Economize R$ ${(parseFloat(p.preco_original) - parseFloat(p.preco_atual)).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
        </div>

        <!-- Estoque com urgência visual -->
        <div class="card-stock ${estoqueClass}" id="stock-product-${p.id}">
          <span class="stock-dot"></span>
          <span class="stock-text">${p.cor === 'preta' ? '🔥' : '⚡'} ${p.estoque}</span>
        </div>

        <!-- Urgência de envio -->
        <div class="card-urgency">
          <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8z"/>
            <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
          </svg>
          Comprando hoje, enviamos em <strong>até 24h</strong>
        </div>

        <!-- Botão Principal -->
        <div class="card-actions">
          <a
            href="${detalhesHref}"
            class="btn-primary card-btn ripple-container effect-gold-pulse"
            id="btn-details-product-${p.id}"
            aria-label="Ver detalhes de ${p.nome}"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M15 3h6m0 0v6m0-6-7 7M9 21H3m0 0v-6m0 6 7-7"/>
            </svg>
            VER DETALHES
          </a>
        </div>

      </div><!-- /.card-body -->
    `;
  }

  /**
   * Associa eventos ao card renderizado
   */
  _bindEvents(card) {
    // Efeito de tilt 3D ao mover o mouse
    card.addEventListener('mousemove', (e) => this._handleTilt(e, card));
    card.addEventListener('mouseleave', () => this._resetTilt(card));

    // Ripple nos botões
    const btns = card.querySelectorAll('.ripple-container');
    btns.forEach(btn => {
      btn.addEventListener('click', (e) => this._createRipple(e, btn));
    });
  }

  /**
   * Efeito de inclinação 3D ao hover
   */
  _handleTilt(e, card) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      translateZ(10px)
    `;
  }

  /**
   * Reseta o tilt
   */
  _resetTilt(card) {
    card.style.transform = '';
  }

  /**
   * Cria efeito de ripple no clique
   */
  _createRipple(e, btn) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    const rect = btn.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  }
}

export default CardProduto;
