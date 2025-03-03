import React,{useState} from "react"


function MyComponent(){
const [name , setName ] = useState("Guest");
const [age , setAge ] = useState(0);

const [commit ,setCommit] =useState("No Commit")
const updateName = ()=> {
   setName("Nguyen Phuong");
   setAge(21);
   
}

function handNameChange(event){
    setCommit(event.target.value);
}
return(
<>
<p>Hello, {name}</p>
<p>Age :{age}</p>
<button onClick={updateName}> Set Name</button><br/><br/>
<input type="text" ></input><br/><br/>
<input type="number"  ></input><br></br><br/>
<select>
    <option>nam</option>
    <option>nu</option>
    </select><br/><br/>
<textarea value={commit} onChange={handNameChange} placeholder="commit" ></textarea>
<p>Commit : {commit}</p>

</>)

}


export default MyComponent