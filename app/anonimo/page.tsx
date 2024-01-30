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
import AnonTitle from "../../assets/images/anonimo/AnonHome.jpeg";
import ExternalLink from "../../assets/images/ExternalLink.svg";
import Link from "next/link";
import FindXMain from "../../assets/images/FindXNew1.png";
import architecture from "../../assets/images/anonimo/architectureDia.png";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
  },
]
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
    <div style={{

    }}>
      <Navbar />


      <section className="anominoProject" id="anominoProject" style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
        marginBottom: "2rem",

        width: "100%",
        height: "100%",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}>
        <Container maxWidth="md">
      <div className="projectHeader" style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "2rem",
            width: "100%",
            
          }}>
              <div className="flex px-4 flex-col justify-center" style={{ flex: 1 }}>
                
                <Typography
                  variant="h5"
                  style={{
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
          </Container>

      <div className="headerMainForAnonimo"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      
      }}>
       
      <div className="mockup-browser border border-base-300 px-4" style={{
    width: "80%",
      }}>
  <div className=" mx-auto sm-12 mockup-browser-toolbar" style={{
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    
  }}>
 
    <div className="input border border-base-300">https://anonimo.com</div>
  </div>
  <div className="flex justify-center border-t border-base-300">
    <Image 
      className=""
      src={AnonTitle}
      alt="Album"
      style={{width: "100%" }}
    />
  </div>
  </div>
  </div>
  <span className="flex items-center">
  <span className="h-px flex-1 bg-white"></span>
  <span className="shrink-0 px-6">Lorem, ipsum dolor</span>
  <span className="h-px flex-1 bg-white"></span>
</span>
        <Container maxWidth="md">

        
          <div className="flex flex-col items-center justify-center">
              

                
              <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg leading-8 text-white-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
              <div className="projectMainDescription" style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "2rem",
            
          }}>
              <div className="flex flex-col-8 justify-center" style={{ flex: 1 }}>
                
                <Typography
                  variant="h5"
                  style={{
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
                <Image
                  className="rounded-xl"
                  src={architecture}
                  alt="Album"
                  style={{ marginTop: "2rem", width: "100%" }}
                />
              </div>
              <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
   
              <h2 className="mt-4 text-xl font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
 Architectural Overview
</h2>
    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Home Page</h2>

        <p className="mt-1 text-sm text-gray-300">
        The initial landing page provides users with a concise overview of the website's purpose and functionality upon their first visit.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Anonym Page</h2>

        <p className="mt-1 text-sm text-gray-300">
        This interactive platform allows users to engage in various activities such as posting, liking, commenting, and interacting with other community members.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Login/Signup</h2>

        <p className="mt-1 text-sm text-gray-300">
        Serving as the website's gateway, this page requires user authentication through login. Alternatively, new users can create an account by clicking on the signup link to access all features.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Profile</h2>

        <p className="mt-1 text-sm text-gray-300">
        The user-specific profile page displays detailed information, including the user's name, bio, and activity statistics such as the number of posts, followers, and following counts. Users can manage connections by sending friend requests or unfriending others. Additionally, the chat functionality is accessible through this page.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Resources</h2>

        <p className="mt-1 text-sm text-gray-300">
        The Resources page curates valuable and informative content, including blogs, books, and articles sourced from various corners of the internet.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Admin Panel</h2>

        <p className="mt-1 text-sm text-gray-300">
        The default Django admin panel serves as the backend interface for Database Administrators (DBA), enabling them to access the database and perform necessary operations.
        </p>
      </a>
    </div>

  
  </div>

              <div className="flex flex-col items-center justify-center">
                <Typography
                  variant="h5"
                  className="text-center font-bold text-2xl"
                  style={{
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
          <section className="bg-black text-white">
            
  
</section>
        </Container>
      </section>
    </div>
  );
};

export default Anonimo;
      
 