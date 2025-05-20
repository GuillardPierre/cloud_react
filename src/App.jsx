import { Col, Container, Row } from 'react-bootstrap';
import Dish from './components/Dish';
import Footer from './components/Footer';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/app.scss';

const data = [
  {
    id: 1,
    name: 'Tacos à l’unité',
    description:
      "Savourez l'authenticité mexicaine avec notre délicieux tacos à l'unité. Garni de viande grillée, de légumes frais et de sauce maison, chaque bouchée vous transporte directement au cœur du Mexique.",
    price: 3,
    image:
      'https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg',
    isNew: true,
  },
  {
    id: 2,
    name: 'Enchiladas',
    description:
      "Nos enchiladas sont un festin de saveurs, avec des tortillas de maïs enroulées autour d'une garniture généreuse de viande, de fromage fondu et de sauce tomate épicée. Chaque bouchée est une explosion de goût qui vous fera revenir pour plus.",
    price: 12,
    image:
      'https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg',
    isNew: false,
  },
  {
    id: 3,
    name: 'Mole poblano',
    description:
      "Découvrez la richesse de la cuisine mexicaine avec notre mole poblano. Cette sauce complexe et riche en saveurs est préparée avec une combinaison d'épices, de chocolat et de piments, offrant une expérience culinaire unique et exquise.",
    price: 15,
    image:
      'https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg',
    isNew: false,
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <Dish dish={data[0]} />
            </Col>
            <Col xs={12} md={4}>
              <Dish dish={data[1]} />
            </Col>
            <Col xs={12} md={4}>
              <Dish dish={data[2]} />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
