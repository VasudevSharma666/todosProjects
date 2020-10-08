import React,{useReducer} from 'react'
import './LogoCss.css'
const initialState ={
    inputTag : "",
    todoLists : [],
    todoActive : false,
    todoCompleted : false
   }

let Number= 0
const reducer=(state,action)=>{
    switch(action.type){
       case 'input':
        { 
            
            return({...state,inputTag : action.value})}
        case "lists":
        {  console.log("lists is call"+action.id)
          return({todoLists : [...state.todoLists,{id : action.id ,list : action.list ,Complete : action.Complete }]} )}
        case 'reset' : {
            return({...state})
        }
        case 'Active':{
            return({...state,todoActive :action.value})
             
        }
        case 'Completed':{
            return({...state,todoCompleted :action.value})
        }
        case 'All':{
            return({...state,todoActive : true ,todoCompleted : true})
        }
       default :
       {
           return initialState
       }
    }
}
function UseReducerTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)

const SavetheDate=(e)=>{
   dispatch({type : 'lists',id : Number++,list : e.target.value,Complete : false})       
   dispatch({type : 'input', value : " "})
   console.log(state.todoLists)
}
const DeleteByX=(e)=>{
     state.todoLists.splice(e.target.id,1)
      dispatch({type : 'reset'})
     }

const CheckBoxMethod=(e)=>{
    if(state.todoLists[e.target.id].Complete=== true)
    {   
        state.todoLists[e.target.id].Complete=false
        console.log(state.todoLists)
        dispatch({type : 'reset'})
       }else{
        state.todoLists[e.target.id].Complete=true
        console.log(state.todoLists)
        dispatch({type : 'reset'})
       }
}
const ListRendingMethod=(en)=>{
    if(en.list.Complete===true){
      if(state.todoCompleted!==false) 
        {return(<React.Fragment>
            <td><input type="checkbox" id={en.index}  onChange={(e)=>CheckBoxMethod(e)}  checked/></td>
            <td><s>{en.list.list}</s></td>
            <td><button id={en.index} onClick={DeleteByX}>x</button></td>
          </React.Fragment>)}
          else{
              return(<React.Fragment></React.Fragment>)
          }
       
      }
      else{
         if(state.todoActive!==false)
          {return(<React.Fragment>
            <td><input type="checkbox" id={en.index}  onChange={(e)=>CheckBoxMethod(e)}/></td>
            <td>{en.list.list}</td>
            <td><button id={en.index} onClick={DeleteByX}>x</button></td>
             </React.Fragment>)}
             else{
                 return(<React.Fragment></React.Fragment>)
             }
          } 
}
const DeleteTheCheckData =()=>{
    console.log("mthid is call")
    const {todoLists}=state
    for(let i=0;i<todoLists.length;i++)
    {
        if(todoLists[i].Complete===true)
        {
            console.log("CALL")
            todoLists.splice(i,1)
        }
    }
    dispatch({type : 'reset'})

}
const ShowTheListData = () =>{
    return(<React.Fragment>
        <table className="TableTag" align="center" >
        <tbody>
        {
            state.todoLists.map((list,index) => <tr key={index}>
            <ListRendingMethod list={list} index={index}/>
            </tr> )
        }
        </tbody>
        <tfoot>
        <tr>
        <td>{state.todoLists.length}Element</td>
        <td><button onClick={()=>dispatch({type : 'All'})}>All</button>    
        <button onClick={()=>dispatch({type : 'Active', value : !state.todoActive })}>Active</button>
        <button onClick={()=>dispatch({type : 'Completed', value : !state.todoCompleted })}>Complete</button></td>
        <td><button onClick={()=>DeleteTheCheckData()}>Clear the Data</button></td>
        </tr>
        </tfoot>
        </table>
        </React.Fragment>)
    
}
    
    return (
        <div>
        <h1 className="todosLogo">todos</h1>
        <input type="text"  className="InputTag" value={state.inputTag} onChange={(e)=>dispatch({type: 'input',value: e.target.value})}  onKeyPress={e=> e.which===13 ? SavetheDate(e) : null}/>
        {state.todoLists.length!==0 ? <ShowTheListData/>:null}
        </div>
    )
}

export default UseReducerTwo
