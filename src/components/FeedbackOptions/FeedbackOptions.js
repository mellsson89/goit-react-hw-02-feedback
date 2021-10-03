import React from "react";
import PropTypes from 'prop-types';
import style from './styles/feedbackOptions.module.scss'

const FeedbackOptions =({options,onLeaveFeedback}) => (
    options.map(option => (
            <button key={option} onClick={() => onLeaveFeedback(option)} className={style.option__button}>{option}</button>
    ))
)

FeedbackOptions.propTypes= {
    options:PropTypes.node.isRequired
}

export default FeedbackOptions;