import Header from "./Header"
import Option from "./Option"
import Question from "./Question"

export default function Card({ questions }) {
    return (
        <div className="card">
            <Header questions={questions} />
            {questions.map(question => {
                return (
                    <>
                        <Question question={question} />
                        <ol>
                            {question.options.map(option => {
                                return <Option key={option} option={option} />
                            })}
                        </ol>
                    </>
                )})}
        </div>
    )
}
