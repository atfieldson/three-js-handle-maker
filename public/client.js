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
//using window.innerWidth and height.
let camera = new THREE.PerspectiveCamera(35, myCanvas.clientWidth/myCanvas.clientHeight, 2, 1000)
controls = new THREE.OrbitControls(camera, renderer.domElement);

renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio)

camera.position.set(0, 0, 100);
let scene = new THREE.Scene();

controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0)

//lights
let light = new THREE.AmbientLight(0xffffff, .3);
scene.add(light);

let light1 = new THREE.PointLight(0xffffff, .6);
light1.position.set(-50, -15, 15)
scene.add(light1);

let light2 = new THREE.PointLight(0xffffff, .6);
light2.position.set(50, 15, 15)
scene.add(light2);

//WhipWorks logo
let WWLogo = new THREE.TextureLoader().load("ww.jpg");

//Backgrounds
let geoLeftWW = new THREE.PlaneBufferGeometry(50, 50, 8, 8);
let matLeftWW = new THREE.MeshPhongMaterial({ color: 0xffffff, map: WWLogo });
let plane = new THREE.Mesh(geoLeftWW, matLeftWW);
plane.position.set(-35, 0, -15)
plane.rotation.y = -12;

let geoRightWW = new THREE.PlaneBufferGeometry(50, 50, 8, 8);
let matRightWW = new THREE.MeshPhongMaterial({ color: 0xffffff, map: WWLogo });
let plane1 = new THREE.Mesh(geoRightWW, matRightWW);
plane1.position.set(35, 0, -15)
plane1.rotation.y = 12;



scene.add(plane, plane1);

requestAnimationFrame(render);

function render() {
	renderer.render(scene, camera);
	requestAnimationFrame(render);
}


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
