import './Footer.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faPlus, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSkype, faCodepen, faGithub } from "@fortawesome/free-brands-svg-icons";

const phoneIcon = <FontAwesomeIcon icon={faPhone} />
const EnvelopeIcon = <FontAwesomeIcon icon={faEnvelope} />
const plusIcon = <FontAwesomeIcon icon={faPlus} />
const copyrightIcon = <FontAwesomeIcon icon={faCopyright} />
const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />
const skypeIcon = <FontAwesomeIcon icon={faSkype} />
const codepenIcon = <FontAwesomeIcon icon={faCodepen} />
const githubIcon = <FontAwesomeIcon icon={faGithub} />

const Footer = (props) => {
  return ( 
    <div className="footer">
      <div className="Container footer-flex">
        <div className="Grid-2">
            <div className="icon">{phoneIcon}</div>
            <h1 className="title">Call</h1>
            <p className="subTitle">{props.phone}</p>
        </div>
        <div className="Grid-2">
            <div className="icon">{EnvelopeIcon}</div>
            <h1 className="title">Email</h1>
            <p className="subTitle">{props.email}</p>
        </div>
        <div className="Grid-2">
            <div className="icon">{plusIcon}</div>
            <h1 className="title">Follow me on</h1>
            <div className="subTitle media-flex">
                <a href={props.linkedin}>{linkedinIcon}</a>
                <a href={props.skype}>{skypeIcon}</a>
                <a href={props.codepen}>{codepenIcon}</a>
                <a href={props.github}>{githubIcon}</a>
            </div>
        </div>
        <div className="Grid-2">
            <div className="icon">{copyrightIcon}</div>
            <h1 className="title">Go My Code feb-21</h1>
            <p className="subTitle">Recreated by Me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer