import '../App.css'

const Box = (props)=>{
    return (<div className="newBox" 
    style={{backgroundColor: props.backgroundColor, 
    height: props.height, 
    width:props.width, 
    borderRadius:props.borderRadius}}>
        
    </div>)
}
export default Box