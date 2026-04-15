/**
 * MANTO BRASIL — BadgeExclusivo.js
 * Componente de selos e badges de exclusividade, edição e confiança.
 * 
 * Uso:
 *   BadgeExclusivo.render('edicao')        → Selo Edição 2026
 *   BadgeExclusivo.render('limitada')      → Edição Limitada
 *   BadgeExclusivo.render('garantia')      → Garantia 7 dias
 *   BadgeExclusivo.render('frete')         → Frete Grátis
 *   BadgeExclusivo.render('autenticidade') → Certificado de Autenticidade
 */

const BadgeExclusivo = {

  /**
   * Mapa de tipos de badge → configuração visual
   * EDITE AQUI para mudar os textos dos selos
   */
  tipos: {
    edicao: {
      icone: `<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <polygon points="7,1 8.5,5 13,5 9.5,7.8 11,12 7,9.5 3,12 4.5,7.8 1,5 5.5,5"/>
              </svg>`,
      texto: 'EDIÇÃO 2026',
      classe: 'badge-gold',
      animada: true,
    },

    limitada: {
      icone: `<svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
              </svg>`,
      texto: 'LIMITADA',
      classe: 'badge-outline',
      animada: false,
    },

    garantia: {
      icone: `<svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>`,
      texto: '7 DIAS DE GARANTIA',
      classe: 'badge-dark',
      animada: false,
    },

    frete: {
      icone: `<svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8z"/>
                <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>`,
      texto: 'FRETE GRÁTIS',
      classe: 'badge-dark',
      animada: false,
    },

    autenticidade: {
      icone: `<svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>`,
      texto: 'AUTENTICIDADE GARANTIDA',
      classe: 'badge-dark',
      animada: false,
    },

    novo: {
      icone: `<svg width="12" height="12" fill="currentColor" viewBox="0 0 12 12">
                <polygon points="6,1 7.2,4.5 11,4.5 8,6.8 9.2,10.2 6,8 2.8,10.2 4,6.8 1,4.5 4.8,4.5"/>
              </svg>`,
      texto: 'NOVO',
      classe: 'badge-gold',
      animada: false,
    },

    maisVendida: {
      icone: `<svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>`,
      texto: '🔥 MAIS VENDIDA',
      classe: 'badge-gold',
      animada: true,
    },

    exclusiva: {
      icone: `<svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M12 1l3.18 6.45L22 8.69l-5 4.87 1.18 6.88L12 17.77 5.82 20.44 7 13.56 2 8.69l6.82-.75L12 1z"/>
              </svg>`,
      texto: 'EXCLUSIVA',
      classe: 'badge-outline',
      animada: false,
    }
  },

  /**
   * Cria e retorna o elemento badge
   * @param {string} tipo - Chave do tipo de badge (ver `tipos` acima)
   * @returns {HTMLElement}
   */
  render(tipo) {
    const config = this.tipos[tipo];
    if (!config) {
      console.warn(`[BadgeExclusivo] Tipo "${tipo}" não encontrado.`);
      return null;
    }

    const badge = document.createElement('span');
    badge.className = `badge ${config.classe} badge-component`;

    if (config.animada) {
      badge.classList.add('effect-gold-pulse');
    }

    badge.innerHTML = `${config.icone}<span>${config.texto}</span>`;
    return badge;
  },

  /**
   * Renderiza como string HTML (útil para template literals)
   * @param {string} tipo
   * @returns {string} HTML string
   */
  renderHTML(tipo) {
    const config = this.tipos[tipo];
    if (!config) return '';

    return `
      <span class="badge ${config.classe} badge-component ${config.animada ? 'effect-gold-pulse' : ''}">
        ${config.icone}
        <span>${config.texto}</span>
      </span>
    `;
  },

  /**
   * Renderiza múltiplos badges em um container
   * @param {string[]} tipos - Array de tipos
   * @param {HTMLElement} container - Onde inserir
   */
  renderMultiple(tipos, container) {
    const wrapper = document.createElement('div');
    wrapper.className = 'badges-wrapper';
    tipos.forEach(tipo => {
      const badge = this.render(tipo);
      if (badge) wrapper.appendChild(badge);
    });
    container.appendChild(wrapper);
  }
};

export default BadgeExclusivo;
