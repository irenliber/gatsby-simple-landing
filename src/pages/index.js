import React, {Component} from 'react'
import Link from 'gatsby-link'
import auto from '../assets/images/auto.jpg'
import './index.css'



class IndexPage extends Component {

  initGoogleMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

  // initMap() {
  //
  // }
  componentDidMount() {
    ymaps.ready(function () {
      const myMap = new window.ymaps.Map('map', {
        center: [55.751574, 37.573856],
        zoom: 9
      }, {
        searchControlProvider: 'yandex#search'
      })

      const myPlacemark = new window.ymaps.Placemark([55.751574, 37.573856], {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/myIcon.gif',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
      })

      myMap.geoObjects.add(myPlacemark)
    })
  }



  // componentDidMount() {
  //   this.initMap()
  // }


  render() {

    return (
      <div>
        <div className="image-container">
          <div className="overlay"/>
          <img className="full-image" src={auto}/>
          <div className="text-container">
            <h1>Автозапчасти</h1>
          </div>
        </div>
        <section id="description">
          В нашем машазине вы найдете
        </section>
        <section id="contacts">
        </section>
        <div id="map" style={{ height: '400', width: '100%'}}>
        </div>
      </div>
    )
  }
}

export default IndexPage
