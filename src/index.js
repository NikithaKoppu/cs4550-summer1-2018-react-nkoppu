import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello'
import CourseManager from './containers/CourseManager'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <CourseManager/>,
document.getElementById('root')
);