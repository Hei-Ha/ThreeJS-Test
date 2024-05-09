<script setup>
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene(); // 场景
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000) // 透视相机
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0)


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth , window.innerHeight);
document.body.appendChild(renderer.domElement);
const control = new OrbitControls(camera, renderer.domElement)


const loader = new GLTFLoader(); // 模型加载器
const loaderFn = (gltf) => {
    scene.add(gltf.scene);
}
loader.load('/public/3DModels/su7/scene.gltf', loaderFn, undefined, (error) => {
    console.log(error)
});

const ambient = new THREE.AmbientLight('#FFFFFF');
const axesHelper = new THREE.AxesHelper(5); // 辅助坐标系线
const pointLight = new THREE.DirectionalLight('#ffffff', 2);
pointLight.position.set(0, 3, 0)




scene.add(ambient)
        .add(axesHelper)
        .add(pointLight)





const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

</script>

<template>
    <div></div>
</template>