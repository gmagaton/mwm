import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Menu from './Menu';
import { Table } from 'react-bootstrap';

export type DataType = {
    id: String,
    Body: string
}

export type MessageType = {
    messageId: String,
    deviceId: String,
    temperature: Number,
    humidity: Number
}

function Dados() {
    const [messages, setAllMessages] = useState<DataType[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/messages')
            .then(function (response) {
                // handle success
                console.log(response.data.resources);
                setAllMessages(response.data.resources);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, []);

    return (
        <>
            <Menu></Menu>
            <Container>
                <Row>
                    <h1 className="h3 mb-3 fw-normal">Dados</h1>
                    <label>Dados recolhidos dos dispositivos</label>
                    <p></p>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Device Id</th>
                                <th>Temperatura</th>
                                <th>Umidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((m) => (
                                <tr>
                                    <td>{convert(m).messageId}</td>
                                    <td>{convert(m).deviceId}</td>
                                    <td>{convert(m).temperature}</td>
                                    <td>{convert(m).humidity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                </Row>
            </Container>
        </>
    );

    function convert(d: DataType) {
        var json = window.atob(d.Body);
        console.log(json);
        return JSON.parse(json);
    }
}
export default Dados;