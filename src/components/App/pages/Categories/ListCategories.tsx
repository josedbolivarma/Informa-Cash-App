import { useEffect, useState } from "react";
import { Chip } from "@mui/material";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import { TitleComponent, BreadCrumb, BasicDataTable } from "../../Global";

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
    Header: "Acciones",
    accessor: "",
    className: "wd-15p borderrigth",
    // Custom cell rendering for the "Accion" column with a link to edit the profile
    Cell: ({ row }: { row: any }) => {
      return (
        <Link
          to={`${process.env.PUBLIC_URL}/app/editarcategoria`}
          state={row.original}
        >
          <span className="material-icons md-5 md-dark">&#xe3c9;</span>
        </Link>
      );
    },
  },
];

const ListCategories = () => {
  //geting data
  // const [data, setData] = useState<any>([]);
  const { data } = useFetch("categories");

  useEffect(() => {
    console.log(data)
    // const getData = async () => {
    //   try {
    //     const response: Response = await getAllData("api/cities/list");
    //     setData(response);
    //   } catch (error) {}
    // };
    // getData();
  }, []);

  return (
    <div>
      {/* Breadcrumb */}
      <BreadCrumb
        items={["inicio", "lista categorias"]}
        baseURL={["inicio", "app/listacategorias"]}
      />

      {/* Component Title */}
      <TitleComponent title={"LISTA DE CATEGORIAS"} />
      {/* Data Grid Table */}
      {data.length > 0 && (
        <BasicDataTable
          columns={columns}
          data={data}
          addButtonLink={`${process.env.PUBLIC_URL}/app/agregarcategoria`}
        />
      )}
    </div>
  );
};

export default ListCategories;
