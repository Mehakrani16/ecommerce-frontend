import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    textAlign: "center",
  },
  topSellersHeading: {
    fontFamily: "Arimo",
  },
  card: {
    width: "200px",
    height: "300px",
    margin: theme.spacing(2),
    boxShadow: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  cardBody: {
    padding: theme.spacing(2),
  },
  cardTitle: {
    fontFamily: "Baloo",
    color: "#1D1D1D",
    fontSize: "18px",
  },
  cardPrice: {
    fontFamily: "Lato",
    color: "#024E82",
    fontSize: "16px",
  },
  loadMoreButton: {
    margin: theme.spacing(4),
  },
}));

const TopSellers = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(4);

  const truncateTitle = (title) => {
    const words = title.split(" ");
    const truncatedTitle = words.slice(0, 3).join(" ");
    return truncatedTitle;
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
  }, []);

  const loadMore = () => {
    setVisibleProducts(visibleProducts + 4);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h1" className={classes.topSellersHeading}>
        Top Sellers
      </Typography>
      <Typography>Browse our top selling products</Typography>
      <Grid container spacing={2} className="mt-4">
        {products.slice(0, visibleProducts).map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <Link
                to={`/products/${product.id}`}
                style={{ textDecoration: "none" }}
                className="card-link"
              >
                <CardMedia
                  component="img"
                  alt={product.title}
                  image={product.images[0]}
                  className={classes.cardImage}
                />
                <CardContent className={classes.cardBody}>
                  <Typography className={classes.cardTitle}>
                    {truncateTitle(product.title)}
                  </Typography>
                  <Typography className={classes.cardPrice}>
                    ${product.price}
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
      {visibleProducts < products.length && (
        <div className={classes.loadMoreButton}>
          <Button variant="contained" color="primary" onClick={loadMore}>
            Load More
          </Button>
        </div>
      )}
    </Container>
  );
};

export default TopSellers;
