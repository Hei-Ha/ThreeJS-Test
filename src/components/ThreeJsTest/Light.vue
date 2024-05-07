<script setup>
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000) // 透视相机
camera.position.set(3, 3, 3)
camera.lookAt(0, 0, 0)



const geometry = new THREE.BoxGeometry(1, 1, 1); // 几何体
const material = new THREE.MeshLambertMaterial({ color: 'red' });
const cube = new THREE.Mesh(geometry, material);

const pointLight = new THREE.PointLight('#ffffff', 10) // 点状光源
pointLight.position.set(0, 10, 0)
const directionalLight = new THREE.DirectionalLight('#ffffff', 2) // 平行光源
directionalLight.position.set(3, 3, 3)


const axesHelper = new THREE.AxesHelper(3) // 创建坐标系

scene.add(cube)
        .add(axesHelper)
        .add(pointLight)
        .add(directionalLight)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
const control = new OrbitControls(camera, renderer.domElement)



const animate = () => {
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}
animate()


</script>

<template>

</template>

<style scoped>

</style>