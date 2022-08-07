import Footer from "./Footer";

const Card = ({ nft }) => {
    return (
        <div className="card">
            <div className="contents">
                <imgage src="" alt="nft picture" />
                <div className="content">
                    <h1>{nft.heading} #{nft.id}</h1>
                    <p>{nft.description}</p>
                </div>
                <div className="price">
                    <h3>{nft.price}ETH</h3>
                    <p>{nft.daysleft} days left</p>
                </div>
            </div>
            <hr className="border" />
            <Footer />
        </div>
    )
}

export default Card;