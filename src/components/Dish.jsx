import { Badge, Button, Card, Col, Row } from 'react-bootstrap';
import '../assets/styles/dish.scss';
import useCart from '../hooks/useCart';

export default function Dish({ dish }) {
  const { addToCart, removeFromCart } = useCart();

  return (
    <Card>
      {dish.isNew && <Badge>Nouveau</Badge>}
      <Card.Img
        variant='top'
        src={dish.image}
        alt={`Photo du plat: ${dish.image}`}
      />
      <Card.Body>
        <Card.Title>{dish.name}</Card.Title>
        <Card.Text>{dish.price}€</Card.Text>
      </Card.Body>
      <Row>
        <Col>
          <Button variant='danger' onClick={removeFromCart}>
            Retirer du panier
          </Button>
        </Col>
        <Col>
          <Button variant={'primary'} onClick={addToCart}>
            Ajouter au panier
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
