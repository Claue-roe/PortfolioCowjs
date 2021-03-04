import './Contenu.scss';
import Oeuvre from "./Oeuvre";

export default function Contenu(props){
    return(
        <div className="Contenu">
            <Oeuvre />
            <Oeuvre />
            <Oeuvre />
            <Oeuvre />
        </div>
    );
}