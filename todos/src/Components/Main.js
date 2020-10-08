import React, { Component } from 'react'
import './LogoCss.css'

export class Main extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
           Inputtext : '',
           lists : [],
           LineWords : [],
           PlaceHolder : 'Enter The Data',
           Active : false,
           Complete : false
       
      }
  }
   UpdateInput(e) {
      this.setState({Inputtext : e.target.value})
   }
   
   addToList(){
       this.setState({lists : this.state.lists.concat(this.state.Inputtext)})
       this.setState({Inputtext : ''})
       console.log(this.state.Active)
       
   }
ShowTheList= (list) => {
    //console.log(list.list+"-"+list.index)
      const {LineWords,Active,Complete}=this.state
       //console.log(LineWords)
       //console.log(typeof((list.index).toString()))
       const dta= (list.index).toString()
       //console.log(LineWords.includes(dta))
       if(LineWords.includes(dta)  )
       {
           if(Active===false)
          {// console.log("TRue os call")
           
          return(<div><s>{list.list}</s></div>)
           
        }
       }
       else {
           if(Complete === false )
        //console.log("false os call")
           return(<div>{list.list}</div>)
       }
       return(<s className="HiddenData">Hidden</s>)
       
   }
  
  
   DataObject = () =>{
       const {lists,Active,Complete} = this.state
       
     return(<React.Fragment>
        <table className="TableTag" align="center" >
        <tbody>
        {
            lists.map((list,index) => <tr key={index}>
            <td><input type="checkbox" id={index} onClick={(e) => this.LineTheWord(e)} /></td>
            <td><this.ShowTheList index={index} list={list} /></td>
            <td><button id={index} onClick={(id)=>this.DeleteData(id)}  >x</button></td>
            </tr> )
        }
        </tbody>
        <tfoot>
        <tr >
        <td><this.CountElement/> element peresent</td>
        <td><button onClick={()=>this.setState({Active : false ,Complete: false})}>All</button>
        <button onClick={()=> this.setState({Active :!Active})}>Active</button>
        <button onClick={()=>this.setState({Complete : !Complete})}>Complete</button></td>
        <td><button onClick={()=>this.Selected()}>Clear select</button></td>
        </tr>
        </tfoot>
        </table>
        </React.Fragment>)
   }
   DeleteData = (id) =>{
    const {lists,LineWords} = this.state;
    lists.splice(id.target.id,1 )
    if(LineWords.includes(id.target.id)){
        const ind =LineWords.indexOf(id.target.id)
        delete LineWords[ind]
    }
       console.log(lists+'-'+id.target.value)
       this.UpdateInput(id)

   }
   LineTheWord= (e) =>{
    const{LineWords}=this.state 
    
    console.log(e.target.id)
    //console.log(LineWords)
    //console.log(LineWords.includes(e.target.id))
    const ind =LineWords.indexOf(e.target.id)
    console.log("index of emity"+LineWords.indexOf("empty"))
    console.log(ind)
    if(LineWords.includes(e.target.id))
    {    
        
        delete LineWords[ind]
        LineWords.splice("empty",1)
        console.log("Split is run")
        this.setState({PlaceHolder : e.target.id+"is clear"})

        
    }
    else 
    {
        console.log(e.target.id)
       this.setState({LineWords : this.state.LineWords.concat(e.target.id)})
        console.log("this.state is call")
        console.log(LineWords)
        
        
    }
}

Selected =()=> {
    const {LineWords,lists}= this.state
    for(var i=0;i<LineWords.length;i++) {
        delete lists[LineWords[i]]
    }
    this.setState({PlaceHolder : "Select Data is delte"})
    
}
 
CountElement =() =>{
 console.log("Count is call")
  const  Total = this.state.lists.length;
  const   Listdata= this.state.LineWords.filter(Boolean).length
  console.log(Listdata)
 return(<React.Fragment>{Total-Listdata}</React.Fragment>)
}
   
    render() {
        const {Inputtext,lists,PlaceHolder} = this.state
        
        return (
            <div>
                <h1 className="todosLogo">todos</h1>
                <input type="text" className="InputTag" value={Inputtext} onChange={(event) => this.UpdateInput(event)} onKeyPress={e=> e.which===13 ?  this.addToList() : null} placeholder={PlaceHolder} />
                {lists.length!==0 ? <this.DataObject  />  :null  }
                <h5 className="LastNameCode" >Vasudev Created It in Class</h5>
                
            </div>
            
        )
    }
}

export default Main
