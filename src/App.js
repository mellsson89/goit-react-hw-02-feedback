import React,{Component} from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section/Section";
import Notification from "./components/Notification";


class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    updateState = (value) => {
        this.setState(prevState => ({
            [value]: prevState[value] + 1
        }))
    }

    countTotalFeedback = () => {
        const valueState=Object.values(this.state)
        return valueState.reduce((accum,value) => accum+value,0);

    }

    countPositiveFeedbackPercentage = () => {
        return this.state.good > 0 ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed() + '%' : 0;
    }


    render() {
       const {good,neutral,bad}=this.state;
       const options=Object.keys(this.state)

        return (
            <>
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions options={options} onLeaveFeedback={this.updateState}/>
                </Section>
<Section title={'Statistical'}>
    {good || neutral || bad > 0 ?
        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}/> : <Notification message={'No feedback given'}/>}

</Section>

            </>
        )
    }
}

export default App;
