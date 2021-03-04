import './Oeuvre.scss'
import Vignette from '../medias/Illustrations/BloodyTasty/BeastyCrop.png';


export default function Oeuvre(props){
    return(
        <div className="Oeuvre">
            <a href="#Clickydiclick">
                <div className="Contenant">
                    <img src={Vignette} alt="Vignette" className="vignette"/>
                </div>
            </a>

        </div>
    );

}