import { Badge, Button, Card } from 'react-bootstrap';
import '../assets/styles/dish.scss';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

export default function Dish({ dish }) {
  const { addToCart } = useContext(CartContext);

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
      <Button variant={'primary'} onClick={addToCart}>
        Ajouter au panier
      </Button>
    </Card>
  );
}
