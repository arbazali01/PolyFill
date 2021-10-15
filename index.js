
//...............Split.........................
String.prototype.customSplit = function(str = ''){
  const output = [];
  var temp = ''
  let str=this;
  for (let i = 0; i < str.length; i++) {
    const el = str[i]
    if (el === sepr || (sepr === '' && temp)) {
      output.push(temp)
      temp = '';
    }
    if (el !== sepr) {
      temp += el
    }
  }
  if (temp) {
    output.push(temp)
    temp = '';
  }
  return output
}
const str = 'this is some string';
console.log(str.customSplit());

//.............Reverse..................
Array.prototype.customReverse=function(){
    const arr=this;
    let j=arr.length-1;
    for(let i =0 ;i<arr.length/2;i++){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        j--;
    }
}
let array=[1,2,3];
array.customReverse();
console.log(array);

//................JOIN..............
Array.prototype.myJoin=function(joinSep = ''){
    const arr=this;
    let output='';
    for(let i=0;i<arr.length-1;i++){
        output+=""+arr[i]+joinSep;
    }
    output+=""+arr[arr.length-1];
    return output;
}
let arr=[1,2,3];
let string=arr.myJoin('-');
console.log(str);
