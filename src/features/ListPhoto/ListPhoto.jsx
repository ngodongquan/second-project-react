import React from 'react'
import Banner from '../../components/Banner'
import { IMAGES } from '../../constant/images'
import { Link, useRouteMatch } from 'react-router-dom'

export default function ListPhoto () {
  const match = useRouteMatch()
  return (
    <div>
      <Banner backgroundImage={IMAGES.PARIS} title='Your photos'></Banner>
      <Link to={`${match.url}/add`}>Add new photo</Link>
    </div>
  )
}