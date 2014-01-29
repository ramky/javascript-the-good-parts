var add = function(a, b){
  return a + b;
};

var myObject = {
  value: 0,
  increment: function(inc){
    this.value += typeof inc === 'number' ? inc : 1
  }
};

myObject.increment();
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);

myObject.double = function(){
  // Method cannot employ an inner function because it does not share
  // The method's access to the object as this is bound to the wrong
  // value - workaround is to using another variable to store 'this'

  var that = this;

  var helper = function(){
    that.value = add(that.value, that.value);
  };
  
  helper();
};

myObject.double();
console.log(myObject.value);
