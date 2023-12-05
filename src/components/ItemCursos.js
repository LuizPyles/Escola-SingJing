import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"


function ItemCursos({nome, img, descricao}) {
    return (
        <div>
            <Card className="my-2 border border-0">
                <CardImg alt={nome} src={img} style={{ height: 180 }} top width="100%" />
                <CardBody>
                    <CardTitle tag="h5">
                        {nome}
                    </CardTitle>
                    <CardText>
                        {descricao}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default ItemCursos