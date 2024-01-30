'use client'
import { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { Zoom, Slide, Fade } from "react-awesome-reveal";
import Lottie from "react-lottie";
import animationData from "../assets/animations/codingAnimation.json"
import Container from 'react-bootstrap/Container';
import Image from "next/image";
import backgroundHero from "../assets/images/Gradient.svg";
import downArrow from "../assets/animations/downArrow.json";
import "./globals.css";
import FindXHome from "../assets/images/FindXHomeScreen.png";
import laptop from "../assets/animations/laptopX.json";
import { Kaushan_Script } from "next/font/google";
import AnonTitle from "../assets/images/AnonminoHome.png";
import ExternalLink from "../assets/images/ExternalLink.svg";
import Link from "next/link";
import FindXMain from "../assets/images/FindXNew1.png";


const kaushenScript = Kaushan_Script({ subsets: ["latin"],
  display: "swap",
weight: "400"
 });


export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (

    <div style={{
      padding: "5px",
      overflow: "hidden",
    }}>
          {/* Navbar*/}

          <div className="navbar  top-0">
  <div className="flex-1" onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        top: 0,
        zIndex: 1000000,
        alignItems: "center",
      }}>
    <a className="btn btn-ghost font-bold mainNavText" style={{
      fontSize: "2rem",
      fontWeight: "bold",
      backgroundColor: "transparent",
    }}>
      RANGEL KOLI

  

    <div
      
    >
      {isHovered && (
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: laptop,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={40}
          width={40}
          style={{
            transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
            opacity: isHovered ? 1 : 0,
            transform: `translateX(${isHovered ? 0 : -100}%)`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      )}
    </div>
    
    </a>
  </div>
  <div className="flex-none" style={{
    fontSize: "4rem",
  }}>
    <ul className="menu menu-horizontal px-1">
      <li><a href="#projects">Projects</a></li>
      <li>
        <a>
          About
        </a>
      </li>
      <li>
        <a href="">
          Resume
          <Image src={ExternalLink} alt="Album" width={20} height={20} style={{ marginLeft: "0.5rem", color: "white" }} />

        </a>
      </li>
    </ul>
  </div>
</div>

<div className="container">
  <Container fluid style={{
    height: "95vh",
    width: "100vw",
    position: "relative",
  }}
  className="heroContainer"
  >
  
    <Grid container spacing={2}>
   
      <Grid item xs={12} sm={9}>
      <Image 
        src={backgroundHero}
        alt="Uber" 
        width={850} 
        height={600}
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          zIndex: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          objectFit: "cover",

        }}
      />
        <div style={{
          textAlign: "start",
          marginLeft: "15%",
          marginRight: "10%",
          maxWidth: "80%",
          width: "100%",
          marginTop: "10%",
        }}
        className="heroTitle"
        >
          <Zoom triggerOnce={true} duration={1000} delay={100}>
            <p className={kaushenScript.className}>Hi!</p>
          </Zoom>
        </div>
        <div 
          style={{
            textAlign: "start",
            marginLeft: "15%",
            marginRight: "0%",
            maxWidth: "90%",
            width: "100%",
          }}
          className="heroSubtitle"
        >
          <Zoom triggerOnce={true} duration={1000} delay={100}>
            <p className={kaushenScript.className}>I&apos;m Rangel Koli</p>
          </Zoom>
        </div>
        <div 
          className="heroParagraph" 
          style={{
            textAlign: "justify",
            marginLeft: "15%",
            marginRight: "10%",
            maxWidth: "80%",
            width: "100%",
          }}
        >
          <Zoom triggerOnce={true} duration={1000} delay={100}>
            <p >
              Innovative technologist with a passion for 
              driving positive change through technology 
              and a commitment to pushing the boundaries 
              of what&apos;s possible
            </p>
          </Zoom>
        </div>
      </Grid>
    </Grid>
    <Lottie  
    options={{
      loop: true,
      autoplay: true,
      animationData: downArrow,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }}
    height={250}
    width={250}
    style={{
      position: "absolute",
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: "0",
      marginBottom: "1%",
    }}
    />



 
  </Container>


  </div>

  <section className="projects" id="projects">
    <div style={{ textAlign: "center" }}>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "0",
          zIndex: "4",
        }}
      >
        Projects
      </h1>
    </div>

    <Fade direction="up" triggerOnce={true} duration={500} delay={100}  >


    <div style={{ textAlign: "center", justifyContent: "center", display: "flex", width: "100vw"}}>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "0",
          zIndex: "4",
        }}
      >
        Here are some of my projects
      </h2>
    </div>
    {/* Anonimo Project*/}

    <div
    style={{
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginBottom: "2rem",
      marginTop: "2rem",
    }} 
    >
      <div style={{
        position: "relative",
        borderRadius: "0px",
      }}>
                <div className="card lg:card-side bg-base-100 shadow-xl" style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "90vw",
                  //cursor: 'zoom-in'
                    cursor: `url('https://example.com/magnifying_glass.svg'), auto`,
                    borderRadius: "2px",
                  }}>
                  <figure style={{
                    width: "100%",
                    padding: "10px",
                  }}>
                    <Image src={AnonTitle} alt="Album" style={{ width: "100%" }}/>
                  </figure>
                  <div className="card-body" style={{
                    width: "100%",
                    alignItems: "center",
                    textAlign: "justify",
                    
                  }}>
                    <h2 className="card-title" style={{
                      textAlign: "center",

                    }}>Anonimo</h2>
                    <p className="card-para">Anonimo is a social media website allowing users to make posts expressing their emotioms. The website also have support for a therapist 
                      section where users can make appointments with therapists and have a chat with them. 
                    </p>
                    <div className="card-actions justify-end">
                      <a href="https://github.com/rangelkoli/Anonimo-ML"> 
                    <button style={{ display: "flex", alignItems: "center" }}>
                      <span className="box">
                        Github 
                        <Image src={ExternalLink} alt="Album" width={20} height={20} style={{ marginLeft: "0.5rem", color: "white" }} />
                      </span>
                    </button>
                    </a>

                    <Link href="/anonimo"> 
                    <button style={{ display: "flex", alignItems: "center" }}>
                      <span className="box">
                        Project 
                        <Image src={ExternalLink} alt="Album" width={20} height={20} style={{ marginLeft: "0.5rem", color: "white" }} />
                      </span>
                    </button>
                    </Link>
                    
                    </div>
                  </div>
                </div>
      </div>
