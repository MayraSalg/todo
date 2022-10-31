import React from 'react';
import PropTypes from 'prop-types';
import {Context} from "../Context/Context";
import Timer from "../Timer/Timer";


export default function Task () {
    let {completed,setCompleted,item,onDelete,onComplete} = React.useContext(Context);

    let onCheckBoxClick = () => {
       onComplete(item.id)
       setCompleted(!completed)
        /*  const { onComplete } = this.props
    onComplete(this.props.id)
    this.setState((state) => ({
      completed: !state.completed,
    }))*/
    }

    let classNames = '';
    if (item.completed) {
        classNames += 'completed'
    }
    //seconds={item.min * 60 + item.sec}
    return (
        <li className={classNames}>
            {/* //onClick={onDelete} className="completed" если задача выполнена className="editing" если нажимаем на редактировать  this.onCheckBoxClick.bind(this) */}
            <div className="view">

                <input className="toggle" type="checkbox" onClick={onCheckBoxClick}/>
                    <label>
                        <span className="description">{item.text}
                            <Timer seconds={item.min * 60 + item.sec} />
                        </span>
                        <span className="created"> </span>
                    </label>
                <button className="icon icon-edit"/>
                <button className="icon icon-destroy" onClick={onDelete}/>
            </div>
        </li>
       )
}
Task.defaultProps = {
    completed: false,
}
Task.propTypes = {
    completed: PropTypes.bool,
    name: PropTypes.string,
    onComplete: PropTypes.func,
}