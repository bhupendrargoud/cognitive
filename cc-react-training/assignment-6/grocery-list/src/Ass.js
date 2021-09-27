






const data =[ { "item": "Dal", "type": "veg" },
                { "item": "Meat", "type": "non-veg" }, 
                { "item": "Fish", "type": "non-veg" },
                 { "item": "Rice", "type": "veg" }];


const Grocery = (props) => (
    <>
    <div className="table">
   <table>
       <tr>
           <th> Item</th>
           <th> Type</th>
           </tr>
    {data.map(function(d,nam,typ){
      return (<tr>
                    <td> {d.item}</td>
                
                    <td>{d.type}</td> 
                    
                     </tr> )
       })}
    </table>

       <button onClick={ 
           data.sort(function(a, b) {
               return a.item.localeCompare(b.item)
               
           })
       }>sort</button>

    </div>

    </>
);

export default Grocery ; 


    
    
