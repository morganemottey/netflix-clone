import React, { Component } from 'react'
import HeaderImg from '../components/HeaderImg'
import Searchbar from '../components/Searchbar'
import PosterList from '../components/PosterList'
import LoadButton from '../components/LoadButton';

const movies = [
    {
      backdrop_path: ".images/Fast_large.jpg",
      id: 475557,
      overview:
        "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
      poster_path: ".images/Fast_large.jpg",
      title: "La Plage"
    },
    {
        backdrop_path: ".images/Fast_large.jpg",
        id: 475558,
        overview:
          "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
        poster_path: ".images/Fast_large.jpg",
        title: "Titanic"
      },
      {
        backdrop_path: ".images/Fast_large.jpg",
        id: 475559,
        overview:
          "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
        poster_path: ".images/Fast_large.jpg",
        title: "Arrete moi si tu peux !"
      }
  ];

export default class Home extends Component {
    render() {
      const { image } = this.props;
        return (
            <div>
              <Searchbar/>
               <HeaderImg
                  title="Fast and furioous"
                  overview="Loremmmmmmmemememem mempoadhoaufgulf"
                  imgScr={image}></HeaderImg>
                <PosterList movies={movies}/>
                <LoadButton loading={false}/>
            </div>
        )
    }
}
