import "./Footer.scss";
import avatar from '../../assets/images/image-avatar.png';

const Footer = () => {
    return (
        <div className="footer">
            <img src={avatar} alt="Profile image"/>
            <p>Creation of <a href="https://github.com/RajMazumder18110" target="_blank" rel="noreferrer">Raj Mazumder</a></p>
        </div>
    )
}

export default Footer;