import './App.css';
import axios from 'axios';

function App() {

    axios.get("http://localhost:8080").then((data) => {
      const images = data.data[0];
      const itemList = document.querySelector('#item-list');
      for(let i = 0; i < images.length; i++){
        const image = document.createElement('img');
        image.src = `/images/${images[i]}`;
        image.className = 'landscaping-image';
        itemList.appendChild(image);
      }
    });

  return (
      <div id="content">
        <div className="container">
          <div className="carousel-view">
            
            <button id="prev-btn" className="prev-btn"> </button>
            
            <div id="item-list" className="item-list"> </div>
            <button id="next-btn" className="next-btn"> </button>
            </div>
        </div>
      </div>
  );
}

export default App;
