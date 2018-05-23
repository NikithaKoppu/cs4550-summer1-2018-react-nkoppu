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
            <div>
                <h2>Course List</h2>
                <table className="table">
                    <thead>
                        <tr><th>Title</th></tr>
                        <tr>
                            <th><input onChange={this.titleChanged}
                                       className="form-control" id="titleFld"
                                       placeholder="cs101"/></th>
                            <th><button onClick={this.createCourse}
                                        className="btn btn-primary">Add</button></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderCourseRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default CourseList;
