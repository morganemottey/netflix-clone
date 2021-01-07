import React, { Component } from 'react'
import HeaderImg from '../components/HeaderImg'
import Searchbar from '../components/Searchbar'
import PosterList from '../components/PosterList'
import LoadButton from '../components/LoadButton';
import { connect } from 'react-redux'
import { getMovies } from '../actions/movies'


class HomeComponent extends Component {
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
                <PosterList movies={movies} localMovies={this.props.localMovies}/>
                <LoadButton 
                  onButtonClick={this.props.onButtonClick}
                  loading={loading}/>
            </div>
        )
    }
}
const mapStateToProps = state => {
  return {
    localMovies: state.movies.movies
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getMovies: () => dispatch(getMovies())
  }
}
const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent)

export { Home }
