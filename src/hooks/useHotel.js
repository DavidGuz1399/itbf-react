import hotelApi from "../api/hotelApi"

export const useHotel = () => {
    //Obtiene todos los hoteles
    const getHotels = async () => {
        const { data } = await hotelApi.get('/api/hotels')
        return data;
    }
    //Crea un nuevo hotel
    const createHotel = async (hotel) => {
        await hotelApi.post('/api/hotels', { ...hotel })
    }
    //Obtiene el hotel por el id
    const getHotelById = async (id) => {
        const { data } = await hotelApi.get(`/api/hotels/${id}`)
        return data;
    }
    //Crea el tipo de habitacion para el hotel
    const createRoom = async (hotel) => {
        try {
            await hotelApi.post('/api/room', { ...hotel })
            return true;
        } catch (error) {
            return error ? error : 'Tipo habitacion o Acomodacion ya existe'
        }

    }
    return {
        getHotels,
        createHotel,
        getHotelById,
        createRoom
    }
}
