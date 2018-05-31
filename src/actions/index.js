import * as constants from "../constants/index"

export const headingTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.HEADING_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)
export const headingNameChanged = (dispatch, widgetId, newName) => (
    dispatch({
        type: constants.HEADING_NAME_CHANGED,
        id: widgetId,
        name: newName})
)

export const linkNameChanged = (dispatch, widgetId, newLink) => (
    dispatch({
        type: constants.LINK_NAME_CHANGED,
        id: widgetId,
        link: newLink})
)
export const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({
        type: constants.HEADING_SIZE_CHANGED,
        id: widgetId,
        size: newSize})
)

export const listChanged = (dispatch, widgetId, newType) => (
    dispatch({
        type: constants.LIST_CHANGED,
        id: widgetId,
        listType: newType})
)
export const findAllWidgets = dispatch => {
    fetch('http://localhost:8080/api/widget')
        .then(response => response.json())
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets }))
}

export const findWidgetsByLesson = (dispatch, lessonId) => {
    fetch('http://localhost:8080/api/lesson/' + lessonId +"/widget")
        .then(response => response.json())
        .then(widgets => dispatch({
            type: constants.FIND_WIDGET_BY_LESSON,
            widgets: widgets }))
}

export const addWidget = dispatch => (
    dispatch({type: constants.ADD_WIDGET})
)
export const save = dispatch => (
    dispatch({type: constants.SAVE})
)
export const preview = dispatch => (
    dispatch({type: constants.PREVIEW})
)

export const moveUp = dispatch => (
    dispatch({type: constants.MOVE_UP})
)
export const moveDown = dispatch => (
    dispatch({type: constants.MOVE_DOWN})
)
