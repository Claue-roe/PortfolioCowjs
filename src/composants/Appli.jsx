import Entete from './Entete';
import Nav from './Nav';
import EnConstruction from './EnConstruction';
import Illustrations from './Illustrations';
import JeuxVideo from './JeuxVideo';
import Live2D from './Live2D';
import Apropos from './Apropos';
import PiedPage from './PiedPage';
import {Switch,Route} from 'react-router-dom';
import './Appli.scss';

export default function Appli() {
  return (
    <div className="Appli">
        <Entete />
        <Nav />
        <div className="contenu">
          <Switch>
            <Route path="/illustrations" component={Illustrations}/>
            <Route path="/jeux-video" component={JeuxVideo}/>
            <Route path="/live-2d" component={Live2D}/>
            <Route path="/en-construction" component={EnConstruction}/>
          </Switch>
        </div>
        <PiedPage/>
    </div>
  );
}
