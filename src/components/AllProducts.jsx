import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@material-ui/core";

const truncateTitle = (title) => {
  const words = title.split(" ");
  const truncatedTitle = words.slice(0, 3).join(" ");
  return truncatedTitle;
};

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/products")
      .then((response) => {
        setProducts(response.data.products);
        console.log(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
  }, []);

  return (
    <Container style={{ marginTop: "50px" }}>
      <Typography
        variant="h2"
        style={{ fontFamily: "Arimo", color: "#1D1D1D" }}
      >
        Discover New Arrival
      </Typography>
      <Typography variant="h3" style={{ fontFamily: "Lato", color: "#555555" }}>
        Recently Added Shirts
      </Typography>
      <Grid
        container
        spacing={3}
        justify="center"
        style={{ marginTop: "20px" }}
      >
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Link
              to={`/products/${product.id}`}
              style={{ textDecoration: "none" }}
              className="card-link"
            >
              <Card style={{ height: "100%" }}>
                <CardMedia
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  component="img"
                  alt={product.title}
                  image={product.images[0]}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      fontFamily: "Baloo",
                      color: "#1D1D1D",
                      fontSize: "18px",
                    }}
                  >
                    {truncateTitle(product.title)}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      fontFamily: "Lato",
                      color: "#024E82",
                      fontSize: "16px",
                    }}
                  >
                    ${product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllProducts;
