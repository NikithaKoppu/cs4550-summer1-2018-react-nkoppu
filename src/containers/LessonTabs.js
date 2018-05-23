import React from 'react'
import LessonService from '../services/LessonService'



export default class LessonTabs
    extends React.Component {
    constructor(props) {
        super(props);

        this.lessonService = LessonService.instance;
        this.state = {courseId: '', moduleId: '',
            lesson: {title: ''},
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
                this.findAllLessonsForModule(this.state.moduleId);
            })
    }

    titleChanged(event) {
        this.setState({lesson: {title: event.target.value}});
    }

    deleteLesson(lessonId) {
        console.log(lessonId);
        this.lessonService
            .deleteLesson(lessonId)
            .then(() => {
                this.findAllLessonsForModule(this.props.moduleId)
            });
    }

    setLessons(lessons) {
        this.setState({lessons: lessons})
    }

    findAllLessonsForModule(moduleId) {
        this.lessonService
            .findAllLessonsForModule(this.state.courseId, moduleId)
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
        this.setCourseId(this.props.courseId);
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.findAllLessonsForModule(newProps.moduleId)
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
                return <li className="nav-item">
                    <a className="nav-link" href="#">{this.state.lesson.title}</a>
                    <span className='float-right'>
                    <i className="fa fa-trash" onClick={() => {
                        this.deleteLesson(this.props.lesson.id)
                    }}/>
                    <i className="fa fa-pencil"/>
                </span>
                </li>
            });
        return lessons;
    }

    render() { return(
        <ul className="nav nav-tabs">
            {this.renderListOfLessons()}
        </ul>
    );}}
