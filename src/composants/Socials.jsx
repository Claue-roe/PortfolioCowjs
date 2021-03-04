import './Socials.scss';
import Mail from '../medias/Icons/mail.png';
import LinkedIn from '../medias/Icons/linkedin.png';
import YouTube from '../medias/Icons/youtube.png';
import Itchio from '../medias/Icons/itchio.png';
import ArtStation from '../medias/Icons/artstation.png';
import Tumblr from '../medias/Icons/tumblr.png';
import Instagram from '../medias/Icons/instagram.png';
import Twitter from '../medias/Icons/twitter.png';

export default function Socials(props) {
 return(
     <div className="Socials">
        <a href="mailto:claudia.patry@hotmail.com" target="_blank"><div className="Mail"><img src={Mail} alt="Mail"/></div></a>
        <a href="https://www.linkedin.com/in/claudia-patry/" target="_blank"><div className="LinkedIn"><img src={LinkedIn} alt="LinkedIn"/></div></a>
        <a href="https://www.youtube.com/channel/UCmkDbGlUDxgSS70nDdmJQYA" target="_blank"><div className="Youtube"><img src={YouTube} alt="Youtube"/></div></a>
        <a href="https://cowjs.itch.io/" target="_blank"><div className="Itchio"><img src={Itchio} alt="Itchio"/></div></a>
        <a href="https://www.artstation.com/cowjs" target="_blank"><div className="ArtStation"><img src={ArtStation} alt="ArtStation"/></div></a>
        <a href="https://www.tumblr.com/blog/cowjsart" target="_blank"><div className="Tumblr"><img src={Tumblr} alt="Tumblr"/></div></a>
        <a href="https://www.instagram.com/cowjsart/" target="_blank"><div className="Instagram"><img src={Instagram} alt="Instagram"/></div></a>
        <a href="https://twitter.com/Cowjs21" target="_blank"><div className="Twitter"><img src={Twitter} alt="Twitter"/></div></a>
     </div>
 );
}