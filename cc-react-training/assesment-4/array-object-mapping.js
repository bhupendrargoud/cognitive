
let raksha={name:"Raksha",surname:"Sharma",age:28};
let srinivas={name:"Srinivas",surname:"Iyenger",age:30};
let usha ={ name:"Usha",surname:"janardhana",age:54};

let users=[raksha,srinivas,usha]

var usersmapped=users.map(function(item,id) {
return {
    fullname : item.name +" "+item.surname ,
    id : id+1
   
}  
  
}
)

console.log(usersmapped[0])
