import React, {useState, useEffect} from 'react'
import Link from "next/link";
import Lottie from "react-lottie";
import laptop from "../../assets/animations/laptopX.json";
import Image from "next/image";
import ExternalLink from "../../assets/images/ExternalLink.svg";


function Navbar() {
    const [fadeIn, setFadeIn] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
  
    useEffect(() => {
      setFadeIn(true);
    }, []);
  return (
    <div>
        
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
    <Link href="/" className="btn btn-ghost font-bold mainNavText" style={{
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
    
    </Link>
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

    </div>
    </div>
  )
}

export default Navbar