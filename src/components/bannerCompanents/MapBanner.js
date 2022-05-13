import React from 'react'
import BannerContainer from './BannerContainer'


const MapBanner = ({banners}) => {
  return (
    <>
        {banners.map(e=> <BannerContainer key={e.id} title={e.title} banner={e.banner} description={e.description} id={e.id} />)}
    </>
  )
}

export default MapBanner