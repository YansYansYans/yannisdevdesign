import React from "react";
import "./Progress.css";
import { techStack } from "../../portfolio";
import { Fade } from "react-reveal";
import pc2 from "../../assets/images/pc2.png";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SlideUi from '@material-ui/core/Slide';
import Dev from "../../assets/images/dev.png";
import Design from "../../assets/images/design.png";
import Communication from "../../assets/images/communication.png";
import Seo from "../../assets/images/seo.png";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <SlideUi direction="up" ref={ref} {...props} />;
  });


export default function StackProgress() {

    const [open, setOpen] = React.useState(false);

  const [open2, setOpen2] = React.useState(false);

  const [open3, setOpen3] = React.useState(false);

  const [open4, setOpen4] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };
  


    if(techStack.viewSkillBars){
        return (
            <Fade bottom duration={1000} distance="20px">
            <div id="competence" className="skills-container">

                <div className="skills-bar">
                    <h1 className="skills-heading com">Et en <span>bref</span>, voila ce que je sais faire.</h1>
                    <div class="hero__arrow__big">
                    <button onClick={handleClickOpen}>
                        <div className="hero__arrow__block">
                        <div>
                            <img src={Dev}/>
                            <p>Web Développement</p>
                        </div>
                        </div>
                    </button>
                    <Dialog  open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
                        <DialogTitle className="dialog" id="alert-dialog-slide-title">{"Web Développement"}</DialogTitle>
                        <DialogContent className="dialog">
                        <DialogContentText className="dialog2"  id="alert-dialog-slide-description">
                            <p>Développement et programation de Front end interactif et épuré. Utilisation de framework comme React.Js et de langage comme HTML, Javascript, PHP ou SQL JS / SQL.</p>
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions className="dialog">
                        <Button onClick={handleClose} color="primary">
                            FERMER
                        </Button>
                        </DialogActions>
                    </Dialog>
                    <button onClick={handleClickOpen2}>
                        <div className="hero__arrow__block">
                        <div>
                            <img src={Design}/>
                            <p>Web Design UI/UX</p>
                        </div>
                        </div>
                    </button>
                    <Dialog open={open2} TransitionComponent={Transition} keepMounted onClose={handleClose2} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
                        <DialogTitle className="dialog" id="alert-dialog-slide-title">{"Web Design UI/UX"}</DialogTitle>
                        <DialogContent className="dialog">
                        <DialogContentText className="dialog2" id="alert-dialog-slide-description">
                        <p>Design et charte graphique à la fois réfléchie et cohérante avec au préalable une maquette sur Figma. Utilisation de SASS (scss, css).</p>
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions className="dialog">
                        <Button onClick={handleClose2} color="primary">
                            FERMER
                        </Button>
                        </DialogActions>
                    </Dialog>
                    <button onClick={handleClickOpen3}>
                        <div className="hero__arrow__block">
                        <div>
                            <img src={Seo}/>
                            <p>Réferencement SEO</p>
                        </div>
                        </div>
                    </button>
                    <Dialog open={open3} TransitionComponent={Transition} keepMounted onClose={handleClose3} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
                        <DialogTitle className="dialog" id="alert-dialog-slide-title">{"Réferencement SEO"}</DialogTitle>
                        <DialogContent className="dialog">
                        <DialogContentText className="dialog2" id="alert-dialog-slide-description">
                        <p>Renforcement du SEO grace au référencement naturelle à l'aide de mots clés et du respect des critères (images etc).</p> 
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions className="dialog">
                        <Button onClick={handleClose3} color="primary">
                            FERMER
                        </Button>
                        </DialogActions>
                    </Dialog>
                    <button onClick={handleClickOpen4}>
                        <div className="hero__arrow__block">
                        <div>
                            <img src={Communication}/>
                            <p>Communication</p>
                        </div>
                        </div>
                    </button>
                    <Dialog open={open4} TransitionComponent={Transition} keepMounted onClose={handleClose4} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
                        <DialogTitle className="dialog" id="alert-dialog-slide-title">{"Communication"}</DialogTitle>
                        <DialogContent className="dialog">
                        <DialogContentText className="dialog2" id="alert-dialog-slide-description">
                        <p>Utilisation des réseaux sociaux et autres outils de communication dans sa strategie digitale. </p>
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions className="dialog">
                        <Button onClick={handleClose4} color="primary">
                            FERMER
                        </Button>
                        </DialogActions>
                    </Dialog>
                    </div>
                </div>
            </div>
            </Fade>
        );
    }
    return null;
}
