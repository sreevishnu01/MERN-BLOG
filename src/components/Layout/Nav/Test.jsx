import { Container, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import frameimg from '../../../assets/9159.jpeg'





const Test = () => {

    
    return (

        <Container>
            <Card style={{
                background: `url(${frameimg})`
            }} className="card-grid-lg card-overlay-bottom card-bg-scale card-bg-img mt-5 mb-5">

            </Card>
        </Container >


    )
}

export default Test


