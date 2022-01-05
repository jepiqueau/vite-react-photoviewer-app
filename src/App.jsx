import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import PhotoViewer from './components/PhotoViewer'

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
        ];
  const options = {};
    // options.title = false;
    // options.share = false;
    // options.transformer = "depth";
    // options.spancount = 2
    options.maxzoomscale = 3;
    options.compressionquality = 0.6;
    options.movieoptions = {mode: 'portrait', imagetime: 3};

  const [mode, setMode] = useState("One");
  const changeMode = (mode) => {
    if(mode === 'One') setMode("Gallery");
    if(mode === 'Gallery') setMode("One");
  }
  const renderComponent = () => {
    let attachment = {};
    if (mode === "One") {
      options.title = false;
      attachment.imageList = [imageList[0]];
      attachment.options = options;
      return (
        <PhotoViewer attachment={attachment} ></PhotoViewer>
      )
    } else if (mode === "Gallery") {
      options.title = true;
      options.spancount = 3;
      attachment.imageList = imageList;
      attachment.options = options;
      return (
        <PhotoViewer attachment={attachment} ></PhotoViewer>
      )
    } else {
      return null
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => changeMode(mode)}>
            mode is: {mode}
          </button>
        </p>
        {renderComponent()}
      </header>
    </div>
  )
}

export default App
