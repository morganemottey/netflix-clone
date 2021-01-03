import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './routes/Home'
import myImage from './assets/images/Fast_large.jpg'
import mySecondImage from './assets/images/Fast_small.jpg'

import './App.css'

export default class App extends Component {
  state = {
    loading: false,
    movies: [
      {
        backdrop_path: '/static/media/Fast_large.jpg',
        id: 475557,
        overview:
          "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
        poster_path: '/static/media/Fast_second.jpg',
        title: "La Plage"
      },
      {
        backdrop_path: '/static/media/Fast_large.jpg',
          id: 475558,
          overview:
            "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
          poster_path: '/static/media/Fast_second.jpg',
          title: "Titanic"
        },
        {
          backdrop_path: '/static/media/Fast_large.jpg',
          id: 475559,
          overview:
            "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
          poster_path: '/static/media/Fast_second.jpg',
          title: "Arrete moi si tu peux !"
        }
    ],
    badge: 0,
    image: `${myImage}`,
    mTitle: 'Fast and Furious',
    mDesc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque veritatis ullam repudiandae id, ut dolores aperiam excepturi perferendis vel omnis eum rerum nemo in consequatur natus, rem optio nobis? ',
    activePage: 0,
    totalPages: 0,
    searchText: ""
  }
  render() {
    return (
      <div>
       <Header badge={this.state.badge}/>
       <Home {...this.state}/>
       <Footer/>
      </div>
    )
  }
}

