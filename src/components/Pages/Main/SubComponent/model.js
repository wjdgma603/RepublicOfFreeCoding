import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js'
import { useRef,useEffect } from 'react';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import model from '../images/3d/computer2.glb'
import { TextureLoader} from "three";
import aboutBook from "../images/2d/aboutBook.png"
import testBook from "../images/2d/testBook.png"
import communityBook from "../images/2d/communityBook.png"
import loginBook from "../images/2d/loginBook.png"
import doItBook from "../images/2d/doItBook.jpg"

const Palace = () => {
    const main = useRef()
    useEffect(() => {  
        const mainCur = main.current
    //render
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true 
    });
    renderer.setSize(mainCur.clientWidth,  mainCur.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    mainCur.appendChild(renderer.domElement);
    //scene
    const scene = new THREE.Scene();
    //camera
    const camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.25,
        300
    );
    camera.position.z = -10;
    camera.position.y = 0; 
    camera.position.x = 0;
    scene.add(camera)

    //light 위 오른쪽
    const PointLight = new THREE.PointLight( "white", 100 );
    PointLight.position.set(40,35,-70)
    //light 위 왼쪽
    const PointLight1 = new THREE.PointLight( "white", 100 );
    PointLight1.position.set(-40,35,-70)
    //light 위 중앙
    const PointLight2 = new THREE.PointLight( "white", 100 );
    PointLight2.position.set(0,35,-70)
    //light 아래 중앙
    const PointLight3 = new THREE.PointLight( "white", 100 );
    PointLight3.position.set(0,2,-78);
    //light 아래 왼쪽
    const PointLight4 = new THREE.PointLight( "white", 100 );
    PointLight4.position.set(-45,2,-78);
    //light 아래 오른쪽
    const PointLight5 = new THREE.PointLight( "white", 100 );
    PointLight5.position.set(45,2,-78);

    //light 화면쪽
    const PointLight10 = new THREE.PointLight( "white", 30000 );
    PointLight10.position.set(0,5,70)
    scene.add(PointLight, PointLight1, PointLight2,PointLight3,PointLight4,PointLight5, PointLight10 );


        
    //GLTF Loader
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(model, (gltf)=>{
        const imgs = gltf.scene.children[0];
        scene.add(imgs)
        imgs.position.z = 7;
        imgs.position.x = 0;
        imgs.position.y = -5;
    })
    // //컨트롤러
    const fControls = new FirstPersonControls( camera, renderer.domElement );
    fControls.movementSpeed = 50;
    fControls.activeLook =true;
    fControls.lookSpeed = 0.05;
    fControls.lookVertical=true;
    fControls.constrainVertical=true;
    fControls.verticalMax=2;
    fControls.verticalMin= 1;

    const imgPush = new TextureLoader()


    
    //아래 왼쪽 책
    const section1 = new THREE.BoxGeometry(25,30,1)
    const loginBookPush = imgPush.load(loginBook)
    const section11 = new THREE.MeshStandardMaterial({
        map : loginBookPush
    }) 
    const mesh1 = new THREE.Mesh(section1, section11)
    mesh1.position.set(-45,-22,-79)
    mesh1.rotation.x = -0.1
    //아래 오른쪽 캡슐
    const section2 = new THREE.CapsuleGeometry(2,3,3,20)
    const section22 = new THREE.MeshStandardMaterial({
        color : 'red',
    }) 
    const mesh2 = new THREE.Mesh(section2, section22)
    mesh2.position.set(45,-34,-79)
    mesh2.rotation.x = -0.5
    //아래 중앙
    const section3 = new THREE.BoxGeometry(25,30,1)
    const communityBookPush = imgPush.load(communityBook)
    const section33 = new THREE.MeshStandardMaterial({
        map : communityBookPush
    }) 
    const mesh3 = new THREE.Mesh(section3, section33)
    mesh3.position.set(0,-22,-80)
    mesh3.rotation.x = -0.1
    //위 중앙
    const section4 = new THREE.BoxGeometry(25,30,1)
    const aboutBookPush = imgPush.load(aboutBook)
    const section44 = new THREE.MeshStandardMaterial({
        map : aboutBookPush
    }) 
    const mesh4 = new THREE.Mesh(section4, section44)
    mesh4.position.set(0,20,-80)
    mesh4.rotation.x = -0.1
    //위 왼쪽 책
    const section5 = new THREE.BoxGeometry(25,30,1)
    const testBookPush = imgPush.load(testBook)
    const section55 = new THREE.MeshStandardMaterial({
        map : testBookPush
    }) 
    const mesh5 = new THREE.Mesh(section5, section55)
    mesh5.position.set(-45,20,-79)
    mesh5.rotation.x = -0.1
    //위 오른쪽 책
    const section6 = new THREE.BoxGeometry(25,30,1)
    const doItBookPush = imgPush.load(doItBook)
    const section66 = new THREE.MeshStandardMaterial({
        map : doItBookPush
    }) 
    const mesh6 = new THREE.Mesh(section6, section66)
    mesh6.position.set(45,20,-80)
    mesh6.rotation.x = -0.1

    scene.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6);



    const clickableMeshes = [mesh1, mesh2, mesh3, mesh4, mesh5, mesh6];

      // Raycaster
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();


 

    const onClick = (e) => {
        e.preventDefault();
        
        // Calculate mouse position in normalized device coordinates
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        // Update the picking ray with the camera and mouse position
        raycaster.setFromCamera(mouse, camera);
  
        // Calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObjects(clickableMeshes);
  
        if (intersects.length > 0) {
            // Handle click on the intersected object(s) here
            const clickedMesh = intersects[0].object;
    
            if (clickedMesh === mesh1) {
                console.log('Clicked on mesh1');
                // Perform actions specific to mesh1
                // For example, navigate to a different page
                window.location = 'http://localhost:3000/login';
            } else if (clickedMesh === mesh2) {
                console.log('Clicked on mesh2');

                const targetPosition = { x:0, y:0, z: 130 };
                const currentPosition = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
                new TWEEN.Tween(currentPosition).to(targetPosition, 1500).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(() => {
                    camera.position.set(currentPosition.x, currentPosition.y, currentPosition.z);
                }).start();
                
            } else if (clickedMesh === mesh3) {
                console.log('Clicked on mesh3');
                window.location = 'http://localhost:3000/community';
            } else if (clickedMesh === mesh4) {
                console.log('Clicked on mesh4');
                window.location = 'http://localhost:3000/introduce';
            } else if (clickedMesh === mesh5) {
                console.log('Clicked on mesh5');
                window.location = 'http://localhost:3000/test';
            } else if (clickedMesh === mesh6) {
                console.log('Clicked on mesh6');
                window.location = 'http://localhost:3000/ebook'
            }

        }
      };
      renderer.domElement.addEventListener('click', onClick);
    //   renderer.domElement.addEventListener('mousemove', onMeshHover);
    //   renderer.domElement.addEventListener('mouseleave', onMeshLeave);

        window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mainCur.clientWidth, mainCur.clientHeight);
        renderer.render(scene, camera);

      });


      
      //애니메이션
      const clock = new THREE.Clock();  
      const animate = ()=>{
          const delta = clock.getDelta();
          fControls.update(delta);
          TWEEN.update();
          renderer.render(scene, camera);
          renderer.setAnimationLoop(animate);
      }
      animate()
  
      return () => {
        // Remove the click event listener when the component is unmounted
        renderer.domElement.removeEventListener('click', onClick);
        // renderer.domElement.removeEventListener('mousemove', onMeshHover);
        // renderer.domElement.removeEventListener('mouseleave', onMeshLeave);
      };
    }, []);
  
    return ( 
        <section id='model' ref={main}></section>
     );
}
export default Palace;