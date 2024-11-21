import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHotel } from "../hooks";
import { AddTypeRoom } from "../components";

export const HotelDetail = () => {
    const { id } = useParams();
    const { getHotelById } = useHotel();
    const [isEditing, setIsEditing] = useState(false)
    const [hotel, sethotel] = useState({})
    useEffect(() => {
        getHotelById(id).then(res => {
            //Obtengo el hotel de la actual pagina
            sethotel(res)
        })
    }, [])

    return (
        <>
            <div className="card">
                <div className="card-header">
                    Descripcion del hotel
                </div>
                <div className="card-body">
                    <h5 className="card-title"><strong>Nombre: </strong>{hotel.nombre}</h5>
                    <p className="card-text"><strong>Direccion: </strong>{hotel.direccion}</p>
                    <p className="card-text"><strong>Ciudad: </strong>{hotel.ciudad}</p>
                    <p className="card-text"><strong>Nit: </strong>{hotel.nit}</p>
                    <p className="card-text"><strong>Numero habitaciones: </strong>{hotel.numero_habitaciones}</p>
                </div>
            </div>
            <h5 className="mt-3" style={{ display: hotel.hotelroom?.length > 0 ? '' : 'none' }}>Tipos de habitacion</h5>
            {
                hotel.hotelroom?.map(hoteldetail => (
                    <>
                        <hr />
                        <div key={hoteldetail.id} className="mt-3">
                            <p><strong>Cantidad: </strong>{hoteldetail.cantidad}</p>
                            <p><strong>Tipo habitacion: </strong>{hoteldetail.tipo_habitacion}</p>
                            <p><strong>Acomodacion: </strong>{hoteldetail.acomodacion}</p>
                        </div>

                    </>

                ))
            }
            <div>

            </div>
            <a href="#" className="btn btn-primary mt-3" onClick={() => setIsEditing(true)}>Agregar tipos de habitacion</a>
            {isEditing && <AddTypeRoom hotel={hotel} />}
        </>
    )
}
