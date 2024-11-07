"use client";

import React, { useEffect } from "react";
import Typed from "typed.js";
import Link from "next/link";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    const options = {
      strings: [
        " Expert in HTML",
        " Expert in  CSS",
        " Expert in TypeScript",
        " Expert in  JavaScript",
        " Expert in React.Js",
        " Expert in Next.Js",
      ],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
    };

    const typed = new Typed(".auto-type", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home-main-page">
      <div className="heading-div">
        <div className="portfolio-div">Portfolio.</div>
        <div className="navbar-div">
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/conatct"}>Contact</Link>
            </li>
            <li>
              <Link href={"/service"}>Service</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mid-div">
        <div className="main-div">
          <div className="hello-div">Hello It's Me</div>
          <div className="name-div">Subhan Kaladi</div>
          <div className="skills-div">
            And I'm <span className="auto-type"></span>
          </div>
          <div className="intro-div">
            And I am Currently Pursuing Software Engineering With A Focus On
            Artificial Intelligence (AI). I Am Passionate About Learning
            Generative AI And Developing Solutions Using Tools Like Docker,
            Ubuntu, And Modern Python. I Enjoy Working On Innovative Projects,
            From Building Apps To Exploring Cloud-native Technologies.
          </div>
          <div className="logo-section">
            <a
              className="fb-logo"
              href="https://www.facebook.com/subhanallahkaladi"
              target="_blank"
            >
              <img src="/fb.webp" alt="fb-logo" />
            </a>
            <a href="https://www.instagram.com/subhan_kaladi/" target="_blank">
              <img src="insta.png" alt="insta-logo" />
            </a>
          </div>
        </div>
        <div className="img-div">
          <img className="subhan-logo" src="/SUBHAN.png" alt="subhan's photo" />
        </div>
      </div>

      <a href="#" className="animated-button1" id="animated-button">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Download CV
      </a>
    </div>
  );
};

export default Home;
