import React, {Component} from 'react'
import Link from 'gatsby-link'
import auto from '../assets/images/old_avto.jpg'
import arrowDown from '../assets/images/arrow_down_white.png'
import location from '../assets/images/location_icon.svg'
import clock from '../assets/images/clock-icon.png'

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
            <h1>В нашем машазине вы найдете</h1>
          </div>
        </section>
        <section id="contacts" className="contacts">
          <div className="container">
            <div className="address-container">
              <img src={location} width='50'/>
              <div className="text">
                <div>Адрес:</div>
                <div>n. Туртас, ул. Школьная, д. 3А</div>
                <div>Тел/факс: 8(34561)25-8-97</div>
                <div>email: VOAturtas@yandex.ru</div>
              </div>
            </div>
            <div className="time-container">
              <img src={clock} width='50' />
              <div className="text">
                <div> Часы работы: </div>
                <div> Ежедневно с 9.00 до 20.00</div>
              </div>
            </div>
          </div>
        </section>
        <section id="map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A8d77a3bcac829880e23a1c6cffe92d2012db5a3ae4f126a03046a894c6719093&amp;source=constructor"
            width="100%"
            height="700"
            style={{ border: 'none' }}
          />
        </section>
      </div>
    )
  }
}

export default IndexPage
