console.log('js');

let app = angular.module('HandleDesignApp', []);

//-----------------------new scene renderer for changing size of screen----------------------------


//-------------------------------------------------------------------------------------------------

let myCanvas= document.getElementById('myCanvas')
var gl = myCanvas.getContext("webgl"); //new!


let renderer = new THREE.WebGLRenderer({ canvas: myCanvas });
myCanvas.width = 500; //new
myCanvas.height = 500; //new

renderer.setViewport(0, 0, 1000, 1000)

//using clientWidth and height below is what allows the proportions to remain accurate, as distinct
//from using window.innerWidth and height.
let camera = new THREE.PerspectiveCamera(35, myCanvas.clientWidth/myCanvas.clientHeight, 2, 1000)
controls = new THREE.OrbitControls(camera, renderer.domElement);

renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio)

camera.position.set(0, 0, 100);
let scene = new THREE.Scene();

controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0)
controls.maxDistance = 120;
controls.minDistance = 60;

//set vertical orbit limitations
controls.maxPolarAngle = Math.PI/1.9;
controls.minPolarAngle = Math.PI/2.15;
//set how far you can zoom in 


//lights
let light = new THREE.AmbientLight(0xffffff, .3);
scene.add(light);

let light1 = new THREE.PointLight(0xffffff, .6);
light1.position.set(-50, -15, 15)
scene.add(light1);

let light2 = new THREE.PointLight(0xffffff, .6);
light2.position.set(50, 15, 15)
scene.add(light2);
//end lights


//Backgrounds
let WWLogo = new THREE.TextureLoader().load("ww.jpg");
let geo0WW = new THREE.PlaneBufferGeometry(50, 50, 8, 8);
let mat0WW = new THREE.MeshPhongMaterial({ color: 0xffffff, map: WWLogo });
let plane0 = new THREE.Mesh(geo0WW, mat0WW);
plane0.position.set(0, 0, -60)
plane0.rotation.y = 0;

let Indy = new THREE.TextureLoader().load("indy.jpg");
let geo1WW = new THREE.PlaneBufferGeometry(50, 50, 8, 8);
let mat1WW = new THREE.MeshPhongMaterial({ color: 0xffffff, map: Indy });
let plane1 = new THREE.Mesh(geo1WW, mat1WW);
plane1.position.set(60, 0, 0)
plane1.rotation.y = -Math.PI/2;

let CatWhip = new THREE.TextureLoader().load("catWhip.jpg");
let geo2WW = new THREE.PlaneBufferGeometry(50, 50, 8, 8);
let mat2WW = new THREE.MeshPhongMaterial({ color: 0xffffff, map: CatWhip });
let plane2 = new THREE.Mesh(geo2WW, mat2WW);
plane2.position.set(-60, 0, 0)
plane2.rotation.y = Math.PI/2;

let SaberWhip = new THREE.TextureLoader().load("saberWhip.jpg");
let geo3WW = new THREE.PlaneBufferGeometry(50, 50, 8, 8);
let mat3WW = new THREE.MeshPhongMaterial({ color: 0xffffff, map: SaberWhip });
let plane3 = new THREE.Mesh(geo3WW, mat3WW);
plane3.position.set(0, 0, 60)
plane3.rotation.y = Math.PI;

scene.add(plane0, plane1, plane2, plane3);
//end backgrounds

//render
requestAnimationFrame(render);

function render() {
	renderer.render(scene, camera);
	requestAnimationFrame(render);

	controls.update();
}
//end render


app.controller('HandleDesignController', [function () {
	console.log('in HandleDesignController');
	let vm = this;
	vm.color1 = '';
	vm.color2 = '';
	
	//handle
	let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));

	let geometry = new THREE.CylinderGeometry(4, 4, 80, 16);
	let material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture, bumpMap : texture });
	handle = new THREE.Mesh(geometry, material);
	handle.rotation.y = Math.PI;
	scene.add(handle);

	//initial render
	renderer.render(scene, camera);

	vm.boxPattern = function (color1, color2) {
		//render canvas
		boxPattern(color1, color2);
		//remove old handle
		scene.remove(handle);
		//remake hendle
		let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));
		let material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture });
		let geometry = new THREE.CylinderGeometry(4, 4, 50, 16);
		handle = new THREE.Mesh(geometry, material);
		scene.add(handle);
	}

	vm.accentPattern = function (color1, color2) {
		//render canvas
		accentPattern(color1, color2);
		//remove old handle
		scene.remove(handle);
		//remake hendle
		let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));
		let material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture });
		let geometry = new THREE.CylinderGeometry(4, 4, 50, 16);
		handle = new THREE.Mesh(geometry, material);
		scene.add(handle);
	}

	vm.egyptianEyePattern = function (color1, color2) {
		//render canvas
		egyptianEyePattern(color1, color2);
		//remove old handle
		scene.remove(handle);
		//remake hendle
		let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));
		let material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture });
		let geometry = new THREE.CylinderGeometry(4, 4, 50, 16);
		handle = new THREE.Mesh(geometry, material);
		scene.add(handle);
	}

	vm.verticalStripPattern = function (color1, color2) {
		//render canvas
		verticalStripPattern(color1, color2);
		//remove old handle
		scene.remove(handle);
		//remake hendle
		let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));
		let material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture });
		let geometry = new THREE.CylinderGeometry(4, 4, 50, 16);
		handle = new THREE.Mesh(geometry, material);
		scene.add(handle);
	}

	vm.emeraldPattern = function (color1, color2) {
		//render canvas
		emeraldPattern(color1, color2);
		//remove old handle
		scene.remove(handle);
		//remake hendle
		let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));
		let material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture });
		let geometry = new THREE.CylinderGeometry(4, 4, 50, 16);
		handle = new THREE.Mesh(geometry, material);
		scene.add(handle);
	}

	vm.celticPattern = function (color1, color2) {
		//render canvas
		celticPattern(color1, color2);
		//remove old handle
		scene.remove(handle);
		//remake hendle
		let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));
		let material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture });
		let geometry = new THREE.CylinderGeometry(4, 4, 50, 16);
		handle = new THREE.Mesh(geometry, material);
		scene.add(handle);
	}

}]);
