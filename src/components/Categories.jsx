import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from "@material-ui/core"; // Import Material-UI components
import cloths from "../images/cloths.webp";
import footwear from "../images/footwear.webp";
import glasses from "../images/glasses.webp";
import gloves from "../images/gloves.webp";
import handbags from "../images/handbags.webp";
import jewellory from "../images/jewellory.webp";
import perfumes from "../images/perfumes.webp";
import premium from "../images/premium.webp";
import sale from "../images/sale.webp";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  showCategories: {
    display: "flex",
    flexWrap: "wrap",
    margin: "5% 10% 0 10%",
  },
  cat: {
    width: "20%",
    height: "230px",
    margin: "1%",
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },
  catImage: {
    width: "100%",
    height: "100%",
    objectFit: "contains",
    transition: "0.5s",
  },
  catImageHover: {
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Categories = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container className={classes.showCategories}>
        {/* Each category should take 4 columns on large screens (laptops) */}
        <Grid item xs={2} md={3} className={classes.cat}>
          <Paper className={classes.paper}>
            <Link to="/products">
              <img
                src={sale}
                alt=""
                className={`${classes.catImage} ${classes.catImageHover}`}
              />
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} className={classes.cat}>
          <Paper className={classes.paper}>
            <Link to="/products">
              <img
                src={premium}
                alt=""
                className={`${classes.catImage} ${classes.catImageHover}`}
              />
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} className={classes.cat}>
          <Paper className={classes.paper}>
            <Link to="/products">
              <img
                src={footwear}
                alt=""
                className={`${classes.catImage} ${classes.catImageHover}`}
              />
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} className={classes.cat}>
          <Paper className={classes.paper}>
            <Link to="/products">
              <img
                src={handbags}
                alt=""
                className={`${classes.catImage} ${classes.catImageHover}`}
              />
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} className={classes.cat}>
          <Paper className={classes.paper}>
            <Link to="/products">
              <img
                src={cloths}
                alt=""
                className={`${classes.catImage} ${classes.catImageHover}`}
              />
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} className={classes.cat}>
          <Paper className={classes.paper}>
            <Link to="/products">
              <img
                src={glasses}
                alt=""
                className={`${classes.catImage} ${classes.catImageHover}`}
              />
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} className={classes.cat}>
          <Paper className={classes.paper}>
            <Link to="/products">
              <img
                src={gloves}
                alt=""
                className={`${classes.catImage} ${classes.catImageHover}`}
              />
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} className={classes.cat}>
          <Paper className={classes.paper}>
            <Link to="/products">
              <img
                src={perfumes}
                alt=""
                className={`${classes.catImage} ${classes.catImageHover}`}
              />
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} className={classes.cat}>
          <Paper className={classes.paper}>
            <Link to="/products">
              <img
                src={jewellory}
                alt=""
                className={`${classes.catImage} ${classes.catImageHover}`}
              />
            </Link>
          </Paper>
        </Grid>
        {/* Repeat the same structure for other categories */}
        {/* ... */}
      </Grid>
    </Container>
  );
};

export default Categories;
