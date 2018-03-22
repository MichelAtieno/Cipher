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
reverseString(a)
