import React, { useState, useEffect } from "react"
import axios from "axios";
import useCourse from "../CustomHooks/useCourse";
const Course = ({ match }) => {
    const [comment, setComment] = useState("Sin comentarios")
    const course = useCourse(match.params.id) 
    const myComment = e => {
      setComment(e.target.value)
    }
    return (
        <div className="ed-grid m-grid-3">
        {
            course ? (
                <div className="ed-grid">
                    <div className="ed-grid l-block">
                      <h1 className="m-cols-3"><br/> {course.title} </h1>
                      <img className="m-cols-1" src={course.image} alt={course.title}/>
                      <h3 className="m-cols-2">Profesor(a): {course.professor} </h3>
                    </div>
                    <div className="ed-grid">
                      <h2>Escribe un comentario</h2>
                      <input type="text" placeholder="Escribe ..." onChange={myComment.bind(this)}/>
                      <p><br/>{comment}</p>
                    </div>
                </div>
                ) : 
                 <h1>El curso no existe</h1>        
        }
        </div>
    )
}
export default Course