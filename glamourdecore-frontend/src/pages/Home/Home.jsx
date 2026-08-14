import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import InfoMarquee from './InfoMarquee/InfoMarquee'
import AwesomeServices from './AwesomeServices/AwesomeServices'
import AboutSection from './AboutSection/AboutSection'
import PortfolioGallery from './PortfolioGallery/PortfolioGallery'
import BlogPosts from './BlogPosts/BlogPosts'
import PartnersSection from './PartnersSection/PartnersSection'
import GlassDecorationCTA from './GlassDecorationCTA/GlassDecorationCTA'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <InfoMarquee/>
    <AwesomeServices/>
    <AboutSection/>
    <PortfolioGallery/>
    <GlassDecorationCTA/>
    <BlogPosts/>
    <PartnersSection/>
    </>
  )
}

export default Home