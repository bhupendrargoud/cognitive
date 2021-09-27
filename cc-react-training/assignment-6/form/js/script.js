function validateForm() {
    let t=false;
    let e=/^w+([\.-]?\w+)8@\w++([\.-]?\w+)*(\.\w{2,3})+$/;
    let p=/^\d{10}$/;
    let x=document.forms["uform"]
    ["fname"].value;
    let z=document.forms["uform"]
    ["fnum"].value;
    let y=document.forms["uform"]
    ["fmail"].value;
    if(x=="")
    {alert("name must be filled")
    t=false;
    }
    if(y.value.match(e))
    { t= true;}
    else
    {alert("enter a valid email")
    t=false;
    }

    if(z.value.match(e))
    {t= true;}
    else {
        {alert("enter a valid number")
        t=false;
        } 
    }
    return t;
}