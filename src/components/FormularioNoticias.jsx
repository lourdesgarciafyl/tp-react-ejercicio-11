import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";


const FormularioNoticias = () => {
    const { register, formState: {errors}, reset , handleSubmit} = useForm()

    const apretarEnviar = (data) => {
        reset()
      }

    return (
        <section>
            <Form noValidate onSubmit={handleSubmit(apretarEnviar)} className="d-flex flex-column align-items-center flex-md-row justify-content-md-center">
                    <Form.Label className="mt-1">Buscar por categoría:</Form.Label>
                    <Form.Select  className="mx-2" id="formSelect" {...register(`categoria`, {
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
                    <Button className="ms-1" id="btnBuscar" variant="primary" type="submit">
                     Buscar
                    </Button>
        </Form>
        </section>
    )
}

export default FormularioNoticias;