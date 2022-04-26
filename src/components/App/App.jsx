import {useState, useEffect} from "react";
import Statistics from '../Statistics/Statistics'
import Notification from '../Notification/Notification';
import FeedbackOptions from '../Feedback/FeedbackOptions'
import Section from '../Section/Section';

export default function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)
    const [positivePercentage, setPositivePercentage] = useState(0)

    const onIncrGood = () => {
        setGood(prevState => prevState + 1)
    }
    
    const onIncrNeutral = () => {
        setNeutral(prevState => prevState + 1)
    }

    const onIncrBad = () => {
         setBad(prevState => prevState + 1)
    }

    useEffect(() => {
        const totalCounter = good + neutral + bad
        setTotal(prevState => totalCounter);

        const percentageGoodFeeds =  Math.trunc(good / totalCounter * 100)
        setPositivePercentage(prevState => percentageGoodFeeds)
        
    },[good, neutral, bad])

    return (<section>
                <Section title='Please leave feedback'/>
                <FeedbackOptions onIncrGood={onIncrGood} onIncrNeutral={onIncrNeutral} onIncrBad={onIncrBad} />
                <Section title='Statistics' />
                {total ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/> : <Notification message="There is no feedback" />}
            </section>)
}

