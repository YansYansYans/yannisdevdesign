import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import { makeStyles } from '@material-ui/core/styles';
import Button2 from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Greeting() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              {" "}
              {greeting.title}
              {" "}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="CONTACT" href="#contact" />
              <Button2 variant="contained" color="primary" style={{ backgroundColor: '#1565C0', height: '36px', width: '100px', marginTop: '20px', marginLeft: '5px' }} onClick={handleClickOpen} text="TARIFS">
                Tarif
              </Button2>

              <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                  <Toolbar style={{ backgroundColor: '#1565C0' }}>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                      <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                      Mes Tarifs
                    </Typography>
                  </Toolbar>
                </AppBar>
                <List style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Card style={{ width: '345px', margin: '10px' }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="HTML CSS"
                        height="140"
                        image={img1}
                        title="Site Web"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Site Web
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Création de Site Web Basic (exemple : Portfolio / BookWeb / Blog / Vitrine)
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button2 size="small" color="primary">
                        A partir de 100€
                      </Button2>
                      <Button2 size="small" color="primary">
                        HTML / CSS
                      </Button2>
                    </CardActions>
                  </Card>


                  <Card style={{ width: '345px', margin: '10px' }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Ecommerce"
                        height="140"
                        image={img2}
                        title="Ecommerce"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Site E-commerce
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Création de Site E-commerce complet avec systéme de payement PayPal, système d'Auth et ajout d'article (exemple : Commerce / Vacance / Petites Annonces) 
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button2 size="small" color="primary">
                        A partir de 500€
                      </Button2>
                      <Button2 size="small" color="primary">
                        JS / React / MongoDB
                      </Button2>
                    </CardActions>
                  </Card>


                  <Card style={{ width: '345px', margin: '10px' }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Reseau Social"
                        height="140"
                        image={img3}
                        title="Reseau Social"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Site Reseau Social
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Création de Reseau Social Web avec messagerie interne, ajout de photo et création de compte modifiable (exemple : Instagram) 
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button2 size="small" color="primary">
                        A partir de 800€
                      </Button2>
                      <Button2 size="small" color="primary">
                        JS / React / MongoDB
                      </Button2>
                    </CardActions>
                  </Card>


                  <Card style={{ width: '345px', margin: '10px' }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Refonte Design"
                        height="140"
                        image={img4}
                        title="Refonte Design"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Refonte Design
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Refonte de Design Vitrine de site existant avec SASS, framework etc
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button2 size="small" color="primary">
                        A partir de 200€
                      </Button2>
                      <Button2 size="small" color="primary">
                        CSS / SASS
                      </Button2>
                    </CardActions>
                  </Card>


                  <Card style={{ width: '345px', margin: '10px' }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="CMS"
                        height="140"
                        image={img5}
                        title="CMS"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          CMS
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Création de Site CMS avec WordPress
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button2 size="small" color="primary">
                        A partir de 300€
                      </Button2>
                      <Button2 size="small" color="primary">
                        WordPress
                      </Button2>
                    </CardActions>
                  </Card>


                  <Card style={{ width: '345px', margin: '10px' }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="SEO"
                        height="140"
                        image={img6}
                        title="SEO"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Renforcememt SEO
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Renforcememt SEO et accessibilité
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button2 size="small" color="primary">
                        A partir de 200€
                      </Button2>
                      <Button2 size="small" color="primary">
                        SEO
                      </Button2>
                    </CardActions>
                  </Card>
                </List>
              </Dialog>
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="saad sitting on table" src={require("../../assets/images/manOnTable.svg")}></img>
        </div>
      </div>
    </div>
    </Fade>
  );
}
