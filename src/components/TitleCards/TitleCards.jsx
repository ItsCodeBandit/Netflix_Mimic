import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDBjZDk0ZjhkZDAwOGQwM2E5YTA4ODgwY2Q2ODBmMyIsIm5iZiI6MTc1ODk5MzEzMS42MzY5OTk4LCJzdWIiOiI2OGQ4MWFlYjA4MzM1ZjRlNWUyZGUyNjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MKvL2rUWHCIWCh6CGpaQ6-3xhjYJ1ZINaKfGm_jxGhA'
  }
};

  

const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handleWheel);
},[])

  return (
    <div className='title-cards'>
    <h2>{title?title:"Popular On Netflix"}</h2>
    <div className="card-list" ref={cardsRef}>
      {apiData.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` +card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
      </div>
      })}
    </div>
    </div>
  )
}

export default TitleCards