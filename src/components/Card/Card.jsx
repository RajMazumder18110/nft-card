import Footer from "../Footer/Footer";
import "./Card.scss";

import nftPic from "../../assets/images/image-equilibrium.jpg";
import etherImg from "../../assets/images/icon-ethereum.svg";
import clockImg from '../../assets/images/icon-clock.svg';
import eyeImg from '../../assets/images/icon-view.svg';

const Card = ({ nft }) => {
    return (
        <div className="card">
            <div className="contents">
                <div className="image">
                    <img className="nftImg" src={nftPic} alt="nft picture" />
                    <img src={eyeImg} alt="eye" className="eye" />
                </div>
                <div className="content">
                    <h1>{nft.heading} #{nft.id}</h1>
                    <p>{nft.description}</p>
                </div>
                <div className="content2">
                    <div className="price">
                        <img src={etherImg} alt="ether"/>
                        <h3>{nft.price} ETH</h3>
                    </div>
                    <div className="time">
                        <img src={clockImg} alt="clock" />
                        <p>{nft.daysleft} days left</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Card;