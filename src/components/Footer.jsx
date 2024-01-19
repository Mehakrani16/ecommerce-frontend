import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import { mdiFacebook, mdiTwitter, mdiInstagram, mdiPinterest } from "@mdi/js";
import Icon from "@mdi/react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3),
    marginTop: theme.spacing(4),
  },
  socialIcons: {
    color: theme.palette.primary.contrastText,
    marginRight: theme.spacing(1),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              ASTORE
            </Typography>
            <Typography variant="body2" paragraph>
              Your one-stop shop for all your needs. Explore a wide range of
              products with us.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit">
                Home
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit">
                Products
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit">
                About Us
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit">
                Contact Us
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton
              className={classes.socialIcons}
              href="#"
              target="_blank"
            >
              <Icon path={mdiFacebook} size={1} />
            </IconButton>
            <IconButton
              className={classes.socialIcons}
              href="#"
              target="_blank"
            >
              <Icon path={mdiTwitter} size={1} />
            </IconButton>
            <IconButton
              className={classes.socialIcons}
              href="#"
              target="_blank"
            >
              <Icon path={mdiInstagram} size={1} />
            </IconButton>
            <IconButton
              className={classes.socialIcons}
              href="#"
              target="_blank"
            >
              <Icon path={mdiPinterest} size={1} />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body2" paragraph>
              123 Main Street, Cityville, State, 12345
            </Typography>
            <Typography variant="body2">Email: info@astore.com</Typography>
            <Typography variant="body2">Phone: +1 (123) 456-7890</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
