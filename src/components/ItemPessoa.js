import { Col, Row, Card, CardBody, CardTitle, CardText, } from "reactstrap";

function ItemPessoa({foto, nome, dados}) {
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
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ItemPessoa