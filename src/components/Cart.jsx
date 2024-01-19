import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    textAlign: "center",
  },
  card: {
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  removeButton: {
    marginLeft: "auto",
  },
  totalPrice: {
    marginTop: theme.spacing(2),
    fontWeight: "bold",
  },
  checkoutButton: {
    marginTop: theme.spacing(2),
    color: "white",
    backgroundColor: "black",
    padding: "5px 10px ",
  },
}));

const Cart = () => {
  const classes = useStyles();
  // const userId = "65a8e813f15dbb1a683fe9cf"; // Replace with your actual userId
  const [cartData, setCartData] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [total, setTotal] = useState(0);
  const { token, userData } = useAuth();
  console.log(token, userData);
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/carts/${userData._id}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setCartData(response.data.cart.products);
        localStorage.setItem("cartId", response.data.cart._id);
        // Fetch product details for all products in the cart
        const productPromises = response.data.cart.products.map((product) =>
          axios.get(
            `http://localhost:3000/api/v1/products/${product.productId}`
          )
        );

        const productResponses = await Promise.all(productPromises);

        setProductDetails(productResponses.map((res) => res.data.product));
        const newTotal = productResponses.reduce(
          (acc, res, index) =>
            acc +
            res.data.product.price *
              response.data.cart.products[index].quantity,
          0
        );

        setTotal(newTotal);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, [userData._id]);

  const handleRemoveProduct = async (productId) => {
    try {
      // Make an API call to remove the product from the cart
      // ...

      // After successful removal, update the local state
      setCartData((prevCartData) =>
        prevCartData?.filter((product) => product.productId !== productId)
      );
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };

  const calculateSubtotal = (price, quantity) => {
    console.log(price, quantity);

    return price * quantity;
  };

  const calculateTotal = () =>
    cartData.reduce(
      (total, product) =>
        total + calculateSubtotal(product.price, product.quantity),
      0
    );

  return (
    <Container className={classes.container}>
      <Typography variant="h1" gutterBottom>
        Your Cart
      </Typography>
      {cartData?.map((product, index) => (
        <Card key={product.productId} className={classes.card}>
          {console.log(product)}
          <CardMedia
            className={classes.cardMedia}
            image={productDetails[index]?.thumbnail}
            title={productDetails[index]?.title}
          />
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography variant="h5">
                {productDetails[index]?.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Price: ${productDetails[index]?.price}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Quantity: {product.quantity}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Subtotal: $
                {calculateSubtotal(
                  productDetails[index]?.price,
                  product.quantity
                )}
              </Typography>
            </CardContent>
          </div>
          <Button
            className={classes.removeButton}
            variant="outlined"
            color="secondary"
            onClick={() => handleRemoveProduct(product.productId)}
          >
            Remove
          </Button>
        </Card>
      ))}
      {cartData?.length > 0 && (
        <Typography variant="h6" className={classes.totalPrice}>
          Total: ${total.toFixed(2)}
        </Typography>
      )}
      <Link
        // component={RouterLink}
        to="/checkout" // Replace with your actual checkout route
        variant="contained"
        color="primary"
        className={classes.checkoutButton}
      >
        Checkout
      </Link>
    </Container>
  );
};

export default Cart;
