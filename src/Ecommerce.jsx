import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, removeProductFromCart } from "./actions";
import { Row, Table, Column } from "./Ecommerce.styles";

const AddProductButton = () => {
  const dispatch = useDispatch();

  const handleOnlick = () => {
    const ran = Math.floor(Math.random() * 1000);
    const ranPrice = Math.floor(Math.random() * 20);
    const newProduct = {
      id: ran,
      name: `p-${ran}`,
      quantity: 1,
      price: ranPrice,
    };
    dispatch(addProductToCart(newProduct));
  };

  return <button onClick={() => handleOnlick()}>Add a new product</button>;
};

const Ecommerce = () => {
  const { products, total } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeProductFromCart(productId));
  };

  const handleAdd = (product) => {
    dispatch(addProductToCart(product));
  };

  return (
    <>
      <AddProductButton />
      <div>
        <Table>
          <Row>
            <Column>
              <h5>Name</h5>
            </Column>
            <Column>
              <h5>Quantity</h5>
            </Column>
            <Column>
              <h5>Price</h5>
            </Column>
            <Column />
          </Row>
          {products.map((product) => {
            return (
              <Row key={product.id}>
                <Column>
                  <p>{product.name}</p>
                </Column>
                <Column>
                  <p>{product.quantity}</p>
                </Column>
                <Column>
                  <p>{product.price}</p>
                </Column>
                <Column>
                  <button onClick={() => handleAdd(product)}>Add</button>
                  <button onClick={() => handleRemove(product.id)}>
                    Remove
                  </button>
                </Column>
              </Row>
            );
          })}
        </Table>
        <p>total price: {total}</p>
      </div>
    </>
  );
};

export default Ecommerce;
