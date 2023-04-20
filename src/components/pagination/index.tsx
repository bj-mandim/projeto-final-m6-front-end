import { Navegador } from "./styles";

const Pagination = () => {
    return (
        <>
        <Navegador>
            <ul className="pagination">
                <li className="page-item"><a className="page-link active" href="#">1</a></li>
                <li className="page-item" style={{opacity: 0.5}}>de</li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
            </ul>
            <a className="page-link">Seguinte {">"}</a>
        </Navegador>
        </>
    )
}

export default Pagination;