import { useState } from "react";

const Buscador = ({ filtrarColaboradores }) => {
    const [filtro, setFiltro] = useState('');

    const handleInputChange = (e) => {
        const valorFiltro = e.target.value;
        setFiltro(valorFiltro);
        filtrarColaboradores(valorFiltro); 
    };

    return (
        <input
            type="text"
            placeholder="Buscar colaboradores..."
            value={filtro}
            onChange={handleInputChange}
        />
    );
};

export default Buscador;
