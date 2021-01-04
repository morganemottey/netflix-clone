import React, { Component } from 'react'
import Spinner from '../components/Spinner'
import ActorList from '../components/ActorList'
import HeaderDetails from '../components/HeaderDetails'
import img from '../assets/images/Fast_small.jpg'

export default class Details extends Component {
    state = {
        actores: [{
            name: 'Julien',
        },
        {
            name: 'Tata',
        },
        {
            name: 'Titi',
        },
        {
            name: 'Tutu',
        },],
        mTitle: 'Batman',
        mDesc: 'Voici notre nouveau film Batman',
        imgSrc: `${img}`,
        runtime: '2h30',
        revenu: '$10003',
        status: 'Released',
        vote: ''
    }
    render() {
        const { actors, mTitle, mDesc , imgSrc , runtime , revenu, status , vote} = this.state;
        return (
            <div>
                {
                    this.props.loading ? (
                        <Spinner/>
                    ) : (
                        <>
                        <HeaderDetails 
                            mTitle={mTitle}
                            mDesc={mDesc}
                            imgSrc={imgSrc}
                            runtime={runtime}
                            revenue={revenu}
                            status={status}
                            vote={vote}
                    />
                    <ActorList actors={actors} />
                    </>
                    )
                }
            </div>
        )
    }
}
