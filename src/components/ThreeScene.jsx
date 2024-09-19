import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Create a scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x1F2937 );
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x0d47a1 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Adjust the camera to ensure the cube is fully visible
    camera.position.z = 2;

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resizing
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="threescene" className="mx-auto p-6 bg-gray-100 light:rounded-lg light:shadow-lg dark:bg-gray-800">
      <div className="md:max-w-2xl mx-auto rounded-xl light:shadow-md overflow-hidden md:flex md:items-center transition duration-500 ease-in-out hover:scale-125">
        <div className="w-full h-96" ref={mountRef}></div>
      </div>
    </section>
  );
};

export default ThreeScene;
