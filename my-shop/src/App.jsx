
import ProductCard from './ProductCard';
import './App.css';

function App() {
  return (
    <div className="page">
      <h1>Наши товары</h1>

      <div className="product-list">
        <ProductCard
          name="Наушники"
          price={5000}
          description="Качественный звук и удобная посадка."
        />

        <ProductCard
          name="Клавиатура"
          price={12000}
          description="Удобная клавиатура для работы и игр."
        />

        <ProductCard
          name="Мышь"
          price={7000}
          description="Беспроводная мышь с точным управлением."
        />
      </div>
    </div>
  );
}

export default App;
