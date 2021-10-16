import React from 'react'
import axios from 'axios';


function Ventas() {
    function handleOnsubmit(e){
        e.preventDefault();

        const ventasSchema = {
            fecha:'2021-10-16',
            vendedor: e.target.vendedor.value,
            idVenta: '3',
            cantidad:'9',
            precio:e.target.precio.value,
            cliente:'String',
            total:'Number'
        } ;

        axios.post(`http://localhost:3001/ventas/agregar` ,   ventasSchema   )
        .then( res => {
            alert( 'Datos correctos' + e.target.vendedor.value +  '\n' + e.target.precio.value);
        
        })
  

    }

    return (
        <div>
            <form onSubmit= {handleOnsubmit}>
            <label for="exampleFormControlInput1" class="form-label">vendedor</label>
            <input type="text" class="form-control" name = "vendedor" id="vendedor" placeholder="pepito perez"/>

            <label for="exampleFormControlInput1" class="form-label">Precio</label>
            <input type="number" class="form-control" name = "precio" id="precio" placeholder="0.00"/>

            <button type="submit" class="btn btn-success">Agregar</button>

            </form>
        </div>
    )
}

export default Ventas
