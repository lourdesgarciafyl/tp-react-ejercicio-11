import {Row} from "react-bootstrap"
import React from "react";
import CardNoticia from "./CardNoticia";

const BloqueNoticias = () => {
    return(
        <Row xs={12} md={4} className="g-4 mb-3">
            <CardNoticia></CardNoticia>
        </Row>
    )
}

export default BloqueNoticias;