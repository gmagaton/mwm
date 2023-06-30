import axios from 'axios';
import { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Menu from './Menu';

function Previsao() {

    const [message, setMessage] = useState<String>();
    const [show, setShow] = useState(false);

    const onSubmitHandler = () => {
        axios.post('http://localhost:3001/previsao')
            .then(function (response) {
                console.log(response.data);
                setShow(true);
                setMessage(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    if (show) {
        return (
            <>
                <Menu></Menu>
                <Row>
                    <Alert variant='success' onClose={() => setShow(false)} dismissible>
                        {message}
                    </Alert>
                </Row>
                <Row>
                <Button onClick={() => setShow(false)} variant="primary">Nova Consulta</Button>{' '}
                </Row>
            </>
        );
    } else {
        return (
            <>
                <Menu></Menu>
                <Container>
                    <Row>
                        <h1 className="h3 mb-3 fw-normal">Previsão</h1>
                        <label>Informe os dados abaixo para realizar a previsão climática</label>
                        <p></p>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Origem</Form.Label>
                                <Form.Select aria-label="Origem">
                                    <option value="CTA">CTA</option>
                                    <option value="Urbanova">Urbanova</option>
                                    <option value="Jardim Aquarius">Jardim Aquarius</option>
                                    <option value="Vila Ema">Vila Ema</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Destino</Form.Label>
                                <Form.Select aria-label="Destino">
                                    <option value="CTA">CTA</option>
                                    <option value="Urbanova">Urbanova</option>
                                    <option value="Jardim Aquarius">Jardim Aquarius</option>
                                    <option value="Vila Ema">Vila Ema</option>
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
                            <Button onClick={onSubmitHandler} variant="primary">Solicitar</Button>{' '}
                        </Form>
                    </Row>
                </Container>
            </>
        )
    }
}
export default Previsao;