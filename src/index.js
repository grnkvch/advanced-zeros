module.exports = function getZerosCount(number, base) {
  var s;
  var res;
  var a = [[]];
  var b = [];
  var i = 2;

  function compareNumeric(a, b) {
    return a - b;
  }
  function isItSimple(num){
    if (num==2) return true;
    var i = 2;
    while (i<num) {
      if (num % i == 0) {
        return false;
      } else i++;
    }
    return true;
  }

  d = base;
  while (d>1) {
    if (d % i == 0) {
      if (isItSimple(i)) {
        if (a[a.length-1][0] % i == 0) {
          a[a.length-1][1]++;
        } else a.push([i,1]);
        d = d/i;
        i=2;
      }
    } else i++;
  }

  for (var i = 1; i<a.length;i++) {
    s = number;
    res = 0;
      while (s>1) {
      s = Math.floor(s/a[i][0]);
      res+=s;
      }
    res = Math.floor(res/a[i][1]);
    b.push(res);
  }
  b.sort(compareNumeric);
  return b[0];
}