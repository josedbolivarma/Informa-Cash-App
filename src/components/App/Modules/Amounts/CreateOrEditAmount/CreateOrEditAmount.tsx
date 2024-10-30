import { useEffect, useState } from "react";
import { Autocomplete, FormGroup, TextField, } from "@mui/material";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useLocation, } from "react-router-dom";
import { useFetch, useFormAmount } from "../../../hooks";
import { TitleComponent, BreadCrumb, InputErrorMessage } from "../../../Global";

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Expense } from "../../../ui";

const initialState: any = {
  id: 0,
  amount: 0,
  category: "",
  date: "",
  description: ""
};


const CreateOrEditAmount = () => {
  const location: any = useLocation();

  const [data, setData] = useState<any>(initialState);

  const { postData, putData } = useFetch();
  const { data: categories  } = useFetch("categories");

  const { handleChange, isPasswordTouched, setIsPasswordTouched, resetForm, setErrors, setHasErrors, errors, hasErrors } = useFormAmount(setData);


  useEffect(() => {
    setIsPasswordTouched(false);
    if (location?.state?.id != null) {
      setHasErrors(false);
      setErrors({});
      setData(location?.state);
    } else {
      setHasErrors(true);
      resetForm();
    }
  }, [location]);


  const handleSubmit = (e: any) => {
  e.preventDefault();
  if (data?.id) {
    putData(data?.id, data);
  } else {
    postData(data);
  }
  }

  return (
    <div>
      {/* Breadcrumb */}
      <BreadCrumb
        items={['inicio', 'lista gastos', location?.state?.id ? "editar gasto" : "agregar gasto",]}
        baseURL={['inicio', 'app/gastos', location?.state?.id ? "app/editargasto" : "app/agregargasto",]}
      />
      {/* Componente Titulo  */}
      <TitleComponent title={location?.state?.id ? "editar gasto" : "agregar gasto"} align="center" />
      {/* FORM */}
      <Card className="box-shadow-0">
        <Card.Body className="p-4">
          <Form className="form-horizontal" onSubmit={handleSubmit}>
            <Row>
              <Col lg={6} xl={6} md={6} sm={6}>
                <FormGroup className="form-group">
                  <FormGroup className="control-group form-group">
                    <Form.Label className="form-label">
                      Gasto*
                    </Form.Label>
                    < InputErrorMessage message={errors.amount} inputFocus={isPasswordTouched} >
                      <Form.Control
                        type="text"
                        className="form-control text-capitalize"
                        placeholder=""
                        name="amount"
                        required
                        value={data?.amount ? data?.amount : ""}
                        onChange={handleChange}
                        onBlur={handleChange}
                        onFocus={() => setIsPasswordTouched(true)}
                      />
                    </InputErrorMessage>
                  </FormGroup>
                  </FormGroup>
                  
                  <FormGroup className="form-group">
                  <FormGroup className="form-group w-100 m-0">
                                        <Form.Label className='mb-3'>Categoría</Form.Label>
                                        <Autocomplete
                                            id="country-autocomplete"
                                            options={categories}
                                            size="small"
                                            getOptionLabel={(option: any) => `${option.name} (${data.category})`}
                                            value={categories.find(category => category.name === data?.category) || null}
                                            onChange={(e: any, value: any) => {
                                              // console.log({value: value.name, data_category: data?.category})
                                              // handleChange(e);
                                              setData({ ...data, category: value.name });
                                            }}
                                            // onClose={handleAutocompleteClear}
                                            // onBlur={handleChange}
                                            renderInput={(params: any) => (
                                                <InputErrorMessage
                                                    message={
                                                        data.category === "" ? ["El campo categoría es obligatorio"]
                                                            : data.category === undefined ? [] : []} inputFocus={isPasswordTouched} >
                                                    <TextField
                                                        {...params}
                                                        name="category"
                                                        label="Seleccione una categoría"
                                                        variant="outlined"
                                                        className={`orange-outline`}
                                                        // onFocus={handleInputFocus}
                                                        onFocus={() => setIsPasswordTouched(true)}
                                                        required
                                                        // InputLabelProps={{
                                                        //     sx: {
                                                        //         [`&.${inputLabelClasses.shrink}`]: {
                                                        //             color: inputFocus ? "#ff7c23" : ''
                                                        //         }
                                                        //     }
                                                        // }}
                                                        InputProps={{
                                                            ...params.InputProps,
                                                            classes: {
                                                                notchedOutline: `custom-notched-outline ${isPasswordTouched ? 'orange-outline' : ''}`,
                                                            },
                                                        }}
                                                    />
                                                </InputErrorMessage>

                                            )}
                                        />
                                    </FormGroup>

                  {/* <FormGroup className="control-group form-group">
                    <Form.Label className="form-label">
                      Categoria*
                    </Form.Label>
                    < InputErrorMessage message={errors.category} inputFocus={isPasswordTouched} >
                      <Form.Control
                        type="text"
                        className="form-control text-capitalize"
                        placeholder=""
                        name="category"
                        required
                        value={data?.category ? data?.category : ""}
                        onChange={handleChange}
                        onBlur={handleChange}
                        onFocus={() => setIsPasswordTouched(true)}
                      />
                    </InputErrorMessage>
                  </FormGroup> */}

                  <FormGroup className="control-group form-group">
                    <Form.Label className="form-label">
                      Descripción
                    </Form.Label>
                    <InputErrorMessage message={errors.description} inputFocus={isPasswordTouched} >
                      <Form.Control
                        type="text"
                        className="form-control text-capitalize"
                        placeholder=""
                        name="description"
                        required
                        value={data?.description ? data?.description : ""}
                        onChange={handleChange}
                        onBlur={handleChange}
                        onFocus={() => setIsPasswordTouched(true)}
                      />
                    </InputErrorMessage>
                  </FormGroup>

                  <FormGroup className="control-group form-group">
                    <Form.Label className="form-label">
                      Fecha
                    </Form.Label>
                    <InputErrorMessage message={errors.date} inputFocus={isPasswordTouched} >
                      <Form.Control
                        type="date"
                        className="form-control text-capitalize"
                        placeholder=""
                        name="date"
                        required
                        value={data?.date ? data?.date : ""}
                        onChange={handleChange}
                        onBlur={handleChange}
                        onFocus={() => setIsPasswordTouched(true)}
                      />
                    </InputErrorMessage>
                  </FormGroup>

                </FormGroup>

                <Button
                  variant=""
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                  type="submit"
                  disabled={hasErrors}
                >
                  Guardar
                </Button>
              </Col>
              {/* Checkboxes */}

              <Col lg={6} xl={6} md={6} sm={6}>
                <img src="https://img.freepik.com/vector-gratis/documentacion-electronica-hombre-registro-comprobando-registro-repositorio-aprobacion-linea-formulario-pantalla-pagina-validacion-cronicas-gastos-ilustracion-metafora-concepto-aislado_335657-1222.jpg" alt="Banner Cash" />
              </Col>

            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div >
  );
};

export default CreateOrEditAmount;
