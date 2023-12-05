import { Button, Col, Row } from "reactstrap";
import ItemForm from "../components/ItemForm.js";
import sorriso from "../img/sorriso.jpg";
import "./Contato.pages.css";

function Contato() {
    return (
        <div>
            <Row className="my-4">
                <Col>
                    <h1 className="display-4 text-center my-5 text-white">Fale Conosco</h1>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col className="my-sn-4">
                <ItemForm label="Nome" name="nome" type="text" ph="Digite seu nome" />
                <ItemForm label="Email" name="email" type="email" ph="Digite seu Email" />
                <ItemForm label="Telefone" name="telefone" type="tel" ph="Digite seu telefone" />
                <ItemForm label="Assunto" name="assunto" type="text" ph="Digite o assunto da mensagem" />
                <ItemForm label="Mensagem" name="mensagem" type="textarea" ph="Digite a mensagem a ser encaminhada" />
                <Button block className="mb-3 bg-danger">Enviar</Button>
                </Col>
                <Col>
                <img src={sorriso} className="rounded-circle d-block mx-auto mb-3" alt="atendente sorrindo"></img>
                </Col>
            </Row>
        </div>
    )
}

export default Contato