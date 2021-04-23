import React from 'react'
import Banner from '../../components/Banner'
import { IMAGES } from '../../constant/images'
import PhotoForm from '../PhotoForm/PhotoForm'

export default function Photo () {
  return (
    <div>
      <Banner backgroundImage={IMAGES.CASINO} title='Photo'></Banner>
      <PhotoForm></PhotoForm>
    </div>
  )
}