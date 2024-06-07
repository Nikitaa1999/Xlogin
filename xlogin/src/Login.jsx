import {useState} from 'react'

export default function Login(){

    const[name,setName]=useState("");
    const[password, setPassword]=useState("");
    const[logged,setLogged]= useState(false)
    const[message,setMessage]=useState("")

    console.log(name);
    console.log(password);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name==="user" && password==="password"){
            setLogged(true);
            setMessage("");
            
        }
        else{
            setMessage("Invalid username or password")
        }
    }

    return(

        <>
            <h1> Login Page</h1>
            {logged? <p> Welcome user!</p>:
            <form>
            {message} <br/>
        <label>Username:</label>
        <input type="text" placeholder="username"
        onChange={(e)=>setName(e.target.value)}
        required
        ></input>
        <br/>
        <label>Password:</label>
        <input type="password" placeholder="password"
        onChange={(e)=>setPassword(e.target.value)}
        required
        ></input>
        <br/>
        <button onClick={handleSubmit}>Submit</button>
            
      </form>
            }
        </>
    )
}