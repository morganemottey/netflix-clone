import React from 'react'
import Actor from './Actor'
import img from '../assets/images/Fast_small.jpg'
import '../css/ActorList.css'

const ActorList = (props) => {
    const renderActor = () => {
        return props.actors.map((actor,i) => {
            const imgSrc = `${img}`
            return (
                <Actor
                    key={i}
                    imgSrc={imgSrc}
                    name={actor.name}
                    />
            )
        })
    }
    return (
        <div className="actorList">
            <h3 className="actorList--title"> ACTEURS </h3>
            <div className="actorList--grid">{renderActor()}</div>
        </div>
    )
}

export default ActorList
