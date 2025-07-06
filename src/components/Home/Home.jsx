import Banner from '../Banner/Banner';
import ActiveGardeners from '../../Pages/ActiveGardeners';
import Categories from '../../Pages/Categories';
import TopTrending from '../../Pages/TopTrending';

const Home = () => {
  return (
    <div>
      <Banner />
      <ActiveGardeners />
      <TopTrending />
      <Categories />
    </div>
  );
};

export default Home;
