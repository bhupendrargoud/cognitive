
function cams(string) {
let va=string;
for (let i = 0; i < va.length; i++) {
    let c=va.charAt(i);
    if(c=='-')
    {
      let fst=  va.substr(0,i)
      let ch=va.charAt(i+1)
      ch=ch.toLocaleUpperCase()
        let scd =va.substr(i+2)
    va=fst+ch+scd;
    }
    
}
return va;
}
console.log(cams("black-around-me"))
