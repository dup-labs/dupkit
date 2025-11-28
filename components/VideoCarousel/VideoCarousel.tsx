import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
// import { useDevice } from 'vtex.device-detector'
import Slider from 'react-slick'
import carousel from './carousel.css'
// import type { Settings } from 'react-slick'

import { SITE_EDITOR_VIDEO_CAROUSEL } from './site_editor'

const VideoCarousel = ({videos,visibility}: any) => {
  // const { isMobile } = useDevice()
    const CSS_HANDLES = [
        'videoCaroussel',
        'videoCarousselFull',
        'videoCarousselContainer',
        'videoCarousselContent',
        'videoCarousselItem',
        'videoCarousselItemLink',
        'videoCarousselItemContent',
        'videoCarousselItemTitle',
        'videoCarousselItemBar',
        'videoCarousselItemSubtitle',
        'videoCarousselTitle',
        'videoCarousselItemCta',
        'videoCarousselItemImage',
        'videoCarousselItemContentViewMore',
        'videoCarousselItemContentTitle',
        'videoCarousselItemContentLogo',
        'videoCarousselItemVideo',
        'videoCarousselButton'
    ] as const

    const { handles } = useCssHandles(CSS_HANDLES)


    const settings = {
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: true,
      infinite: true,
      variableWidth: true,
      centerPadding: '10px',
      responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
      ]
    }

    if(!visibility) return null


    return(
        <div className={`${handles.videoCaroussel}`}>
          <div className={`${handles.videoCarousselContainer}`}>
            <div className={`${handles.videoCarousselContent}`}>
              <div className={`${carousel.sliderContainerStories}`}>
                  <Slider {...settings}> 
                    {videos?.map((video: any) => {
                      return (
                        <article
                          className={handles.videoCarousselItem}
                        >
                          <video 
                            controls={true} 
                            poster={video?.videoPoster}
                            className={handles.videoCarousselItemVideo}
                          >
                            <source src={video?.videoUrl} type="video/mp4" />
                          </video>
                        </article>
                      )
                    })}
                  </Slider>

              </div>
            </div>
          </div>
        </div>
    )
}

VideoCarousel.getSchema = () => SITE_EDITOR_VIDEO_CAROUSEL;


export default VideoCarousel
