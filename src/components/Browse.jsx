import nowPlayingMovies from '../Hooks/useNowPlayingMovies'
import Header from './Header'
import Maincontainer from './Main_Page_Content.jsx/MainContainer';
import SecondaryContainer from './Main_Page_Content.jsx/SecondaryContainer';

const Browse = () => {
  nowPlayingMovies();
  return (
    <div>
      <Header/>
      <Maincontainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse;