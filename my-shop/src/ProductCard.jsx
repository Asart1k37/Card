
function ProductCard({ name, price, description }) {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p className="price">{price} ₸</p>
      <p>{description}</p>
      <button onClick={() => alert(`Вы выбрали: ${name}`)}>
        Купить
      </button>
    </div>
  );
}

export default ProductCard;
