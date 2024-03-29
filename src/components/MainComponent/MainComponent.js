import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({
  img,
  searchIcon,
  logo,
  heading,
  postName,
  requirements,
  applyNow,
}) => {
  return (
    <div
      className={[
        classes.mainWrapper,
        "min-h-screen flex items-center justify-center w-full ",
      ].join(" ")}
      style={{ background: "var(--primaryColor)" }}
    >
      <div className={classes.container}>
        <div className={classes.topHeader}>
          <img src={logo} alt="#" className={classes.logo} />{" "}
        </div>
        <div className={classes.wrapper}>
          <div className={classes.infoContainer}>
            <h1 className={classes.heading}>{heading}</h1>
            <div className={classes.postName}>
              <p>{postName}</p>
              <div className={classes.searchIcon}>{searchIcon}</div>
            </div>
            <div className={classes.requirementsContainer}>
              <ul className={classes.requirements}>
                {requirements.map((el, i) => (
                  <li className={classes.requirement} key={i}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
            <div className={classes.applyNow}>
              <p className={classes.label}>{applyNow.label}</p>

              <a href={`mailto:${applyNow.email}`} className={classes.email}>
                {applyNow.email}
              </a>
            </div>
          </div>
          <div className={classes.imgContainer}>
            <img src={img} alt="#" className={classes.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
