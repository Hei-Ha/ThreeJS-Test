<script setup>
import * as THREE from 'three'
import * as Three from "three";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5, 5, 5)
camera.lookAt(0, 0, 0);


const material = new THREE.MeshBasicMaterial({
    color: 'pink',
    transparent: true,
    opacity: 0.5
})
const geometry = new Three.BoxGeometry(1, 1, 1); // 几何体

const cube = new Three.Mesh(geometry, material) // 创建 立方体
cube.position.set(2, 0, 0);


const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)



const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)
scene.add(cube)
renderer.render(scene, camera);


// const fn = () => {
//     renderer.render(scene, camera)
// }


</script>

<template>

</template>

<style scoped>

</style>