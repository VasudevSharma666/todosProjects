import React,{useState,useEffect} from 'react'
import './LogoCss.css'


let array=[]


function ByFunction() {
   
const [inputtext, setInput] = useState({data : ""})
const [lists, setlists] = useState([])



const UpdateData = (e) =>{
      setlists([...lists,{
          title : e.target.value
      }])   
      setInput({data : ""})       
}

const CheckBoxData = (e)=>{
    /*  console.log(typeof(e.target.id))
    console.log(typeof(parseInt(e.target.id)))
    console.log(e.target.id)
    const Number =parseInt(e.target.id)
    console.log(Count)
    console.log(Count.length)
    console.log(Count.)
    console.log(setCount({Count : Count.concat(e.target.id)}))*/
     if(array.includes(e.target.id))
     { console.log(array)
        console.log(array.length + 'include is call')
        console.log(delete array[array.indexOf(e.target.id)])
        
     }
     else{
         console.log(array)
        console.log(array.length + 'else is call')
        array = array.concat(e.target.id)
        
     }


}

 const ShowTheList = (e) =>{
     console.log(e.list + '-' + e.ind)
     
   if(array.includes(e.ind))
   {  
       
       return   <React.Fragment><s>{e.list}</s></React.Fragment>
        
   }else{
        return <React.Fragment>{e.list}</React.Fragment> 
        
   }
   return("hello")

 }

const ShowData = () =>{
   

    return(<React.Fragment>
        <table className="TableTag" align="center" >
        <tbody>
        {
            lists.map((list,index) => <tr key={index}>
            <td><input type="checkbox"  id={index}  onClick={e => CheckBoxData(e)} /></td>
            <td><ShowTheList list={list.title} ind={index} /></td>
            <td><button id={index} onClick={(e)=>DeletData(e)} >x</button></td>
            </tr> )
        }
        </tbody>
        <tfoot>
        <tr>
        <td>{lists.length}Element</td>
        <td><button>All</button>
        <button>Active</button>
        <button>Complete</button>
        </td>
        <td><button>Clear the Data</button></td>
        </tr>
        </tfoot>
        </table>
        </React.Fragment>)
    
}

      
const DeletData = (e) => {
    console.log(e.target.id)     
    console.log(lists+"DeletData is call"+lists.splice(e.target.id,1))
     setInput({data : ''})
    //delete lists.id[e.target.id]
}
    return (
        <div>
            <h1 className="todosLogo">todos</h1>
            <input type="text" value={inputtext.data} className="InputTag" onChange={(e)=>setInput({data : e.target.value})} onKeyPress={e=> e.which===13 ?  UpdateData(e): console.log("Enter is not press")}/>
        { lists.length!==0 ? <ShowData /> : null}
        <h5 className="LastNameCode" >Vasudev Created It in function</h5>
    
        </div>
    )
}

export default ByFunction

