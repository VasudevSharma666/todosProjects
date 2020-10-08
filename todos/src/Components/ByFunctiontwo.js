import React,{useState} from 'react'
import './LogoCss.css'

//const initialState = ;

let IDValueIncrement = 0;
let Count=0;

function ByFunctiontwo() {
   const [inputText, setInputText] = useState("")
   const [Active, setActive] = useState(false)
   const [Comp, setComp] = useState(false)
   const [lists, disList] = useState([])
   
 
   const setListsData =(e)=>{
    
     disList([...lists,{id : IDValueIncrement++,list : e.target.value,Complete : false}])
     //console.log(lists.length)
     
     //console.log(lists)
     Count = Count+1;
     setInputText(" ")
     console.log("Comp = "+Comp+" Active"+Active)
   }

   const DeleteData=(id)=>{
       lists.splice(id.target.id,1)
       //console.log("data is deleted")
       Count =Count-1
       disList([...lists])
   }

   const OnChangeCheckBox=(e)=>{
     if(lists[e.target.id].Complete===false)
     {
        lists[e.target.id].Complete=true
       // console.log("Complete change to true")
        //console.log(lists)
        Count = Count-1
        console.log(Count+"new value")
        disList([...lists])
        
        

     }
     else{
        lists[e.target.id].Complete=false
        //console.log("Complete change to false")
        //console.log(lists)
        Count = Count+1
        console.log(Count+"new value")
        disList([...lists])

     }
   }

    const ShowData=(en)=>{
      
       if(en.list.Complete===true){
        if(Comp===false)   {
            
        return(<React.Fragment>
            <td><input type="checkbox" id={en.index} onChange={(e)=>OnChangeCheckBox(e)} checked/></td>
             <td><s>{en.list.list}</s></td>
          <td><button id={en.index} onClick={(id)=>DeleteData(id)}  >x</button></td>
            </React.Fragment>)}
            else{
                return(<React.Fragment></React.Fragment>)
            }
       }else{
        if(Active===false){
        return(<React.Fragment>
            <td><input type="checkbox" id={en.index} onChange={(e)=>OnChangeCheckBox(e)}/></td>
             <td>{en.list.list}</td>
          <td><button id={en.index} onClick={(id)=>DeleteData(id)}  >x</button></td>
            </React.Fragment>)}
            else{
                return(<React.Fragment></React.Fragment>)
            }
       }
  
      
    }


    const DeleteTheSelectOne = () =>{

        for(let i=0;i<lists.length;i++){
            if(lists[i].Complete===true){
                console.log(lists[i].id+"--"+lists[i].list)
                lists.splice(i,1)
            }
        } 

        disList([...lists])
      
    }
   
   const showAllData =()=>{
       console.log("showAll Data is call")
       setActive(false)
       setComp(false)
       disList([...lists])
   }



   const ListData = () =>{
      console.log("listDAta isc all")
      
       return(
        <React.Fragment>
        <table className="TableTag" align="center" >
        <tbody>
        {
           lists.map((list,index) => <tr key={list.id}>
            <ShowData list={list} index={index}/>
            </tr> )
             
        }
        </tbody>
        <tfoot>
         <tr>
        <td><div>{Count}Elent</div></td>
        <td>
        <button onClick={showAllData}>All</button>
        <button  onClick={()=> setActive(!Active)}>Active</button>
        <button onClick={()=>setComp(!Comp)}>Complete</button>
        </td>
        <td>
        <button onClick={DeleteTheSelectOne}>ClearTheData</button>
        </td>
         </tr>
        </tfoot>
        </table>
        </React.Fragment>
       )
   }
    return (
        <div>
            <h1 className="todosLogo">todos</h1>
            <input className="InputTag" type="test" placeholder="Ente the text" value={inputText} onChange={(e)=>setInputText(e.target.value)}  onKeyPress={(e)=>e.which===13 ? setListsData(e) : console.log("null is call")} />
            {
                lists.length>0 ? <ListData/>: null
                
            }

        </div>
    )
}

export default ByFunctiontwo
