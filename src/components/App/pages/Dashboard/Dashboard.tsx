import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { BreadCrumb } from '../../Global';
import comicsImage from '../../../../assets/img/media/Comics.jpg';
import './style.scss';

const dataCards = [
  {
    id: 1,
    name: 'Gastos',
    img: "https://img.freepik.com/vector-gratis/documentacion-electronica-hombre-registro-comprobando-registro-repositorio-aprobacion-linea-formulario-pantalla-pagina-validacion-cronicas-gastos-ilustracion-metafora-concepto-aislado_335657-1222.jpg",
    url: `${process.env.PUBLIC_URL}/app/gastos`,
  },
];

const Dashboard = () => {
  return (
    <>
      {/* Breadcrumb */}
      <BreadCrumb items={['Inicio']} baseURL={['/inicio']} />
      {/* Cards */}
      <div className="grid-cards">
        {dataCards.map((item: any, index: number) => (
          <Card key={item.id} className={`bd-0  mg-b-20 text-center shadow-drop-bottom-right`}> {/* {index} > 2 ? ` w-100` : `w-25 ` */}
        <Card.Body className="br-5 bd bd-danger">
          <Link to={item.url} className="text-muted">
            <img src={item.img} className="w-100" alt="..." />
            <h5 className="mg-b-10 mg-t-15 tx-18">{item.name}</h5>
          </Link>
        </Card.Body>
      </Card>
        ))}
    </div >
    </>
  );
};

export default Dashboard;
