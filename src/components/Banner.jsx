import React from 'react'
import PropTypes from 'prop-types'

export default function Banner (props) {
  const {title, backgroundImage} = props
  const styleBanner = props.backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : ''
  return (
    <div className="banner" style={styleBanner}>
      <p>
        {title}
      </p>
    </div>
  )
}
Banner.propTypes  = {
  backgroundImage: PropTypes.string,
  title: PropTypes.string
}