import React from 'react';

class CourseRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>{this.props.course.title}</td>
                <td><button className="btn btn-danger"
                    onClick={() =>
                    {this.props.delete(this.props.course.id)}}>
                    Delete
                </button></td>
            </tr>
        )
    }
}
export default CourseRow;