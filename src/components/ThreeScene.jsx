import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add OrbitControls for interactivity
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Create a Dodecahedron geometry (more complex than a cube)
    const geometry = new THREE.TorusGeometry(); 

    // Modify material for a brighter, shinier effect
    const material = new THREE.MeshStandardMaterial({
      color: 0x64b5f6,    // White color to maximize light reflection
      emissive: 0x000000, // Slight emission to give it a glow effect
      //emissiveIntensity: 0.9, // Increase intensity of emissive light
    });

    // Create the mesh
    const object = new THREE.Mesh(geometry, material);
    scene.add(object);

    // Adjust lighting for a brighter look
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Brighter ambient light
    const pointLight = new THREE.PointLight(0xffffff, 1.5); // Stronger point light for better illumination
    pointLight.position.set(5, 5, 5); // Adjust position for better effect
    scene.add(ambientLight);
    scene.add(pointLight);

    // Adjust the camera position
    camera.position.z = 3;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event) => {
      // Update mouse coordinates (-1 to 1 range for both axes)
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update raycaster based on the new mouse position
      raycaster.setFromCamera(mouse, camera);

      // Check for intersections
      const intersects = raycaster.intersectObject(object);

      if (intersects.length > 0) {
        // Add emission on hover
        object.material.emissive.set(0x64b5f6);
        object.material.emissiveIntensity = 0.9;
      } else {
        // Remove emission when not hovering
        object.material.emissive.set(0x90caf9);
        object.material.emissiveIntensity = 0.5;
      }
    };

    // Add event listener for mouse movement
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);
      object.rotation.x += 0.01;
      object.rotation.y += 0.01;
      controls.update(); // Update orbit controls for damping
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
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="threescene" className="grid grid-cols-1 mx-auto p-6 bg-gray-100 light:rounded-lg light:shadow-lg dark:bg-gray-800">
      <div className="md:max-w-2xl mx-auto rounded-xl light:shadow-md overflow-hidden md:flex md:items-center transition duration-500 ease-in-out hover:scale-125">
        <div className="w-full h-96" ref={mountRef}></div>
      </div>
      <p class="text-gray-600 text-lg leading-relaxed dark:text-gray-300 mx-auto">scroll on me!</p>
    </section>
  );
};

export default ThreeScene;
