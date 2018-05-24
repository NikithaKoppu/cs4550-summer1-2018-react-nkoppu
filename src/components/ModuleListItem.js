import React from 'react';
import {Link} from 'react-router-dom'

export default class ModuleListItem
    extends React.Component {
    constructor(props) {
        super(props);
    }
    confirmDelete(moduleId) {
        if (window.confirm("Do you want to delete this?")) {
            this.props.delete(moduleId)
        }
    }
    render() {
        return (
            <li className="list-group-item">
                <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}/lesson`}>
                    {this.props.module.title}
                </Link>

                <span className='float-right'>
                    <i className="fa fa-trash" onClick={() => {
                        this.confirmDelete(this.props.module.id);
                    }}/>
                    <i className="fa fa-pencil"/>
                </span>
            </li>
        );}}
