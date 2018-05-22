import React from 'react'
import CourseCard from '../components/CourseCard';
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import CourseEditor from './CourseEditor'
import CourseList from "./CourseList";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import ModuleEditor from "./ModuleEditor";


export default class CourseManager extends React.Component {
    render() {
        return (
            <Router>
            <div className="container-fluid">
                <h1>Course Manager</h1>
                <Route path="/courses"
                       component={CourseList}>
                </Route>
                <Route path="/course/:courseId"
                       component={CourseEditor}>
                </Route>

                <Route path="/course/:courseId/module/:moduleId"
                       component={ModuleEditor}>
                </Route>
                {/*<Route path={"/examples"}>*/}
                    {/*<div>*/}
                        {/*<LessonTabs/>*/}
                        {/*<div className='card-deck'>*/}
                            {/*<CourseCard/>*/}
                            {/*<CourseCard/>*/}
                            {/*<CourseCard/>*/}
                            {/*<CourseCard/>*/}
                            {/*<CourseCard/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</Route>*/}
            </div>
            </Router>
        )
    }
}