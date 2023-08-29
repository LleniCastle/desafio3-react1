import React from "react";
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BaseColaboradores } from "./BaseColaboradores";
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from "./components/Buscador";
import Alert from "./components/Alert";


function App() {
  const [agregarColaborador, setAgregarColaborador] = useState(BaseColaboradores);
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState(agregarColaborador);
  const [filtro, setFiltro] = useState('');
  const [tipomensaje, setTipomensaje] = useState({ error: "", msg: "", color: "" });

  const filtrarColaboradores = filtro => {
    setFiltro(filtro);
  };


  const eliminaColaborador = (colaboradorParaEliminar) => {
    const listaEliminada = agregarColaborador.filter(el => el.nombre !== colaboradorParaEliminar.nombre);
    setAgregarColaborador(listaEliminada);
  };


  return (
    <>
      <div className='mx-4'>
        <h1 className="text-start">Lista de Colaboradores</h1>
        <Row>
          <Col sm={4}>
            <Buscador filtrarColaboradores={filtrarColaboradores} />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={9}>
          <Listado
              colaboradores={agregarColaborador}
              filtro={filtro}
              elimina={eliminaColaborador}
            />
          </Col>
          <Col md={3} >
            <h4>Agregar Colaborador</h4>
            <Formulario agregarColaborador={agregarColaborador} setAgregarColaborador={setAgregarColaborador} setTipomensaje={setTipomensaje} />
            {tipomensaje.msg && <Alert color={tipomensaje.color}>{tipomensaje.msg}</Alert>}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default App;

