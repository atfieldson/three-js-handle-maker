console.log('js');

let app = angular.module('HandleDesignApp', []);

let renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('myCanvas') });
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

	let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));
	let geometry = new THREE.CylinderGeometry(4, 4, 50, 16);
	let material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture });
	handle = new THREE.Mesh(geometry, material);
	scene.add(handle);

	requestAnimationFrame(render);

	function render() {
		handle.rotation.y += .01;
		handle.rotation.x += 0.00;
		renderer.render(scene, camera);
		requestAnimationFrame(render);
	}
	
	vm.boxPattern = function (color1, color2) {
		console.log('in vm.boxPattern');
		boxPattern(color1, color2);
		//remove geometry
		scene.remove(handle);
		//remake geometry
		let texture = new THREE.CanvasTexture(canvas, document.getElementById('materialCanvas'));
		let material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture });
		let geometry = new THREE.CylinderGeometry(4, 4, 50, 16);
		vm.handle = new THREE.Mesh(geometry, material);
		scene.add(vm.handle);
		
		requestAnimationFrame(render);
		// function render() {
		// 	handle.rotation.y += .01;
		// 	handle.rotation.x += 0.00;
		// 	renderer.render(scene, camera);
		// 	requestAnimationFrame(render);
		// }
	}
	}]);
