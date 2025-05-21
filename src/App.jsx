import { Button, Col, Container, Row } from 'react-bootstrap';
import Dish from './components/Dish';
import Footer from './components/Footer';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/app.scss';
import { useState } from 'react';

const dishes = [
  {
    id: 1,
    name: 'Tacos à l’unité',
    description:
      "Savourez l'authenticité mexicaine avec notre délicieux tacos à l'unité. Garni de viande grillée, de légumes frais et de sauce maison, chaque bouchée vous transporte directement au cœur du Mexique.",
    price: 3,
    image:
      'https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg',
    isNew: true,
    stock: 12,
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
    stock: 0,
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
    stock: 5,
  },
];

export default function App() {
  const [showNewOnly, setShowNewOnly] = useState(false);

  const handleShowNewOnly = () => {
    setShowNewOnly((prev) => !prev);
  };

  const filteredDishes = dishes.filter(
    (dish) => dish.stock > 0 && (showNewOnly ? dish.isNew : true)
  );

  return (
    <>
      <Header />
      <main>
        <Container>
          <Row>
            <Col xs={4}>
              <Button onClick={handleShowNewOnly}>
                {showNewOnly ? 'Voir tous les plats' : 'Nouveautés uniquement'}
              </Button>
            </Col>
          </Row>
          <Row>
            {filteredDishes.map((dish) => (
              <Col key={dish.id} xs={12} md={4}>
                <Dish dish={dish} />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
