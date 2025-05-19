import { Card } from 'react-bootstrap';

export default function Dish({ dish }) {
  return (
    <Card>
      <Card.Img
        variant='top'
        src={dish.image}
        width={250}
        height={164}
        alt={`Photo du plat: ${dish.image}`}
        className='image'
      />
      <Card.Body>
        <Card.Title>{dish.name}</Card.Title>
        <Card.Text>{dish.price}€</Card.Text>
      </Card.Body>
    </Card>
  );
}
