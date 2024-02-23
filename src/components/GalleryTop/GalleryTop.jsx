import './GalleryTop.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function GalleryTop() {

  const customStyles = {
    backgroundColor: '#000000', 
    color: '#00DFF0',
  };

  const myCustomStyles = {
    backgroundColor: '#060017',
    width: '95%', 
    maxWidth: 'none', 
    height: 'auto', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  };

  return (
    <Container style={myCustomStyles}>
      <h1 className='titleConteiner'>Nuestros productos más populares...</h1>
    <Row xs={1} sm={2} md={3} lg={4}>
      <Col>
      <Card style={customStyles}>
        <Card.Img className="mx-auto d-block" variant="top" src="./src/assets/Images/agua1.png" style={{ width: '200px', height: '200px' }}/>
        <Card.Body className="text-center">
          <Card.Title>Top 1. <strong>Agua Lunar Cristalina</strong></Card.Title>
          <Card.Text>
          Agua embotellada directamente de los vastos mares de la Luna, purificada por la naturaleza lunar. Su sabor suave y su composición única la convierten en una experiencia refrescante y celestial.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <button className='verMasBtn'>Ver más</button>
        </Card.Footer>
      </Card>
      </Col>
      <Col>
      <Card style={customStyles}>
        <Card.Img className="mx-auto d-block" variant="top" src="./src/assets/Images/piedra8.png" style={{ width: '200px', height: '200px' }}/>
        <Card.Body className="text-center">
          <Card.Title>Top 2. <strong>Minerales Lunares</strong></Card.Title>
          <Card.Text>
          Piedra lunar extraída de los cráteres lunares, cargada de energía cósmica y propiedades curativas. Estos minerales tienen cualidades milagrosas, capaces de traer armonía y bienestar.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <button className='verMasBtn'>Ver más</button>
        </Card.Footer>
      </Card>
      </Col>
      <Col>
      <Card style={customStyles}>
        <Card.Img className="mx-auto d-block" variant="top" src="./src/assets/Images/collar4.png" style={{ width: '200px', height: '200px' }}/>
        <Card.Body className="text-center">
          <Card.Title>Top 3. <strong>Collar Lunar Luminoso</strong></Card.Title>
          <Card.Text>
          Elegante y único, cada collar está elaborado con piedras lunares, cuidadosamente seleccionadas. Llévalo en tu cuello y siente la energía de un accesorio que irradia la mística y el encanto del espacio exterior.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <button className='verMasBtn'>Ver más</button>
        </Card.Footer>
      </Card>
      </Col>
      <Col>
      <Card style={customStyles}>
        <Card.Img className="mx-auto d-block" variant="top" src="./src/assets/Images/polvo3.png" style={{ width: '200px', height: '200px' }}/>
        <Card.Body className="text-center">
          <Card.Title>Top 4. <strong>Polvo Lunar Estelar</strong></Card.Title>
          <Card.Text>
          Polvo lunar micronizado, recolectado de las llanuras. Con propiedades únicas, puede ser utilizado en una variedad de aplicaciones, desde rituales espirituales hasta tratamientos de belleza.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <button className='verMasBtn'>Ver más</button>
        </Card.Footer>
      </Card>
      </Col>
    </Row>
  </Container>
  );
}

export default GalleryTop;