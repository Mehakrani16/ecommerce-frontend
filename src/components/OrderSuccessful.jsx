import React from "react";
import { Container, Typography, Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    textAlign: "center",
  },
  successIcon: {
    fontSize: 100,
    color: theme.palette.success.main,
  },
  text: {
    marginTop: theme.spacing(2),
  },
  homeButton: {
    marginTop: theme.spacing(4),
  },
}));

const OrderSuccessful = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h1" gutterBottom>
        Order Successful!
      </Typography>
      <div>
        <Typography variant="h1" className={classes.successIcon}>
          ✔
        </Typography>
        <Typography variant="h5" className={classes.text}>
          Thank you for your order! Your products will be delivered soon.
        </Typography>
        <Typography variant="body1" className={classes.text}>
          Delivery Information: [Dummy delivery information]
        </Typography>
        <Typography variant="body1" className={classes.text}>
          Order ID: [Your Order ID]
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          className={classes.homeButton}
        >
          Continue Shopping
        </Button>
      </div>
    </Container>
  );
};

export default OrderSuccessful;
