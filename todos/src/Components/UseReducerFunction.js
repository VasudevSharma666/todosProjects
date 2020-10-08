import React,{useReducer} from 'react'
import './LogoCss.css'
const initialState= ""
let call=0
let Count=0
let unCheck=0
let Check=0
const reducer=(state,action)=>{
  // console.log("state"+state)
   //console.log("action"+action.type)
   return(state = action.type)
}

const initiallist= []
let Number=0
const reducer1=(state,action)=>{
    
  return([...state,{id : action.id ,list : action.list ,Complete : action.Complete }])
}
const initialHolder = "Enter The Data here"
const reducer2 =(state,action)=>{
    return(state = action.holder)
}
const reducerActive =(state,action)=>{
    return(state = action)
}
 const reducerCom =(state,action)=>{
    return(state = action)
 }

function UseReducerFunction() {
    const [InputText, dispatch] = useReducer(reducer, initialState)
    const [lists, displist] = useReducer(reducer1, initiallist)
    const [InputPlaceHolder, dispatchHolder] = useReducer(reducer2, initialHolder)
    const [Active, dispatchActive] = useReducer(reducerActive, false)
    const [Comp, dispatchCom] = useReducer(reducerCom, false)
const SavetheDate=(e)=>{
    if(e.target.value===""){
        alert("Enter the Data First ")
    }
    else{
       console.log("In saveTheData ")
       displist({id : Number,list : e.target.value,Complete : false})        
       dispatch({type : ''})
       console.log(lists)
       Number=Number+1;}
    }


const DeleteByX=(e)=>{
    console.log(e.target.id)
    console.log(lists)
    lists.splice(e.target.id,1)
    call++;
    console.log(call)
    dispatchHolder({holder : "Deleted the data"+call})
    
    
}

const ShowTheTable =(e)=>{
     
    if(e.list.Complete===true){
      if(Comp===false)
      {return(<React.Fragment>
        <td><input type="checkbox" id={e.index} onChange={(e)=>CheckData(e)} checked/></td>
        <td><s>{e.list.list}</s></td>
        <td><button id={e.index} onClick={(e)=>DeleteByX(e)}  >x</button></td>
        </React.Fragment>)}
        else{
            return(<React.Fragment></React.Fragment>)
        }
    }
    else{
        if(Active===false)
        {return(<React.Fragment>
            <td><input type="checkbox" id={e.index} onChange={(e)=>CheckData(e)} /></td>
            <td>{e.list.list}</td>
            <td><button id={e.index} onClick={(e)=>DeleteByX(e)}  >x</button></td>
           </React.Fragment>)}
           else{
               return(<React.Fragment></React.Fragment>)
           }
    }
}

const CheckData=(e)=>{
    if(lists[e.target.id].Complete=== true)
    {   
        lists[e.target.id].Complete=false
        console.log(lists)
        dispatchHolder({holder : "Un-Checked"+unCheck })
        unCheck++

    }else{
        lists[e.target.id].Complete=true
        console.log(lists)
        dispatchHolder({holder : "Checked"+Check })
        Check++;
    }
}

const DeleteTheSelected=()=>{
    for(let i=0 ;i<lists.length;i++){
        if(lists[i].Complete===true){
            lists.splice(i,1)
        }
    }
    dispatchHolder({holder : "Deleted the Check Data" })
}
const AllIsClick=()=>{
    dispatchCom(false)
    dispatchActive(false)
        
}
const ShowTheData=()=>{
     Count = lists.length
    for(let i=0 ;i<lists.length;i++){
        if(lists[i].Complete===true){
            console.log("Count"+i)
            Count--
        }
    }
    return(<React.Fragment>
        <table className="TableTag" align="center" >
        <tbody>
        {
            lists.map((list,index) => <tr key={index}>
             <ShowTheTable list={list} index={index}/>
            </tr> )
        }
        </tbody>
        <tfoot>
        <tr>
       <td><div>{Count}Elent</div></td>
       <td>
       <button onClick={AllIsClick}>All</button>
       <button  onClick={()=>dispatchActive(!Active)}>Active</button>
       <button  onClick={()=>dispatchCom(!Comp)}>Complete</button>
       </td>
       <td>
       <button onClick={DeleteTheSelected}>ClearTheData</button>
       </td>
        </tr>
       </tfoot>
        </table>
        </React.Fragment>)
}


    return (
        <div>
       <h1 className="todosLogo">todos</h1>
       <input type="text" value={InputText} className="InputTag"  placeholder={InputPlaceHolder} onChange={(e)=>dispatch({type :e.target.value})}  onKeyPress={e=> e.which===13 ? SavetheDate(e) : null}/>
       {lists.length!==0 ? <ShowTheData/> : null }
       <h5 className="LastNameCode" >Vasudev Created It in Funtion(using UseReducer)</h5>
        </div>
    )
}

export default UseReducerFunction
