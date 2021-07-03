import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, removeProductFromCart } from "./actions";
import {
  Row,
  Table,
  Column,
  StyledButton,
  Container,
} from "./Ecommerce.styles";

const AddProductButton = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    const ran = Math.floor(Math.random() * 1000);
    const randPrice = Math.floor(Math.random() * 20);
    const newProduct = {
      id: ran,
      name: `p-${ran}`,
      quantity: 1,
      price: randPrice,
    };
    dispatch(addProductToCart(newProduct));
  };

  return (
    <StyledButton onClick={() => handleOnClick()}>
      Add a new product
    </StyledButton>
  );
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
    <Container>
      <Row spaceAround>
        <AddProductButton />
        <p>total price: {total}</p>
      </Row>
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
                  <StyledButton onClick={() => handleAdd(product)}>
                    Add
                  </StyledButton>
                </Column>
                <Column>
                  <StyledButton onClick={() => handleRemove(product.id)}>
                    Remove
                  </StyledButton>
                </Column>
              </Row>
            );
          })}
        </Table>
      </div>
    </Container>
  );
};

export default Ecommerce;
