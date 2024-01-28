import React, { useState } from 'react'
import './Global.css'
let quizData = [
  {
    question: "In which decade was the American Institute of Electrical Engineers (AIEE) founded?",
    options: ["1930s", "1950s", "1880s", "1850s"],
    correctAnswer: "1880s"
  },
  {
    question: "What is part of a database that holds only one type of information? ?",
    options: ["Report", "Field", "Record", "File"],
    correctAnswer: "Record"
  },
  {
    question: "'OS' computer abbreviation usually means ?",
    options: ["Order of Significance", "Open Software", "Operating System", "Optical Sensor"],
    correctAnswer: "Operating System"
  },
  {
    question: "What is the capital of Delhi ?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Banglore"],
    correctAnswer: "New Delhi"
  },
  {
    question: "In which decade was the SPICE simulator introduced?",
    options: ["1950s", "1960s", "1970s", "1980s"],
    correctAnswer: "1970s"
  },
  {
    question: "Which is a type of Electrically-Erasable Programmable Read-Only Memory?",
    options: ["Flash", "Flange", "Fury","FRAM"],
    correctAnswer: "Flash"
  },
  {
    question: "The purpose of choke in tube light is ?",
    options: ["To decrease the current", "To increase the current", "To decrease the voltage momentarily","To increase the voltage momentarily"],
    correctAnswer: "To increase the voltage momentarily"
  },
  {
    question: "Who developed Yahoo?",
    options: ["Dennis Ritchie & Ken Thompson", "David Filo & Jerry Yang", "Vint Cerf & Robert Kahn","Steve Case & Jeff Bezos"],
    correctAnswer: "David Filo & Jerry Yang"
  },
  {
    question: "Made from a variety of materials, such as carbon, which inhibits the flow of current...?",
    options: ["Choke", "Inductor", "Resistor","Capacitor"],
    correctAnswer: "Resistor"
  },
  {
    question: "The first step to getting output from a laser is to excite an active medium. What is this process called?",
    options: ["Pumping", "Exciting", "Priming","Raising"],
    correctAnswer: "Pumping"
  },
  {
    question: "What is the relationship between resistivity r and conductivity s?",
    options: ["R=s2", "R=s", "R>s","R=1/s"],
    correctAnswer: "R=1/s"
  },
  {
    question: "A given signal's second harmonic is twice the given signal's __________ frequency...?",
    options: ["Fourier", "Foundation", "Fundamental","Field"],
    correctAnswer: "Fundamental"
  },
  {
    question: "In which year was MIDI(Musical Instrument Digital Interface) introduced?",
    options: ["1987", "1983", "1973","1977"],
    correctAnswer: "1983"
  },
  {
    question: "When measuring the characteristics of a small-signal amplifier, say for a radio receiver, one might be concerned with its `Noise...`?",
    options: ["Fundamental", "Fall", "Force","Figure"],
    correctAnswer: "Figure"
  },
  {
    question: "'DB' computer abbreviation usually means ?",
    options: ["Database", "Double Byte", "Data Block","Driver Boot"],
    correctAnswer: "Database"
  },
  {
    question: "Who created Pretty Good Privacy (PGP)?",
    options: ["Phil Zimmermann", "Tim Berners-Lee", "Marc Andreessen","Ken Thompson"],
    correctAnswer: "Phil Zimmermann"
  },
  {
    question: "What do we call a network whose elements may be separated by some distance? It usually involves two or more small networks and dedicated high-speed telephone lines.",
    options: ["URL", "LAN", "WAN","World Wide Web"],
    correctAnswer: "WAN"
  },
  {
    question: "What is part of a database that holds only one type of information? ?",
    options: ["Report", "Field", "Record", "File"],
    correctAnswer: "Record"
  },
  {
    question: "In which decade was the American Institute of Electrical Engineers (AIEE) founded?",
    options: ["1930s", "1950s", "1880s", "1850s"],
    correctAnswer: "1880s"
  },
  {
    question: "Who developed Yahoo?",
    options: ["Dennis Ritchie & Ken Thompson", "David Filo & Jerry Yang", "Vint Cerf & Robert Kahn","Steve Case & Jeff Bezos"],
    correctAnswer: "David Filo & Jerry Yang"
  },
  {
    question: "What is the relationship between resistivity r and conductivity s?",
    options: ["R=s2", "R=s", "R>s","R=1/s"],
    correctAnswer: "R=1/s"
  },
  {
    question: "Made from a variety of materials, such as carbon, which inhibits the flow of current...?",
    options: ["Choke", "Inductor", "Resistor","Capacitor"],
    correctAnswer: "Resistor"
  },
  {
    question: "A given signal's second harmonic is twice the given signal's __________ frequency...?",
    options: ["Fourier", "Foundation", "Fundamental","Field"],
    correctAnswer: "Fundamental"
  },
  {
    question: "Which is NOT an acceptable method of distributing small power outlets throughout an open plan office area?",
    options: ["Power Poles", "Power Skirting", "Flush Floor Ducting","Extension Cords"],
    correctAnswer: "Extension Cords"
  },
  {
    question: "'.TMP' extension refers usually to what kind of file?",
    options: ["Compressed Archive file", "Image file", "Temporary file","Audio file"],
    correctAnswer: "Temporary file"
  },
  {
    question: "The electromagnetic coils on the neck of the picture tube or tubes which pull the electron beam from side to side and up and down are called a...?",
    options: ["Transformer", "Yoke", "Capacitor","Diode"],
    correctAnswer: "Yoke"
  },
  {
    question: "'DB' computer abbreviation usually means ?",
    options: ["Database", "Double Byte", "Data Block","Driver Boot"],
    correctAnswer: "Database"
  },
  {
    question: "Who created Pretty Good Privacy (PGP)?",
    options: ["Phil Zimmermann", "Tim Berners-Lee", "Marc Andreessen","Ken Thompson"],
    correctAnswer: "Phil Zimmermann"
  },
  {
    question: "After the first photons of light are produced, which process is responsible for amplification of the light?",
    options: ["Blackbody radiation", "Stimulated emission", "Planck's radiation","Einstein oscillation"],
    correctAnswer: "Stimulated emission"
  },
  {
    question: "Which is NOT an acceptable method of distributing small power outlets throughout an open plan office area?",
    options: ["Power Poles", "Power Skirting", "Flush Floor Ducting","Extension Cords"],
    correctAnswer: "Extension Cords"
  },
  
]
const App = () => {
  let [score, setScore] = useState(0)
  let [showScore, setShowScore] = useState(false)
  let [currentQuestion, setCurrentQuestion] = useState(0)
// ~ ==============================================================
let handleAnswer = (selectAnswer)=>{
  if(selectAnswer === quizData[currentQuestion].correctAnswer){
    setScore(score+1)
  }
  let nextQuestion = currentQuestion + 1;
  
  if(currentQuestion < quizData.length-1){
    setCurrentQuestion(nextQuestion)
  } else{
    setShowScore(true)
  }
}
// ~ =================================================================
let ReStartQuiz = ()=>{
  setCurrentQuestion(0)
  setScore(0)
  setShowScore(false)
}
// ~ =================================================================
  return (
    
    <div className='quiz-container'>
      <div><title>Quiz Application</title></div>
      {showScore ? (<>
      <div className='result-container'>
      <h2>Your Score is: {score}/{quizData.length}</h2>
      <button onClick={ReStartQuiz}>Restart Quiz</button>
      </div>
      </>):(<>
      <div className='question-container'>
      <h2>Your Question:{currentQuestion + 1}</h2>
      <h1>{quizData[currentQuestion].question}</h1>
      </div>

      <div className='options-container'>
      {quizData[currentQuestion].options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option}
              </button>
            ))}
      </div>
      </>)}
    </div>
  )
}

export default App

