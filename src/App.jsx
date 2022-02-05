import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import PhotoViewer from './components/PhotoViewer'
import StartFromIncrement from './components/StartFromIncrement'
import {base64Images} from './utils/base64Images'
function App() {
  const imageList = [
          {url: 'https://i.ibb.co/wBYDxLq/beach.jpg', title: 'Beach Houses'},   
          {url: 'https://i.ibb.co/gM5NNJX/butterfly.jpg', title: 'Butterfly'},
          {url: 'https://i.ibb.co/10fFGkZ/car-race.jpg', title: 'Car Racing'},
          {url: 'https://i.ibb.co/ygqHsHV/coffee-milk.jpg', title: 'Coffee with Milk'},
          {url: 'https://i.ibb.co/7XqwsLw/fox.jpg', title: 'Fox'},
          {url: 'https://i.ibb.co/L1m1NxP/girl.jpg', title: 'Mountain Girl'},
          {url: 'https://i.ibb.co/wc9rSgw/desserts.jpg', title: 'Desserts Table'},
          {url: 'https://i.picsum.photos/id/1009/5000/7502.jpg?hmac=Uj6crVILzsKbyZreBjHuMiaq_-n30qoHjqP0i7r30r8', title: 'Surfer'},
          {url: 'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk', title: 'On a Lac'},
          {url: 'https://i.ibb.co/wdrdpKC/kitten.jpg', title: 'Kitten'},
          {url: 'https://i.ibb.co/dBCHzXQ/paris.jpg', title: 'Paris Eiffel'},
          {url: 'https://i.ibb.co/JKB0KPk/pizza.jpg', title: 'Pizza Time'},
          {url: 'https://i.ibb.co/VYYPZGk/salmon.jpg', title: 'Salmon '},
          base64Images[0],
        ];
  const options = {};
  // options.title = false;
  // options.share = false;
  // options.transformer = "depth";
  // options.spancount = 2
  options.maxzoomscale = 3;
  options.compressionquality = 0.6;
  options.movieoptions = {mode: 'portrait', imagetime: 3};
  options.backgroundcolor = 'ivory';
  const max = imageList.length;
  const [mode, setMode] = useState("");
  const [startFrom, setStartFrom] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [imageIndex, setImageIndex] = useState(-1);
  const [message, setMessage] = useState("");

  const handleOnExit = async (args) => {
    const result = args[0];
    if(args[1] != null) setImageIndex(args[1]);
    if(args[2] != null) setMessage(args[2]);
  }
  
  const handleIncrement = () => {
    setTimeout(
      () =>  {
        if(startFrom < max) {
          setStartFrom(startFrom => startFrom + 1);
        } else {
          setStartFrom(0);
        }
        resetOuput();
      },
      500
    );
  
  }

  const handleDecrement = () => {
    setTimeout(
      () =>  {
        if(startFrom > 1) {
          setStartFrom(startFrom => startFrom - 1);
        } else {
          setStartFrom(0);
        }
        resetOuput();
      },
      500
    );
  }

  const resetOuput = () => {
    if(imageIndex > -1 || message.length > 0) {
      setImageIndex(-1);
      setMessage("");
    }
  }
  const changeMode = (mode) => {
    if(mode.length === 0 ) {
      setMode("one");
      setStartFrom(0);
      setIsStart(true);
    } else if(mode === 'one') {
      setMode("gallery");
      setStartFrom(0);
      setIsStart(false);    
      resetOuput();
    } else if(mode === 'gallery'){
      setMode("slider");
      setIsStart(true);    
      resetOuput();
    } else if(mode === 'slider') {
      setMode("one");
      setStartFrom(0);
      resetOuput();
    }
  }
  const renderOutput = () => {
    if(imageIndex != -1 || message.length > 0) {

      if(imageIndex != -1) {
        return (
          <div>
            <p>last selected image {imageIndex}</p>
          </div>
        )
      } else {
        return (
          <div>
            <p>Error: {message}</p>
          </div>
        )
      }
    } else {
      return null;
    }

  }
  const renderComponent = () => {
    if(imageIndex === -1 && message.length === 0) {
      let attachment = {};
      if( mode.length === 0 ) return null;
      if (mode === "one" || mode === "slider") {
        if(startFrom == null) return null;
        options.title = false;
        attachment.startFrom = startFrom;
      } else if (mode === "gallery") {
        options.title = true;
        options.spancount = 3;
      }
      attachment.imageList = imageList;
      attachment.mode = mode;
      attachment.options = options;
      return (
          <PhotoViewer attachment={attachment} onExit={handleOnExit}></PhotoViewer>
      )
    } else {
      return null;
    }  
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <div>
          <button type="button" onClick={() => changeMode(mode)}>
            mode is: {mode}
          </button>
          {isStart &&
            <StartFromIncrement startFrom={startFrom} onAddIncrement={handleIncrement}
                onSubstractIncrement={handleDecrement} />
          }
          {renderOutput()}
        </div>
        {renderComponent()}
      </header>
    </div>
  )
}

export default App
