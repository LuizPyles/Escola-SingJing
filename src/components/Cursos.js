import { Row, Col } from "reactstrap"
import ItemCursos from "./ItemCursos"


function Cursos({ nome, curso1, curso2, img1, img2, descricao1, descricao2 }) {
    return (
        <div>
            <Row>
                <Col>
                    <h1 className="display-4 text-center mt-5 text-white">{nome}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ItemCursos nome={curso1} img={img1} descricao={descricao1} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ItemCursos nome={curso2} img={img2} descricao={descricao2} />
                </Col>
            </Row>
        </div>
    )
}

export default Cursos