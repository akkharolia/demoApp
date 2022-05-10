import { Container, Row } from "react-bootstrap"
import { Footer } from "./Footer"
import Header from "./Header"

interface LayoutInterface {
    children: JSX.Element
}

const Layout = ({ children }: LayoutInterface) => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Header />
                </Row>
                {children}
                <Footer />
            </Container>
        </>
    )
}

export default Layout