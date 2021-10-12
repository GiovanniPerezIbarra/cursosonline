import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
const CourseCard = ({id, title, image, price, professor}) => (
    <article className="card"><br/>
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`/cursos/${id}`}>
                <img src={image} alt={title} />
            </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title}</h3>
            <p className="center">Profesor(a): {professor}</p>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="https://ed.team" target="_blank">{ `$ ${price} USD`} </a>
            </div>
        </div>
    </article>
)
CourseCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.string
}
CourseCard.defaultProps = {
    title: "No se encontró el título",
    image: "",
    price: "--",
    profesor: ""
}
export default CourseCard