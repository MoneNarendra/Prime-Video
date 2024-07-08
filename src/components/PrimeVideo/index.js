import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-img"
      />
      <div className="movies-container">
        <h1 className="movies-category">Action Movies</h1>
        <MoviesSlider moviesList={moviesList} category="ACTION" />
        <h1 className="movies-category">Comedy Movies</h1>
        <MoviesSlider moviesList={moviesList} category="COMEDY" />
      </div>
    </div>
  )
}

export default PrimeVideo
