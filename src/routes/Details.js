import React, { Component } from 'react'
import Spinner from '../components/Spinner'
import ActorList from '../components/ActorList'
import HeaderDetails from '../components/HeaderDetails'
import img from '../assets/images/Fast_small.jpg'
const actors = [
    {
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
    },
]
export default class Details extends Component {
    render() {
        return (
            <div>
                {
                    this.props.loading ? (
                        <Spinner/>
                    ) : (
                        <>
                        <HeaderDetails 
                            mTitle={'toto'}
                            mDesc={'tata'}
                            imgSrc={img}
                            runtime={'10'}
                            revenue={'12'}
                            status={'status'}
                            vote={'vote'}
                    />
                    <ActorList actors={actors} />
                    </>
                    )
                }
            </div>
        )
    }
}
