"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type ThreeBackgroundProps = {
    className?: string;
    colors?: [string, string, string];
    glowColor?: string;
    particleCount?: number;
    particleSize?: number;
    speed?: number;
};

export default function ThreeBackground({
    className = "pointer-events-none fixed inset-0 z-0 opacity-40",
    colors = ["#123a56", "#38bdf8", "#5eead4"],
    glowColor = "#38bdf8",
    particleCount = 1800,
    particleSize = 0.15,
    speed = 1,
}: ThreeBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const scene = new THREE.Scene();
        const getSize = () => ({
            width: container.clientWidth || window.innerWidth,
            height: container.clientHeight || window.innerHeight,
        });
        const size = getSize();

        const camera = new THREE.PerspectiveCamera(
            75,
            size.width / size.height,
            0.1,
            1000
        );
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.setSize(size.width, size.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const positions = new Float32Array(particleCount * 3);
        const colorValues = new Float32Array(particleCount * 3);

        const color1 = new THREE.Color(colors[0]);
        const color2 = new THREE.Color(colors[1]);
        const color3 = new THREE.Color(colors[2]);

        for (let i = 0; i < particleCount; i += 1) {
            positions[i * 3] = (Math.random() - 0.5) * 100;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

            const randomColor = Math.random();
            const color = randomColor < 0.33 ? color1 : randomColor < 0.66 ? color2 : color3;
            colorValues[i * 3] = color.r;
            colorValues[i * 3 + 1] = color.g;
            colorValues[i * 3 + 2] = color.b;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("color", new THREE.BufferAttribute(colorValues, 3));

        const material = new THREE.PointsMaterial({
            size: particleSize,
            vertexColors: true,
            transparent: true,
            opacity: 0.45,
            blending: THREE.AdditiveBlending,
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        const glowGeometry = new THREE.SphereGeometry(15, 32, 32);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: new THREE.Color(glowColor),
            transparent: true,
            opacity: 0.03,
            wireframe: true,
        });
        const glowSphere = new THREE.Mesh(glowGeometry, glowMaterial);
        scene.add(glowSphere);

        let frameId = 0;
        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        const handleResize = () => {
            const { width, height } = getSize();
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        const animate = () => {
            frameId = requestAnimationFrame(animate);

            particles.rotation.x += (0.0005 + mouseY * 0.0002) * speed;
            particles.rotation.y += (0.0005 + mouseX * 0.0002) * speed;
            glowSphere.rotation.x += 0.001 * speed;
            glowSphere.rotation.y += 0.001 * speed;

            renderer.render(scene, camera);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);
        animate();

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
            if (renderer.domElement.parentNode === container) {
                container.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            glowGeometry.dispose();
            glowMaterial.dispose();
            renderer.dispose();
        };
    }, [colors, glowColor, particleCount, particleSize, speed]);

    return <div ref={containerRef} className={className} />;
}
