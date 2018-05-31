import * as constants from "../constants/index"

Array.prototype.move
    = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};

const widgetReducer = (state = {widgets: [], preview: false}, action) => {
    let newState
    let index
    switch (action.type) {

        case constants.PREVIEW:
            return {
                widgets: state.widgets,
                preview: !state.preview
            }
        case constants.MOVE_UP:
            index = state.indexOf(action.widget);
            state.move(index, index - 1);
            state.splice(0);
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.index = action.index
                    }
                    return Object.assign({}, widget)
                })
            }
        case constants.MOVE_DOWN:
            index = state.indexOf(action.widget);
            state.move(index, index + 1);
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.index = action.index
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.HEADING_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.HEADING_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.LINK_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.link = action.link
                    }
                    return Object.assign({}, widget)
                })
            }
        case constants.LIST_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.listType = action.listType
                    }
                    return Object.assign({}, widget)
                })
            }
        case constants.HEADING_SIZE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.size = action.size
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.SELECT_WIDGET_TYPE:
            console.log(action);
            let newState = {
                widgets: state.widgets.filter((widget) => {
                    if(widget.id === action.id) {
                        widget.widgetType = action.widgetType
                    }
                    return true;
                })
            }
            return JSON.parse(JSON.stringify(newState))

        case constants.SAVE:
            fetch('http://localhost:8080/api/widget/save', {
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'}
            })
            return state
        case constants.FIND_ALL_WIDGETS:
            newState = Object.assign({}, state)
            newState.widgets = action.widgets
            return newState
        case constants.FIND_WIDGET_BY_LESSON:
            newState = Object.assign({}, state)
            newState.widgets = action.widgets
            return newState
        case constants.DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => (
                    widget.id !== action.id
                ))
            }
        case constants.ADD_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    {
                        id: state.widgets.length + 1,
                        text: 'New Widget',
                        widgetType: 'Paragraph',
                        size: '2',
                        name: 'New Name',
                        link: 'Link Name',
                        listType: '1',
                        index: state.widgets.length + 1
                    }
                ]
            }
        default:
            return state
    }
}

export default widgetReducer;
