import nft from '../../assets/data.json';
import Card from '../../components/Card/Card';

const Home = () => {
    return (
        <Card nft={nft}/>
    )
}

export default Home;