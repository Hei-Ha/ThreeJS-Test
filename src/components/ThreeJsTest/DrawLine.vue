<script setup>
import * as Three from 'three';
const renderer = new Three.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)


const camera = new Three.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
camera.position.set(0, 0, 100)
camera.lookAt(0, 0, 0);
const scene = new Three.Scene();



const materail = new Three.LineBasicMaterial({ color: 0x0000ff })

const points = [];
points.push(new Three.Vector3(-10, 0, 0,));
points.push(new Three.Vector3(0, 10, 0));
points.push(new Three.Vector3(10, 0, 0 ));

const gemoerty = new Three.BufferGeometry().setFromPoints(points);

const line = new Three.Line(gemoerty, materail)

scene.add(line)
renderer.render(scene, camera)


</script>
<template>
    <div></div>
</template>