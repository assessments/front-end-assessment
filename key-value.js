
/*
 The Foo class implements private properties by Douglas Crockford's approach
*/

function Foo() {

	//values is a private property
	var values = {};

	//set() is public method
	this.set = function (key, value) {
		values[key] = value;
	};

	//get() is a public method
	this.get = function (key) {
		return values[key];
	};

};

var instance = new Foo();

var instance2 = new Foo();

instance.set('key', 'monkeys');

console.log(instance.get('key')); // returns value

console.log(instance.key); // Error (undefined)

instance2.set('key', 'boomerangs');

console.log(instance2.get('key')); //returns value2

console.log(instance2.key); // Error (undefined)
