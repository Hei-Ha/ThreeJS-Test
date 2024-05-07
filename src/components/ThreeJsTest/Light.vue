<script setup>
import * as THREE from 'three'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000) // 透视相机
camera.position.set(3, 3, 3)
camera.lookAt(0, 0, 0)

const geometry = new THREE.BoxGeometry(1, 1, 1); // 几何体
const material = new THREE.MeshLambertMaterial({ color: 'red'});
const cube = new THREE.Mesh(geometry, material);

const pointLight = new THREE.PointLight('#ffffff', 10)
// pointLight.decay =
pointLight.position.set(0, 10, 0)

const axesHelper = new THREE.AxesHelper(3) // 创建坐标系

scene.add(cube).add(axesHelper).add(pointLight)


const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)



</script>

<template>

</template>

<style scoped>

</style>