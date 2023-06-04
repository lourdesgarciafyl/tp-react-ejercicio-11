import { Form, Col, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioNoticias = () => {
    const { register, formState: {errors}, reset , handleSubmit} = useForm()

    const apretarEnviar = (data) => {
        reset()
      }

    return (
        <Form noValidate onSubmit={handleSubmit(apretarEnviar)}>
            <Form.Group>
                <Form.Label>Buscar noticias por categoría</Form.Label>
                <Form.Select {...register(`categoria`, {
                required: "Campo obligatorio"
            })}>
                <option value="">--Seleccione un genero--</option>
                <option value="aventura">Aventura</option>
                <option value="biografico">Biográfico</option>
                <option value="comedia">Comedia</option>
                <option value="drama">Drama</option>
                <option value="romance">Romance</option>
                <option value="terror">Terror</option>
                </Form.Select>
                <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
            </Form.Group>
            <Button className="mt-3" variant="primary" type="submit">
              Buscar
           </Button>
        </Form>
    )
}

export default FormularioNoticias;