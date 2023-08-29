import React from "react";
import Table from 'react-bootstrap/Table';

const Listado = ({ colaboradores, filtro, elimina }) => {
    const colaboradoresFiltrados = colaboradores.filter(colaborador =>
        colaborador.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(filtro.toLowerCase()) ||
        colaborador.edad.toString().includes(filtro) ||
        colaborador.cargo.toLowerCase().includes(filtro.toLowerCase()) ||
        colaborador.telefono.includes(filtro)
    );

    const datos = colaboradoresFiltrados.map((colaborador) => (
        <tr key={colaborador.correo}>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
            <td><button onClick={() => elimina(colaborador)}> X</button></td>
        </tr>
    ));


    return (
        <Table responsive striped bordered>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Telefono</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {datos}
            </tbody>
        </Table>
    );
};

export default Listado;