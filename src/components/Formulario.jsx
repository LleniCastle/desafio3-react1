import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const Formulario = ({ setAgregarColaborador, agregarColaborador, setTipomensaje, }) => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre === "" || correo === "" || edad === "" || cargo === "" || telefono === "") {
            setTipomensaje({
                error: true,
                msg: "Completa todos los campos!",
                color: "danger",
            });
            return;
        }

        setAgregarColaborador([...agregarColaborador,{
            nombre: nombre,
            correo: correo,
            edad: edad,
            cargo: cargo,
            telefono: telefono,
        }]);

        setNombre('');
        setCorreo('');
        setEdad('');
        setCargo('');
        setTelefono('');

        setTipomensaje({
            error: false,
            msg: "Tarea agregada exitosamente !",
            color: "success",
        });
    };

    return (
        <Form onSubmit={(e) => handleSubmit (e)}>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Control
                    name='nombre'
                    type="text"
                    className="my-3"
                    key="nombre"
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre del colaborador"
                />
                <Form.Control
                    name='correo'
                    type="email"
                    className="my-3"
                    key="correo"
                    onChange={(e) => setCorreo(e.target.value)}
                    placeholder="Correo del colaborador"
                />
                <Form.Control
                    name='edad'
                    type="text"
                    className="my-3"
                    key="edad"
                    onChange={(e) => setEdad(e.target.value)}
                    placeholder="Edad del colaborador"
                />
                <Form.Control
                    name='cargo'
                    type="text"
                    className="my-3"
                    key="cargo"
                    onChange={(e) => setCargo(e.target.value)}
                    placeholder="Cargo del colaborador"
                />
                <Form.Control
                    name='telefono'
                    type="text"
                    className="my-3"
                    key="telefono"
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Teléfono del colaborador"
                />
                <Button variant="primary" type='submit' className="w-100">Agregar Colaborador</Button>
            </Form.Group>
        </Form >
    );
};

export default Formulario;