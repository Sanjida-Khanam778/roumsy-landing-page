import React from "react";
import Button from "../../components/Shared/Button";
import QuizResultPage from "../QuizInterface/QuizResultPage";
import QuizInterface from "../QuizInterface/QuizInterface";

const ExamSimulatorTab = ({
  result,
  startQuiz,
  handleQuizEnd,
  quizResultShow,
  handleStartQuiz,
  material,
}) => (
  <div>
    {result ? (
      <QuizResultPage handleQuizEnd={handleQuizEnd} />
    ) : startQuiz ? (
      <QuizInterface quizResultShow={quizResultShow} />
    ) : (
      <div className="bg-gray-50 flex flex-col gap-20 items-center justify-center p-6">
        <p className="text-[#011E46] font-bold text-xl">
          Start your exam now and test your knowledge in real time.
        </p>
        <div onClick={handleStartQuiz}>
          <Button padding="py-2 px-4" rounded="md">
            <span className="flex items-center text-xl gap-2">
              <img className="h-8" src={material} />
              Start Exam
            </span>
          </Button>
        </div>
      </div>
    )}
  </div>
);

export default ExamSimulatorTab;
