import React,{useState} from "react"


function MyComponent(){
const [name , setName ] = useState("Guest");
const [age , setAge ] = useState(0);
const updateName = ()=> {
   setName("Nguyen Phuong");
   setAge(21);
   
}
return(
<>
<p>Hello, {name}</p>
<p>Age :{age}</p>
<button onClick={updateName}> Set Name</button>

</>)

}


export default MyComponent