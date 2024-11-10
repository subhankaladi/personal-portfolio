"use client";

import React, { useEffect } from "react";
import Typed from "typed.js";
import Link from "next/link";
import "./Home.css";
import Image from 'next/image';

const Home = () => {
  useEffect(() => {
    const options = {
      strings: [
        "Expert in HTML",
        "Expert in CSS",
        "Expert in TypeScript",
        "Expert in JavaScript",
        "Expert in React.Js",
        "Expert in Next.Js",
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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            
            <li>
              <Link href="/service">Service</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mid-div">
        <div className="main-div">
          <div className="hello-div">Hello It&apos;s Me</div>
          <div className="name-div">Subhan Kaladi</div>
          <div className="skills-div">
            And I&apos;m <span className="auto-type"></span>
          </div>
          <div className="intro-div">
            I am currently pursuing Software Engineering with a focus on AI. I am passionate about learning Generative AI and developing solutions using Docker, Ubuntu, and Python.
          </div>
          <div className="logo-section">
            <a href="https://www.facebook.com/subhanallahkaladi" target="_blank" rel="noopener noreferrer">
              <Image src="/fb.webp" alt="fb-logo" width={40} height={40}/> 
            </a>
            <a href="https://www.instagram.com/subhan_kaladi/" target="_blank" rel="noopener noreferrer">
              <Image src="/insta.png" alt="insta-logo" width={40} height={40} />
            </a>
          </div>
        </div>
        <div className="img-div">
          <Image className="subhan-logo" src="/SUBHAN.png" alt="subhan's photo" width={1000} height={1000} />
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
