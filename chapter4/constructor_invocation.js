// Use of this style of constructor functions is not recommended

var Quo = function(string){
  this.status = string;
};

Quo.prototype.getStatus = function(){
  return this.status;
};

var myQuo = new Quo('confused');
console.log(myQuo.getStatus());
