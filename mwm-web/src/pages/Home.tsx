import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Menu from './Menu';

function Home() {
    return (
        <>
            <Menu></Menu>
            <Container>
                <Row>
                    <h1 className="h3 mb-3 fw-normal">Quem somos ?</h1>
                    <label>Data Driven Microclimatic Weather Mapping</label>
                    <p></p>
                    <label>
                        Empresa de mapeapendo do clima em regiões personalizadas.
                    </label>
                </Row>
                <p></p>
                <img src={require("../images/logo-color.png")} alt={"logo"} width="500" />
            </Container>
        </>
    )
}
export default Home;