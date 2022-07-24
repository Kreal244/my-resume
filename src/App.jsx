import './App.scss';
import Header from './Component/Header';
import Body from './Component/Body';
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import music from './ImageSource/musicBackground.mp3'
function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <ReactAudioPlayer
  src={music}
  autoPlay
/>
    </div>
  );
}

export default App;
