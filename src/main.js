import Alpine from 'alpinejs'
import './Experience/UI/AlpineStore.js'
import * as THREE from 'three'



//** Setup */
const canvas = document.getElementById('fortune-teller-canvas')
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth, window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha : true
})

//**Canvas */

//**Scene */
scene.background = new THREE.Color('#0a0a0a')

//**Camera */
camera.position.z = 0.5

//**Renderer */
renderer.setSize(window.innerWidth , window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio / 2))




//** ALPINE */
Alpine.start()