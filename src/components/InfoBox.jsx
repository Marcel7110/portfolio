import { IoMdMail } from "react-icons/io";
import { FaGithub } from 'react-icons/fa'
import { CSSTransition } from 'react-transition-group'

const InfoBox = ({ins}) => {
    return ( 
        <CSSTransition classNames='tr_box' unmountOnExit timeout={3000} in={ins}>
            <div className="info-box border">
                <ul>
                    <li>
                        <IoMdMail alt='email'/>
                        marcel.pikul@gmail.com
                    </li>
                    <li>
                        <FaGithub alt='github'/>
                        <a href="https://github.com/Marcel7110" target="_blank">Github</a>
                    </li>
                </ul>
            </div>
        </CSSTransition>
     );
}
 
export default InfoBox;