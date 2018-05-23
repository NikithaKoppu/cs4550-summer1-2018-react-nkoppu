import React from 'react'
import CourseEditor from './CourseEditor'
import CourseList from "./CourseList";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import ModuleEditor from "./ModuleEditor";


export default class CourseManager extends React.Component {
    render() {
        return (
            <Router>
            <div className="container-fluid">
                <h2>Course Manager</h2>
                <Route path="/courses"
                       component={CourseList}>
                </Route>
                <Route path="/course/:courseId"
                       component={CourseEditor}>
                </Route>
                <Route path="/course/:courseId/module/:moduleId"
                       component={ModuleEditor}>
                </Route>
            </div>
            </Router>
        )
    }
}