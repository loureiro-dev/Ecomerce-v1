/**
 * MANTO BRASIL — PriceTag.js
 * Renderiza o bloco de preço premium com animação de contagem.
 * 
 * Uso:
 *   const tag = new PriceTag({ original: '349.90', atual: '197.90' });
 *   container.appendChild(tag.render());
 */

class PriceTag {
  /**
   * @param {Object} config
   * @param {string} config.original - Preço original (ex: "349.90")
   * @param {string} config.atual    - Preço atual (ex: "197.90")
   * @param {string} [config.size]   - Tamanho: 'sm' | 'md' | 'lg' (padrão: 'md')
   * @param {boolean} [config.animated] - Animar contagem ao aparecer (padrão: true)
   */
  constructor(config) {
    this.original  = parseFloat(config.original);
    this.atual     = parseFloat(config.atual);
    this.size      = config.size || 'md';
    this.animated  = config.animated !== false;
    this.economia  = (this.original - this.atual).toFixed(2);
    this.desconto  = Math.round(((this.original - this.atual) / this.original) * 100);
  }

  /**
   * Formata número para o padrão BR
   */
  _format(num) {
    return parseFloat(num).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  /**
   * Renderiza e retorna o elemento DOM
   */
  render() {
    const wrapper = document.createElement('div');
    wrapper.className = `price-tag price-tag--${this.size}`;

    wrapper.innerHTML = `
      <!-- Desconto % em destaque -->
      <div class="price-tag-discount">
        <span class="price-tag-discount-value">-${this.desconto}%</span>
        <span class="price-tag-discount-label">OFF</span>
      </div>

      <!-- Preços -->
      <div class="price-tag-values">
        <!-- De: Preço original riscado -->
        <span class="price-tag-original">
          De <del>R$ ${this._format(this.original)}</del>
        </span>

        <!-- Por: Preço atual -->
        <div class="price-tag-current">
          <span class="price-tag-currency">R$</span>
          <span class="price-tag-integer">${Math.floor(this.atual)}</span>
          <span class="price-tag-cents">,${this._format(this.atual).split(',')[1]}</span>
        </div>

        <!-- Economia total -->
        <span class="price-tag-economy">
          ✦ Você economiza R$ ${this._format(this.economia)}
        </span>
      </div>
    `;

    // Anima o preço ao aparecer no viewport
    if (this.animated) {
      this._observeAndAnimate(wrapper);
    }

    return wrapper;
  }

  /**
   * Inicia animação quando o elemento entra na viewport
   */
  _observeAndAnimate(wrapper) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const valueEl = wrapper.querySelector('.price-tag-integer');
          if (valueEl) {
            this._animateCount(valueEl, 0, Math.floor(this.atual), 800);
          }
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(wrapper);
  }

  /**
   * Anima a contagem do preço de start até end
   */
  _animateCount(el, start, end, duration) {
    const startTime = performance.now();
    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing: easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * eased);
      el.textContent = current;
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = end;
      }
    };
    requestAnimationFrame(update);
  }
}

export default PriceTag;
