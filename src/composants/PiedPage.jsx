import './PiedPage.scss';
import Social from "./Social";
import Mail from "../medias/Icons/mail.png";
import LinkedIn from "../medias/Icons/linkedin.png";
import YouTube from "../medias/Icons/youtube.png";
import Itchio from "../medias/Icons/itchio.png";
import ArtStation from "../medias/Icons/artstation.png";
import Tumblr from "../medias/Icons/tumblr.png";
import Instagram from "../medias/Icons/instagram.png";
import Twitter from "../medias/Icons/twitter.png";

export default function PiedPage(props) {
    const annee = (new Date()).getFullYear();
  return (
    <footer className="PiedPage">
      <h3>&copy; Tous droits réservés | Claudia Patry {annee} </h3>
      <div className="Socials">
        <Social img={Mail} Lien="mailto:claudia.patry@hotmail.com" alt="Mail" />
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
    </footer>
  );
}
