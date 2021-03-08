import './Nav.scss';
import FableHeader from '../medias/Fable/FullShinyFableHeader.png';
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import ResponsiveMenu from 'react-responsive-navbar';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

export default class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <img className="FableHeader" src={FableHeader} alt="Mascotte" />
        <ResponsiveMenu
          menuOpenButton={<MenuRoundedIcon />}
          menuCloseButton={<CloseRoundedIcon />}
          changeMenuOn="500px"
          largeMenuClassName="large-menu"
          smallMenuClassName="small-menu"
          menu={
            <ul>
              <NavLink to="/Illustrations" activeClassName="navActive" exact><li>Illustrations</li></NavLink>
              <NavLink to="/jeux-video" activeClassName="navActive"><li>Jeux Vidéo</li></NavLink>
              <NavLink to="/live-2d" activeClassName="navActive"><li>Live 2D</li></NavLink>
              <NavLink to="/en-construction" activeClassName="navActive"><li>À propos</li></NavLink>
            </ul>
          }
        />
      </div>
    );
  }
}
