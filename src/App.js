import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import MatchesRow from './components/MatchesRow';
import SelectionTab from './components/SelectionTab';
import NewsSection from './components/NewsSection';

function App() {


  const articles = [
    {
      title : "FC Bayern signs CR7",
      tag : "SIGNING",
      imgSource : "https://static.bongda24h.vn/medias/original/2022/07/21/ronaldo_2107220035.jpeg"
    },
    {
      title : "FC Bayern signs CR7",
      tag : "SIGNING",
      imgSource : "https://static.bongda24h.vn/medias/original/2022/07/21/ronaldo_2107220035.jpeg"
    },
    {
      title : "FC Bayern signs CR7",
      tag : "SIGNING",
      imgSource : "https://static.bongda24h.vn/medias/original/2022/07/21/ronaldo_2107220035.jpeg"
    },
    {
      title : "FC Bayern signs CR7",
      tag : "SIGNING",
      imgSource : "https://static.bongda24h.vn/medias/original/2022/07/21/ronaldo_2107220035.jpeg"
    },
    {
      title : "FC Bayern signs CR7",
      tag : "SIGNING",
      imgSource : "https://static.bongda24h.vn/medias/original/2022/07/21/ronaldo_2107220035.jpeg"
    }
  ]
  const matches = [
    {
      teamLogo : "https://seeklogo.com/images/B/bayer-04-leverkusen-logo-CD21122164-seeklogo.com.png",
      score : "2-1",
    },
    {
      teamLogo : "https://logodownload.org/wp-content/uploads/2017/02/bvb-borussia-dortmund-logo-1.png",
      score : "6-3",
    },
    {
      teamLogo : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Eintracht_Frankfurt_Logo.svg/2048px-Eintracht_Frankfurt_Logo.svg.png",
      score : "1-1",
    },
    {
      teamLogo : "https://assets.stickpng.com/images/580b57fcd9996e24bc43c4d8.png",
      score : "6-3",
    },
    {
      teamLogo : "https://logodownload.org/wp-content/uploads/2017/02/manchester-city-fc-logo-escudo-badge.png",
      score : "6-3",
    },
    {
      teamLogo : "https://upload.wikimedia.org/wikipedia/hif/f/ff/Manchester_United_FC_crest.png",
      score : "6-3",
    },
    {
      teamLogo : "https://logodownload.org/wp-content/uploads/2017/02/bvb-borussia-dortmund-logo-1.png",
      score : "6-3",
    },
    {
      teamLogo : "https://logodownload.org/wp-content/uploads/2017/02/bvb-borussia-dortmund-logo-1.png",
      score : "8/09/23",
    }
  ]

  return (
    <div>
    <Header />
    <NavBar />
    <div className='bg-slate-900 px-20'>
    <HeroSection/>
    <MatchesRow matches={matches}/>
    <div className='py-3'>
    <SelectionTab></SelectionTab>
    </div>
    <NewsSection articles={articles}></NewsSection>
    </div>
    </div>
  );
}

export default App;
