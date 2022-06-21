import React, { useEffect } from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log('Componente creado')

        const intervalId = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Actualizacion del componente')
        }, 1000)

        return () => {
            console.log('Componente va a desaparecer')
            document.title = 'Tiempo detenido'
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;