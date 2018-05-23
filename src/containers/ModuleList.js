import React from 'react'
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService';
import ModuleEditor from './ModuleEditor';

export default class ModuleList
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            module: {title: ''},
            modules: []
        };

        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.moduleService = ModuleService.instance;
    }

    deleteModule(moduleId) {
        console.log(moduleId);
        this.moduleService
            .deleteModule(moduleId)
            .then(() => {
                this.findAllModulesForCourse
                (this.props.courseId)
            });
    }

    setModules(modules) {
        this.setState({modules: modules})
    }
    findAllModulesForCourse(courseId) {
        console.log(courseId)
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }
    findAllModules() {
        this.moduleService
            .findAllModules
            .then((modules) => {
                this.setState({modules: modules});
                console.log(modules);
            });
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    createModule(event) {
        console.log(this.state.module);
        this.moduleService
            .createModule(this.state.courseId, this.state.module)
            .then(() => {
                this.findAllModulesForCourse(this.state.courseId);
            })
    }

    titleChanged(event) {
        this.setState({module: {title: event.target.value}});
    }

    renderListOfModules() {
        let modules = this.state.modules
            .map((module) => {
                return <ModuleListItem module={module} key={module.id}
                                       delete={this.deleteModule}/>
            });
        return modules;
    }

    render() { return (
            <div className="row">
                <div className="col">
                <br/>
                <h3>ModuleList for course: {this.state.courseId}</h3>
                    <div className="row">
                <input className="form-control"
                       onChange={this.titleChanged}
                       placeholder="title"/>
                <button
                    onClick={this.createModule}
                    className="btn btn-primary btn-block">
                    <i className="fa fa-plus"></i>
                </button>
                    </div>

                <ul className="list-group">
                    {this.renderListOfModules()}
                    </ul>
                </div>

            </div>
    );}
}
