import { useState } from "react";
import { Form } from "react-bootstrap";


const FormularioNoticias = ({consultarApi }) => {
    const [categoria, setCategoria] = useState("")

    return (
        <section>
            <Form className="d-flex flex-column align-items-center flex-md-row justify-content-md-center">
                <Form.Group>
                <Form.Label className="mt-1">Buscar por categoría:</Form.Label>
                <Form.Select  className="mx-2" id="formSelect">
                <option value="">--Seleccione una categoria--</option>
                <option value="top">Destacadas</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="politics">Politica</option>
                <option value="technology">Tecnología</option>
                </Form.Select>
                </Form.Group>
        </Form>
        </section>
    )
}

export default FormularioNoticias;