import React from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET, MOVE_DOWN, MOVE_UP} from "../constants/index"
import * as actions from '../actions'


const dispatchToPropsMapper = dispatch => ({
    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText),
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize),
    headingNameChanged: (widgetId, newName) =>
        actions.headingNameChanged(dispatch, widgetId, newName),
    linkNameChanged: (widgetId, newLink) =>
        actions.linkNameChanged(dispatch, widgetId, newLink),
    listChanged: (widgetId, newType) =>
        actions.listChanged(dispatch, widgetId, newType)

})
const stateToPropsMapper = state => ({
    preview: state.preview
})

const Heading = ({widget, preview, headingNameChanged, headingTextChanged, headingSizeChanged}) => {
    let selectElem
    let inputElem
    let inputElem2
    return(
        <div>
            <div hidden={preview}>
                <h2> Heading {widget.size}</h2>
                <input placeholder="Heading Text"
                       onChange={() => headingTextChanged(widget.id, inputElem.value)}
                       value={widget.text}
                       ref={node => inputElem = node}/>
                <select onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                        value={widget.size}
                        ref={node => selectElem = node}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
                <br/>
                <textarea placeholder="Widget Name"
                          onChange={() => headingNameChanged(widget.id, inputElem2.value)}
                          value={widget.name}
                          ref={node => inputElem2 = node}/>
            </div>
            <div hidden={!preview}>
                <h2>Heading: {widget.name}</h2>
                {widget.size == 1 && <h1>{widget.text}</h1>}
                {widget.size == 2 && <h2>{widget.text}</h2>}
                {widget.size == 3 && <h3>{widget.text}</h3>}
            </div>
        </div>
    )
}

const HeadingContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading)

const Paragraph = ({widget, preview, headingTextChanged, headingNameChanged}) => {
    let inputElem
    let inputElem2
    return (
        <div>
            <div hidden={preview}>
                <h2> Paragraph </h2>
                <textarea placeholder="Paragraph text"
                          onChange={() => headingTextChanged(widget.id, inputElem.value)}
                          value={widget.text}
                          ref={node => inputElem = node}/>
                <br/>
                <textarea placeholder="Widget Name"
                          onChange={() => headingNameChanged(widget.id, inputElem2.value)}
                          value={widget.name}
                          ref={node => inputElem2 = node}/>
            </div>
            <div hidden={!preview}>
                <h2> Paragraph: {widget.name} </h2>
                {<p>{widget.text}</p>}
            </div>
        </div>
    )
}

const ParagraphContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Paragraph)

const Image = ({widget, preview, headingTextChanged, headingNameChanged}) => {
    let inputElem
    let inputElem2
return (
    <div>
        <div hidden={preview}>
            <h2> Image </h2>
            <textarea placeholder="Image Hyperlink"
                      onChange={() => headingTextChanged(widget.id, inputElem.value)}
                      value={widget.text}
                      ref={node => inputElem = node}/>
            <br/>
            <textarea placeholder="Widget Name"
                      onChange={() => headingNameChanged(widget.id, inputElem2.value)}
                      value={widget.name}
                      ref={node => inputElem2 = node}/>
        </div>
        <div hidden={!preview}>
            <h2> Image: {widget.name} </h2>
            {<img src={widget.text}></img>}
        </div>
    </div>
)
}

const ImageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Image)

const List = ({widget, preview, listChanged, headingNameChanged, headingTextChanged}) => {
    let inputElem
    let inputElem2
    let selectElem
    return (
        <div>
            <div hidden={preview}>
                <h2> List </h2>
                <textarea placeholder="Put each
                 item in
                 a separate row"
                          onChange={() => headingTextChanged(widget.id, inputElem.value)}
                          value={widget.text}
                          ref={node => inputElem = node}/>
                <br/>
                <select onChange={() => listChanged(widget.id, selectElem.value)}
                        value={widget.listType}
                        ref={node => selectElem = node}>
                    <option value="1">Unordered List</option>
                    <option value="2">Ordered List</option>
                </select>
                <br/>
                <textarea placeholder="Widget Name"
                          onChange={() => headingNameChanged(widget.id, inputElem2.value)}
                          value={widget.name}
                          ref={node => inputElem2 = node}/>
            </div>
            <div hidden={!preview}>
                <h2> List: {widget.name} </h2>
                {widget.listType == 1 &&
                <ul>
                    {widget.text.split("\n").map(function(item) {
                        return (
                            <li>{item}</li>
                        )
                    })}
                </ul>}
                {widget.listType == 2 &&
                <ol>
                    {widget.text.split("\n").map(function(item) {
                        return (
                            <li>{item}</li>
                        )
                    })}
                </ol>}

            </div>
        </div>
    )
}

const ListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(List)

const Link = ({widget, preview,linkNameChanged, headingTextChanged, headingNameChanged}) => {
    let inputElem1
    let inputElem
    let inputElem2
    return (
        <div>
            <div hidden={preview}>
                <h2> Link </h2>
                <textarea placeholder="Hyperlink"
                          onChange={() => headingTextChanged(widget.id, inputElem1.value)}
                          value={widget.text}
                          ref={node => inputElem1 = node}/>
                 <br/>
                <textarea placeholder="Link Text"
                          onChange={() => linkNameChanged(widget.id, inputElem.value)}
                          value={widget.link}
                          ref={node => inputElem = node}/>
                <br/>
                <textarea placeholder="Widget Name"
                          onChange={() => headingNameChanged(widget.id, inputElem2.value)}
                          value={widget.name}
                          ref={node => inputElem2 = node}/>
            </div>
            <div hidden={!preview}>
                <h2> Link: {widget.name} </h2>
                {<a href={widget.text}>{widget.link}</a>}
            </div>
        </div>
    )
}

const LinkContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Link)

const Widget = ({widget, preview, dispatch}) => {
    let selectElement
    return(
        <li>
            <div hidden={preview}>
                <select value={widget.widgetType}
                        onChange={e =>
                            dispatch({
                                type: 'SELECT_WIDGET_TYPE',
                                id: widget.id,
                                widgetType: selectElement.value
                            })} ref={node => selectElement = node}>
                    <option>Heading</option>
                    <option>Paragraph</option>
                    <option>List</option>
                    <option>Image</option>
                    <option>Link</option>
                </select>

                <button onClick={e => (
                    dispatch({type: MOVE_UP, widget: widget})
                )}>^</button>
                <button onClick={e => (
                    dispatch({type: MOVE_DOWN, widget: widget})
                )}>v</button>
                <button onClick={e => (
                    dispatch({type: DELETE_WIDGET, id: widget.id})
                )}>Delete</button>
            </div>
            <div>
                {widget.widgetType==='Heading' && <HeadingContainer widget={widget}/>}
                {widget.widgetType==='Paragraph' && <ParagraphContainer widget={widget}/>}
                {widget.widgetType==='List' && <ListContainer widget={widget}/>}
                {widget.widgetType==='Image' && <ImageContainer widget={widget}/>}
                {widget.widgetType==='Link' && <LinkContainer widget={widget}/>}
            </div>
        </li>
    )
}


const WidgetContainer = connect(state => ({
    preview: state.preview
}))(Widget)
export default WidgetContainer
