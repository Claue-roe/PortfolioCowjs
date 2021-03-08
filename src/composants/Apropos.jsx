import './Apropos.scss';
import FableApropos from '../medias/Fable/FableFullBody.png';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';
import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';

export default function Apropos(){
    return(
        <div className="Apropos">
            <div className="bulle">
                <p>Bonjour! Bienvenue sur le portfolio de ma créatrice Claudia Patry (Cowjs en ligne) Je suis ici pour raconter son cheminement!</p>
               
            </div>
            <div className="Bouton Retourner"> <ArrowLeftRoundedIcon/> Retourner </div>
            <div className="Bouton Continuer">Continuer <ArrowRightRoundedIcon/> </div>
            <img className="Fable" src={FableApropos} alt="Fable"/>
        </div>
    );
}