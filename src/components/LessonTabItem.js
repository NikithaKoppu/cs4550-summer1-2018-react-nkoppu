import React from 'react';
import {Link} from 'react-router-dom'

export default class LessonTabItem
    extends React.Component {
    constructor(props) {
        super(props);
    }
    confirmDelete(lessonId) {
        if (window.confirm("Do you want to delete this?")) {
            this.props.delete(lessonId)
        }
    }
    render() {
        return (
            <li className="nav-item">
                <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}/widget}`}>
                    {this.props.lesson.title}
                </Link>
                <span className='float-right'>
                    <i className="fa fa-trash" onClick={() => {
                        this.confirmDelete(this.props.lesson.id);
                    }}/>
                    <i className="fa fa-pencil"/>
                </span>
            </li>
        );}}
