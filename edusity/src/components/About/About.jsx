import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus numquam expedita consequuntur natus dignissimos
          quisquam officia, rem reprehenderit quasi accusantium corporis fugiat
          placeat! Magni architecto delectus optio. Ex saepe facilis eveniet
          debitis iusto minima incidunt enim excepturi esse perspiciatis beatae
          accusamus laborum laboriosam dolore quis, corporis officiis voluptatum
          amet totam.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
          praesentium soluta nostrum fugit, dolorum provident accusantium
          tempore dolorem odit voluptatem enim voluptatibus fugiat. Natus vel
          est illum voluptatem nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, vel.
        </p>
        <p>
          Soluta molestiae minima dolorem porro placeat nemo doloremque.
          Nesciunt commodi quo earum expedita minus facilis numquam a pariatur
          error laborum doloremque deleniti architecto accusantium, velit
          praesentium modi adipisci ratione ducimus sapiente.
        </p>
      </div>
    </div>
  );
}

export default About;
