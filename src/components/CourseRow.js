import React from 'react';
import {Link} from "react-router-dom";

class CourseRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <div className="col-3 col-md-3">
                <Link to={`/course/${this.props.course.id}`}>
                     {this.props.course.title}
                </Link>
                </div>
                <div className="col-2 col-md-2">
                    <p>me</p>
                </div>
                <div className="col-3 col-md-3">
                    <p>{this.props.course.modified}</p>
                </div>
                <div className="col-3 col-md-3">
                    <button className="btn btn-danger"
                    onClick={() =>
                    {this.props.delete(this.props.course.id)}}>
                    Delete
                </button></div>
            </div>
        )
    }
}
export default CourseRow;