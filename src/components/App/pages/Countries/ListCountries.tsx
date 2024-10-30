import { Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { BasicDataTable, BreadCrumb, TitleComponent } from '../../Global';
import { useEffect, useState } from 'react'

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
        Header: "Estado",
        accessor: "status_id",
        className: "wd-20p borderrigth",
        Cell: ({ value }: { value: number }) => (
            value === 1 ? (
                <Chip label="Activo" color="success" variant="outlined" />
            ) : (
                <Chip label="Inactivo" color="error" variant="outlined" />
            )
        ),
    },
    {
        Header: "Accion",
        accessor: "",
        className: "wd-15p borderrigth",
        Cell: ({ row }: { row: any }) => {
            return (
                <Link
                    to={`${process.env.PUBLIC_URL}/app/editarpais`}
                    state={row.original}
                >
                    <span className="material-icons md-5 md-dark">&#xe3c9;</span>
                </Link>
            )
        },
    }
]

const ListCountries = () => {
    const [data, setData] = useState<any>([]);
    // const { getAllData } = useFetch();
    useEffect(() => {
        // const getData = async () => {
        //     try {
        //         const response: any = await getAllData('api/cities/list');
        //         setData(response);
        //     } catch (error) {
        //     }
        // }
        // getData();
    }, []);

    return (
        <div>
            {/* Breadcrumb */}
            <BreadCrumb
                items={['inicio', 'lista paises']}
                baseURL={['inicio', 'listarpaises']}
            />

            {/* Component Title */}
            <TitleComponent
                title={'lista de Paises'}
            />
            {/* Data Grid Table */}
            <BasicDataTable
                columns={columns}
                data={data}
                addButtonLink={`${process.env.PUBLIC_URL}/app/crearpais`}
            />
        </div>
    )
}

export default ListCountries;