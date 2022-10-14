import '../App.css'

const UserForm = (props)=>{

    const handleSubmit= (event)=>{
        event.preventDefault()
        props.displayName() 
        props.displayAddress()
    }
    
    return (
        <form >
            <input placeholder="Name" onKeyUp={(event)=>props.setName(event.target.value)}></input><br/>
            <input placeholder="Address" onKeyUp={(event)=>props.setAddress(event.target.value)}></input><br/>
            <button onClick={()=>{handleSubmit()}}>Submit</button>
        </form>
    )
}
export default UserForm