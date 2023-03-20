import {Link} from "react-router-dom"

function About() {
    return <div className="about">
        <div className="about__title">switching of these cats is implemented using SPA of ReactJS</div>
            <nav className="about__description">
                <li><Link to="/">1</Link></li>
                <li><Link to="/cat2">2</Link></li>
                <li><Link to="/cat3">3</Link></li>
                <li><Link to="/cat4">4</Link></li>
                <li><Link to="/cat5">5</Link></li>
            </nav>
    </div>
}

export { About }