import { useEffect, useState } from 'react'
import { Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';

import { TitleComponent, BreadCrumb, BasicDataTable } from '../../../Global';
import { Route } from '../../../ui';

/* Columns for the Data Table */
const columns: any[] = [
  {
    Header: "N°",
    accessor: "",
    className: "wd-5p borderrigth",
    Cell: ({ row }: { row: any }) => {
      const { index } = row;
      const consecutiveNumber = index + 1;
      return <span>{consecutiveNumber}</span>;
    },
  },
  {
    Header: "Nombre",
    accessor: "name",
    className: "wd-25p borderrigth",
    Cell: ({ value }: { value: string }) => <span>{value.toUpperCase()}</span>,
  },
  {
    Header: "Desde",
    accessor: "from",
    className: "wd-25p borderrigth",
    Cell: ({ value }: { value: string }) => <span>{value.toUpperCase()}</span>,
  },
  {
    Header: "Hasta",
    accessor: "to",
    className: "wd-25p borderrigth",
    Cell: ({ value }: { value: string }) => <span>{value.toUpperCase()}</span>,
  },
  {
    Header: "Rango de Estadia",
    accessor: "stayRange",
    className: "wd-25p borderrigth",
    Cell: ({ value }: { value: any }) => <span>{`${value?.min} - ${value?.max}`}</span>,
  },
  {
    Header: "Tipo",
    accessor: "routeType",
    className: "wd-25p borderrigth",
    Cell: ({ value }: { value: string }) => <span>{value.toUpperCase()}</span>,
  },
  {
    Header: "Caracteristicas",
    accessor: "offerId",
    className: "wd-25p borderrigth",
    Cell: ({ value }: { value: string }) => <span>{value.toUpperCase()}</span>,
  },
  {
    Header: "Precios",
    accessor: "price",
    className: "wd-25p borderrigth",
    Cell: ({ value }: { value: any }) => <span>{value?.good}</span>,
  },
  {
    Header: "Proveedores",
    accessor: "supplier",
    className: "wd-25p borderrigth",
    Cell: ({ value }: { value: string }) => <span>{value[0].toUpperCase()}</span>,
  },
  {
    Header: "Moneda",
    accessor: "currency",
    className: "wd-25p borderrigth",
    Cell: ({ value }: { value: string }) => <span>{value.toUpperCase()}</span>,
  },
  {
    Header: "Imagen",
    accessor: "image",
    className: "wd-25p borderrigth",
    Cell: ({ value }: { value: any }) => <span>{value.name}</span>,
  },
  {
    Header: "Editar",
    accessor: "",
    className: "wd-15p borderrigth",
    // Custom cell rendering for the "Accion" column with a link to edit the profile
    Cell: ({ row }: { row: any }) => {
      return (
        <Link
          to={`${process.env.PUBLIC_URL}/app/editarruta`}
          state={row.original}
        >
          <span className="material-icons md-5 md-dark">&#xe3c9;</span>
        </Link>
      )
    },
  }
]

const ListRoutes = () => {
  //geting data
  const [data, setData] = useState<any>([]);
  // const { getAllData } = useFetch();

  useEffect(() => {
    const getData = async () => {
      try {
        /*
        const response: Route[] = [
          {
            id: 1,
            name: "Santa Marta",
            desde: "6",
            hasta: "8",
            rango_estadia: "2",
            tipo: "Ida y Vuelta",
            caracteristicas: "1",
            precios: "Grandioso",
            proveedores: ["Avianca", "Airlines", "Sky", "Wingo"],
            moneda: "COP",
            imagen: "https://excursionesdesde.com/wp-content/uploads/excursiones-desde-Santa-Marta-1024x687.jpg"
          },
          {
            id: 2,
            name: "Santa Marta",
            desde: "6",
            hasta: "8",
            rango_estadia: "2",
            tipo: "Ida y Vuelta",
            caracteristicas: "1",
            precios: "Grandioso",
            proveedores: ["Avianca", "Airlines", "Sky", "Wingo"],
            moneda: "COP",
            imagen: "https://excursionesdesde.com/wp-content/uploads/excursiones-desde-Santa-Marta-1024x687.jpg"
          },
          {
            id: 3,
            name: "Santa Marta",
            desde: "6",
            hasta: "8",
            rango_estadia: "2",
            tipo: "Ida y Vuelta",
            caracteristicas: "1",
            precios: "Grandioso",
            proveedores: ["Avianca", "Airlines", "Sky", "Wingo"],
            moneda: "COP",
            imagen: "https://excursionesdesde.com/wp-content/uploads/excursiones-desde-Santa-Marta-1024x687.jpg"
          },
          {
            id: 4,
            name: "Santa Marta",
            desde: "6",
            hasta: "8",
            rango_estadia: "2",
            tipo: "Ida y Vuelta",
            caracteristicas: "1",
            precios: "Grandioso",
            proveedores: ["Avianca", "Airlines", "Sky", "Wingo"],
            moneda: "COP",
            imagen: "https://excursionesdesde.com/wp-content/uploads/excursiones-desde-Santa-Marta-1024x687.jpg"
          }
        ]
        */
      //  const response = await getAllData("/api/v1/routes");
      //  console.log("lista>>>>", response)
        // setData(response);
      } catch (error) {
      }
    }
    getData();
  }, []);

  return (
    <div>
      {/* Breadcrumb */}
      <BreadCrumb
        items={['inicio', 'lista rutas']}
        baseURL={['inicio', 'app/rutas']}
      />

      {/* Component Title */}
      <TitleComponent
        title={'LISTA DE RUTAS'}
      />
      {/* Data Grid Table */}
      <BasicDataTable
        columns={columns}
        data={data}
        addButtonLink={`${process.env.PUBLIC_URL}/app/crearruta`}
      />
    </div>
  )
}

export default ListRoutes;