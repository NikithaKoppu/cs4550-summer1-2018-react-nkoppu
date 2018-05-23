import React from 'react'
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService';

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
                                       courseId={this.state.courseId}
                                       delete={this.deleteModule}/>
            });
        return modules;
    }

    render() { return (
                <div className="row">
                    <div className="container">
                    <br/>
                        <div className="row">
                    <input className="form-control"
                           onChange={this.titleChanged}
                           placeholder="New Module Title"/>
                    <button
                        onClick={this.createModule}
                        className="btn btn-primary btn-block">
                        <i className="fa fa-plus"></i>
                    </button>
                        </div>
                        <nav id="sidebar">
                    <ul className="list-group">
                        {this.renderListOfModules()}
                        </ul>
                        </nav>
                    </div>

                </div>
    );}
}
