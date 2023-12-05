import { Col, Row } from "reactstrap";
import Carrossel from "../components/Carrossel";
import ItemCard from "../components/ItemCard";
import ItemPessoa from "../components/ItemPessoa";

function Home() {
    return (
        <div>
            <Row>
                <Col className="m-0 ps-0" style={{paddingLeft: '0px'}}>
                    <Carrossel />
                </Col>
            </Row>

            <Row>
                <Col>
                <h2 className="display-4 text-center mt-5 text-white">Cursos</h2>
                </Col>
            </Row>

            <Row>
                <Col>
                <ItemCard nome="Canto" foto="https://www.bracodeprata.net/wp-content/uploads/cantar-publico.jpg" dados="Aula de canto" />
                </Col>
                <Col>
                <ItemCard nome="Corda" foto="https://akamai.sscdn.co/gcs/cifra-blog/pt/wp-content/uploads/2022/10/fcd3f01-violonista-erudito.jpg" dados="Aula de instrumentos de corda" />
                </Col>
                <Col>
                <ItemCard nome="Percussão" foto="https://c.superprof.com/i/m/6799075/500/20221207165349/6799075.jpg" dados="Aula de instrumentos de percussão" />
                </Col>
                <Col>
                <ItemCard nome="Sopro" foto="https://c.superprof.com/i/m/1010081/500/20220519141039/1010081.jpg" dados="Aula de instrumentos de sopro" />
                </Col>
            </Row>

            <Row>
                <Col>
                <h2 className="display-4 text-center mt-5 text-white">Nossos professores</h2>
                </Col>
            </Row>

            <Row>
                <Col>
                    <ItemPessoa nome="Melissa Pimentel" foto="https://salaovirtual.org/wp-content/uploads/2018/09/cabelo-pixie-borgonha.jpg" dados="Professora da área de canto e sopro" />
                </Col>
                <Col>
                    <ItemPessoa nome="Thiago Pereira" foto="https://i.pinimg.com/736x/02/22/b6/0222b6df894fe98e62097190363c5bf9.jpg" dados="Professor da área de percussão" />
                </Col>
                <Col>
                    <ItemPessoa nome="Melina San Martim" foto="https://lidepe.com.br/wp-content/uploads/2021/03/LIDE-PE_Mulher_Roberta-Laurindo.jpg" dados="Professora da área de corda" />
                </Col>
            </Row>
        </div>
    )
}

export default Home