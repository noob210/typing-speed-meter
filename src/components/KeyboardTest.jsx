import React, { useState, useEffect, useRef } from 'react';
import Timer from './timer';
import Words from './words';
import Grade from './grade';

const KeyboardTest = ({type, saveResult}) => {
  const text = (Words()).trimStart();

  const charCount = text.length;
  const wordCount = text.trim().split(/\s+/).length;

  const inputRef = useRef(null);
  const [timerStarted, setTimerStarted] = useState(false);
  const input = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [errorCount, setError] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [grade, setGrade] = useState(0);

  const darkMode = window.matchMedia('(prefers-color-scheme: dark)')


  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleKeyDown = (e) => {

    let key = e.key;

    if (!timerStarted) {
      setTimerStarted(true);
    }

    const historyElement = document.getElementById('history');
    const span = document.createElement('span');
    span.textContent = key;

    if (key === text[currentIndex]) {
      setCurrentIndex(currentIndex + 1);
      setProgress((currentIndex / charCount * 100) + "%")

      if(darkMode.matches) {
        span.style.color = 'rgb(226, 232, 240)';
      }

      else {
        span.style.color = 'rgb(80, 80, 80)';
      }
    }

    else {
      if (key.match(/^[a-zA-Z ]+$/)) {
        setError(errorCount + 1);
        span.style.color = 'red';
      }
    }

    historyElement.appendChild(span);

    if (currentIndex >= charCount - 1) {

      const [minutes, seconds] = document.getElementById("timeTaken").innerHTML.split(':').map(Number);
      const minutesInSeconds = minutes * 60;
      const totalSeconds = minutesInSeconds + seconds;

      const speed = Math.round(wordCount / (totalSeconds / 60));
      const acc = Math.round((charCount - errorCount) / charCount * 100);

      setWpm(speed);
      setAccuracy(acc);
      setTimerStarted(false);

      const rating = Grade(speed, acc);
      
      setGrade(rating);
      document.getElementById("timeResult").innerHTML = document.getElementById("timeTaken").innerHTML;


      document.getElementById("test").style.display = "none";
      document.getElementById("result").style.display = "block";

      if(type === 1) {
        const result = {
          wpm : speed,
          accuracy : acc,
          timeTaken : document.getElementById("timeTaken").innerHTML,
          rating: rating
        };
  
        saveResult(result);
      }
    }

  };

  const handleInputBlur = () => {
    inputRef.current.focus();
  };

  const getCharacterColor = (index) => {
    if (index < currentIndex) {
      return <span className='correct-text'>{text[index]}</span>;
    }

    else if (index === currentIndex) {
      let textColor;
      
      if(input[index] === text[index]) {
        textColor = "#353535";
        //textColor = "rgb(226, 232, 240)";
      }

      else {
        if(darkMode.matches) {
          textColor = "rgb(155, 155, 155)";
        }
        
        else {
          textColor = "rgb(100, 100, 100)";
        }
      }

      return (
        <span>
          <span className="animate-pulse text-4xl caret">|</span>
          <span style={{ color: textColor }}>
            {text[index]}
          </span>
        </span>
      );
    }

    else {
      if(darkMode.matches) {
        return <span style={{ color: 'rgb(155, 155, 155)' }}>{text[index]}</span>;
      }
      
      else {
        return <span style={{ color: 'rgb(100, 100, 100)' }}>{text[index]}</span>;
      }
      
    }
  };


  return (
    <div className='dark:bg-slate-700 dark:text-slate-50'>

      <div className="flex flex-col items-center justify-center text-3xl h-screen">

        <div className='w-8/12'>

          <div id="test">
            <Timer timerStarted={timerStarted} />

            <div className="my-4 bg-blue-200 rounded-full h-2.5 dark:bg-gray-500">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: progress }}></div>
            </div>

            <div className="relative outline-none"
              ref={inputRef}
              autoFocus
              onBlur={handleInputBlur}
              tabIndex={0}
              onKeyDown={handleKeyDown}>
              <p>
                {text.split('').map((char, index) => (
                  <span key={index}>
                    {getCharacterColor(index)}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div id='result' style={{ display: "none" }}>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">


              <h3 className="text-1xl font-bold lg:text-1xl xl:text-1xl mb-3">Your result:</h3>

              <div className="grid grid-cols-2 row-gap-8 md:grid-cols-5">
                <div className="text-center md:border-r">
                  <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{wpm}</h6>
                  <p className="text-sm font-medium tracking-widest text-slate-700 dark:text-gray-300 uppercase lg:text-base">
                    Word Per Minute
                  </p>
                </div>
                <div className="text-center md:border-r">
                  <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{accuracy}%</h6>
                  <p className="text-sm font-medium tracking-widest text-slate-700 dark:text-gray-300 uppercase lg:text-base">
                    Accuracy
                  </p>
                </div>
                <div className="text-center md:border-r">
                  <h6 id="timeResult" className="text-4xl font-bold lg:text-5xl xl:text-6xl">00:00</h6>
                  <p className="text-sm font-medium tracking-widest text-slate-700 dark:text-gray-300 uppercase lg:text-base">
                    Time Taken
                  </p>
                </div>
                <div className="text-center md:border-r">
                  <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{charCount}</h6>
                  <p className="text-sm font-medium tracking-widest text-slate-700 dark:text-gray-300 uppercase lg:text-base">
                    Number of Characters
                  </p>
                </div>

                <div className="text-center">
                  <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{grade}%</h6>
                  <p className="text-sm font-medium tracking-widest text-slate-700 dark:text-gray-300 uppercase lg:text-base">
                    OVERALL RATING
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 m-10">
                <h3 className="text-1xl font-bold lg:text-1xl xl:text-1xl">Key Pressed History:</h3>
                <p id="history" className="text-3xl mt-3 text-slate-700 dark:text-gray-300"></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

};

export default KeyboardTest;