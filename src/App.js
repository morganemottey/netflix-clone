import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './routes/Home'
import './App.css'
import myImage from './assets/images/Fast_large.jpg'
import axios from 'axios'
import { API_KEY , API_URL , IMAGE_BASE_URL , BACKDROP_SIZE, POSTER_SIZE } from './config'

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
  async componentDidMount () {
    try {
        const { data : { results, page, total_pages }} = await this.loadMovies();
        console.log('res', results);
        this.setState({
          movies: results,
          loading: false,
          activePage: page,
          totalPages: total_pages,
          image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
          mTitle: results[0].title,
          mDesc: results[0].overview
        })
    } catch(e) {
      console.log('e', e);
    }
  }
  handleSearch = value => {
    console.log('handleSearch', value)
  }
  loadMore () {
    console.log('loadMore')
  }
  loadMovies () {
    const page = this.state.activePage + 1;
    const url = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=fr`;
    return axios.get(url)
  }
  render() {
    return (
      <div>
       <Header badge={this.state.badge}/>
       <Home 
       onSearchClick={this.handleSearch}
       onButtonClick={this.loadMore}
        {...this.state}
        />
       <Footer/>
      </div>
    )
  }
}

