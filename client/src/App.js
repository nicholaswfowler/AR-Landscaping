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
      const next = document.querySelector('#next-btn')
      const list = document.querySelector('#item-list')
      const prev = document.querySelector('#prev-btn')
      const itemWidth = 300
      const padding = 10

      prev.addEventListener('click',()=>{
      list.scrollLeft -= (itemWidth + padding)
      })
      next.addEventListener('click',()=>{
      list.scrollLeft += (itemWidth + padding)}) 
    });



  return (
      <div id="content">
        <div className="container">
        <h1 className='about-us'>About Us
          <p id='about-desc'>
            2 young men that graduated from Oakmont Regional High School together decided to capitalize on a dream.
            The dream was a simple and honest one. A movement to make people smile when they look at their property.
              Our unique personalities, dedication to improvement, and our hunger to leap on an opportunity led us to
              establish this company, A&R Lawn Care. Established only in 2023, we are new to some things, but we are
                veterans at hard work, and professional lawn care  technicians. While we take our baby steps on the path
                of ambition, we would like to say thank you to everyone who has and will support us.
          </p>
        </h1>

          <div className="carousel-view">    
          <button id="prev-btn" className="prev-btn">
            <svg viewBox="0 0 512 512" width="20" title="chevron-circle-left">
              <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z" />
            </svg>
          </button>
          
            <div id="item-list" className="item-list"> </div>
            <button id="next-btn" className="next-btn">
              <svg viewBox="0 0 512 512" width="20" title="chevron-circle-right">
                <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
              </svg>
            </button>

            </div>
        </div>
        <h1 className='services'>Services
          <p id='quote'>All Quotes Are Free, Continue Scrolling To Get Started!</p>
          <h2 className='service'>Mowing:
            <p className='service-desc'> 
              In Massachusetts, the best plan for the health of your lawn is to start mowing in the spring once the grass
              grows to 3 or 4 inches. Once the season hits we will mow your lawn to a healthy height of 3 inches and
              maintain it all year.
            </p>
          </h2>
          <h2 className='service'>Weed Control:
            <p className='service-desc'>
              We are careful and precise with our weedeating, so you will never walk outside to a beaten up  fence or siding.
            </p>
          </h2>
          <h2 className='service'>Cleanups:
            <p className='service-desc'>
              Our fall cleanup offers leaf removal, edging, and aeration. For spring cleanups we offer dethatching,
              edging and branch trimming. All of these are crucial for your lawn's overall health and beauty.
            </p>
          </h2>
          <h2 className='service'>Trimming and Shaping:
            <p className='service-desc'>
              We can keep your horticulture at a maintainable height!
            </p>
          </h2>
          <h2 className='service'>Coming Soon:
            <ul className='service-desc'>
              <li>Powerwashing</li>
              <li>Softwashing</li>
              <li>Fertilization</li>
              <li>Chemical Weed Control</li>
              <li>Mosquito Maintenance</li>
            </ul>
          </h2>
        </h1>
        <h1 id='request-quote'>Request A Free Quote
        <form id="contact-form">
          <div class="field">
            <label for="from_name">Name: </label>
            <input type="text" name="from_name" id="from_name"></input>
          </div>
          <div class="field">
            <label for="phone">Phone Number: </label>
            <input type="text" name="phone" id="phone"></input>
          </div>
          <div class="field">
            <label for="reply_to">Email: </label>
            <input type="text" name="reply_to" id="reply_to"></input>
          </div>
          <div class="field">
            <label for="address">Address: </label>
            <input type="text" name="address" id="address"></input>
          </div>
          <div class="field">
            <label for="service_type">Service: </label>
            <input type="text" name="service_type" id="service_type"></input>
          </div>
          <div class="field">
            <label for="message">Message: </label>
            <textarea type="text" name="message" id="message"></textarea  >
          </div>
          <input type="submit" id="button" value="Request Quote" ></input>
        </form>
        </h1>
      </div>
  ); 
}

export default App;
