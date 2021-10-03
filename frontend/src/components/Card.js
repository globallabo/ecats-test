import Header from "./Header";
import Option from "./Option";
import Question from "./Question";

export default function Card({
  question,
  currentQuestion,
  numQuestions,
  handleAnswerButtonClick,
  showResultPage,
}) {
  return (
    <div className="card">
      {showResultPage ? (
        <div>Final page</div>
      ) : (
        <div>
          <Header
            currentQuestion={currentQuestion}
            numQuestions={numQuestions}
          />
          <Question question={question} />
          <ol>
            {question.options.map((option) => {
              return (
                <Option
                  key={option}
                  option={option}
                  handleAnswerButtonClick={handleAnswerButtonClick}
                />
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
}
