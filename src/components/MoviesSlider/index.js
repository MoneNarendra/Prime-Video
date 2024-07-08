import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  const {moviesList, category} = props
  return (
    <Slider {...settings} className="slider-container">
      {moviesList.map(
        eachMovie =>
          eachMovie.categoryId === category && (
            <MovieItem key={eachMovie.id} eachMovie={eachMovie} />
          ),
      )}
    </Slider>
  )
}

export default MoviesSlider
