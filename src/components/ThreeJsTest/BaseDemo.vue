<script setup>
import * as  Three from 'three'

const scene = new Three.Scene(); // 场景
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000) // 透视相机

const material = new Three.MeshBasicMaterial({ color: 'pink', side: Three.DoubleSide }) // 材质
const geometry = new Three.BoxGeometry(1, 1, 1); // 长方体

const geometry2 = new Three.BoxGeometry(1, 1, 1); //BoxGeometry：长方体
const geometry3 = new Three.SphereGeometry(5);// SphereGeometry：球体
const geometry4 = new Three.CylinderGeometry(5, 5, 10);// CylinderGeometry：圆柱
const geometry5 = new Three.PlaneGeometry(10, 5);// PlaneGeometry：矩形平面
const geometry6 = new Three.CircleGeometry(5);// CircleGeometry：圆形平面


const cube = new Three.Mesh(geometry6, material) // 创建 立方体

camera.position.z = 50;
scene.add(cube)

const renderer = new Three.WebGLRenderer({
    antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio) // 设置设备像素比
renderer.setClearColor('#444444', 1) // 设置背景色 、不透明度
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