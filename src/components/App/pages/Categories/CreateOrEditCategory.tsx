import { Card, Col, Row, Button, Form, FormGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useFetch } from '../../hooks/useFetch';
import { useAlert, useErrors } from '../../hooks';
import { TitleComponent, BreadCrumb, InputErrorMessage } from '../../Global';
import { Autocomplete, TextField } from '@mui/material';
import { inputLabelClasses } from "@mui/material/InputLabel";
import validator from "validator";

const InitValues = {
    id: 0,
    name: undefined,
}

const CreateOrEditCities = () => {

    const [form, setForm] = useState<any>(InitValues);
    const location: any = useLocation();
    const { state: editItemData } = location
    const {postData, putData} = useFetch("categories");

    // const { handleEditConfirmation, handleSuccessAlert, handleErrorAlert } = useAlert();
    const [inputFocus, setInputFocus] = useState(false);

    const [nameTouched, setNameTouched] = useState(false);
    const { errors, setError, clearError } = useErrors();

    const handleChange = (e: any) => {
        const { name, value, type } = e.target;
        let newValue = type === "radio" ? parseInt(value) : value;
        if (name === 'name') {
            newValue = value
                .toLowerCase()
                .split(' ')
                .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }
        setForm((prev: any) => ({
            ...prev,
            [name]: newValue
        }));
    };


    const handleInputFocus = () => {
        setInputFocus(true);
    };

    const handlesubmit = (e: any) => {
        e.preventDefault();

        if (location?.state?.id != null) {
            putData(location?.state?.id, form)
        } else {
            postData(form);
        }
    };

    useEffect(() => {
        if (!!editItemData) {
            setForm(editItemData);
        }
    }, [editItemData]);

    return (
        <>
            {/* <!-- breadcrumb --> */}
            <BreadCrumb
                items={['INICIO', 'CATEGORIAS', location?.state?.id ? "Editar categoria" : "Agregar categoria"]}
                baseURL={['inicio', 'app/listacategorias', location?.state?.id ? "editarcategoria/" + location?.state?.id : "agregarcategoria"]} />
            {/* title component */}
            <TitleComponent title={location?.state?.id ? "Editar categoria" : "Agregar categoria"} />
            {/* Card */}
            <Form className="form-horizontal" onSubmit={handlesubmit}>
                <Card className="w-100">
                    <Card.Body className="w-100">
                        <Col sm={12} md={12} lg={6} xl={6} className='mx-auto'>
                            <Row className="justify-content-center mt-5 mb-3">
                                <Col sm={12} md={12} lg={12} xl={12}>
                                <FormGroup className="form-group">
                  <FormGroup className="control-group form-group">
                    <Form.Label className="form-label">
                      Nombre*
                    </Form.Label>
                    < InputErrorMessage message={errors.amount} inputFocus={inputFocus} >
                      <Form.Control
                        type="text"
                        className="form-control text-capitalize"
                        placeholder=""
                        name="name"
                        required
                        value={form?.name ? form?.name : ""}
                        onChange={handleChange}
                        onBlur={handleInputFocus}
                        onFocus={handleInputFocus}
                      />
                    </InputErrorMessage>
                  </FormGroup>
                  </FormGroup>
                                
                                </Col>
                            </Row>
                            <Row className='mb-4'>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Button
                                        variant=""
                                        className="btn btn-primary"
                                        style={{ width: "100%" }}
                                        type="submit"
                                    >
                                        {editItemData ? "Guardar cambios" : "Editar cambios"}
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Card.Body>
                </Card>
            </Form>
        </>
    );

}

export default CreateOrEditCities;
