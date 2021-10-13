import React from 'react'
import grv2 from '../images/gamerecommenderv2.PNG'

const ProjectsContainer = (props) => {

    return (
        <div className="displaybox">
            <a href="https://stevenr74.github.io"><img src={grv2} alt="Game Recommender v2"/></a>
            <p className="infotext">Recommends games. Built using React for the frontend, Python for the database, and bundled with webpack.</p>
        </div>
    )
}

export default ProjectsContainer;