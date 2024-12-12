import nowPlayingMovies from '../Hooks/useNowPlayingMovies'
import Header from './Header'
import Maincontainer from './Main_Page_Content.jsx/MainContainer';
import SecondaryContainer from './Main_Page_Content.jsx/SecondaryContainer';
import nowPopularMovies from '../Hooks/usePopularMovies';
import nowTopRelatedMovies from '../Hooks/useTopRelatedMovies';
import nowUpcomingMovies from '../Hooks/useUpcomingMovies';

const Browse = () => {
  nowPlayingMovies();
  nowPopularMovies();
  nowTopRelatedMovies();
  nowUpcomingMovies();

  return (
    <div>
      <Header/>
      <Maincontainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse;