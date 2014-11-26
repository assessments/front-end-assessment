
var paths = [
  {name : 'icon' , type: 'jpeg' , path: '../'},
  {name : 'badge' , type: 'gif' , path: '../'},
  {name : 'pattern' , type: 'jpeg' , path: '../'},
  {name : 'boy' , type: 'png' , path: '../'},
  {name : 'logo' , type: 'gif' , path: '../'},
  {name : 'bg' , type: 'jpeg' , path: '../'},
  {name : 'something' , type: 'gif' , path: '../'},
  {name : 'button' , type: 'png' , path: '../'}
];

/*
  Function that returns an Object that has an array of paths grouped by type.

  Reference:
  {
   jpeg: ['../icon.jpeg', ...],
  }
*/

function process() {

  var result = {};

  paths.forEach(function (item) {
    
    if (!result[item.type]) {
      result[item.type] = []; //create the type array if it doesn't already exist
    };

    result[item.type].push(item.path+item.name+'.'+item.type);

  });

  return result;
};

var result = process();
console.log(result);