const user= {person :
    {employee : 
        {firstname:"Rahul"},
        likes :["cycling","hiking","driving"]
    } 
}

 
 let { person}=user;
 let { employee,likes :[, secndlike]}=person;
 let { firstname}=employee;

 console.log(firstname)
 console.log(secndlike)