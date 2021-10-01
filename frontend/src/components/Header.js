import Question from "./Question"

export default function Header({ questions }) {
    return (
        <div className="header">
            <h2>Question 1 of {questions.length}</h2>
        </div>
    )
}
