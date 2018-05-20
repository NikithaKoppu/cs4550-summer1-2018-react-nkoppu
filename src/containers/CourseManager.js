import React from 'react'
import CourseCard from '../components/CourseCard';
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import CourseEditor from './CourseEditor'
import CourseList from "./CourseList";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


export default class CourseManager extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>Course Manager</h1>
                <CourseList/>

                <CourseEditor/>
                <LessonTabs/>
                <ModuleList/>
                <div className='card-deck'>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>
        )
    }
}