import "./App.css";
import phoneProduct from "./assets/image-product-mobile.jpg";
import desktopProduct from "./assets/image-product-desktop.jpg";
import Cart from "./assets/icon-cart.svg";

function App() {
  return (
    <div className="container">
      <div className="img-box">
        <picture>
          <source media="(max-width:786px)" srcSet={phoneProduct} />
          <source media="(min-width:787px)" srcSet={desktopProduct} />
          <img src={phoneProduct} alt="product" />
        </picture>
      </div>
      <div className="txt-container">
        <p className="perfume">perfume</p>
        <h1 className="title">gabrielle essence eau de parfum</h1>
        <p className="para">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the house of CHANEL.
        </p>
        <div className="price-box">
          <strong className="price">$149.99</strong>
          <p className="old-price">$169.99</p>
        </div>
        <button className="btn">
          <img src={Cart} alt="cart" className="cart-img" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default App;
