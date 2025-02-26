import { useState } from 'react'
import './App.css'

const Display = ({ list,Delete}) => {
  return (
      <div >
      <h2>
      <ol>
          {list.map((item) => (
            <li key={item.id}>{item.name}
             <button id="delete_button" onClick={()=>Delete(item.id)}>Delete</button>
            </li>
          ))}
      </ol>
      </h2>
    </div> 
  );
};


const InputBox = ({text,changetext,final})=>{
  const handleKeyDown = (e)=>{
    if(e.key === "Enter"){
      final(text)
    }
  }

  return(
    <div className='input'>
      <input type='text' 
       placeholder='add item...' 
       id='input' 
       value={text} 
       onChange={(e)=>changetext(e.target.value)} 
       onKeyDown={handleKeyDown}/>

      <button onClick={final} id='button'>Add</button>
    </div>
  )
}



const App = ()=>{
  const[item,Setitem] = useState("")
  const[updatelist,Setlist] = useState([])

  const Addlist = ()=>{
    if(item.trim()){
      const newitem = {id:Date.now(), name:item}
      Setlist([...updatelist,newitem])
      Setitem("")
    }
  }

  const Deletelist = (id)=>{
    Setlist(updatelist.filter((item)=> item.id !== id))
  }

  return (
    <>
    <div className='list'>
      <h1>FABLE</h1>
    </div>
    <hr/>
    <br/>
    <br/>
    <InputBox text={item} changetext={Setitem} final={Addlist}/><br/>
    <Display list={updatelist} Delete={Deletelist}/>
    
    </>
    
  )
}

export default App
