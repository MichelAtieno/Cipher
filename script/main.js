var sentence = function(a) {
  return a;
};
var a = prompt("Enter a sentence:");

function first(a){
  return a.toUpperCase().charAt(0);
};
var f=first(a);

function last(a){
  return a.toUpperCase().charAt(a.length-1);
};
var l=last(a);


function reverseString(a){
 var r = a.split("");
 r.reverse();
 a= r.join('');
 return a;
}
reverseString(a);

function add(a) {
  return f+l; // or return f.concat(l);
}
var r=add(a);

function reverseString(r){
 var s = r.split("");
 s.reverse();
 r= s.join('');
 return r;
}
reverseString(r);

function con(a){
  return a+reverseString(r);
}
var c=con(a);
