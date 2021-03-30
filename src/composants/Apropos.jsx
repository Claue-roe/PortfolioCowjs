import "./Apropos.scss";
import { motion } from "framer-motion";
import FableApropos from "../medias/Fable/FableFullBody.png";
import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
import ArrowLeftRoundedIcon from "@material-ui/icons/ArrowLeftRounded";

export default function Apropos() {
  return (
    <div className="Apropos">
      <motion.img initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }} className="Fable" src={FableApropos} alt="Fable" />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="bulle"
      >
        <p>
          Bonjour! <br />
          Bienvenue sur le portfolio de ma créatrice Claudia Patry (Cowjs en
          ligne).
          <br /> Je suis là pour raconter son cheminement!
          <br />
          Avant ma création, Claudia a appris par elle-même l’art de dessiner!
          Depuis 2010, elle ne pouvait jamais s’arrêter de créer! Puis en 2018,
          puisqu’elle aimait les jeux vidéos depuis qu’elle est née, elle a
          enfin décidé de combiner son talent en dessin et son amour des jeux et
          d’en faire sa carrière!
          <br />
          Elle a étudier à Maisonneuve dans la technique d’intégration en
          Multimédias et par conséquent
          <br /> à appris beaucoup de languages de programmation!
          <br />
          Si vous êtes intérêssé à la contacter,
          <br /> vous pouvez la contacter par un de ses réseaux sociaux ou par
          courriel électronique :
        </p>
        <a
          href="mailto:claudia.patry@hotmail.com"
          target="_blank"
          className="Mail"
        >
          <p className="Adresse">claudia.patry@hotmail.com</p>
        </a>
      </motion.div>
      {/* <div className="Bouton">
            <div className="Retourner">
                <ArrowLeftRoundedIcon/> 
                <p>Retourner</p> 
            </div>

            <div className="àContinuer">
            <p>Continuer</p> 
            <ArrowRightRoundedIcon/> 
            </div> 
        </div>*/}
    </div>
  );
}
