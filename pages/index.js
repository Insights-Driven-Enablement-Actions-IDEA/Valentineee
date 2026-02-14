import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

export default function HomePage() {
  const canvasRef = useRef(null);
  const [questionVisible, setQuestionVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [noAttempts, setNoAttempts] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    const stars = 500;
    const colorrange = [0, 60, 240];
    const starArray = [];

    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function setCanvasSize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    setCanvasSize();

    for (let i = 0; i < stars; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 1.2;
      const hue = colorrange[getRandom(0, colorrange.length - 1)];
      const sat = getRandom(50, 100);
      const opacity = Math.random();
      starArray.push({ x, y, radius, hue, sat, opacity });
    }

    let frameNumber = 0;
    let opacity = 0;
    let secondOpacity = 0;
    let thirdOpacity = 0;
    let animationId;
    let hasShownQuestion = false;

    function drawStars() {
      for (let i = 0; i < stars; i++) {
        const star = starArray[i];
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = `hsla(${star.hue}, ${star.sat}%, 88%, ${star.opacity})`;
        context.fill();
      }
    }

    function updateStars() {
      for (let i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
          starArray[i].opacity = Math.random();
        }
      }
    }

    function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
      lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
      });
    }

    function drawText() {
      const fontSize = Math.min(30, window.innerWidth / 24);
      const lineHeight = 8;

      context.font = `${fontSize}px Comic Sans MS`;
      context.textAlign = 'center';

      context.shadowColor = 'rgba(45, 45, 255, 1)';
      context.shadowBlur = 8;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;

      if (frameNumber < 250) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText('everyday day I cannot believe how lucky I am', canvas.width / 2, canvas.height / 2);
        opacity += 0.01;
      }
      if (frameNumber >= 250 && frameNumber < 500) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText('everyday day I cannot believe how lucky I am', canvas.width / 2, canvas.height / 2);
        opacity -= 0.01;
      }

      if (frameNumber === 500) {
        opacity = 0;
      }

      if (frameNumber > 500 && frameNumber < 750) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        if (window.innerWidth < 600) {
          drawTextWithLineBreaks(['amongst trillions and trillions of stars,', 'over billions of years'], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
          context.fillText('amongst trillions and trillions of stars, over billions of years', canvas.width / 2, canvas.height / 2);
        }
        opacity += 0.01;
      }

      if (frameNumber >= 750 && frameNumber < 1000) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        if (window.innerWidth < 600) {
          drawTextWithLineBreaks(['amongst trillions and trillions of stars,', 'over billions of years'], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
          context.fillText('amongst trillions and trillions of stars, over billions of years', canvas.width / 2, canvas.height / 2);
        }
        opacity -= 0.01;
      }

      if (frameNumber === 1000) {
        opacity = 0;
      }
      if (frameNumber > 1000 && frameNumber < 1250) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText('to be alive, and to get to spend this life with you', canvas.width / 2, canvas.height / 2);
        opacity += 0.01;
      }
      if (frameNumber >= 1250 && frameNumber < 1500) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText('to be alive, and to get to spend this life with you', canvas.width / 2, canvas.height / 2);
        opacity -= 0.01;
      }

      if (frameNumber === 1500) {
        opacity = 0;
      }
      if (frameNumber > 1500 && frameNumber < 1750) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText('is so incredibly, unfathomably unlikely', canvas.width / 2, canvas.height / 2);
        opacity += 0.01;
      }
      if (frameNumber >= 1750 && frameNumber < 2000) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText('is so incredibly, unfathomably unlikely', canvas.width / 2, canvas.height / 2);
        opacity -= 0.01;
      }

      if (frameNumber === 2000) {
        opacity = 0;
      }
      if (frameNumber > 2000 && frameNumber < 2250) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        if (window.innerWidth < 600) {
          drawTextWithLineBreaks(['and yet here I am to get the impossible', 'chance to get to know you'], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
          context.fillText('and yet here I am to get the impossible chance to get to know you', canvas.width / 2, canvas.height / 2);
        }
        opacity += 0.01;
      }
      if (frameNumber >= 2250 && frameNumber < 2500) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        if (window.innerWidth < 600) {
          drawTextWithLineBreaks(['and yet here I am to get the impossible', 'chance to get to know you'], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
          context.fillText('and yet here I am to get the impossible chance to get to know you', canvas.width / 2, canvas.height / 2);
        }
        opacity -= 0.01;
      }

      if (frameNumber === 2500) {
        opacity = 0;
      }
      if (frameNumber > 2500 && frameNumber < 99999) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        if (window.innerWidth < 600) {
          drawTextWithLineBreaks(['I\'m obsessed with you so much Chioma Precious Chigozie Okafor, more than', 'all the time and space in the universe can contain'], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
          drawTextWithLineBreaks(['I\'m obsessed with you so much Chioma Precious Chigozie Okafor,', 'more than all the time and space in the universe can contain'], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        }
        opacity += 0.01;
      }

      if (frameNumber >= 2750 && frameNumber < 99999) {
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;
        if (window.innerWidth < 600) {
          drawTextWithLineBreaks(['and I can\'t wait to spend all the time in', 'the world to share that love with you!'], canvas.width / 2, canvas.height / 2 + 60, fontSize, lineHeight);
        } else {
          drawTextWithLineBreaks(['and I can\'t wait to spend all the time in the world', 'to share that love with you!'], canvas.width / 2, canvas.height / 2 + 50, fontSize, lineHeight);
        }
        secondOpacity += 0.01;
      }

      if (frameNumber >= 3000 && frameNumber < 99999) {
        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        context.fillText("Happy Valentine's Day Baby", canvas.width / 2, canvas.height / 2 + 120);
        thirdOpacity += 0.01;

        if (!hasShownQuestion) {
          hasShownQuestion = true;
          setQuestionVisible(true);
        }
      }

      context.shadowColor = 'transparent';
      context.shadowBlur = 0;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
    }

    function draw() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawStars();
      updateStars();
      drawText();

      if (frameNumber < 99999) {
        frameNumber += 1;
      }
      animationId = window.requestAnimationFrame(draw);
    }

    function onResize() {
      setCanvasSize();
    }

    window.addEventListener('resize', onResize);
    animationId = window.requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', onResize);
      if (animationId) {
        window.cancelAnimationFrame(animationId);
      }
    };
  }, []);

  useEffect(() => {
    if (!questionVisible || typeof window === 'undefined') {
      return;
    }

    setNoButtonPosition({
      x: Math.floor(window.innerWidth / 2 + 70),
      y: Math.floor(window.innerHeight / 2 + 245),
    });
  }, [questionVisible]);

  function moveNoButton() {
    if (typeof window === 'undefined') {
      return;
    }

    setNoAttempts((previous) => previous + 1);

    const minX = 8;
    const minY = 8;
    const maxX = Math.max(minX, window.innerWidth - 110);
    const maxY = Math.max(minY, window.innerHeight - 54);
    const nextX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    const nextY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    setNoButtonPosition({ x: nextX, y: nextY });
  }

  function onYesClick() {
    setAccepted(true);
  }

  const noButtonScale = Math.max(0.2, Math.pow(0.8, noAttempts));

  const noButtonStyle = noAttempts > 0
    ? {
      left: `${noButtonPosition.x}px`,
      top: `${noButtonPosition.y}px`,
      transform: `scale(${noButtonScale})`,
    }
    : undefined;

  const showPrompt = questionVisible && !accepted;

  const message = accepted
    ? "Of course you will say Yes 😌 ❤️"
    : 'Would you be my valentine?';

  const promptClassName = accepted ? 'valentinePrompt accepted' : 'valentinePrompt';

  const noButtonClassName = noAttempts > 0 ? 'noButton moving' : 'noButton';

  function onNoPointerEnter() {
    if (showPrompt) {
      moveNoButton();
    }
  }

  function onNoPointerDown(event) {
    event.preventDefault();
    moveNoButton();
  }

  function onNoClick(event) {
    event.preventDefault();
    moveNoButton();
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="/images/favicon.png" />
        <link rel="icon" href="/images/favicon.png" />
        <title>Happy Valentine's Day Chiomaaaaaa Chigozie my love Okafor</title>
      </Head>

      <canvas id="starfield" ref={canvasRef} />

      {questionVisible && (
        <div className={promptClassName}>
          <p className="questionText">{message}</p>

          {!accepted && (
            <div className="answerRow">
              <button className="yesButton" type="button" onClick={onYesClick}>
                Yes
              </button>

              <button
                className={noButtonClassName}
                type="button"
                style={noButtonStyle}
                onPointerEnter={onNoPointerEnter}
                onPointerDown={onNoPointerDown}
                onClick={onNoClick}
              >
                No
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
