export default function Dish({ dish }) {
  return (
    <div>
      <h2>{dish.name}</h2>
      <img src={dish.image} alt={'image de' + dish.name} />
      <p>{dish.price}€</p>
    </div>
  );
}
