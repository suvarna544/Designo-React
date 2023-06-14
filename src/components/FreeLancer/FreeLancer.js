import React from 'react'
import Header from '../Header/Header'
import FreeLancer1 from './FreeLancer1'
import FreeLancer2 from './FreeLancer2'


export default function FreeLancer() {
  document.title = "FreeLancer - Designo";
  return (
    <>
    <Header projectType="FreeLancer" desc="We build websites that serve as powerful marketing tools and bring memorable brand
              experiences."/>
    <FreeLancer1/>
    <FreeLancer2/>
    </>
  )
}
