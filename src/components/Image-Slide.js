import React from 'react'

class ImageSlide extends React.Component {
  render() {
    return (
      <div className='image-slide bg-gray-200'>
        <img
          className='hero--article__image object-cover w-full h-full'
          src='https://source.unsplash.com/random/sport'
          alt='unsplash'
        />
      </div>
    )
  }
}

export default ImageSlide
