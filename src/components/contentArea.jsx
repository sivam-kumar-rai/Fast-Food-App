import React from "react";
import "./contentArea.css";
import "./EntryForm.css";
import "./App.css";
import Footer from "./footer.jsx";
import EntryForm from "./EntryForm.jsx";
import bgVideo from "../assets/bgvideo.mp4";
import img1 from "../assets/burger.png";
import img2 from "../assets/cake.png";
import img3 from "../assets/chicken.png";
import img4 from "../assets/chicken1.png";
import img5 from "../assets/hot_dog.png";
import img6 from "../assets/momo.png";
import img7 from "../assets/noodles.png";
import img8 from "../assets/pizza.png";
import img9 from "../assets/rools.png";
import img10 from "../assets/samosa.png";
import { Outlet } from "react-router-dom";

function ContentArea() {
  return (
    <div className="contentarea">
      <div className="navbar">
        <p>Testy Bites</p>
      </div>
      <div className="ContentArea1">
        <video autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
          your browser doesnot support video tag
        </video>
        <div className="contentArea2">
          <div className="images">
            <img src={img1} className="burger img" alt="burger" />
            <img src={img2} className="cake img" alt="cake" />
            <img src={img3} className="chicken img" alt="chicken" />
            <img src={img4} className="chicken1 img" alt="chicken" />
            <img src={img5} className="hotdog img" alt="hot dog" />
            <img src={img6} className="momo img" alt="momos" />
            <img src={img8} className="pizza img" alt="pizza" />
            <img src={img9} className="rolls img" alt="rolls" />
            <img src={img10} className="samosa img" alt="samosa" />
          </div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContentArea;
