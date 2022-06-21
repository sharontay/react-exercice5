/*
* Ejemplo de uso del Hook useState
*
* Crear un componente de tipo función y acceder a su estado
* privado a través de un hook y, además, poder modificarlo
*/

import React, { useState } from 'react';

const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre: 'Martín',
        email: 'martin@imaginagroup.com'
    }

    /*
    * Queremos que el valorInicial y personaInicial sean
    * parte del estado del componente para así poder gestionar su cambio
    * y que éste se vea reflejado en la vista del componente
    * 
    * const [nombreVariable, funcionParaCambiar] = useState(valor inicial)
    */

    const [contador, setcontador] = useState(valorInicial);
    const [persona, setpersona] = useState(personaInicial);


    /*
    * Función para actualizar el estado privado que contiene el contador
    */
    function incrementarContador() {
        // ? funcionParaCambiar(nuevoValor)
        setcontador(contador + 1);
    }

    /*
    * Función para actualizar el estado de persona en el componente
    */
    function actualizarPersona() {
        setpersona(
            {
                nombre: 'Pepe',
                email: 'pepe@imaginagroup.com'
            }
        )
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h4>EMAIL: {persona.email}</h4>
            {/* Bloque de botones para actualizar el estado */}
            <button onClick={ incrementarContador }>Incrementar contador</button>
            <button onClick={ actualizarPersona }>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;
