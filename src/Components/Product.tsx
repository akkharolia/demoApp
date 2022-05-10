import { Card, Col } from "react-bootstrap"

interface ProductInterface {
    id: number
    title: string
    summary: string
    image: string
}

// { id, title, summary, image }: ProductInterface
const Product = () => {
    return (
        <>
            <Col md={4} sm={12} xl={3} className="my-3">
                <Card>
                    <Card.Img style={{ objectFit: "contain", width: "100%", height: "250px" }} variant="top" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Product