</div>
</Fade>


<Fade direction="up" triggerOnce={true} duration={500} delay={100}  >

<div
style={{
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginBottom: "2rem",
  marginTop: "2rem",
}} 
>
  <div style={{
    position: "relative",
    borderRadius: "0px",
  }}>
            <div className="card lg:card-side bg-base-100 shadow-xl" style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "90vw",
              //cursor: 'zoom-in'
                cursor: `url('https://example.com/magnifying_glass.svg'), auto`,
                borderRadius: "2px",
              }}>
              <figure style={{
                width: "100%",
                padding: "10px",
              }}>
                <Image src={FindXMain} alt="Album" style={{ width: "100%" }}/>
              </figure>
              <div className="card-body" style={{
                width: "100%",
                alignItems: "center",
                textAlign: "justify",
                
              }}>
                <h2 className="card-title" style={{
                  textAlign: "center",

                }}>FindX</h2>
                <p className="card-para">FindX is a webapp which allows users to scan the face of a suspicious(missing) person and detect whether the captured image is of a missing person or not and notify the nearest and root police stations.</p>
                <div className="card-actions justify-end">
                  <a href="https://github.com/rangelkoli/Anonimo-ML"> 
                <button style={{ display: "flex", alignItems: "center" }}>
                  <span className="box">
                    Github 
                    <Image src={ExternalLink} alt="Album" width={20} height={20} style={{ marginLeft: "0.5rem", color: "white" }} />
                  </span>
                </button>
                </a>

                <Link href="/anonimo"> 
                <button style={{ display: "flex", alignItems: "center" }}>
                  <span className="box">
                    Project 
                    <Image src={ExternalLink} alt="Album" width={20} height={20} style={{ marginLeft: "0.5rem", color: "white" }} />
                  </span>
                </button>
                </Link>
                
                </div>
              </div>
            </div>
  </div>
</div>
</Fade>


   
  </section>






<section className="aboutme" id="aboutme">
<section className="flex items-center bg-stone-50 xl:h-screen font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap items-center ">
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <div className="lg:max-w-md">
                        <span className="text-xl font-semibold text-blue-600 uppercase dark:text-blue-500">
                            About ME!</span>
                        <h2 className="mt-4 mb-6 text-2xl  dark:text-gray-300" style={{
                          textAlign: "justify"
                        }}>
                        Greetings! I am Rangel Anselm Koli, a passionate and dedicated software developer based in Syracuse, NY. Pursuing a Master's in Computer Science from Syracuse University and a strong foundation in Information Technology from Mumbai University, I am committed to contributing my technical acumen to drive innovation and facilitate organizational growth in the dynamic field of IT.</h2>
         
                    </div>
                </div>
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <div className="flex mb-4">
                        <span
                            className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="w-5 h-5 bi bi-file-earmark-code" viewBox="0 0 16 16">
                                <path
                                    d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                                <path
                                    d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
                            </svg>
                        </span>
                        <div>
                            <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                            Education
                            </h2>
                            <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                              Masters - Computer Science, Syracuse University
                            </p>
                            <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                              Bachelors - Information Technology, Mumbai University
                            </p>
                            
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <span
                            className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="w-5 h-5 bi bi-file-text" viewBox="0 0 16 16">
                                <path
                                    d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                <path
                                    d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                            </svg>
                        </span>
                        <div>
                            <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                            Skills
                            </h2>
                            <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                            Programming Languages: C, C++, Java, Python
                            </p>
                            <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                            Web Technologies: HTML, CSS, JavaScript, React, Node.js
                            </p>
                            <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                            Databases: MySQL, MongoDB
                            </p>
                            <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                            Tools: Git, Docker, Kubernetes
                            </p>

                        </div>
                    </div>
                    <div className="flex mb-4">
                        <span
                            className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="w-5 h-5 bi bi-bank2" viewBox="0 0 16 16">
                                <path
                                    d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z">
                                </path>
                            </svg>
                        </span>
                        <div>
                            <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                                Achievements & Certifications
                            </h2>
                            <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                            1st Place in the Code Crush 1.0 Hackathon organized by St. Francis Institute of Technology
                            </p>
                            <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                            Coursera - Programming Foundations with JavaScript, HTML and CSS (2020)
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  </section>


  <section className="footer" id="footer">
  <footer className="footer footer-center p-10 text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href="https://github.com">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.865 8.17 6.84 9.49.5.09.68-.22.68-.49v-1.71c-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.24-.25-4.59-1.12-4.59-4.97 0-1.1.39-2 1.03-2.71-.1-.25-.45-1.28.1-2.67 0 0 .85-.27 2.77 1.03A9.5 9.5 0 0112 6.03c.85 0 1.7.11 2.5.34 1.92-1.3 2.77-1.03 2.77-1.03.55 1.39.2 2.42.1 2.67.64.71 1.03 1.61 1.03 2.71 0 3.86-2.36 4.72-4.6 4.97.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.49C19.135 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>

      </a>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2024 - Rangel Koli</p>
  </aside>
</footer>


  </section>


    </div>
  );
}
