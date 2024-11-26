import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import moss from './moss.jpg'

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Setup scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.outerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.outerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Center the camera
    camera.position.set(0, 0, 10);

    // Create sphere geometry and material
    const geometry = new THREE.SphereGeometry(7, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(geometry, material);
    // sphere.position.set(0, 0, 0); // Ensure sphere is at the origin
    scene.add(sphere);

    // Add ambient and point lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, .1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);
    renderer.setClearColor(0x121212);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the sphere
      sphere.rotation.x += 0.001;
      sphere.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resizing
    const handleResize = () => {

        renderer.setSize(window.innerWidth, window.outerHeight);
      camera.aspect = window.innerWidth / window.outerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [window.innerWidth]);

  return <div ref={mountRef} style={{position: 'absolute', top: 0, right: -0}} />;
};

export default ThreeScene;
