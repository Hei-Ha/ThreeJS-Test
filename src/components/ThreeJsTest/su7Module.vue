<script setup>
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene(); // 场景
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000) // 透视相机
camera.position.set(3, 3, 3);
camera.lookAt(0, 0, 0)
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const loader = new GLTFLoader();
const loaderFn = (gltf) => {
    scene.add(gltf.scene);
}


loader.load('/public/3DModels/su7/scene.gltf', loaderFn, undefined, (error) => {
    console.log(error)
});

const ambient = new THREE.AmbientLight('#FFFFFF');
scene.add(ambient)


const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera)
}
animate()

</script>

<template>
    <div></div>
</template>