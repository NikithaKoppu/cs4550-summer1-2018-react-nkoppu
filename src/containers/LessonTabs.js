import React from 'react'
import LessonService from '../services/LessonService'
import {Link} from 'react-router-dom'
import LessonTabItem from "../components/LessonTabItem";


export default class LessonTabs
    extends React.Component {
    constructor(props) {
        super(props);

        this.lessonService = LessonService.instance;
        this.state = {courseId: '', moduleId: '',
            lesson: {title: 'New Lesson Title'},
            lessons: []};
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);

    }

    createLesson(event) {
        console.log(this.state.lesson);
        this.lessonService
            .createLesson(this.state.courseId, this.state.moduleId,this.state.lesson)
            .then(() => {
                this.findAllLessonsForModule(this.state.courseId, this.state.moduleId);
            })
    }

    titleChanged(event) {
        this.setState({lesson: {title: event.target.value}});
    }

    deleteLesson(lessonId) {
        this.lessonService
            .deleteLesson(lessonId)
            .then(() => {
                this.findAllLessonsForModule(this.props.courseId, this.props.moduleId)
            });
    }

    confirmDelete(lessonId) {
        if (window.confirm("Do you want to delete this?")) {
            {this.deleteLesson(lessonId)}
        }
    }

    setLessons(lessons) {
        this.setState({lessons: lessons})
    }

    findAllLessonsForModule(courseId, moduleId) {
        this.lessonService
            .findAllLessonsForModule(courseId, moduleId)
            .then((lessons) => {this.setLessons(lessons)});
    }

    findAllLessons() {
        this.lessonService
            .findAllLessons
            .then((lessons) => {
                this.setState({lessons: lessons});
                console.log(lessons);
            });
    }

    componentDidMount() {
        this.setCourseId(
            this.props.courseId);

        this.setModuleId(
            this.props.moduleId);
        console.log(this.props.courseId);
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(
            newProps.courseId);

        this.setModuleId(
            newProps.moduleId);
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);

    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    renderListOfLessons() {
        let lessons = this.state.lessons
            .map((lesson) => {
                return <LessonTabItem lesson={lesson} key={lesson.id}
                                      courseId = {this.state.courseId}
                                       moduleId={this.state.moduleId}
                                       delete={this.deleteLesson}/>
            });

        return lessons;
    }

    render() { return(
        <div className="col -align-right">
            <br/>
            <div className="row">
                <input className="form-control"
                       onChange={this.titleChanged}
                       placeholder="New Lesson Title"/>
                <button
                    onClick={this.createLesson}
                    className="btn btn-primary btn-block">
                    <i className="fa fa-plus"></i>
                </button>
            </div>
            <div id="lessonDiv">
        <ul className="nav nav-tabs">
            {this.renderListOfLessons()}
        </ul>
            </div>
        </div>
    );}}
