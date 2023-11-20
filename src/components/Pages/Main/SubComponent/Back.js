import * as THREE from 'three';
import { useRef, useEffect } from 'react';

function Back() {
    const back = useRef();
    useEffect(() => {
        const backCur = back.current;
        // Scene
        const scene = new THREE.Scene();
        // Size
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        // Camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
        camera.position.set(0,0,0); // 카메라 위치 조절
        camera.lookAt(0, 0, 0); // 카메라가 원점(0,0,0)을 바라보도록 함
        scene.add(camera);
        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: document.createElement("canvas"),
            antialias: true,
            alpha: true
        });
        const light = new THREE.DirectionalLight("white", 1);
        light.position.set(0, 1, 0); // 기본: 빛은 위에서 비춤
        light.castShadow = true; // 기본: 비활성화
        scene.add(light);

        // 빛에 대한 그림자 속성 설정
        light.shadow.mapSize.width = 512; // 기본
        light.shadow.mapSize.height = 512; // 기본
        light.shadow.camera.near = 0.5; // 기본
        light.shadow.camera.far = 500; // 기본

        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0.0);

        backCur.appendChild(renderer.domElement);

        window.addEventListener("resize", () => {
            // 크기 업데이트
            sizes.width = backCur.clientWidth;
            sizes.height = backCur.clientHeight;

            // 카메라 업데이트
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();

            // 렌더러 업데이트
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });




        // 입자
        const particlesGeometry = new THREE.BoxGeometry(0.001, 0.5, 0.001); // 수정된 부분: 세로로 긴 상자
        const particlesMaterial = new THREE.MeshBasicMaterial({ color: `#00cc00` });
        const particlesMeshes = [];

        for (let i = 0; i < 1000; i++) {
            const particlesMesh = new THREE.Mesh(particlesGeometry, particlesMaterial);
            particlesMesh.position.x = (Math.random() - 0.5) * (Math.random() * 10);
            particlesMesh.position.y = (Math.random() - 0.5) * (Math.random() * 10);
            particlesMesh.position.z = (Math.random() - 0.5) * (Math.random() * 10);
            scene.add(particlesMesh);
            particlesMeshes.push(particlesMesh);
        }

        const clock = new THREE.Clock();
        const animate = () => {
            window.requestAnimationFrame(animate);
            const delta = clock.getDelta();
            particlesMeshes.forEach((particle) => {
                particle.position.y -= delta / 2; // y축으로 떨어지기
                if (particle.position.y < -3) {
                    particle.position.y = 3;
                } // 무한으로 떨어지는 거 구현
            });

            renderer.render(scene, camera);
        };
        animate();
    }, []);
    return <section id="backsection" ref={back}></section>;
}
export default Back;