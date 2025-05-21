import { Badge, Button, Card, Col, Row } from 'react-bootstrap';
import '../assets/styles/dish.scss';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

export default function Dish({ dish }) {
  const { dispatch } = useContext(CartContext);

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
          <Button
            variant='danger'
            onClick={() => dispatch({ type: 'decrement' })}
          >
            Retirer du panier
          </Button>
        </Col>
        <Col>
          <Button
            variant={'primary'}
            onClick={() => dispatch({ type: 'increment' })}
          >
            Ajouter au panier
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
