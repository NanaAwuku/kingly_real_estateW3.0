import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import HeroPic from '../assets/hero1.jpeg';

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

    // Create an orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Create a texture
    const texture = new THREE.TextureLoader().load(HeroPic);

    // Create a material with the texture
    const material = new THREE.MeshBasicMaterial({ map: texture });

    // Create a geometry
    const geometry = new THREE.PlaneGeometry(6, 6);

    // Create a mesh with the geometry and material
    const imageMesh = new THREE.Mesh(geometry, material);

    // Add the mesh to the scene
    scene.add(imageMesh);

    // Animate the scene
    const animate = () => {
      requestAnimationFrame(animate);
      imageMesh.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();
    // Handle window resize
    const handleResize = () => {
      const newWidth = window.innerWidth / 2;
      const newHeight = window.innerHeight / 2;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="bg-creeam mt-5">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto flex flex-col lg:flex-row items-start">
        {/* Left Col */}
        <div className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-12 items-center lg:items-start text-center lg:text-left mb-5 md:mb-0">
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            className="my-4 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-darken"
            style={{color:"#4b40e4"}}
            
          >
            Build wealth <span className=''>with</span>  real estate,  <span className=''>one brick</span> at a time
          </h1>
          <p
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="leading-normal text-lg md:text-2xl lg:text-2xl mb-8"
            style={{color:" rgba(8, 22, 93, .8)"}}
          >
            Invest in rental properties without getting locked in (or out). Buy just a fraction of a property and collect your first rent payment later today.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5"
          >
            <button
              className="lg:mx-0 text-white text-xl md:text-2xl lg:text-xl font-bold rounded-full py-2 md:py-4 px-6 md:px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out" style={{backgroundColor:"#4b40e4"}}
            >
              View Properties
            </button>
            <div
              className="flex items-center justify-center space-x-2 md:space-x-3 mt-4 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out"
            >
              <button className="bg-white w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 ml-1 md:ml-2"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z"
                    fill="#23BDEE"
                  />
                </svg>
              </button>
              <span className="cursor-pointer text-sm md:text-base">Watch how it works</span>
            </div>
          </div>
        </div>
        {/* Right Col */}
        <div className="w-full lg:w-6/12 mt-10 lg:mt-0">
          <canvas ref={canvasRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
