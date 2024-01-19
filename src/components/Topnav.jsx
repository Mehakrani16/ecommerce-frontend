import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Icon from "@mdi/react";
import { mdiFacebook, mdiTwitter, mdiInstagram, mdiPhone } from "@mdi/js";

const useStyles = makeStyles((theme) => ({
  topnavMain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40px",
    backgroundColor: "black",
    color: "white",
    overflowX: "hidden",
  },
  mdiIcon: {
    color: "white",
    margin: "0.3rem",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  mdiIconHover: {
    "&:hover": {
      color: "#7a1f42",
    },
  },
  topnavLink: {
    textDecoration: "none",
    color: "white",
  },
  callNumber: {
    margin: "0.3rem",
    fontWeight: "normal",
  },
}));

const Topnav = () => {
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon
          path={mdiFacebook}
          title="Facebook"
          size={1}
          className={`${classes.mdiIcon} ${classes.mdiIconHover}`}
        />
        <Icon
          path={mdiTwitter}
          title="Twitter"
          size={1}
          className={`${classes.mdiIcon} ${classes.mdiIconHover}`}
        />
        <Icon
          path={mdiInstagram}
          title="Instagram"
          size={1}
          className={`${classes.mdiIcon} ${classes.mdiIconHover}`}
        />
        <span className={classes.callNumber}>
          Call:{" "}
          <a href="tel:03073591744" className={classes.topnavLink}>
            03073591744
          </a>
        </span>
      </Container>
    </div>
  );
};

export default Topnav;
