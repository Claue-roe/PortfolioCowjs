import "./Entete.scss";
import Social from "./Social";
import Mail from "../medias/Icons/mail.png";
import LinkedIn from "../medias/Icons/linkedin.png";
import YouTube from "../medias/Icons/youtube.png";
import Itchio from "../medias/Icons/itchio.png";
import ArtStation from "../medias/Icons/artstation.png";
import Tumblr from "../medias/Icons/tumblr.png";
import Instagram from "../medias/Icons/instagram.png";
import Twitter from "../medias/Icons/twitter.png";

export default function Entete(props) {
  return (
    <header className="Entete">
      <div className="Titre">
        <h1>Cowjs</h1>
        <h2>Claudia Patry</h2>
        <h3>Artiste Multimédia</h3>
      </div>
      <div className="Socials cache">
      <Social 
          img={Mail} 
          Lien="mailto:claudia.patry@hotmail.com" 
          alt="Mail" 
        />
        <Social
          img={LinkedIn}
          Lien="https://www.linkedin.com/in/claudia-patry/"
          alt="LinkedIn"
        />
        <Social
          img={YouTube}
          Lien="https://www.youtube.com/channel/UCmkDbGlUDxgSS70nDdmJQYA"
          alt="YouTube"
        />
        <Social img={Itchio} Lien="https://cowjs.itch.io/" alt="Itchio" />
        <Social
          img={ArtStation}
          Lien="https://www.artstation.com/cowjs"
          alt="ArtStation"
        />
        <Social
          img={Tumblr}
          Lien="https://www.tumblr.com/blog/cowjsart"
          alt="Tumblr"
        />
        <Social
          img={Instagram}
          Lien="https://www.instagram.com/cowjsart/"
          alt="Instagram"
        />
        <Social
          img={Twitter}
          Lien="https://twitter.com/Cowjs21"
          alt="Twitter"
        />
      </div>
      <div className="lang">
        <h2>En</h2>
        <h2>Fr</h2>
        <svg
          className="Blob"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#A673C6"
            stroke="2px solid #FF7EF2"
            d="M62,-18.8C66.7,-5.7,47.5,16.6,24.3,33.5C1.1,50.3,-26.1,61.8,-45.8,50.5C-65.5,39.1,-77.7,5,-68.8,-13.9C-60,-32.8,-30,-36.5,-0.7,-36.2C28.6,-36,57.3,-32,62,-18.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </header>
  );
}
