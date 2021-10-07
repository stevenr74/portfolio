import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const LinkBar = (props) => {

    return (
        <div>
            <ul className="links">
                <li><a className="tile" href="https://github.com/stevenr74"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a className="tile" href="https://www.linkedin.com/in/steven-rabey-6359b11a1/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
        </div>
    )
}

export default LinkBar;