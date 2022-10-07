import React, {Component} from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import PropTypes from 'prop-types'

export default class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            completed: false,
            date: new Date(),
        }
    }

    onCheckBoxClick = () => {
        const {onComplete} = this.props
        onComplete(this.props.id)
        this.setState((state) => ({
            completed: !state.completed,
        }))
    }

    render() {
        const {completed} = this.state
        let classNames = ''

        const {date} = this.state
        if (completed) {
            classNames += ' completed'
        }
        return (
            <li className={classNames}>
                {' '}
                {/* className="completed" если задача выполнена className="editing" если нажимаем на редактировать  this.onCheckBoxClick.bind(this) */}
                <div className="view">
                    <input className="toggle" type="checkbox" onClick={this.onCheckBoxClick}/>
                    <label>
                        <span className="description">{this.props.name}</span>

                        <span className="created">created {formatDistanceToNow(date, {addSuffix: true})}</span>
                    </label>
                    <button className="icon icon-edit"/>
                    <button className="icon icon-destroy" onClick={this.props.onDelete}/>
                </div>
            </li>
        )
    }
}
Task.defaultProps = {
    date: Date.now(),
    completed: false,
}
Task.propTypes = {
    completed: PropTypes.bool,
    date: PropTypes.func,
    name: PropTypes.string,
    onComplete: PropTypes.func,
}