
function grteq(arr,val) {
var arr1=new Array()
let k=0;
for (let i = 0; i < arr.length; i++) {
   if(arr[i]>=val)
   {
       arr1[k]=arr[i]
       k++;
   }
    
}
return arr1;
}

let arr=[1,33,99,50,100,150,60,99,1000,999,0,-1,10];


console.log(grteq(arr ,150))