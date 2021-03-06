const LESSON_API_URL =
    'https://dashboard.heroku.com/apps/cs4550-summer1-koppu-nikitha/api/course/CID/module/MID/lesson';
const SINGLE_LESSON_API_URL =
    'https://dashboard.heroku.com/apps/cs4550-summer1-koppu-nikitha/api/lesson';

let _singleton = Symbol();
export default class LessonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }

    createLesson(courseId, moduleId, lesson) {
        return fetch(LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId),
            {
                body: JSON.stringify(lesson),
                headers: {'Content-Type': 'application/json'},
                method: 'POST'
            }).then(function (response) {
            return response.json();
        })
    }

    deleteLesson(lessonId) {
        return fetch(SINGLE_LESSON_API_URL + '/' + lessonId,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })
    }

    findAllLessons() {
        return fetch(SINGLE_LESSON_API_URL).then(function (response) {
            return response.json();
        })
    }

    findAllLessonsForModule(courseId, moduleId) {
        return fetch(
            LESSON_API_URL
                .replace('CID', courseId)
                .replace('MID', moduleId))
            .then(function (response) {
                return response.json();
            })
    }
}