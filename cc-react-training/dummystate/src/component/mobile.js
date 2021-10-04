

 import {useState} from 'react';
 const Statemob =() => {
     const smob =useState("");
    const mob = smob[0];
    const setmob = smob[1];
    const ln=useState("enter valid num");
    const sln=ln[0];
    const setsln=ln[1];
    
        const sp =useState("");
       const plan = sp[0];
       const setplan = sp[1];

    var msg ="enter valid number"
     
    const verify = (event) =>{
      const  l=mob.length;
      
        if(l===10)
        {
            msg="submitted"
        }
        alert("mob : "+ mob+"  has plan : "+plan +"  "+msg)
    };

    const handleChange = (event) => {
        setmob( event.target.value);
        setsln( event.target.msg);
    };

    const handleChange1 = (event) => {
        setplan( event.target.value);
    };

     return (
         <form> 
             <label htmlFor="mobn">mobile num :</label>
             <input id="mobn" type="text" pattern="[0-9]" onChange={handleChange}/>
             <p>
                  entered number is <strong>{mob}{sln}</strong>
             </p>
          <div>
          <p>Has plan </p>
            <input type="radio" value="yes" name="plan" onChange={handleChange1} /> yes
            <input type="radio" value="no" name="plan" onChange={handleChange1}/> no
            <p>
                 entered option is <strong>{plan}</strong>
            </p>
              </div>
             <input type="submit" value="submit" onClick={verify}></input>
         </form>
     );
 }

 export default Statemob;
