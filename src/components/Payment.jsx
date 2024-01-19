import React from "react";
import {
  Container,
  Typography,
  TextField,
  Grid,
  Button,
  makeStyles,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { mdiCreditCard } from "@mdi/js";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    textAlign: "center",
  },
  paymentForm: {
    maxWidth: "600px",
    margin: "auto",
  },
  icon: {
    fontSize: 60,
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: "black",
  },
}));

const Payment = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { token, userData, updateCart } = useAuth();

  const handleOrder = async () => {
    const cartId = localStorage.getItem("cartId");
    const url = `http://localhost:3000/api/v1/carts/${cartId}`;

    try {
      const response = await axios.delete(url, {
        headers: {
          Authorization: token,
          // Add other headers if needed
        },
      });

      // Check the response status and handle accordingly
      if (response.status === 200) {
        console.log(`Cart with ID ${cartId} deleted successfully`);
        updateCart([]);
        navigate("/orderplaced");
      } else {
        console.error(`Error deleting cart with ID ${cartId}`);
      }
    } catch (error) {
      console.error(
        `An error occurred while deleting cart with ID ${cartId}: ${error.message}`
      );
    }
  };
  return (
    <Container className={classes.container}>
      <Typography variant="h1" gutterBottom>
        Payment
      </Typography>
      <div className={classes.paymentForm}>
        <mdiCreditCard className={classes.icon} color="primary" />
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Cardholder Name"
                fullWidth
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Card Number"
                fullWidth
                variant="outlined"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <mdiCreditCard color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Expiry Date"
                fullWidth
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField label="CVV" fullWidth variant="outlined" required />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Save card for future payments"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleOrder}
              >
                Pay Now
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Payment;
