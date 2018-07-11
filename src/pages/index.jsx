import React, {Component} from 'react'
import Link from 'gatsby-link'
import auto from '../assets/images/auto.jpg'
import arrowDown from '../assets/images/arrow_down_white.png'
import location from '../assets/images/location_icon.svg'
import time from '../assets/images/time.png'
import email from '../assets/images/email.png'
import marker from '../assets/images/marker.png'
import phone from '../assets/images/phone.png'
import car from '../assets/images/car__.png'
import track from '../assets/images/track_.png'

import './index.css'
import initScroll from '../helpers/scrollTo'


class IndexPage extends Component {

  render() {
    return (
      <div>
        <div className="image-container">
          <div className="overlay"/>
          <img className="full-image" src={auto}/>
          <div className="text-container">
            <h1>Автозапчасти</h1>
          </div>
          <img onClick={() => initScroll('description')} className="arrow-down" src={arrowDown} />
        </div>
        <section id="description" className="description">
          <div className="container">
            <h1>В нашем магазине вы найдете:</h1>
            <div className="items-container">
              <div className="item">
                <img src={car} />
                <div className="item-text">запчасти для легковых автомобилей</div>
              </div>
              <div className="item">
                <img src={track} />
                <div className="item-text">запчасти для грузовых автомобилей</div>
              </div>
              <div className="item">
                <img src={track} />
                <div className="item-text">автомобильные масла, расходники, свечи, фильтры, тормозные колодки и т.п</div>
              </div>
              <div className="item">
                <img src={track} />
                <div className="item-text">автомобильную оптику: фары, лампы, светодиоды и т.д.</div>
              </div>

              Так же в нашем магазине вы можете заказать качественные и недорогие автостекла различных марок.</div>
          </div>
        </section>
        <section id="contacts" className="contacts">
          <div className="contacts-block">
            <div className="contacts-inner">
              <div className='contact-container'>
                <img src={marker} />
                <div className="text">п. Туртас, ул. Школьная, д. 3А</div>
              </div>
              <div className='contact-container'>
                <img src={time} />
                <div className="text">Ежедневно с 9.00 до 20.00</div>
              </div>
              <div className='contact-container'>
                <img src={email} />
                <div className="text">VOAturtas@yandex.ru</div>
              </div>
              <div className='contact-container'>
                <img src={phone} />
                <div className="text">Тел/факс: +7(34561)25-8-97</div>
              </div>
            </div>
          </div>
          <div className="map-block">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A8d77a3bcac829880e23a1c6cffe92d2012db5a3ae4f126a03046a894c6719093&amp;source=constructor"
              width="100%"
              height="600"
              style={{ border: 'none', marginBottom: '0' }}
            />
          </div>
        </section>
      </div>
    )
  }
}

export default IndexPage
