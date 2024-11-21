import React, { useEffect, useState } from 'react'
import { useHotel } from '../hooks'
import { Link } from 'react-router-dom';


export const HotelTable = () => {
    const { getHotels } = useHotel();
    const [hotels, setHotels] = useState([])

    useEffect(() => {

        getHotels().then(res => {
            setHotels(res)
        })
    }, [])

    return (
        <>
            <h3>Listado de hoteles Decameron</h3>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">Nit</th>
                        <th scope="col">Numero habitaciones</th>
                        <th scope='col'>Detalle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        hotels.length > 0 && hotels.map(hotel =>
                        (
                            <tr key={hotel.id}>
                                <th scope="row">{hotel.id}</th>
                                <td>{hotel.nombre}</td>
                                <td>{hotel.direccion}</td>
                                <td>{hotel.ciudad}</td>
                                <td>{hotel.nit}</td>
                                <td>{hotel.numero_habitaciones}</td>
                                <td><Link className='btn btn-primary' to={`/hotel/${hotel.id}`}>Detalle</Link></td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
