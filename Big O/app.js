// const {performance} = require('perf_hooks');

const nemo = ['nemo'];
const nemo2 = ['nemo1', 'nemo2', 'nemo3', 'nemo', 'nemo4', 'nemo5', 'nemo6'];
const large = new Array(100).fill('nemo');

function findNemo1(array){
	// let t0 = performance.now();
	console.log('Running...')
	for(let i = 0; i < array.length; i++){
		if(array[i] === 'nemo'){
			console.log('Found Nemo');
			break;
		}
	}
	// let t1 = performance.now();
	// console.log('Call to find nemo took: ' + (t0 - t1) + 'milliseconds');
}

function findNemo2(array){
	array.forEach(fish => {
		if(fish === 'nemo'){
			console.log('Found him!')
		}
	})
}

function findNemo3(array){
	for(let fish of array) {
		if(fish === 'nemo'){
			console.log('Found NEMO!!!')
		}
	}
}



findNemo1(nemo2);// O(n) --> Linear Time

console.log('----------')

findNemo2(nemo2)

console.log('----------')

findNemo3(nemo2)
