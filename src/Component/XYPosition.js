// import React, {useState} from 'react'

// const Direction = ()=>{
//     // const [Position, setPosition]=useState({x:'0', y:'0'})
//     const [PositionX, setPositionX]=useState('0')
//     const [PositionY, setPositionY]=useState('0')
//     const changePositionX = (action)=>{
//         if(action==='left'){
//             const moveLeft = PositionX- 10
//             return(setPositionX(moveLeft)) 
//         }else if(action==='right'){
//             const moveRight = PositionX + 10
//             return(setPositionX(moveRight))
//         }
//         // }else if(action==='top'){
//         //     const moveTop = Position + 10
//         //     return(setPosition(moveTop))
//         // }else if(action==='bottom'){
//         //     const moveBtm = Position - 10
//         //     return(setPosition(moveBtm))
//         // }
//     }
//     const changePositionY= (action)=>{
//         if(action==='top'){
//             const moveTop = PositionY - 10
//             return(setPositionY(moveTop))
//         }else if(action==='bottom'){
//             const moveBtm = PositionY + 10
//             return(setPositionY(moveBtm))
//         }
//     }


//     return (<div className="direction">
//         <div className="newDir" style={{backgroundColor: 'red', height: '50px', width:'100px'}}></div>
//         <div className='Buttons'>
//         <button onClick={()=>changePositionX('left')} style={{margin:`${PositionX}px`}}>Left</button>
//         <button onClick={()=>changePositionX('right')} style={{margin:`${PositionX}px`}}>Right</button>
//         <button onClick={()=>changePositionY('top')} style={{margin:`${PositionY}px`}}>Top</button>
//         <button onClick={()=>changePositionY('bottom')} style={{margin:`${PositionY}px`}}>Bottom</button>
//         </div>  
//     </div>
//     )
// }
// export default Direction