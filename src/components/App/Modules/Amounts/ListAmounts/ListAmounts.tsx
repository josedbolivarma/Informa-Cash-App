import { Autocomplete, FormGroup, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';

import { TitleComponent, BreadCrumb, BasicDataTable } from '../../../Global';
import { Expense } from '../../../ui';
import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Card, Col, FormLabel } from 'react-bootstrap';
import { formatPesos } from '../../../../../helpers';

/* Columns for the Data Table */


const ListAmounts = () => {
  const { data, deleteData } = useFetch();
  const { data: categories } = useFetch("categories");

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
      Header: "Gasto",
      accessor: "amount",
      className: "wd-25p borderrigth",
      Cell: ({ value }: { value: number }) => <span>${formatPesos(value)}</span>,
    },
    {
      Header: "Categoria",
      accessor: "category",
      className: "wd-25p borderrigth",
      Cell: ({ value }: { value: string }) => <span>{value.toUpperCase()}</span>,
    },
    {
      Header: "Fecha",
      accessor: "date",
      className: "wd-25p borderrigth",
      Cell: ({ value }: { value: string }) => <span>{value}</span>,
    },
    {
      Header: "Descripción",
      accessor: "description",
      className: "wd-25p borderrigth",
      Cell: ({ value }: { value: string }) => <span>{value}</span>,
    },
    {
      Header: "Acciones",
      accessor: "",
      className: "wd-15p borderrigth",
      // Custom cell rendering for the "Accion" column with a link to edit the profile
      Cell: ({ row }: { row: any }) => {
        return (
          <div className='d-flex justify-content-center align-items-center'>
          <Link
            to={`${process.env.PUBLIC_URL}/app/editargasto`}
            state={row.original}
          >
            <button className='btn'>
            <span className="material-icons md-5 md-dark">&#xe3c9;</span>
            </button>
          </Link>
  
          <button className='btn'
            onClick={() => deleteData(row.original.id)}
          >
            <span className="material-icons md-5 md-dark">&#xe872;</span>
          </button>
          </div>
        )
      },
    }
  ]

  const [filterData, setFilterData] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [total, setTotal] = useState(0);

  const [startDate, setStartDate] = useState(dayjs().subtract(1, "day"));
  const [endDate, setEndDate] = useState(dayjs().add(1, "month"));


  const handleChange = (newValue: Dayjs | null, type: "start"|"end") => {
    if (type === 'start') {
      setStartDate(newValue!);
    } else {
      setEndDate(newValue!);
    }

    // const adjustedDate = dayjs(newValue).subtract(1, 'day');
    const adjustedStartDate = startDate ? dayjs(startDate).subtract(1, "day") : null;
    const adjustedEndDate = endDate ? dayjs(endDate) : null;

    const newData = data.filter((item) => {
      const itemDate = dayjs(item?.date);
      return (
        (!adjustedStartDate || itemDate.isAfter(adjustedStartDate, 'day')) &&
        (!adjustedEndDate || itemDate.isBefore(adjustedEndDate, 'day'))
      );
    });


    setFilterData(newData);
  };

  useEffect(() => {
    if (data) {
      setFilterData(data);
      const newTotal = data.reduce((prev, curr) => prev + curr?.amount, 0);
      setTotal(Math.floor(Number(newTotal)));
    }
  }, [data]);

  return (
    <div>
      {/* Breadcrumb */}
      <BreadCrumb
        items={['inicio', 'lista de gastos']}
        baseURL={['inicio', 'app/listagastos']}
      />

    <FormGroup className="form-group w-100 m-0">
      <FormLabel className="mb-3">Categoría</FormLabel>
      <Autocomplete
        id="category-autocomplete"
        options={categories}
        size="small"
        getOptionLabel={(option) => option.name}
        value={selectedCategory}
        onChange={(e, value) => {
          setSelectedCategory(value);
          const newData = data.filter((data: any) => data?.category === value?.name);
          if (!value) {
            setFilterData(data);
            const total = data.reduce((prev, curr) => prev + curr.amount, 0);
            setTotal(total);
          } else {
            setFilterData(newData);
            const total = newData.reduce((prev, curr) => prev + curr.amount, 0);
            setTotal(total);
          }
          
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            name="category"
            label="Seleccione una categoría"
            variant="outlined"
            className="orange-outline"
          />
        )}
      />
    </FormGroup>

    <Col className='mt-4' sm={12} md={12} lg={4} xl={4}>
                    <Card className='bg-primary text-center text-light'>
                        <Card.Body>
                            <h5 className="card-title">{selectedCategory?.name! || "TOTAL"}</h5>
                            <h6 className="card-subtitle mb-2">
                              ${formatPesos(total)}
                            </h6>
                        </Card.Body>
                    </Card>
                </Col>

      {/* Component Title */}
      <TitleComponent
        title={'LISTA DE GASTOS'}
      />
      {/* Data Grid Table */}
      <BasicDataTable
        columns={columns}
        data={filterData}
        filterDate={true}
        startDate={startDate}
        endDate={endDate}
        handleChange={handleChange}
        addButtonLink={`${process.env.PUBLIC_URL}/app/agregargasto`}
      />
    </div>
  )
}

export default ListAmounts;