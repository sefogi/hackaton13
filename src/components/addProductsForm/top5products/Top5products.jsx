import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { BsCartFill } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import './top5products.css'
import agua1 from "../../../assets/Images/agua1.png";
import piedra8 from "../../../assets/Images/piedra8.png";
import collar4 from "../../../assets/Images/collar4.png";
import polvo3 from "../../../assets/Images/polvo3.png";
import cuadro3 from "../../../assets/Images/cuadro3.png";


function Top5products() {
  return (
    <>
    <h1>Nuestros productos más populares...</h1>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={agua1} />
        <Card.Body>
          <Card.Title>Top 1. <strong>Agua Lunar Cristalina</strong></Card.Title>
          <Card.Text>
          Agua embotellada directamente de los vastos mares de la Luna, purificada por la naturaleza lunar. Su sabor suave y su composición única la convierten en una experiencia refrescante y celestial.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button className="buttonStyle"  variant="primary">
              <BsCartFill /> Comprar
            </Button>
          </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= {piedra8} />
        <Card.Body>
        <Card.Title>Top 2. <strong>Minerales Lunares Místicos</strong></Card.Title>
          <Card.Text>
          Piedra lunar extraída de los cráteres lunares, cargada de energía cósmica y propiedades curativas. Estos minerales tienen cualidades milagrosas, capaces de traer armonía y bienestar.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button className="buttonStyle"  variant="primary">
              <BsCartFill /> Comprar
            </Button>
          </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={collar4} />
        <Card.Body>
        <Card.Title>Top 3. <strong>Collar Lunar Luminoso</strong></Card.Title>
          <Card.Text>
          Elegante y único, cada collar está elaborado con piedras lunares, cuidadosamente seleccionadas. Llévalo en tu cuello y siente la energía de un accesorio que irradia la mística y el encanto del espacio exterior.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button className="buttonStyle"  variant="primary">
              <BsCartFill /> Comprar
            </Button>
          </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={polvo3}/>
        <Card.Body>
        <Card.Title>Top 4. <strong>Polvo Lunar Estelar</strong></Card.Title>
          <Card.Text>
          Polvo lunar micronizado, recolectado de las llanuras. Con propiedades únicas, puede ser utilizado en una variedad de aplicaciones, desde rituales espirituales hasta tratamientos de belleza.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button className="buttonStyle"  variant="primary">
              <BsCartFill /> Comprar
            </Button>
          </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={cuadro3} />
        <Card.Body>
        <Card.Title>Top 5.<strong>Cuadros Celestiales</strong></Card.Title>
          <Card.Text>
          Obras de arte únicas creadas con una mezcla especial de pintura compuesta por polvo lunar. Cada lienzo es una ventana al cosmos, capturando la magia y la misteriosa belleza de la Luna en cada pincelada.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button className="buttonStyle"  variant="primary">
              <BsCartFill className='cartStyle' /> Comprar
            </Button>
          </Card.Footer>
      </Card>
    </CardGroup>
    </>
  );
}

export default Top5products;