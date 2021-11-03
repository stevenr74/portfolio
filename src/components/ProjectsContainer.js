import React from 'react'
import grv2 from '../images/gamerecommenderv2.PNG'
import gametheory from '../images/gametheory.png'

const ProjectsContainer = (props) => {

    return (
        <div className="displayBoxContainer">
            <figure className="displayBox">
                <a href="https://stevenr74.github.io">
                    <img src={grv2} alt="Game Recommender v2"/>
                </a>
                <figcaption className="infotext">
                    Recommends games. Built using React for the frontend, Python for the database,
                    and bundled with webpack.
                </figcaption>
            </figure>
            <figure className="displayBox">
                <a href="https://stevenr74.github.io/game-theory">
                    <img src={gametheory} alt="Game Theory"/>
                </a>
                <figcaption className="infotext">
                    Uses examples to explain game theory and strategic thinking.
                </figcaption>
            </figure>
        </div>
    )
}

export default ProjectsContainer;