// src/components/ThreeScene.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth/2,window.innerHeight/2);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x0d47a1 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 2.5;

    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (<section id="threescene" className="mx-auto p-6 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800">
    <div className="md:max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:flex md:items-center">
    <div class="md:flex" ref={mountRef}></div>
    </div>
    </section>);
};

export default ThreeScene;
