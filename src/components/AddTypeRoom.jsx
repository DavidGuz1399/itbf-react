import { useEffect, useState } from "react";
import { useHotel } from "../hooks";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AddTypeRoom = ({ hotel }) => {
    const { id, nombre, numero_habitaciones } = hotel;
    const navigate = useNavigate();
    const { createRoom } = useHotel();
    const [room, setRoom] = useState({
        hotel_id: id,
        cantidad: '',
        tipo_habitacion: '',
        acomodacion: ''
    })
    const [typeRoom, setTypeRoom] = useState('Estandar')
    const [accommodations, setAccommodation] = useState(['Sencilla', 'Doble'])
    //Valido cuando cambia el tipo de habitacion para la lista de acomodacion
    useEffect(() => {
        if (typeRoom == 'Estandar') {
            setAccommodation(['Sencilla', 'Doble'])
        }
        if (typeRoom == 'Junior') {
            setAccommodation(['Triple', 'Cuádruple'])
        }
        if (typeRoom == 'Suite') {
            setAccommodation(['Sencilla', 'Doble', 'Triple'])
        }
    }, [typeRoom])

    const addTypeRoom = (event) => {
        event.preventDefault();
        const { cantidad, tipo_habitacion, acomodacion } = room
        //Valido que ningun campo este vacio
        if (!cantidad || !tipo_habitacion || !acomodacion) {
            Swal.fire('Validacion', 'Faltan campos por llenar', 'error')
            return;
        }
        createRoom(room).then(res => {
            console.log(res.response.data.error)
            if (res !== true) {
                Swal.fire('Fallo!', res.response.data.error, 'error')
                return;
            }
            navigate('/hotels')
        }).catch(error => {
            console.log(error)
        })

    }
    //Verifico el cambio de los input
    const onFormChanged = ({ target }) => {
        const { name, value } = target;
        if (name == 'tipo_habitacion') {
            setTypeRoom(value)
        }

        setRoom({
            ...room,
            [name]: value
        });

    }
    return (
        <>
            <h4>Agregar tipo de habitacion a {nombre}</h4>
            <form onSubmit={addTypeRoom}>
                <div className='mb-3'>
                    <label className="form-label">Cantidad</label>
                    <input type="number" placeholder='Cantidad' className='form-control' name='cantidad' max={numero_habitaciones} value={room.cantidad} onChange={onFormChanged} />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Tipo habitacion</label>
                    <select placeholder='Tipo habitacion' className='form-control' name="tipo_habitacion" id="tipo_habitacion" value={room.tipo_habitacion} onChange={onFormChanged} >
                        <option value="Estandar">Estandar</option>
                        <option value="Junior">Junior</option>
                        <option value="Suite">Suite</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label className="form-label">Acomodacion</label>
                    <select name="acomodacion" id="acomodacion" className='form-control' value={room.acomodacion} onChange={onFormChanged}>
                        {accommodations.map(accommodation => (
                            <option key={accommodation} value={accommodation}>{accommodation}</option>
                        ))}

                    </select>
                </div>
                <button type='submit' className='btn btn-primary'>Crear tipo habitacion</button>
            </form>
        </>
    )
}
