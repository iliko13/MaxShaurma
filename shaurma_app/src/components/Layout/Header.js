import React, { Fragment } from "react";
import shaurmaImage from "../../assets/shaurma.jpg.webp";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Max shaurma</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={shaurmaImage} alt="shaurma on the table" />
      </div>
    </Fragment>
  );
};

export default Header;
