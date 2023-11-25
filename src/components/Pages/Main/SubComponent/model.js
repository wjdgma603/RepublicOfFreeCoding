import * as THREE from 'three';
import { useRef,useEffect } from 'react';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import model from '../images/3d/new3.glb'
import { TextureLoader} from "three";

//link
import aboutLink from "../images/2d/Link.png" // 홈페이지 소개 링크
import testLink from "../images/2d/Link.png" // 코딩문제 링크
import communityLink from "../images/2d/Link.png" //커뮤니티 링크
import loginBook from "../images/2d/loginBook.png" // 로그인 링크
import doItLink from "../images/2d/Link.png" // e북 링크 
import htmlLink from "../images/2d/html.jpg" // e북 왼쪽 html 
import cssLink from "../images/2d/css.jpg" // e북 중앙 css
import javascriptLink from "../images/2d/javascript.jpg" // e북 오른쪽 javascript 

//section
import communitySec from "../images/2d/communitySec.png" //커뮤니티 섹션
import CodeTest from "../images/2d/CodeTest.png" //커뮤니티 섹션
import Introduce from "../images/2d/Introduce.png" // 소개 섹션
import Ebook from "../images/2d/Ebook.png" // 소개 섹션
import { useNavigate } from 'react-router-dom';

const Palace = () => {
    const main = useRef()
    const Navigate = useNavigate()
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
    camera.position.x = 120;
    camera.position.z = -10;
    camera.position.y = 40; 
    camera.lookAt(200,-200,-10);
    scene.add(camera)
 
    const LightColorPow = 7;
    const LightColor = "#9F621B";

    //light 
    const PointLight = new THREE.DirectionalLight( LightColor,  LightColorPow);
    PointLight.position.set(0 ,200,200)
    PointLight.castShadow =true
    //light 
    const PointLight1 = new THREE.DirectionalLight( LightColor,  LightColorPow);
    PointLight1.position.set(0 ,-200,-200)
    PointLight1.castShadow =true
    //light  왼쪽
    const PointLight2 = new THREE.DirectionalLight( LightColor,  LightColorPow);
    PointLight2.position.set(200 ,0,0)
    PointLight2.castShadow =true
    //light 오른쪽
    const PointLight3 = new THREE.DirectionalLight( LightColor,  LightColorPow);
    PointLight3.position.set(-200 ,0,0)
    PointLight3.castShadow =true

    //light 천장 왼쪽 조명
    const PointLight6 = new THREE.PointLight( "#fff",  5000);
    PointLight6.position.set(-150,140,0)
    PointLight6.castShadow =true
    //light 천장 왼쪽 뒤
    const PointLight7 = new THREE.PointLight( "#fff",  5000);
    PointLight7.position.set(-230,140,0)
    PointLight7.castShadow =true
    //light 천장 오른쪽
    const PointLight8 = new THREE.PointLight( "#fff",  5000);
    PointLight8.position.set(150,140,0)
    PointLight8.castShadow =true
    //light 천장 오른쪽 뒤
    const PointLight9 = new THREE.PointLight( "#fff",  3000);
    PointLight9.position.set(240,100,130)
    PointLight9.castShadow =true
    //light 커뮤니티 불빛
    const PointLight10 = new THREE.PointLight( "#fff",  7000);
    PointLight10.position.set(-230,60,130)
    PointLight10.castShadow =true
    //light ebook링크 불빛
    const PointLight11 = new THREE.PointLight( "#fff",  1500);
    PointLight11.position.set(-130,80,-200)
    PointLight11.castShadow =true
    //light 입구쪽 기둥
    const PointLight12 = new THREE.PointLight( "#fff",  2000);
    PointLight12.position.set(70,80,190)
    //light ebook 책쪽
    const PointLight13 = new THREE.PointLight( "#fff",  2000);
    PointLight13.position.set(173,60,-170)
    // 입구 조명
    const PointLight14 = new THREE.PointLight( "green",  2000);
    PointLight14.position.set(240,50,210)

    scene.add(PointLight,PointLight1,PointLight2,PointLight3,
        PointLight6,PointLight7,PointLight8,
        PointLight9,PointLight10,PointLight11,PointLight12,PointLight13,PointLight14);

    //GLTF 건물 불러옴
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
    fControls.activeLook = true;
    fControls.lookSpeed = 0.02;
    fControls.lookVertical= true;
    fControls.constrainVertical= true;
    fControls.verticalMax= 1.5;
    fControls.verticalMin= 1;
    const orbitControls = new OrbitControls(camera,renderer.domElement)
    orbitControls.enabled = false
    if(isMobileDevice()){
        fControls.enabled = false;
        orbitControls.target.set(0, 70, 0);
        orbitControls.enabled = true;
        orbitControls.mouseButtons.RIGHT = null;
        orbitControls.maxDistance = 80;
        camera.position.set(-2, 70, 0);
        camera.lookAt(0, 70, 0);
        orbitControls.rotateSpeed = -0.5;
    }
    const imgPush = new TextureLoader()
    //로그인 링크
    const section1 = new THREE.BoxGeometry(1,20,20)
    const loginBookPush = imgPush.load(loginBook)
    const section11 = new THREE.MeshStandardMaterial({
        map : loginBookPush
    }) 
    const mesh1 = new THREE.Mesh(section1, section11)
    mesh1.position.set(-300,155,-80)
    // 커뮤니티 링크
    const section3 = new THREE.BoxGeometry(1,30,30)
    const communityLinkPush = imgPush.load(communityLink)
    const section33 = new THREE.MeshStandardMaterial({
        map : communityLinkPush
    }) 
    const mesh3 = new THREE.Mesh(section3, section33)
    mesh3.position.set(-230,10,130)
    mesh3.rotation.y = 0.5;
    // 홈페이지 소개 링크
    const section4 = new THREE.BoxGeometry(30 ,30,1)
    const aboutLinkPush = imgPush.load(aboutLink)
    const section44 = new THREE.MeshStandardMaterial({
        map : aboutLinkPush,
    }) 
    const mesh4 = new THREE.Mesh(section4, section44)
    mesh4.position.set(286,80, 130)
    mesh4.rotation.set(0,1.55, 0)
    // 코딩 문제 링크
    const section5 = new THREE.BoxGeometry(30,30,1)
    const testLinkPush = imgPush.load(testLink)
    const section55 = new THREE.MeshStandardMaterial({
        map : testLinkPush
    }) 
    const mesh5 = new THREE.Mesh(section5, section55)
    mesh5.position.set(70,60,220)
    // e book 링크
    const section6 = new THREE.BoxGeometry(25,30,1)
    const doItLinkPush = imgPush.load(doItLink)
    const section66 = new THREE.MeshStandardMaterial({
        map : doItLinkPush
    }) 
    const mesh6 = new THREE.Mesh(section6, section66)
    mesh6.position.set(-130,60,-225)

    scene.add(mesh1,mesh3,mesh4,mesh5,mesh6);
    // 커뮤니티 칠판
    const section7 = new THREE.BoxGeometry(160,80,1)
    const communitySecPush = imgPush.load(communitySec)
    const section77 = new THREE.MeshStandardMaterial({
        map : communitySecPush
    }) 
    const mesh7 = new THREE.Mesh(section7, section77)
    mesh7.position.set(-326,50,130)
    mesh7.rotation.y = -1.56
    // 코딩 문제 페이지
    const section8 = new THREE.BoxGeometry(120,70,1)
    const CodeTestPush = imgPush.load(CodeTest)
    const section88 = new THREE.MeshStandardMaterial({
        map : CodeTestPush
    }) 
    const mesh8 = new THREE.Mesh(section8, section88)
    mesh8.position.set(-30,60,221)
    // 소개 섹션 Introduce
    const section9 = new THREE.BoxGeometry(250,120,1)
    const IntroducePush = imgPush.load(Introduce)
    const section99 = new THREE.MeshStandardMaterial({
        map : IntroducePush
    }) 
    const mesh9 = new THREE.Mesh(section9, section99)
    mesh9.position.set(286,80,-50)
    mesh9.rotation.y = -1.56
    // Ebook Introduce
    const section10 = new THREE.BoxGeometry(200,100,1)
    const EbookPush = imgPush.load(Ebook)
    const section1010 = new THREE.MeshStandardMaterial({
        map : EbookPush
    }) 
    const mesh10 = new THREE.Mesh(section10, section1010)
    mesh10.position.set(0,70,-222)
    // Ebook 왼쪽
    const EbookLeft = new THREE.BoxGeometry(30,30,1)
    const htmlLinkPush = imgPush.load(htmlLink)
    const EbookLeft1 = new THREE.MeshStandardMaterial({
        map : htmlLinkPush
    }) 
    const mesh11 = new THREE.Mesh(EbookLeft, EbookLeft1)
    mesh11.position.set(133,58,-212)
    mesh11.rotation.y = -0.3;
    // Ebook 중앙
    const EbookCenter = new THREE.BoxGeometry(30,30,1)
    const cssLinkPush = imgPush.load(cssLink)
    const EbookCenter1 = new THREE.MeshStandardMaterial({
        map : cssLinkPush
    }) 
    const mesh12 = new THREE.Mesh(EbookCenter, EbookCenter1)
    mesh12.position.set(170,58,-212)
    mesh12.rotation.y = -0.3;
    // Ebook 오른쪽
    const EbookRight = new THREE.BoxGeometry(30,30,1)
    const javascriptLinkPush = imgPush.load(javascriptLink)
    const EbookRight1 = new THREE.MeshStandardMaterial({
        map : javascriptLinkPush
    }) 
    const mesh13 = new THREE.Mesh(EbookRight, EbookRight1)
    mesh13.position.set(210,58,-212)
    mesh13.rotation.y = -0.3;

    scene.add(mesh1,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,mesh9,mesh10,mesh11,
        mesh12,mesh13
        );

    const clickableMeshes = [mesh1, mesh3, mesh4, mesh5, mesh6,mesh11,mesh12,mesh13];
  
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
                Navigate('/login');
            } else if (clickedMesh === mesh3) {
                Navigate('/community');
            } else if (clickedMesh === mesh4) {
                Navigate('/introduce');
            } else if (clickedMesh === mesh5) {
                Navigate('/test');
            } else if (clickedMesh === mesh6) {
                Navigate('/ebook');
            } else if (clickedMesh === mesh11) {
                Navigate('/ebook');
            } else if (clickedMesh === mesh12) {
                Navigate('/ebook');
            } else if (clickedMesh === mesh13) {
                Navigate('/ebook');
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
          renderer.render(scene, camera);
          renderer.setAnimationLoop(animate);
      }
      animate()
      return () => {
        renderer.domElement.removeEventListener('click', onClick);
      };
    }, [Navigate]);
        //모바일 버전
        function isMobileDevice() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }
    return ( 
        <section id='model' ref={main}></section>
     );
}
export default Palace;