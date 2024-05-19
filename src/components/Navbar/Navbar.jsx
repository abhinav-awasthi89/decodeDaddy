import React, { useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(`.${styles.menu} li`);
    const background = document.getElementById("background");
    const options = document.getElementById("options");

    const moveBackground = (link) => {
      // background.style.opacity=1;
      // background.style.height=`${link.getBoundingClientRect().height}px`
      background.style.left = `${link.getBoundingClientRect().left}px`;
      background.style.width = `${link.getBoundingClientRect().width}px`;
      // options.style.left = `${link.getBoundingClientRect().left}px`;

    };
    links.forEach((link,index) => {
      link.addEventListener("mouseenter", (e) => {
        background.style.opacity = 1;
        moveBackground(e.target);
        if(index===1 || index===2){
          options.style.opacity = 1;
        }
      });
      link.addEventListener("mouseleave", (e) => {
        background.style.opacity = 0;
        options.style.opacity = 0;
      })
    });

    if (links.length > 0) {
      moveBackground(links[0]);
    }

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", (e) => {
          moveBackground(e.target);
        });
      });
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Decode daddy</div>
      <div className={styles.menu}>
        <ul>
          <li ><a href="#navContent">Home</a></li>
          <li id="link2"><a href="#products">About Us</a></li>
          <li id="link3"><a href="#features">Services</a></li>
          <li><a href="#docs">Contact</a></li>
          {/* <li><a href="#blog">Blog</a></li> */}
        </ul>
        <div id="background" className={styles.background}></div>
      </div>
      <div id="options" className={styles.options}>this will be the options</div>
      <button className={styles.login}>Learn More</button>
    </nav>
  );
};

export default Navbar;
