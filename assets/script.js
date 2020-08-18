/**
 * Author: Enes Solak <enessolak99@gmail.com>
 * Date: 14.07.2020 01:36
 */

/* variables */
const $transitionBlack = document.querySelector('.transition__black')
const $transitionWhite = document.querySelector('.transition__white')
const $loading = document.querySelector('.loading')
const $loadingText = document.querySelector('.loading__text')
const $centerHeart = document.querySelector('.center-heart')
const $heartWrapper = document.querySelector('.heart-wrapper')

const $scene1 = document.querySelector('.scene1')
const $scene2 = document.querySelector('.scene2')
const $scene3 = document.querySelector('.scene3')
const $scene4 = document.querySelector('.scene4')
const $scene5 = document.querySelector('.scene5')
const $scene5subtext1 = $scene5.querySelector('.sub-text:nth-child(2)')
const $scene5subtext2 = $scene5.querySelector('.sub-text:nth-child(3)')

const $img1 = document.querySelector('.image1')
const $img2 = document.querySelector('.image2')
const $img3 = document.querySelector('.image3')
const $img4 = document.querySelector('.image4')
const $img5 = document.querySelector('.image5')

/* timeline */
let timeline1 = new TimelineMax({ paused: true })
  .set($img1, { autoAlpha: 1 })
  .to($loading, 2.2, { scaleX: 0, transformOrigin: 'right', ease: Power4.easeInOut }, .2)
  .to($loadingText, .2, { autoAlpha: 0 }, '-=1.2')

  .fromTo($transitionBlack, 2.2, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut }, 3.2)
  .fromTo($scene1, 1.6, { xPercent: -100, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, ease: Power4.easeInOut }, 3.7)
  .set($img1, { autoAlpha: 0 })
  .set($img2, { autoAlpha: 1 })
  .to($transitionBlack, 2.2, { delay: 2, scaleX: 0, transformOrigin: 'right', ease: Power4.easeInOut })
  .to($scene1, .2, { autoAlpha: 0 }, '-=1.2')

  .fromTo($transitionWhite, 2.2, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut }, 10.2)
  .fromTo($scene2, 1.6, { xPercent: -100, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, ease: Power4.easeInOut }, 10.7)
  .set($img2, { autoAlpha: 0 })
  .set($img3, { autoAlpha: 1 })
  .to($transitionWhite, 2.2, { delay: 2, scaleX: 0, transformOrigin: 'right', ease: Power4.easeInOut })
  .to($scene2, .2, { autoAlpha: 0 }, '-=1.2')

  .fromTo($transitionBlack, 2.2, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut }, 17.2)
  .fromTo($scene3, 1.6, { xPercent: -100, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, ease: Power4.easeInOut }, 17.7)
  .set($img3, { autoAlpha: 0 })
  .set($img4, { autoAlpha: 1 })
  .to($transitionBlack, 2.2, { delay: 2, scaleX: 0, transformOrigin: 'right', ease: Power4.easeInOut })
  .to($scene3, .2, { autoAlpha: 0 }, '-=1.2')

  .fromTo($transitionBlack, 2.2, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut }, 24.2)
  .fromTo($scene4, 1.6, { xPercent: -100, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, ease: Power4.easeInOut }, 24.7)
  .set($img4, { autoAlpha: 0 })
  .set($img5, { autoAlpha: 1 })
  .to($transitionBlack, 2.2, { delay: 2, scaleX: 0, transformOrigin: 'right', ease: Power4.easeInOut })
  .to($scene4, .2, { autoAlpha: 0 }, '-=1.2')

  .set($centerHeart, { display: 'block' })
  .set($heartWrapper, { autoAlpha: 1, className: '+=active' })
  .set($heartWrapper, { autoAlpha: 0, className: '-=active' }, 38.2)
  .set($centerHeart, { clearProps: 'display' })

  .fromTo($transitionWhite, 2.2, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut }, 38.2)
  .fromTo($scene5, 1.6, { xPercent: -100, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, ease: Power4.easeInOut }, 38.7)
  .fromTo($scene5subtext1, 1.6, { xPercent: -100, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, ease: Power4.easeInOut }, 40.7)
  .fromTo($scene5subtext2, 1.6, { xPercent: 100, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, ease: Power4.easeInOut }, 40.7)
  .set($img5, { autoAlpha: 0 })
  .set($img1, { autoAlpha: 1 })
  .to($transitionWhite, 2.2, { scaleX: 0, transformOrigin: 'right', ease: Power4.easeInOut }, 52)
  .to($scene5, .2, { autoAlpha: 0, ease: Power4.easeInOut }, '-=1.2')


/* on timeline finished */
timeline1.eventCallback('onComplete', function () {
  setTimeout(function () {
    timeline1.play(3.2)
  }, 2000)
})

/* document onload */
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    timeline1.play(0)
  }, 2000)
})
