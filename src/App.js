import { useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';
import Body from './component/Body';
import Footer from './component/Footer';
import Navbar from './component/Navbar';

function App() {
  const progress = useSelector(state=>state.progress) ;
  const apiKey = process.env.REACT_APP_ANIME_API ;
  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height = {4}
      />
      <Navbar/>
      <Body apiKey ={apiKey}/>
      <Footer/>
    </>
  );
}

export default App;
