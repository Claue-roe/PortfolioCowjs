import Entete from './Entete';
import PiedPage from './PiedPage';
import './Appli.scss';
import Contenu from './Contenu';

export default function Appli() {
  return (
    <div className="Appli">
        <Entete />
        <Contenu />
        <PiedPage/>
    </div>
  );
}
