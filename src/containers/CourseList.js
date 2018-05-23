import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseService";

class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses: []};
        this.deleteCourse = this.deleteCourse.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.findAllCourses = this.findAllCourses.bind(this);

    }
    componentDidMount() {
        this.findAllCourses()
    }

    findAllCourses() {
        this.courseService.findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
                console.log(courses);
            });
    }

    deleteCourse(courseId) {
        this.courseService
            .deleteCourse(courseId)
            .then(() => { this.findAllCourses(); });
    }

    renderCourseRows() {
        let courses = this.state.courses.map(
            (course) => { return <CourseRow course={course}
                                             key={course.id}
                                             delete={this.deleteCourse}/>
            }
        )
        return courses;
    }

    titleChanged(event) {
        this.setState({
            course: { title: event.target.value }
        });
    }

    createCourse() {
        console.log(this.state.course);
        this.courseService
            .createCourse(this.state.course)
            .then(() => { this.findAllCourses(); });
    }

    render() {
        return (
            <div className="text-center">
                <table className="table">
                    <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                        <a className="navbar-brand"><h2>Course List</h2></a>
                        <form className="form-inline">
                            <input onChange={this.titleChanged}
                                   className="form-control mr-sm-2" id="titleFld"
                                   placeholder="New Course Title"/>
                            <button onClick={this.createCourse}
                                    className="btn btn-primary my-2 my-sm-0">Add</button>
                        </form>
                    </nav>
                    </div>
                    <div className="row">
                        <div className="col-md-3">Title</div>
                        <div className="col-md-2">Owned By</div>
                        <div className="col-md-3">Last Modified By Me</div>
                    </div>
                    {this.renderCourseRows()}
                </table>
            </div>
        )
    }
}
export default CourseList;
