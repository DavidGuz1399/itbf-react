import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHotel } from "../hooks";

export const HotelDetail = () => {
    const { id } = useParams();
    const { getHotelById } = useHotel();
    const [hotel, sethotel] = useState({})
    useEffect(() => {
        getHotelById(id).then(res => {
            sethotel(res)
        })
    }, [])

    return (
        <>
            <div class="card">
                <div class="card-header">
                    Descripcion del hotel
                </div>
                <div class="card-body">
                    <h5 class="card-title"><strong>Nombre: </strong>{hotel.nombre}</h5>
                    <p class="card-text"><strong>Direccion: </strong>{hotel.direccion}</p>
                    <p class="card-text"><strong>Ciudad: </strong>{hotel.ciudad}</p>
                    <p class="card-text"><strong>Nit: </strong>{hotel.nit}</p>
                    <p class="card-text"><strong>Numero habitaciones: </strong>{hotel.numero_habitaciones}</p>
                    <a href="#" class="btn btn-primary">Agregar tipos de habitacion</a>
                </div>
            </div>
        </>
    )
}
