console.log('js');

let renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas')}); 
renderer.setClearColor(0x00ff00);
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight);

let camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);
//camera.position.set(0, 0, 0);
let scene = new THREE.Scene();

let light = new THREE.AmbientLight(0xffffff, .5);
scene.add(light);

let light1 = new THREE.PointLight(0xffffff, .5);
scene.add(light1);

// let geometry = new THREE.BoxGeometry(100, 100, 100); 
//box geometry in documentation, can also be called cube geometry


let geometry = new THREE.CylinderGeometry(5, 5, 35, 16);

// let texture = new THREE.TextureLoader().load( "ww.jpg" );
// texture.wrapS = THREE.RepeatWrapping;
// texture.wrapT = THREE.RepeatWrapping;
// texture.repeat.set( 4, 4 );

//LOOK AT ORBIT CONTROLS FOR CAMERA INTERACTION


let wrap = new THREE.CanvasTexture({ canvas : 'materialcanvas'})


let material = new THREE.MeshLambertMaterial( { wireframe : true, map: wrap} );  //MeshBasicMaterial did not react to light
let mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, -70)

scene.add(mesh);

requestAnimationFrame(render);

function render(){
    mesh.rotation.y += .00;
    mesh.rotation.x += .000;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

renderer.render(scene, camera);

