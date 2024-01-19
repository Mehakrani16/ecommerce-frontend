import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  Grid,
  Typography,
  Button,
  Input,
  Paper,
  makeStyles,
} from "@material-ui/core";
import TopSellers from "./TopSellers";
import { useAuth } from "../AuthContext";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
  },
  productImage: {
    width: "100%",
    height: "500px",
    objectFit: "cover",
  },
  productInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
  },
  quantityContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  quantityButton: {
    marginRight: theme.spacing(1),
    cursor: "pointer",
  },
  addToCartButton: {
    marginTop: theme.spacing(2),
  },
}));

const ProductDetails = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { token, userData, updateCart, setCartData, cartData } = useAuth();
  console.log(token);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/products/${id}`)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data.product);
      })
      .catch((error) => {
        console.error("Error fetching product data: ", error);
      });
  }, [id]);

  const handleQuantityChange = (value) => {
    // Handle quantity change (if needed)
    if (quantity === 1 && value === -1) {
      return;
    }
    setQuantity(quantity + value);
  };

  const handleAddToCart = async () => {
    const userId = userData._id; // Replace with your actual userId
    const productId = product._id; // "65a8fff433f1cdf1979da9ba"; // Replace with your actual productId
    // const quantity = 1; // Replace with your actual quantity

    const config = {
      headers: {
        Authorization: token,
      },
    };

    const MycartData = {
      userId,
      products: [
        {
          productId,
          quantity,
        },
      ],
    };
    const updatedProduct = {
      productId,
      quantity: quantity,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/carts",
        MycartData,
        config
      );

      // Handle success, you can update the UI or show a success message
      console.log("Product added to cart:", response.data);
      toast.success("Product Added to Cart Successfully!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(cartData);
      const updatedCart = [...cartData, updatedProduct];
      updateCart(updatedCart);
      // localStorage.setItem("cartData", JSON.stringify(updatedCart));
    } catch (error) {
      // Handle error, you can show an error message or log the error
      toast.error("An Error Occured Please Try Again!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <Container className={classes.container}>
      <ToastContainer />
      {product ? (
        <>
          <Grid container spacing={4}>
            <Grid item md={6}>
              <img
                src={product.images[0]}
                alt={product.title}
                className={classes.productImage}
              />
            </Grid>
            <Grid item md={6} className={classes.productInfo}>
              <Typography variant="h2" style={{ marginBottom: "10px" }}>
                {product.title}
              </Typography>
              <Typography style={{ marginBottom: "5px" }}>
                Price: ${product.price}
              </Typography>
              <Typography style={{ marginBottom: "5px" }}>
                Category: {product.category}
              </Typography>
              <div className={classes.quantityContainer}>
                <Typography style={{ marginRight: "10px" }}>
                  Quantity:
                </Typography>
                <Button
                  onClick={() => handleQuantityChange(-1)}
                  className={classes.quantityButton}
                >
                  -
                </Button>
                <Input
                  type="number"
                  value={quantity}
                  style={{
                    margin: "0 5px",
                    border: "none",
                    outline: "none",
                    width: "auto",
                  }}
                />
                <Button
                  onClick={() => handleQuantityChange(1)}
                  className={classes.quantityButton}
                >
                  +
                </Button>
              </div>
              <Button
                onClick={handleAddToCart}
                variant="contained"
                color="primary"
                className={classes.addToCartButton}
              >
                Add to Cart
              </Button>
              <Typography style={{ marginTop: "10px" }}>
                Subtotal: ${(product.price * quantity).toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
          <div className="mt-5">
            <Typography variant="h3">Description</Typography>
            {product && <Typography>{product.description}</Typography>}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <TopSellers />
    </Container>
  );
};

export default ProductDetails;
