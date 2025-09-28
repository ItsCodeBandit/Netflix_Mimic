import React from 'react'
import './Home.css' 
import  Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/fallout_hero_04.jpg'
import hero_title from '../../assets/fallout_title_02.png'
import play_icon from '../../assets/Play_icon.png'
import info_icon from '../../assets/Info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat</p>
            <div className="hero-btns">
              <button className='btn'><img src={play_icon} alt=""/> Play</button>
              <button className='btn dark-btn'><img src={info_icon} alt=""/> More info</button>
            </div>
            
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={'top_rated'}/>
        <TitleCards title={"Fakeflix Exclusive "} category={'popular'}/>
        <TitleCards title={"New Releases"} category={'upcoming'}/>
        <TitleCards title={"Recommended shows "} category={'now_playing'}/>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Home