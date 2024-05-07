<script setup>
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene(); // 场景
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000) // 透视相机
camera.position.set(3, 3, 7);
camera.lookAt(0, 0, 0)
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth * 0.75 , window.innerHeight * 0.75);
document.body.appendChild(renderer.domElement);



const loader = new GLTFLoader(); // 模型加载器
const loaderFn = (gltf) => {
    scene.add(gltf.scene);
}
loader.load('/public/3DModels/su7/scene.gltf', loaderFn, undefined, (error) => {
    console.log(error)
});

const ambient = new THREE.AmbientLight('#FFFFFF');
const axesHelper = new THREE.AxesHelper(5); // 辅助坐标系线
scene.add(ambient)
scene.add(axesHelper)
const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera)
}
animate()

</script>

<template>
    <div></div>
</template>