var add = function(a, b){
  if(typeof a != 'number' || typeof b != 'number'){
    throw{
      name: 'TypeError',
      message: 'add needs numbers'
    };
  }
return a + b;
}

console.log(add(10, 15));
console.log(add("abcd", 15));
