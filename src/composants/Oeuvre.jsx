import './Oeuvre.scss';
import React from 'react';
import { motion } from "framer-motion";
import { Backdrop } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));
    
export default function Oeuvre({oeuvre,vignette}){
    const classes = useStyles();
    const [ouvrir, setOuvrir] = React.useState(false);
    const gererFermer = () => {
        setOuvrir(false);
    };
    const gererBascule = () => {
     setOuvrir(!ouvrir);
    }; 
        return(
         <div className="Oeuvre">
            <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="Contenant" >
                <img src={vignette} alt="Vignette" className="vignette" onClick={gererBascule}/>
                </motion.div>
                <Backdrop className={classes.backdrop} open={ouvrir} onClick={gererFermer} >
                    <img src={oeuvre} alt="Grand" className="Oeuvre"/>
                </Backdrop> 
        </div>
    );
    
    
}