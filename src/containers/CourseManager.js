import React from 'react'
import CourseEditor from './CourseEditor'
import CourseList from "./CourseList";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ModuleEditor from "./ModuleEditor";
import {App} from '../container/widgetList'


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
                <Switch>
                <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId/widget"
                       component={App}>
                </Route>
                </Switch>
            </div>
            </Router>
        )
    }
}