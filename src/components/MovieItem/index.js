import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {eachMovie} = props

  return (
    <div key={eachMovie.id} className="each-movie">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img
              src={eachMovie.thumbnailUrl}
              alt="thumbnail"
              className="each-movie-img"
            />
          </button>
        }
      >
        {close => (
          <div className="popup-container">
            <button
              type="button"
              className="trigger-button close-btn"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose label="close" className="close-icon" />
            </button>
            <ReactPlayer url={eachMovie.videoUrl} controls />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
