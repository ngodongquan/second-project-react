import React from 'react'
import Select from 'react-select'
import { optionsCategory } from '../../constant/optionsCategory'
import { IMAGES } from '../../constant/images'

export default function PhotoForm () {
  return (
    <div className="photo-form">
      <div>
        <p>Name Photo</p>
        <input></input>
      </div>

      <div>
        <p>Category</p>
        <Select options={optionsCategory}></Select>
      </div>

      <div>
        <p>Random Photo</p>
        <img className="img-random" alt="img-random" src={IMAGES.PARIS}></img>
      </div>

      <div>
        <button>Add to list photos</button>
      </div>
    </div>
  )
}