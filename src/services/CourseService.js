
let _singleton = Symbol();
const COURSE_API_URL = 'https://dashboard.heroku.com/apps/cs4550-summer1-koppu-nikitha/api/course';

class CourseService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton]
    }

    findAllCourses() {
        return fetch(COURSE_API_URL)
            .then(function(response){
                 console.log(response)
                return response.json();
            });
    }

    deleteCourse(courseId) {
        return fetch(COURSE_API_URL + '/' + courseId,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })
    }

    createCourse(course) {
        return fetch(COURSE_API_URL, {
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })}


}
export default CourseService;
