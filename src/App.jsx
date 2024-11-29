import './App.css'
import Body from './components/Body'
import Appstore from './app/AppStore' 
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={Appstore}>
      <Body />
    </Provider>
  )
}

export default App;
