console.log('js');

let app = angular.module('HandleDesignApp', []);

let renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('myCanvas') });
renderer.setClearColor(0x0088ff);
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight);

let camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 2, 1000);
camera.position.set(0, 0, 100);
let scene = new THREE.Scene();

let light = new THREE.AmbientLight(0xffffff, .9);
scene.add(light);

let light1 = new THREE.PointLight(0xffffff, .75);
scene.add(light1);

//initial creation of shape
let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));
let geometry = new THREE.CylinderGeometry(4, 4, 50, 16);
let material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture });

// let handle = new THREE.Mesh(geometry, material);
// scene.add(handle);

// requestAnimationFrame(render);

// function render(){
// 	handle.rotation.y += .01;
// 	handle.rotation.x += 0.00;
// 	renderer.render(scene, camera);
//     requestAnimationFrame(render);
// }

// renderer.render(scene, camera)

app.controller('HandleDesignController', [function () {
	console.log('in HandleDesignController');
	let vm = this;
	vm.color1 = '';
	vm.color2 = '';

	//initial render
	let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));
	let geometry = new THREE.CylinderGeometry(4, 4, 50, 16);
	let material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture });
	handle = new THREE.Mesh(geometry, material);
	scene.add(handle);
	//animation
	requestAnimationFrame(render);
	function render() {
		handle.rotation.y += .01;
		handle.rotation.x += 0.00;
		renderer.render(scene, camera);
		requestAnimationFrame(render);
	}

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
