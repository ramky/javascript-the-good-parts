if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}

var stooge = {
  "first-name": "Ram",
  "last-name": "Iyer"
};

var another_stooge = Object.create(stooge);

console.log(stooge);
console.log(another_stooge);

