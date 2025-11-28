import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useDevice } from 'vtex.device-detector'
import { Link } from 'vtex.render-runtime'
import RichText from 'vtex.rich-text/index'

// import type { Settings } from 'react-slick'

import { SITE_EDITOR_SIMPLE_BANNER_GRID } from './site_editor'

const SimpleBannerGrid = ({banners,title,visibility}: any) => {
  const { isMobile } = useDevice()
    const CSS_HANDLES = [
        'simpleBannerGrid',
        'simpleBannerGridTitle',
        'simpleBannerGridContainer',
        'simpleBannerGridItem',
        'simpleBannerGridItemLink',
        'simpleBannerGridItemContent',
        'simpleBannerGridItemTitle',
        'simpleBannerGridItemTitleTitle',
        'simpleBannerGridItemTitleText',
        'simpleBannerGridItemImage'
    ] as const

    const { handles } = useCssHandles(CSS_HANDLES)

    if(!visibility) return null


    return(
        <div className={`${handles.simpleBannerGrid}`}>
            <div className={`${handles.simpleBannerGridTitle}`}>
                <RichText text={title} />
            </div>
            <div className={`${handles.simpleBannerGridContainer}`}>
                {banners?.map((banner: any) => {
                    return (
                        <article
                            className={handles.simpleBannerGridItem}
                            style={{
                                color: `${banner?.text?.textColor}`
                            }}
                        >
                            <Link className={handles.simpleBannerGridItemLink} to={banner?.link?.url} target={banner?.link?.openNewTab ? '_blank' : ''}>
                                <div className={handles.simpleBannerGridItemContent}>
                                    <div className={handles.simpleBannerGridItemTitle}>
                                        <h3 className={handles.simpleBannerGridItemTitleTitle}>{banner?.link?.__editorItemTitle}</h3>
                                        <p className={handles.simpleBannerGridItemTitleText}>{banner?.link?.text}</p>
                                    </div>
                                    <picture>
                                        <source srcSet={banner?.image?.imageDesktop} media="(min-width: 960px)" />
                                        <source srcSet={banner?.image?.imageMobile} />
                                        <img
                                            loading={banner?.image?.lazyload ? 'lazy' : 'eager'}
                                            src={banner?.image?.imageDesktop}
                                            width={isMobile ? banner?.image?.imageMobileWidth : banner?.image?.imageDesktopWidth}
                                            height={isMobile ? banner?.image?.imageMobileHeight : banner?.image?.imageDesktopHeight}
                                            style={{
                                            aspectRatio: isMobile
                                                ? `${banner?.image?.imageMobileWidth}/${banner?.image?.imageMobileHeight}`
                                                : `${banner?.image?.imageDesktopWidth}/${banner?.image?.imageDesktopHeight}`,
                                            }}
                                            alt={banner?.image?.__editorItemTitle}
                                            className={handles.simpleBannerGridItemImage}
                                        />
                                    </picture>
                                </div>
                            </Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

SimpleBannerGrid.getSchema = () => SITE_EDITOR_SIMPLE_BANNER_GRID;


export default SimpleBannerGrid
