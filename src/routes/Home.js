import React, { Component } from 'react'
import HeaderImg from '../components/HeaderImg'
import Searchbar from '../components/Searchbar'
import PosterList from '../components/PosterList'
import LoadButton from '../components/LoadButton';


export default class Home extends Component {
    render() {
      const { mTitle, mDesc, image, movies, loading } = this.props;
        return (
            <div>
               <HeaderImg
                  title={mTitle}
                  overview={mDesc}
                  imgScr={image}
                />
                 <Searchbar
                  onSearchClick={this.props.onSearchClick}/>
                <PosterList movies={movies}/>
                <LoadButton 
                  onButtonClick={this.props.onButtonClick}
                  loading={loading}/>
            </div>
        )
    }
}
