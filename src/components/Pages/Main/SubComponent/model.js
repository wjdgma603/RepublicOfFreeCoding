import * as THREE from 'three';
import { useRef,useEffect } from 'react';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
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
import  gsap  from  "gsap" ;

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
    camera.position.x = 120;
    camera.position.z = -10;
    camera.position.y = 40; 
    camera.lookAt(200,-200,-10);
    scene.add(camera)


    // const gridHelper = new THREE.GridHelper(700);
    // scene.add(gridHelper);
    // const axesHelper = new THREE.AxesHelper(300);
    // scene.add(axesHelper);
 

    const LightColorPow = 19;
    const LightColor = "#755409";

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
    //light 천장 오른쪽 뒤
    const PointLight9 = new THREE.PointLight( "white",  3000);
    PointLight9.position.set(240,100,130)
    PointLight9.castShadow =true
    //light 커뮤니티 불빛
    const PointLight10 = new THREE.PointLight( "white",  7000);
    PointLight10.position.set(-230,60,130)
    PointLight10.castShadow =true
    //light ebook링크 불빛
    const PointLight11 = new THREE.PointLight( "white",  1500);
    PointLight11.position.set(-130,80,-200)
    PointLight11.castShadow =true
    //light 입구쪽 기둥
    const PointLight12 = new THREE.PointLight( "white",  2000);
    PointLight12.position.set(70,80,190)
    //light ebook 책쪽
    const PointLight13 = new THREE.PointLight( "white",  2000);
    PointLight13.position.set(173,60,-170)
    



    const helper = new THREE.PointLightHelper(PointLight13, 10)

    
    scene.add(PointLight,PointLight1,PointLight2,PointLight3,
        PointLight6,PointLight7,PointLight8,
        PointLight9,PointLight10,PointLight11,PointLight12,PointLight13
        ,helper);


        
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
    fControls.activeLook =true;
    fControls.lookSpeed = 0.1;
    fControls.lookVertical=true;
    fControls.constrainVertical=true;
    fControls.verticalMax=1.5;
    fControls.verticalMin= 1;

    const imgPush = new TextureLoader()
    //로그인 링크
    const section1 = new THREE.BoxGeometry(1,20,20)
    const loginBookPush = imgPush.load(loginBook)
    const section11 = new THREE.MeshStandardMaterial({
        map : loginBookPush
    }) 
    const mesh1 = new THREE.Mesh(section1, section11)
    mesh1.position.set(-300,155,-80)

    //아래 오른쪽 캡슐
    const section2 = new THREE.CapsuleGeometry(2,3,3,20)
    const section22 = new THREE.MeshStandardMaterial({
        color : 'red',
    }) 
    const mesh2 = new THREE.Mesh(section2, section22)
    mesh2.position.set(200,-10,0)
    mesh2.rotation.x = -0.5
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
        // alphaHash : true,
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

    scene.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6);
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

    //섹션 이동 버튼들임
    // Ebook북 왼쪽 버튼
    const ebookLeft = new THREE.BoxGeometry(10,10,10)
    // const EbookPush = imgPush.load(Ebook)
    const ebookLeft1 = new THREE.MeshStandardMaterial({
        // map : EbookPush
    }) 
    const mesh14 = new THREE.Mesh(ebookLeft, ebookLeft1)
    mesh14.position.set(-100,0,-220)

    // Ebook북 오른쪽 버튼
    const ebookRight = new THREE.BoxGeometry(10,10,10)
    // const EbookPush = imgPush.load(Ebook)
    const ebookRight1 = new THREE.MeshStandardMaterial({
        // map : EbookPush
    }) 
    const mesh15 = new THREE.Mesh(ebookRight, ebookRight1)
    mesh15.position.set(240,60,-210)

    // Introduce 왼쪽 버튼
    const introduceLeft = new THREE.BoxGeometry(10,10,10)
    // const EbookPush = imgPush.load(Ebook)
    const introduceLeft1 = new THREE.MeshStandardMaterial({
        // map : EbookPush
    }) 
    const mesh16 = new THREE.Mesh(introduceLeft, introduceLeft1)
    mesh16.position.set(282,0,-150)
    // Introduce 오른족 버튼
    const introduceRight = new THREE.BoxGeometry(10,10,10)
    // const EbookPush = imgPush.load(Ebook)
    const introduceRight1 = new THREE.MeshStandardMaterial({
        // map : EbookPush
    }) 
    const mesh17 = new THREE.Mesh(introduceRight, introduceRight1)
    mesh17.position.set(282,0,140)

   // codeTest 왼쪽 버튼
   const codeTestLeft = new THREE.BoxGeometry(10,10,10)
   // const EbookPush = imgPush.load(Ebook)
   const codeTestLeft1 = new THREE.MeshStandardMaterial({
       // map : EbookPush
   }) 
   const mesh18 = new THREE.Mesh(codeTestLeft, codeTestLeft1)
   mesh18.position.set(80,0,210)
   // codeTest 오른쪽 버튼
   const codeTestRight = new THREE.BoxGeometry(10,10,10)
   // const EbookPush = imgPush.load(Ebook)
   const codeTestRight1 = new THREE.MeshStandardMaterial({
       // map : EbookPush
   }) 
   const mesh19 = new THREE.Mesh(codeTestRight, codeTestRight1)
   mesh19.position.set(-50,28,210)

   // community 왼쪽 버튼
   const communityLeft = new THREE.BoxGeometry(10,10,10)
   // const EbookPush = imgPush.load(Ebook)
   const communityLeft1 = new THREE.MeshStandardMaterial({
       // map : EbookPush
   }) 
   const mesh20 = new THREE.Mesh(communityLeft, communityLeft1)
   mesh20.position.set(-240,30,213)
   // codeTest 오른쪽 버튼
   const communityRight = new THREE.BoxGeometry(10,10,10)
   // const EbookPush = imgPush.load(Ebook)
   const communityRight1 = new THREE.MeshStandardMaterial({
       // map : EbookPush
   }) 
   const mesh21 = new THREE.Mesh(communityRight, communityRight1)
   mesh21.position.set(-250,7,10)



    scene.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,mesh9,mesh10,mesh11,
        mesh12,mesh13,mesh14,mesh15,mesh16,mesh17,mesh18,mesh19,mesh20,mesh21,
        );




    const clickableMeshes = [mesh1, mesh2, mesh3, mesh4, mesh5, mesh6,mesh14,mesh15,mesh16,mesh17,mesh18,mesh19,mesh20,mesh21];
  

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
            const startOrientation = camera.quaternion.clone();
            const targetOrientation = clickedMesh.quaternion.clone().normalize();
        
            if (clickedMesh === mesh1) {
                console.log('Clicked on mesh1');
                // Perform actions specific to mesh1
                // For example, navigate to a different page
                window.location = 'http://localhost:3000/login';
            } else if (clickedMesh === mesh2) {
               
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
            
            } else if (clickedMesh === mesh16) {
                console.log('Clicked on mesh16');
                fControls.enabled = false;
                fControls.enableDamping = true;    
                gsap.to(camera.position, {
                    duration: 1.5,
                    x: -10,
                    y: 40,
                    z: -30,
                    onUpdate: function () {
                        camera.quaternion.copy(startOrientation).slerp(targetOrientation, this.progress());
                    },
                    onComplete: function () {
                        fControls.enabled = true;
                        fControls.enableDamping = false;    
                        fControls.lookAt(80,40,-280)
                      
                        camera.quaternion.copy(startOrientation).slerp(targetOrientation, this.progress());
                    }
                });
            } else if (clickedMesh === mesh17) {
                console.log('Clicked on mesh17');
                fControls.enabled = false;
                fControls.enableDamping = true;    
                gsap.to(camera.position, {
                    duration: 1.5,
                    x: 30,
                    y: 40,
                    z: 80,
                    onUpdate: function () {
                        camera.quaternion.copy(startOrientation).slerp(targetOrientation, this.progress());
                    },
                    onComplete: function () {
                        fControls.enabled = true;
                        fControls.enableDamping = false;    
                        fControls.lookAt(0,0,240)
                        camera.quaternion.copy(startOrientation).slerp(targetOrientation, this.progress());
                    }
                });
            }else if (clickedMesh === mesh14) {
                console.log('Clicked on mesh14');
                fControls.enabled = false;
                fControls.enableDamping = true;    
                gsap.to(camera.position, {
                    duration: 1.5,
                    x: -90,
                    y: 40,
                    z: 190,
                    onUpdate: function () {
                        camera.quaternion.copy(startOrientation).slerp(targetOrientation, this.progress());
                    },
                    onComplete: function () {
                        fControls.enabled = true;
                        fControls.enableDamping = false;    
                        fControls.lookAt(-460,0,-50)
                        camera.quaternion.copy(startOrientation).slerp(targetOrientation, this.progress());
                    }
                });
            }else if (clickedMesh === mesh15) {
                console.log('Clicked on mesh15');
                fControls.enabled = false;
                fControls.enableDamping = true;    
                gsap.to(camera.position, {
                    duration: 1.5,
                    x: 120,
                    y: 40,
                    z: 10,
                    onUpdate: function () {
                        camera.quaternion.copy(startOrientation).slerp(targetOrientation, this.progress());
                    },
                    onComplete: function () {
                        fControls.enabled = true;
                        fControls.enableDamping = false;    
                        camera.quaternion.copy(startOrientation).slerp(targetOrientation, this.progress());
                        fControls.lookAt(360,40,-170)
          
                    }
                });
            }else if (clickedMesh === mesh20) {
                    console.log('Clicked on mesh20');
                fControls.enabled = false;
                fControls.enableDamping = true;    
                gsap.to(camera.position, {
                    duration: 1.5,
                    x: 10,
                    y: 40,
                    z: 80,
                    onUpdate: function () {
                        camera.quaternion.copy(startOrientation).slerp(targetOrientation, this.progress());
                    },
                    onComplete: function () {
                        fControls.enabled = true;
                        fControls.enableDamping = false;    
                        fControls.lookAt(20,40,400)
                        camera.quaternion.copy(startOrientation).slerp(targetOrientation, this.progress());
                    }
                });
            }else if (clickedMesh === mesh21) {
                console.log('Clicked on mesh21');
                fControls.enabled = false;
                fControls.enableDamping = true;    
                gsap.to(camera.position, {
                    duration: 1.5,
                    x: 0,
                    y: 40,
                    z: -20,
                    onUpdate: function () {
                        camera.quaternion.copy(startOrientation).slerp(targetOrientation, this.progress());
                    },
                    onComplete: function () {
                        fControls.enabled = true;
                        fControls.enableDamping = false;    
                        fControls.lookAt(100,40,-280)
                        camera.quaternion.copy(startOrientation).slerp(targetOrientation, this.progress());
                    }
                });
            }else if (clickedMesh === mesh18) {
                console.log('Clicked on mesh18');
            fControls.enabled = false;
            fControls.enableDamping = true;    
            gsap.to(camera.position, {
                duration: 1.5,
                x: 10,
                y: 40,
                z: 80,
                onUpdate: function () {
                    camera.quaternion.copy(startOrientation).slerp(targetOrientation, this.progress());
                },
                onComplete: function () {
                    fControls.enabled = true;
                    fControls.enableDamping = false;    
                    fControls.lookAt(-100,40,360)
                    camera.quaternion.copy(startOrientation).slerp(targetOrientation, this.progress());
                }
            });
            }else if (clickedMesh === mesh19) {
                console.log('Clicked on mesh19');
            fControls.enabled = false;
            fControls.enableDamping = true;    
            gsap.to(camera.position, {
                duration: 1.5,
                x: 0,
                y: 40,
                z: 0,
                onUpdate: function () {
                    camera.quaternion.copy(startOrientation).slerp(targetOrientation, this.progress());
                },
                onComplete: function () {
                    fControls.enabled = true;
                    fControls.enableDamping = false;    
                    fControls.lookAt(mesh20.position)
                    camera.quaternion.copy(startOrientation).slerp(targetOrientation, this.progress());
                }
            });
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
    }, []);
    return ( 
        <section id='model' ref={main}></section>
     );
}
export default Palace;