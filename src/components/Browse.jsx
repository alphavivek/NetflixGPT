import nowPlayingMovies from '../Hooks/useNowPlayingMovies'
import Header from './Header'
import Maincontainer from './Main_Page_Content.jsx/MainContainer';
import SecondaryContainer from './Main_Page_Content.jsx/SecondaryContainer';
import nowPopularMovies from '../Hooks/usePopularMovies';
import nowTopRelatedMovies from '../Hooks/useTopRelatedMovies';
import nowUpcomingMovies from '../Hooks/useUpcomingMovies';
import GPTSearchPage from './GPT/GPTSearchPage';
import { useSelector } from 'react-redux';

const Browse = () => {
  nowPlayingMovies();
  nowPopularMovies();
  nowTopRelatedMovies();
  nowUpcomingMovies();

  const searchGPTSearch = useSelector(store => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {
        searchGPTSearch ?
          <GPTSearchPage />
          :
          <>
            <Maincontainer />
            <SecondaryContainer />
          </>
      }
    </div>
  )
}

export default Browse;