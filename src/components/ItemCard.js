import { Col, Row, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./ItemCard.components.css";

function ItemCard({foto, nome, dados}) {
    return (
        <div>
            <Row>
                <Col>
                    <Card color="light" style={{ width: '18rem' }} className="border border-0">
                        <img alt={nome} src={foto} />
                        <CardBody>
                            <CardTitle tag="h5">
                                {nome}
                            </CardTitle>
                            <CardText>
                                {dados}
                            </CardText>
                            <Button className="mb-3 bg-danger"><Link to={"/"+nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")} className="text-decoration-none"> Vamos! </Link></Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ItemCard