import react from 'react'
import Bonless from './bonless'
import Break from './breakfast'
import Chicken from './chicken'
import Cook from './cook'
import './css/list.css'
import Cuts from './cuts'
import Egg from './eggs'
import Fish from './fish'
import Kabab from './kabab'
import Masala from './meat-masala'
import Mutton from './mutton'
import News from './news'
import Plant from './plant-meat'
import Sellers from './sellers'
import Selller from './sellers'
import Spreads from './spreads'
import Prawns from './sprons'
import Today from './today'
import Carousel from 'react-bootstrap/Carousel';

function List() {
  return (

    <>
      <div className='containerr'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height={450} width={1400} src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63630e9d6ba0e"
              alt="First slide"
            />
            <Carousel.Caption>

              <p>Offer</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height={450}
              width={1400}
              src="https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34b8cba7db"
              alt="Second slide"
            />

            <Carousel.Caption>
              <p>Offer</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
        <div className='list'>
          <div className='a'>   <h3>Shop by categories</h3>
            <p>Freshest meats just for you</p></div>
          <div className='top'><Today /><Chicken /><Fish /><Mutton /></div>
          <div className='top'><Cook /><Prawns /><Cuts /><Spreads /></div>
          <div className='top'><Egg /><Kabab /><Plant /><Masala /></div>
        </div>
        <div className='a'> <h2>Best Sellers </h2>
          <Carousel>
            <Carousel.Item><Sellers /></Carousel.Item>
            <Carousel.Item><Sellers /></Carousel.Item>
            <Carousel.Item><Sellers /></Carousel.Item>
          </Carousel> </div>
        <div className='a'> <h2>Bonless Cuts </h2>
        <Carousel>
            <Carousel.Item><Bonless /></Carousel.Item>
            <Carousel.Item><Bonless /></Carousel.Item>
            <Carousel.Item><Bonless /></Carousel.Item>
          </Carousel>   </div>

        <div className='list'>
          <div className='a'>   <h3>Shop by categories</h3>
            <p>Freshest meats just for you</p></div>
          <div className='top'><Today /><Chicken /><Fish /><Mutton /></div>
          <div className='top'><Cook /><Prawns /><Cuts /><Spreads /></div>
          <div className='top'><Egg /><Kabab /><Plant /><Masala /></div>
        </div>

        <div className='a'> <h2>Breakfast & Snacking Specials </h2>
      <Carousel>
            <Carousel.Item><div className="d-block w-100"><Break /></div></Carousel.Item>
            <Carousel.Item><Break /></Carousel.Item>
            <Carousel.Item><Break /></Carousel.Item>
          </Carousel>   </div>
       
      </div>
    </>
  )
}


export default List