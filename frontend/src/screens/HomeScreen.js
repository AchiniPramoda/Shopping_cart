import "./HomeScreen.css";
import "./Parrlec.css";
import Product from "../components/Product";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      {/* <h2 className="homescreen__title">Latest Products</h2> */}
      <div class="banner parallax">
		<div class="info">
			<h1>SIMPLE PARALLAX EFFECT</h1>
      
			<h3>WITH HTML AND CSS</h3>
			<p>-- FULLYWORLD WEB TUTORIALS</p>
		</div>
	</div>
	<div class="sec1">
		<h1>sec1</h1>
	</div>
	<div class="sec2 parallax">
		<h1>sec2</h1>
	</div>
	<div class="sec3">
		<h1>sec3</h1>
	</div>
	<div class="sec4 parallax">
		<h1>sec4</h1>
	</div>
	<div class="sec5">
		<h1>sec5</h1>
	</div>
	<div class="sec6 parallax">
		<h1>sec6</h1>
	</div>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
