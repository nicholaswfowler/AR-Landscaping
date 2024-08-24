import './App.css';
import axios from 'axios';

function App() {

    axios.get("https://arlandscaping-server.onrender.com/").then((data) => {
      const images = data.data[0];
      const itemList = document.querySelector('#item-list');
      for(let i = 0; i < images.length; i++){
        const image = document.createElement('img');
        image.src = `/images/${images[i]}`;
        image.className = 'landscaping-image';
        if(itemList.childElementCount !== images.length){
          itemList.appendChild(image);
        }
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

    const apiUrl = process.env.REACT_APP_GET_IMAGES;
    console.log(apiUrl);


  return (
      <div id="content">
        <div className="container">
        <h1 className='about-us'>About Us
          <p id='about-desc'>
            We are two young men who graduated from Oakmont Regional High School and together we decided to capitalize on a dream.
            The dream is a simple and honest one, a movement to make people smile when they look at their property.
            Our unique personalities, dedication to improvement, and our hunger to leap on an opportunity led us to
            establish this company, A&R Landscaping Solutions. Established only in 2023, we are new to some things, but we are
            veterans at hard work, and professional lawn care technicians. While we take our baby steps on the path
            of ambition, we would like to say thank you to everyone who has and will support us.
          </p>
          <p id='about-desc'>
            Transform your outdoor areas with ease—let A&R Landscaping Solutions take care of the cleanup so you can enjoy a pristine 
            and beautiful environment. Contact us today to schedule your cleanup service and experience the difference of a 
            well-maintained property!
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
              grows to 3 or 4 inches. Once the season hits we will transform your lawn into a lush, immaculate landscape with our 
              top-notch mowing services. At A&R, we understand that a well-manicured lawn is the cornerstone of a 
              beautiful property. We are dedicated to delivering precision mowing that enhances the health and 
              appearance of your lawn, ensuring your outdoor space looks its best year-round.
            </p>
          </h2>
          <hr></hr>
          <h2 className='service'>Weed Control:
            <p className='service-desc'>
              Achieve a pristine, weed-free landscape with our professional weed control services at A&R. 
              Weeds can be more than just an eyesore; they compete with your plants for essential nutrients 
              and water, potentially harming the health and appearance of your garden or lawn. We 
              specialize in targeted weed management strategies that restore and maintain the beauty of your 
              outdoor spaces.            
            </p>
          </h2>
          <hr></hr>
          <h2 className='service'>Cleanups:
            <p className='service-desc'>
              Transform your outdoor spaces into immaculate showcases with our comprehensive cleanup services at A&R. 
              Our fall cleanup offers leaf removal, edging, and aeration. For spring cleanups we offer dethatching,
              edging and branch trimming. All of these are crucial for your lawn's overall health and beauty.
            </p>
          </h2>
          <hr></hr>
          <h2 className='service'>Trimming and Shaping:
            <p className='service-desc'>
            Enhance the beauty and precision of your outdoor spaces with our professional trimming and edging services at 
            A&R. Our dedicated team is committed to bringing meticulous attention to every detail, ensuring your garden beds, 
            lawn edges, and decorative features are impeccably maintained and aesthetically pleasing.
            </p>
          </h2>
          <hr></hr>
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
        <div id='request-quote'>
          <div id='form-content'>
            <h1>Request A Free Quote</h1>
            <div>
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
                  <textarea rows={6} type="text" name="message" id="message"></textarea  >
                </div>
                <input type="submit" id="button" value="Request Quote" ></input>
              </form>
            </div>
          </div>
        </div>
      </div>
  ); 
}

export default App;
