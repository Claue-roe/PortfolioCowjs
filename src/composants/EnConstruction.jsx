import './EnConstruction.scss';
import ConstructionFable from '../medias/Fable/ConstructionFable.png';

export default function EnConstruction(props){
    return(
        <div className="EnConstruction">
            <img src={ConstructionFable} alt="En construction" className="ConstructionImg"/>
        </div>
    );

}