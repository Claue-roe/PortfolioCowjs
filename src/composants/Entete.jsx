import "./Entete.scss";
import { motion } from "framer-motion";
import Mail from "../medias/Icons/mail.png";
import LinkedIn from "../medias/Icons/linkedin.png";
import YouTube from "../medias/Icons/youtube.png";
import Itchio from "../medias/Icons/itchio.png";
import ArtStation from "../medias/Icons/artstation.png";
import Instagram from "../medias/Icons/instagram.png";
import Tumblr from "../medias/Icons/tumblr.png";
import Twitter from "../medias/Icons/twitter.png";
import FableHeader from "../medias/Fable/FullShinyFableHeader.png";

export default function Entete() {

  return (
    <header className="Entete">
      <div className="Titre">
        <h1>Cowjs</h1>
        <h2>Claudia Patry</h2>
        <h3>Artiste Multimédia</h3>
      </div>

      <div className="Socials cache">
        <motion.a
          initial={{ scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="mailto:claudia.patry@hotmail.com"
          target="_blank"
          className="Mail"
        >
          <img src={Mail} alt="Mail" />
        </motion.a>

        <motion.a
          initial={{ scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/claudia-patry/"
          target="_blank"
          className="LinkedIn"
        >
          <img src={LinkedIn} alt="LinkedIn" />
        </motion.a>

        <motion.a
          initial={{ scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.youtube.com/channel/UCmkDbGlUDxgSS70nDdmJQY"
          target="_blank"
          className="YouTube"
        >
          <img src={YouTube} alt="YouTube" />
        </motion.a>

        <motion.a
          initial={{ scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://cowjs.itch.io/"
          target="_blank"
          className="Itchio"
        >
          <img src={Itchio} alt="Itchio" />
        </motion.a>

        <motion.a
          initial={{ scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.artstation.com/cowjs"
          target="_blank"
          className="ArtStation"
        >
          <img src={ArtStation} alt="ArtStation" />
        </motion.a>

        <motion.a
          initial={{ scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.instagram.com/cowjsart/"
          target="_blank"
          className="Instagram"
        >
          <img src={Instagram} alt="Instagram" />
        </motion.a>

        <motion.a
          initial={{ scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.tumblr.com/blog/cowjsart"
          target="_blank"
          className="Tumblr"
        >
          <img src={Tumblr} alt="Tumblr" />
        </motion.a>

        <motion.a
          initial={{ scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://twitter.com/Cowjs21"
          target="_blank"
          className="Twitter"
        >
          <img src={Twitter} alt="Twitter" />
        </motion.a>
      </div>

      <img className="FableHeader" src={FableHeader} alt="Mascotte" />

      <div className="lang cache">
        <h2>En</h2>
        <h2>Fr</h2>
      </div>
    </header>
  );
}
