import React, { Component } from 'react'

export default class NewTaskForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            label: '',
            min : "",
            sec :""
        }
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value,
        })
    }
    onMinChange = (e) => {
        this.setState({
            min: e.target.value,
        })
    }
    onSecChange = (e) => {
        this.setState({
            sec: e.target.value,
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.addItem(this.state.label)
        this.setState({
            label: '',
        })
    }


    render() {
        return (
            <form onSubmit={this.onSubmit} className="new-todo-form">
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    onChange={this.onLabelChange}
                    value={this.state.label}
                    />
                <input className="new-todo-form__timer" placeholder="Min" autoFocus onChange={this.onMinChange} value={this.state.min}/>
                <input className="new-todo-form__timer" placeholder="Sec" autoFocus onChange={this.onSecChange} value={this.state.sec}/>

            </form>
        )
    }
}