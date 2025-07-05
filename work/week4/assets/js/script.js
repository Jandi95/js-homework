/* global gsap */
const txtAnim = gsap.timeline({
  defaults: {duration: 1, opacity: 0},
})
.from('.txt-wrap h2', {y: '-200%'})
.from('.txt-wrap strong', {y: '-100%'}, '-=90%')
.from('.txt-wrap p', {y: '-100%'}, '-=90%')
.from('.txt-wrap ul', {y: '-100%'}, '-=90%')

const imgAnim = gsap.timeline({
  repeat: -1,
  repeatDelay: 0.6,
  yoyo: true,
  defaults: {duration: 0.6,},
})
.to('.shape01', {rotate: 360}, 1)
.to('.shape04', {x: '-10%', ease: 'bounce.out'}, '-=70%')
.to('.shape06', {transformOrigin: 'right bottom', rotate: 90, ease: 'bounce.out'}, '<')
.to('.shape09', {transformOrigin: 'right top', rotate: -90, ease: 'bounce.out'}, '<')
.to('.shape12', {y: '50%', ease: 'bounce.out'}, '<')
.to('.shape03', {rotate: -90, transformOrigin: 'left bottom', ease: 'bounce.out'}, '-=50%')
.to('.shape02', {x: '-60%'}, '<')
.to('.shape11', {y: '-100%', ease: 'bounce.in'}, '<')
.to('.shape08', {rotate: 180, ease: 'bounce.out'}, '-=80%')
.to('.shape13', {scale: 0.7, opacity: 0.7, duration: 0.2}, '-=80%')
.to('.shape13', {scale: 1, opacity: 1, duration: 0.2})
.to('.shape15', {rotate: -360})


// GSDevTools.create()