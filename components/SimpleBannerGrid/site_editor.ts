export const SITE_EDITOR_SIMPLE_BANNER_GRID = {
  title: 'Lista de banners',
  description: 'Lista de banners',
  type: 'object',
  properties: {
    visibility: {
        type: 'boolean',
        title: 'Visivel?',
        default: true
    },
    banners: {
      type: 'array',
      title: 'Banners',
      items: {
        type: 'object',
        title: 'Banner',
        properties: {
          __editorItemTitle: {
            type: 'string',
            title: 'Titulo',
          },
          subtitle: {
            type: 'string',
            title: 'Subtitulo',
          },
          link: {
            type: 'object',
            properties: {
              url: {
                type: 'string',
                title: '[Link] - Url',
              },
              __editorItemTitle: {
                type: 'string',
                title: 'Titulo',
              },
              text: {
                type: 'string',
                title: 'texto',
              },
              openNewTab: {
                type: 'boolean',
                title: '[Link] - Abrir em uma nova aba',
              },
            }
          },
          image: {
            type: 'object',
            properties: {
              lazyload: {
                type: 'boolean',
                title: 'Lazyload? (não marcar se for imagem do header)',
              },
              imageDesktop: {
                type: 'string',
                title: '🖥️ [Imagem] Desktop',
                widget: {
                  'ui:widget': 'image-uploader',
                },
              },
              imageMobile: {
                type: 'string',
                title: '📱 [Imagem] Mobile',
                widget: {
                  'ui:widget': 'image-uploader',
                }
              }
            }
          }
        }
      }
    }     
  }
}
