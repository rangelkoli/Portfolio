'use client'
import { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { Zoom, Slide, Fade } from "react-awesome-reveal";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/codingAnimation.json"
import Image from "next/image";
import backgroundHero from "../../assets/images/Gradient.svg";
import downArrow from "../../assets/animations/downArrow.json";
import "./styles.css";
import FindXHome from "../../assets/images/FindXHomeScreen.png";
import laptop from "../../assets/animations/laptopX.json";
import { Kaushan_Script } from "next/font/google";
import AnonTitle from "../../assets/images/anonimo/AnonHome.png";
import ExternalLink from "../../assets/images/ExternalLink.svg";
import Link from "next/link";
import FindXMain from "../../assets/images/FindXNew1.png";
import architecture from "../../assets/images/anonimo/architectureDia.png";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";

const kaushenScript = Kaushan_Script({ subsets: ["latin"],
  display: "swap",
  weight: "400"
});

const Anonimo = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div>
      <Navbar />
      <section className="anominoProject" id="anominoProject">
        <Container maxWidth="md">
          <div className="projectHeader" style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "2rem",
            
          }}>
              <div className="flex flex-col justify-center" style={{ flex: 1 }}>
                
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: kaushenScript,
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  Anonimo
                </Typography>
                <div className="flex flex-col">
                  <Typography
                    variant="h5"
                    className="subTitle"
                    
                  >
                    Mental Health Social Network
                  </Typography>
                </div>
              </div>

              <div className="flex flex-col justify-center" style={{ flex: 1 }}>
                <div className="flex flex-col">
                  <Typography
                    variant="h5"
                    className="techUsed"
                    
                  >
                    Machine Learning/ Software Developer
                  </Typography>
                </div>
              </div>
            
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  className="rounded-xl"
                  src={AnonTitle}
                  alt="Album"
                  style={{ marginTop: "2rem",width: "100%" }}
                />
              </div>

              <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col justify-center" style={{ flex: 1 }}>
                
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: kaushenScript,
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  Anonimo
                </Typography>
                <div className="flex flex-col">
                  <Typography
                    variant="h5"
                    className="subTitle"
                    
                  >
                    Mental Health Social Network
                  </Typography>
                </div>
              </div>

              <div className="flex flex-col justify-center" style={{ flex: 1 }}>
                <div className="flex flex-col">
                  <Typography
                    variant="h5"
                    className="techUsed"
                    
                  >
                    Machine Learning/ Software Developer
                  </Typography>
                </div>
              </div>
                </div>

              <div className="flex flex-col items-center justify-center">
                <Image
                  className="rounded-xl"
                  src={architecture}
                  alt="Album"
                  style={{ marginTop: "2rem", width: "100%" }}
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <Typography
                  variant="h5"
                  className="text-center font-bold text-2xl"
                  style={{
                    fontFamily: kaushenScript,
                    color: "white",
                    marginTop: "0.5rem",
                  }}
                >
                  Technologies used
                </Typography>
              </div>

              <div className="flex flex-col items-center justify-center">
                <Typography
                  variant="h5"
                  className="text-center font-bold text-2xl"
                  style={{
                    fontFamily: kaushenScript,
                    color: "white",
                    marginTop: "0.5rem",
                  }}
                >
                  React, Node, Express, MongoDB, GraphQL, Apollo, TypeScript, Docker, Kubernetes, AWS
                </Typography>
              </div>

              <div className="flex flex-col items-center justify-center">
                <Typography
                  variant="h5"
                  className="text-center font-bold text-2xl"
                  style={{
                    fontFamily: kaushenScript,
                    color: "white",
                    marginTop: "0.5rem",
                  }}
                >
                  Project Description
                </Typography>
              </div>

              <div className="flex flex-col items-center justify-center">
                <Typography
                  variant="body1"
                  className="text-center text-lg"
                  style={{
                    color: "white",
                    marginTop: "0.5rem",
                  }}
                >
                  This project is a web application built using React, Node.js, Express, MongoDB, GraphQL, Apollo, TypeScript, Docker, Kubernetes, and AWS. It showcases the architecture and technologies used in the development process. The application allows users to perform various tasks and interact with the system in a seamless manner.
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Anonimo;
      
 