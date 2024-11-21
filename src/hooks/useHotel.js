import hotelApi from "../api/hotelApi"

export const useHotel = () => {

    const getHotels = async () => {
        const { data } = await hotelApi.get('/api/hotels')
        return data;
    }
    const createHotel = async (hotel) => {
        await hotelApi.post('/api/hotels', { ...hotel })
    }
    const getHotelById = async (id) => {
        const { data } = await hotelApi.get(`/api/hotels/${id}`)
        return data;
    }

    return {
        getHotels,
        createHotel,
        getHotelById
    }
}
