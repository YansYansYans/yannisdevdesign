import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import { Fade } from "react-reveal";

export default function Contact() {
    return (
        <Fade bottom duration={1000} distance="20px">
        <div className="main contact-margin-top" id="contact">
            <div className="contact-div-main">
                <div className="contact-header">
                    <h1 className="heading contact-title">Une <span>question</span>, un <span>projet</span>, un <span>partenariat</span>? Contactez-moi !</h1>
                    <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>

                    <div className="contact-text-div">
                        <a className="contact-detail" href={"tel:" + contactInfo.number}>{contactInfo.number}</a>
                        <br/><br/>
                        <a className="contact-detail-email"
                           href={"mailto:" + contactInfo.email_address}>{contactInfo.email_address}</a>
                        <br/><br/>
                        <SocialMedia/>
                    </div>
                </div>
                <div className="contact-image-div">
                <form action="https://formspree.io/" method="POST">
                    <div className="inputBox">
                    <input type="text" name="name" placeholder="Nom"/>
                    <input type="email" name="_replyto" placeholder="Email"/>
                    </div>
                    <div className="inputBox">
                    <input type="tel" name="tel" placeholder="Téléphone"/>
                    <input type="text" name="objet" placeholder="Objet"/>
                    </div>
                    <div className="inputBox">
                    <textarea className="textarea" type="text" name="message" rows="9" placeholder="Votre message..." />
                    </div>
                    <input type="submit" class="send" value="Envoyer"/>
                </form>
                </div>
            </div>
        </div>
        </Fade>
    );
}
