
const Input= (props)=>{
    // const alertMsg = ()=>{
    //     alert("hello alert")
    // }
    return (<div className= "Input"  style={{margin:props.margin}}>
        <input type= "text"></input>
        {/* <button onClick= {alertMsg}>Submit</button> */}
        <button onClick= {()=>alert("Hello World")}>Submit</button>
    </div>)
}
export default Input;