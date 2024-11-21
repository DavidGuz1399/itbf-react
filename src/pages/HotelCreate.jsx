import React, { useState } from 'react'
import { useHotel } from '../hooks'
import { useNavigate } from 'react-router-dom';

export const HotelCreate = () => {
    const navigate = useNavigate();
    const { createHotel } = useHotel();
    const [hotel, setHotel] = useState({
        nombre: '',
        direccion: '',
        ciudad: '',
        nit: '',
        numero_habitaciones: 0
    })
    const createHotelForm = (event) => {
        event.preventDefault();
        createHotel(hotel)
        navigate('/hotels')
    }
    const onFormChanged = ({ target }) => {
        const { name, value } = target;
        setHotel({
            ...hotel,
            [name]: value
        });

    }
    return (
        <>
            <h3>Crear nuevo hotel</h3>
            <form onSubmit={createHotelForm}>
                <div className='mb-3'>
                    <label className="form-label">Nombre</label>
                    <input type="text" placeholder='Nombre' className='form-control' name='nombre' value={hotel.nombre} onChange={onFormChanged} />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Direccion</label>
                    <input type="text" placeholder='Direccion' className='form-control' name='direccion' value={hotel.direccion} onChange={onFormChanged} />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Ciudad</label>
                    <input type="text" placeholder='Ciudad' className='form-control' name='ciudad' value={hotel.ciudad} onChange={onFormChanged} />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Nit</label>
                    <input type="text" placeholder='Nit' className='form-control' name='nit' onChange={onFormChanged} />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Numero Habitaciones</label>
                    <input type="number" placeholder='Numero Habitaciones' className='form-control' name='numero_habitaciones' value={hotel.numero_habitaciones} onChange={onFormChanged} />
                </div>
                <button type='submit' className='btn btn-primary'>Crear</button>
            </form>
        </>
    )
}
