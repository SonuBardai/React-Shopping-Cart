import Cards from "../components/Cards";
import Hero from "../components/Hero";

const Home = ({cards}) => {
    return ( <>
    <Hero />
    <Cards cards={cards} />
    </> );
}
 
export default Home;