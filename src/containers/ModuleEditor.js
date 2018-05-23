import React from 'react';
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'

export default class ModuleEditor extends React.Component {
    constructor(props){
        super(props);
        this.state = {courseId: '', moduleId: ''};
        this.setCourseId =
            this.setCourseId.bind(this);
        this.setModuleId =
            this.setModuleId.bind(this);

    }

    setCourseId(courseId) {
        this.setState
        ({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState
        ({moduleId: moduleId});
    }

    componentDidMount() {
        this.setCourseId(
            this.props.match.params.courseId);

        this.setModuleId(
            this.props.match.params.moduleId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(
            newProps.match.params.courseId);

        this.setModuleId(
            newProps.match.params.moduleId);
    }


    render() {
        return (
            <div>
                <h1> {this.state.courseId}!</h1>
                <div className="col-8">
                    <LessonTabs moduleId={this.state.moduleId}/>
                </div>
            </div>
        )}}
