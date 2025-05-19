import { Card } from 'react-bootstrap';
import '../assets/styles/dish.scss';

export default function Dish({ dish }) {
  return (
    <Card>
      <Card.Img
        src={dish.image}
        alt={`Photo du plat: ${dish.image}`}
        className='card-image'
      />
      <Card.Body>
        <Card.Title>{dish.name}</Card.Title>
        <Card.Text>{dish.price}€</Card.Text>
      </Card.Body>
    </Card>
  );
}
