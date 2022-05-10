import { Row } from "react-bootstrap"
import Product from "./Product"

const Home = () => {
    return (
        <>
            <Row>
                {
                    [1, 2, 3, 4, 5, 6].map((item: any, index: number) => {
                        return <>
                            <Product />
                        </>
                    })
                }

            </Row>
        </>
    )
}

export default Home