import React, { useEffect, useState } from 'react'
import IntroOverlay from '../components/introOverlay'
import Banner from '../components/banner'
import Cases from '../components/cases'
import gsap from 'gsap'

let tl = gsap.timeline()

const homeAnimation = completeAnimation => {
  tl.from('.line span', {
    y: 100,
    ease: 'power4.out',
    delay: 1,
    duration: 1.8,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  })
    .to('.overlay-top', {
      height: 0,
      duration: 1.6,
      ease: 'expo.inOut',
      stagger: 0.4
    })
    .to('.overlay-bottom', {
      width: 0,
      duration: 1.6,
      ease: 'expo.inOut',
      delay: -0.8,
      stagger: {
        amount: 0.4
      }
    })
    .to('.intro-overlay', {
      css: { display: 'none' },
      duration: 0
    })
    .from('.case-image img', {
      scale: 1.4,
      duration: 1.6,
      ease: 'expo.inOut',
      delay: -2,
      stagger: {
        amount: 0.4
      },
      onComplete: completeAnimation
    })
}

const Home = ({ dimensions }) => {
  const [animationComplete, setAnimationComplete] = useState(false)

  const completeAnimation = () => {
    setAnimationComplete(true)
  }

  useEffect(() => {
    homeAnimation(completeAnimation)
  }, [])

  useEffect(() => {
    let vh = dimensions.height * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [dimensions.height])

  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ''}
      <Banner />
      <Cases />
    </>
  )
}

export default Home
