export const SITE_EDITOR_VIDEO_CAROUSEL = {
  title: 'Carrossel de videos',
  description: 'Carrossel de videos',
  type: 'object',
  properties: {
    visibility: {
        type: 'boolean',
        title: 'Visivel?',
        default: true
    },
    videos: {
      type: 'array',
      title: 'Videos',
      items: {
        type: 'object',
        title: 'video',
        properties: {
            videoUrl: {
                type: 'string',
                title: 'Link do video',
            },
            videoPoster: {
                type: 'string',
                title: 'Poster do video',
                widget: {
                    'ui:widget': 'image-uploader',
                }
            }
        }
      }
    }     
  }
}
