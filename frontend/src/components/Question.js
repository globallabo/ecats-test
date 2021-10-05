export default function Question({ question }) {
    return (
        <>
            <h3>{question.instruction}</h3>
            <p>{question.question}</p>
        </>
    )
}
