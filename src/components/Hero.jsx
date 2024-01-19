import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import heroImage from "../images/hero_image.jpg"; // Import your image

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    backgroundImage: `url(${heroImage})`, // Use the imported image
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Hero = () => {
  const classes = useStyles();

  return <div className={classes.heroContainer}></div>;
};

export default Hero;
