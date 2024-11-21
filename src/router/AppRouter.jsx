import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, HotelPage, HotelCreate, HotelDetail } from "../pages"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hotels" element={<HotelPage />} />
            <Route path="/hotel/create" element={<HotelCreate />} />
            <Route path="/hotel/:id" element={<HotelDetail />} />
            <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
    )
}
