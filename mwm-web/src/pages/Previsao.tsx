import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Menu from './Menu';
import { Col, Form } from 'react-bootstrap';

function Previsao() {

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        axios.post('http://localhost:3001/previsao')
            .then(function (response) {
                // handle success
                alert('Enviou');
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    return (
        <>
            <Menu></Menu>
            <Container>
                <Row>
                    <h1 className="h3 mb-3 fw-normal">Previsão</h1>
                    <label>Informe os dados abaixo para realizar a previsão climática</label>
                    <p></p>
                    <Form onSubmit={onSubmitHandler}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Origem</Form.Label>
                            <Form.Select aria-label="Origem">
                                <option value="1">CTA</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Destino</Form.Label>
                            <Form.Select aria-label="Destino">
                                <option value="1">CTA</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Data</Form.Label>
                            <Form.Control type="date" name="data" placeholder="Data" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                            <Form.Label>Horário</Form.Label>
                            <Form.Control type="time" name="data" placeholder="Data" />
                        </Form.Group>
                        <input type="submit"  />
                    </Form>
                </Row>
            </Container>
        </>

    )
}
export default Previsao;