import { Link } from "react-router-dom"

export const HomePage = () => {
    return (
        <div>
            <h1>Bienvenido a nuestros hoteles <span className="badge text-bg-secondary">Decameron</span></h1>
            <hr />
            <Link className="btn btn-primary mb-3" to={`/hotels`}>Hoteles</Link><br />
            <Link className="btn btn-success" to={`/hotel/create`}>Agregar un nuevo hotel</Link>
        </div>
    )
}
