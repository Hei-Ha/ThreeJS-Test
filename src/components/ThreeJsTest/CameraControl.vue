<script setup>
import * as THREE from 'three'
// 引入轨道控制器扩展库OrbitControls.js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(3, 3, 3)
camera.lookAt(0, 0, 0)


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
const control = new OrbitControls(camera, renderer.domElement)
control.addEventListener('change', () => {
    render()
})

document.body.appendChild(renderer.domElement)
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)


const render = () => {
    renderer.render(scene, camera)
}

render();

</script>

<template>

</template>

<style scoped>

</style>