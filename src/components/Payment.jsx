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
  const handleOrder = () => {};
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
              <Link
                to="/orderplaced"
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleOrder}
              >
                Pay Now
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Payment;
