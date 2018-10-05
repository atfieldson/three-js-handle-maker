console.log('js');

let app = angular.module('HandleDesignApp', []);

let renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('myCanvas') });
let camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 2, 1000);
controls = new THREE.OrbitControls(camera, renderer.domElement);

renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.set(0, 0, 100);
let scene = new THREE.Scene();

controls = new THREE.OrbitControls(camera);
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

//WhipWor
let WWLogo = new THREE.TextureLoader().load("ww.jpg");

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

let geoFloor = new THREE.PlaneBufferGeometry(800, 500, 8, 8);
let matFloor = new THREE.MeshStandardMaterial({ color: 0xffffff });
let floor = new THREE.Mesh(geoFloor, matFloor);
floor.position.set(-0, -20, -400)
// floor.rotation.x= -1;

scene.add(plane, plane1, floor);

// //initial creation of handle, now in controller
// let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));
// let geometry = new THREE.CylinderGeometry(4, 4, 200, 16);
// let material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture });

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

	//initial render
	let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));
	let geometry = new THREE.CylinderGeometry(4, 4, 80, 16);
	let material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture });
	handle = new THREE.Mesh(geometry, material);
	handle.rotation.y = Math.PI;
	scene.add(handle);

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
