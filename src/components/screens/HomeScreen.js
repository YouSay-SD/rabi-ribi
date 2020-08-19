import React from 'react'
import PagesViewer from '../pagesViewer'
import Poster from '../Poster'
import Video from '../video'
import MainHero from '../mainHero'
import Welcome from '../welcome'

export const HomeScreen = () => {
  return (
    <>
      <MainHero />

      <Video />

      <Welcome />

      <Poster />

      <PagesViewer />
    </>
  )
}
