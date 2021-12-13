import React, { useEffect, useState } from 'react'



export const Message = () => {

    const [coords, setcoords] = useState({x:0, y:0})

    const {x, y} = coords;
    
    useEffect(() => {
        
        const mousemove = (e) => {
            const coords = {x: e.x, y: e.y}
            setcoords(coords)
        }

        window.addEventListener("mousemove", mousemove)


        return () => {
            window.removeEventListener("mousemove", mousemove)
            console.log("componente desmontado");
        }
    }, [])

    return (
        <>
        <h1>HOLA PERRAS!</h1> 
        <p>x:{x} y:{y}</p>
        </>
    )
}
