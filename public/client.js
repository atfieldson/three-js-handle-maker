console.log('js');

let renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas')}); 
renderer.setClearColor(0x0088ff);
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight);


let camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 2, 1000);
camera.position.set(0, 0, 100);
let scene = new THREE.Scene();

let light = new THREE.AmbientLight(0xffffff, .5);
scene.add(light);

let light1 = new THREE.PointLight(0xffffff, .5);
scene.add(light1);


// let texture = new THREE.TextureLoader().load("vertical.jpg");
let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));


let geometry=new THREE.CylinderGeometry( 4, 4, 50, 16);
// let geometry= new THREE.PlaneGeometry( 3, 4 );
// let material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } );
// let material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
let material = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture } );

let cube = new THREE.Mesh(geometry, material);
scene.add(cube);


requestAnimationFrame(render);

function render(){
	cube.rotation.y += .01;
	cube.rotation.x += 0.00;
	renderer.render(scene, camera);
    requestAnimationFrame(render);
}

renderer.render(scene, camera);
