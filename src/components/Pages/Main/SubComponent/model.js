import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js'
import { useRef,useEffect } from 'react';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import model from '../images/3d/new3.glb'
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
        55,
        window.innerWidth / window.innerHeight,
        0.25,
        2000
    );
    camera.position.z = 0;
    camera.position.y = 20; 
    camera.position.x = 40;
    camera.lookAt(41, -1, 0);
    scene.add(camera)



    const gridHelper = new THREE.GridHelper(700);
    scene.add(gridHelper);
    const axesHelper = new THREE.AxesHelper(300);
    scene.add(axesHelper);
 


    //light 
    const PointLight = new THREE.DirectionalLight( "rgb(137, 160, 187)",  3);
    PointLight.position.set(0 ,200,200)
    PointLight.castShadow =true
    //light 
    const PointLight1 = new THREE.DirectionalLight( "rgb(137, 160, 187)",  3);
    PointLight1.position.set(0 ,-200,-200)
    PointLight1.castShadow =true
    //light  왼쪽
    const PointLight2 = new THREE.DirectionalLight( "rgb(137, 160, 187)",  1);
    PointLight2.position.set(200 ,0,0)
    PointLight2.castShadow =true
    //light 오른쪽
    const PointLight3 = new THREE.DirectionalLight( "rgb(137, 160, 187)",  3);
    PointLight3.position.set(-200 ,0,0)
    PointLight3.castShadow =true
    //light 계단 위쪽
    const PointLight4 = new THREE.PointLight( "white",  3000);
    PointLight4.position.set(-150 ,70,-120)
    PointLight4.castShadow =true
    //light 계단 아래
    const PointLight5 = new THREE.PointLight( "white",  3000);
    PointLight5.position.set(-60 ,0,-120)
    PointLight5.castShadow =true
    //light 천장 왼쪽 조명
    const PointLight6 = new THREE.PointLight( "white",  5000);
    PointLight6.position.set(-150,140,0)
    PointLight6.castShadow =true
    //light 천장 왼쪽 뒤
    const PointLight7 = new THREE.PointLight( "white",  5000);
    PointLight7.position.set(-230,140,0)
    PointLight7.castShadow =true
    //light 천장 오른쪽
    const PointLight8 = new THREE.PointLight( "white",  5000);
    PointLight8.position.set(150,140,0)
    PointLight8.castShadow =true
    //light 천장 오른쪽
    const PointLight9 = new THREE.PointLight( "white",  10000);
    PointLight9.position.set(230,140,0)
    PointLight9.castShadow =true
    //light 계단 왼쪽 기둥
    const PointLight10 = new THREE.PointLight( "white",  5000);
    PointLight10.position.set(-100,50,15)
    PointLight10.castShadow =true
    //light 계단 오른쪽 기둥
    const PointLight11 = new THREE.PointLight( "white",  5000);
    PointLight11.position.set(-100,50,-155)
    PointLight11.castShadow =true
    //light 계단 오른쪽 기둥
    const PointLight12 = new THREE.PointLight( "white",  5000);
    PointLight12.position.set(130,50,130)
    PointLight12.castShadow =true
    //light 계단 오른쪽 기둥
    const PointLight13 = new THREE.PointLight( "white",  5000);
    PointLight13.position.set(0,140,0)
    PointLight13.castShadow =true


    scene.add(PointLight,PointLight1,PointLight2,PointLight3,
        PointLight4,PointLight5,PointLight6,PointLight7,PointLight8,
        PointLight9,PointLight10,PointLight11,PointLight12,PointLight13,);


        
    //GLTF Loader
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(model, (gltf)=>{
        const imgs = gltf.scene.children[0];
        scene.add(imgs)
        imgs.position.z = 0;
        imgs.position.x = 0;
        imgs.position.y =0;
    })
    // //컨트롤러
    const fControls = new FirstPersonControls( camera, renderer.domElement );
    fControls.movementSpeed = 50;
    fControls.activeLook =true;
    fControls.lookSpeed = 0.02;
    fControls.lookVertical=true;
    fControls.constrainVertical=true;
    fControls.verticalMax=1.5;
    fControls.verticalMin= 1;

    const imgPush = new TextureLoader()


    
    //아래 왼쪽 책
    const section1 = new THREE.BoxGeometry(25,30,1)
    const loginBookPush = imgPush.load(loginBook)
    const section11 = new THREE.MeshStandardMaterial({
        map : loginBookPush
    }) 
    const mesh1 = new THREE.Mesh(section1, section11)
    mesh1.position.set(-45,-22,-200)
    mesh1.rotation.x = -0.1
    //아래 오른쪽 캡슐
    const section2 = new THREE.CapsuleGeometry(2,3,3,20)
    const section22 = new THREE.MeshStandardMaterial({
        color : 'red',
    }) 
    const mesh2 = new THREE.Mesh(section2, section22)
    mesh2.position.set(200,-10,0)
    mesh2.rotation.x = -0.5
    //아래 중앙
    const section3 = new THREE.BoxGeometry(25,30,1)
    const communityBookPush = imgPush.load(communityBook)
    const section33 = new THREE.MeshStandardMaterial({
        map : communityBookPush
    }) 
    const mesh3 = new THREE.Mesh(section3, section33)
    mesh3.position.set(0,-22,-200)
    mesh3.rotation.x = -0.1
    // 소개섹션
    const section4 = new THREE.BoxGeometry(100 ,100,1)
    const aboutBookPush = imgPush.load(aboutBook)
    const section44 = new THREE.MeshStandardMaterial({
        map : aboutBookPush,
        // alphaHash : true,
    }) 
    const mesh4 = new THREE.Mesh(section4, section44)
    mesh4.position.set(275,55, 0)
    mesh4.rotation.set(0,1.55, 0)
    //위 왼쪽 책
    const section5 = new THREE.BoxGeometry(25,30,1)
    const testBookPush = imgPush.load(testBook)
    const section55 = new THREE.MeshStandardMaterial({
        map : testBookPush
    }) 
    const mesh5 = new THREE.Mesh(section5, section55)
    mesh5.position.set(-45,20,-200)
    mesh5.rotation.x = -0.1
    //위 오른쪽 책
    const section6 = new THREE.BoxGeometry(25,30,1)
    const doItBookPush = imgPush.load(doItBook)
    const section66 = new THREE.MeshStandardMaterial({
        map : doItBookPush
    }) 
    const mesh6 = new THREE.Mesh(section6, section66)
    mesh6.position.set(45,20,-200)
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

                const targetPosition = { x:100, y:0, z: 0 };
                const currentPosition = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
                new TWEEN.Tween(currentPosition).
                to(targetPosition, 1500).
                easing(TWEEN.Easing.Quadratic.InOut).
                onUpdate(() => {
                    camera.lookAt(new THREE.Vector3(-41, -1, 0));
                    camera.position.set(currentPosition.x, currentPosition.y, currentPosition.z);
                }).     

                start();
                
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

        renderer.domElement.removeEventListener('click', onClick);
        
      };
    }, []);
  
    return ( 
        <section id='model' ref={main}></section>
     );
}
export default Palace;