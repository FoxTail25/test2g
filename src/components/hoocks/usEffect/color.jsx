import React, { useEffect, useState } from 'react'

// export const Color = () => {

//     const [bodyColor, setBodyColor] = useState('#FFFFFF')
//     const [color, setColor] = useState('#FFFFFF')



//     useEffect(()=> {
//         document.body.style.backgroundColor = color;        
//     },[color])

//   return (
//     <>
//     <input type='color' value={bodyColor} onChange={(e)=>setBodyColor(e.target.value)}/>
//     <button onClick={()=>setColor(bodyColor)}>changeColor</button>
//     </>
//   )
// }



// export const Color = () => {

//     const [color, setColor] = useState('green');
//     const [inpColor, setInpColor] = useState('green')


//     function changeColor() {
//         setColor(inpColor);
//     }

//     useEffect(() => {
//         document.body.style.backgroundColor = color;

//         function handleEnter(event) {
//             if (event.keyCode === 13) {
//                 setColor(inpColor);
//             }
//         }

//         window.addEventListener('keydown', handleEnter);
//         console.log('слушатель включен')

//         return () => {
//             window.removeEventListener('keydown', handleEnter);
//             console.log('слушатель отключен')
//         };
//     }, [color, inpColor]);

//     return (

//         <div>
//             <h1>React App</h1>
//             <input type='color' value={inpColor} onChange={(e)=>setInpColor(e.target.value)}/>
//             <button onClick={changeColor}>change</button>
//         </div>
//     )
// }


export const Color = () => {

    const [color, setColor] = useState('#00FF00');
    const [inpColor, setInpColor] = useState('#00FF00')
    const [blockVisible, setBlockVisible] = useState('none')


    useEffect(() => {

        document.querySelector('.component').style.backgroundColor = color;
        window.addEventListener('click', () => setColor(inpColor));
        console.log('слушатель color включен')

        return () => {

            window.removeEventListener('click', () => setColor(inpColor));
            console.log('слушатель color отключен')
        };
    }, [color, inpColor]);

    useEffect(() => {

        window.addEventListener('click', (e)=>{
            if(e.target.innerText !== "open/close") {
                setBlockVisible('none')
            };
        });
        console.log('слушатель visible включен')

        return () => {
            window.removeEventListener('click',  (e)=>{
                if(e.target.innerText !== "open/close") {
                    setBlockVisible('none')
                };
            });
            console.log('слушатель visible выключен')
        };

    }, [])


    function changeVisible() {
        setBlockVisible('')
        console.log(blockVisible)
    }
    return (
        <>
            <div id='colorBlock' style={{ padding: "20px", display: blockVisible }} className='component'>
                <h1>React App</h1>
                <input type='color' value={inpColor} onChange={(e) => setInpColor(e.target.value)} />
                <button onClick={() => setColor(inpColor)}>change</button>
            </div>
            <button onClick={() => changeVisible()}>open/close</button>
        </>
    )
}