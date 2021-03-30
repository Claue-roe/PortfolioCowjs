import "./Nav.scss";
import React, { Component } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import ResponsiveMenu from "react-responsive-navbar";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

export default class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <ResponsiveMenu
          menuOpenButton={<MenuRoundedIcon />}
          menuCloseButton={<CloseRoundedIcon />}
          changeMenuOn="500px"
          largeMenuClassName="large-menu"
          smallMenuClassName="small-menu"
          menu={
            <ul>
              <NavLink exact to="/Illustrations" activeClassName="navActive">
                <motion.li
                  whileHover={{
                    scale: 0.9,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  Illustrations
                </motion.li>
              </NavLink>
              <NavLink to="/jeux-video" activeClassName="navActive">
                <motion.li
                  whileHover={{
                    scale: 0.9,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  Jeux Vidéo
                </motion.li>
              </NavLink>
              <NavLink to="/live-2d" activeClassName="navActive">
                <motion.li
                  whileHover={{
                    scale: 0.9,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  Live 2D
                </motion.li>
              </NavLink>
              <NavLink to="/a-propos" activeClassName="navActive">
                <motion.li
                  whileHover={{
                    scale: 0.9,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  À propos
                </motion.li>
              </NavLink>
            </ul>
          }
        />
      </div>
    );
  }
}
