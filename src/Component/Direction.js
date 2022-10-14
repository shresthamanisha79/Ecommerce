import '../App.css'
import React, {useState} from 'react'

const Direction = ()=>{
    
    const [PositionX, setPositionX]=useState('0')
    const [PositionY, setPositionY]=useState('0')
    const [heightSize, setheightSize]=useState('50')
    const [widthSize, setwidthSize]=useState('50')
    const [inputHeight, setinputHeight] = useState('')
    const [inputWidth, setinputWidth] = useState('')
    const [Rotate, setRotate] = useState('')
    const [Color, setColor] = useState('#FF0000')
    const [Radius, setRadius] = useState('0')


    const changePositionX = (action)=>{
        if(action==='left'){
            const moveLeft = PositionX- 150
            setPositionY(0)
            return(setPositionX(moveLeft)) 
        }else if(action==='right'){
            const moveRight = PositionX + 150
            setPositionY(0)
            return(setPositionX(moveRight))
        }
        
    }
    const changePositionY= (action)=>{
        if(action==='top'){
            const moveTop = PositionY - 150
            setPositionX(0)
            return(setPositionY(moveTop))
        }else if(action==='bottom'){
            const moveBtm = PositionY + 150
            setPositionX(0)
            return(setPositionY(moveBtm))
        }
    }
    const incdecHeight = (action)=>{
        if(action==='incHeight'){
            const addHeight = heightSize+ 50
            return(setheightSize(addHeight)) 
        }else if(action==='decHeight'){
            const subHeight = heightSize - 50          
            return(setheightSize(subHeight))
        }        
    }
    const incdecWidth = (action)=>{
        if(action==='incWidth'){
            const addWidth = widthSize+ 50
            return(setwidthSize(addWidth)) 
        }else if(action==='decWidth'){
            const subWidth = widthSize - 50          
            return(setwidthSize(subWidth))
        }        
    }
    // const changeColor=()=>{
    //     Color = 'green'
    //     setColor(Color)
    //     // if(action==='colorPop'){
    //     // //    const bgColor = Color.green 
    //     //    return(setColor('green'))
    //     // }
        
    // }

    // const convertintoCircle=()=>{
    //     Radius = 70
    //     setRadius(Radius)
    //     // if(action==='circle'){
    //     //     const borderCircle = 50
    //     //     return(setRadius(borderCircle))
    //     // }
    // }

    return (<div className="direction">
        <div className="alignDiv" onClick={()=>{setColor('#00FF00'); setRadius(inputHeight)}} style={{
            backgroundColor: Color, 
            height: `${inputHeight}px`, 
            width:`${inputWidth}px`, 
            marginLeft:`${PositionX}px`, 
            marginTop:`${PositionY}px`,
            paddingTop: `${heightSize}px`,
            paddingLeft: `${widthSize}px`,
            transform: `rotate(${Rotate}deg)`,
            borderRadius: `${Radius}px`
            }} ></div>
        <div className='dirButtons'>
            <button onClick={()=>changePositionX('left')}>Left</button>
            <button onClick={()=>changePositionX('right')}>Right</button>
            <button onClick={()=>changePositionY('top')}>Up</button>
            <button onClick={()=>changePositionY('bottom')}>Down</button>
        </div> 
        <div className='sizeButtons'>
            <button onClick={()=>incdecHeight('incHeight')}>Height+</button>
            <button onClick={()=>incdecHeight('decHeight')}>Height-</button>
            <button onClick={()=>incdecWidth('incWidth')}>Width+</button>
            <button onClick={()=>incdecWidth('decWidth')}>Width-</button>
        </div> 
        <div className='inputField'>
            <input placeholder='Height' onKeyUp={(event)=>setinputHeight(event.target.value)}></input>
            <input placeholder='Width' onKeyUp={(event)=>setinputWidth(event.target.value)}></input>
            <input placeholder='Rotate' onKeyUp={(event)=>setRotate(event.target.value)}></input>
        </div>
    </div>
    )
}
export default Direction