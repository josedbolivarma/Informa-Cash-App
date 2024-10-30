import { useEffect, useState } from 'react'
import { Avatar, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';

import { TitleComponent, BreadCrumb, BasicDataTable } from '../../../Global';
import { Provider } from '../../../ui';

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
    Header: "Logo",
    accessor: "avatar",
    className: "wd-10p borderrigth",
    Cell: ({ value }: any) => <Avatar alt="User Avatar" src={value} />,
  },
  {
    Header: "Editar",
    accessor: "",
    className: "wd-15p borderrigth",
    // Custom cell rendering for the "Accion" column with a link to edit the profile
    Cell: ({ row }: { row: any }) => {
      return (
        <Link
          to={`${process.env.PUBLIC_URL}/App/editarproveedor`}
          state={row.original}
        >
          <span className="material-icons md-5 md-dark">&#xe3c9;</span>
        </Link>
      )
    },
  }
]

const ListProviders = () => {
  //geting data
  const [data, setData] = useState<any>([]);
  // const { getAllData } = useFetch();

  useEffect(() => {
    const getData = async () => {
      try {
        // const response = await getAllData("/api/v1/providers");
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
        items={['inicio', 'lista proveedores']}
        baseURL={['inicio', 'app/listaproveedores']}
      />

      {/* Component Title */}
      <TitleComponent
        title={'LISTA DE PROVEEDORES'}
      />
      {/* Data Grid Table */}
      <BasicDataTable
        columns={columns}
        data={data}
        addButtonLink={`${process.env.PUBLIC_URL}/app/crearciudad`}
      />
    </div>
  )
}

export default ListProviders;