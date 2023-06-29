import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Menu from './Menu';
import { Card, Table } from 'react-bootstrap';

function Dados() {
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
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    )
}
export default Dados;