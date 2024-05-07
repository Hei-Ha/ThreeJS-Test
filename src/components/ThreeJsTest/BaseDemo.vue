<script setup>
import * as  Three from 'three'

const scene = new Three.Scene(); // 场景
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000) // 透视相机

const geometry = new Three.BoxGeometry(1, 1, 1); // 几何体
const material = new Three.MeshBasicMaterial({ color: 'red'}) // 材质

const cube = new Three.Mesh(geometry, material) // 创建 立方体

camera.position.z = 5;
scene.add(cube)

const renderer = new Three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)


const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera)
}
animate()


</script>

<template>
    <div></div>
</template>

<style scoped></style>