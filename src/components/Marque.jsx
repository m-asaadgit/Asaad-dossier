import React, { useState, useEffect } from 'react';

function Marque() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  // Directly include text in JSX
  const fullText = `<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width,
     initial-scale=1.0" />\n    <title>Document</title>\n</head>\n<body>\n    \n</body>\n</html>`;

  useEffect(() => {
    if (index < fullText.length) {
      const timeoutId = setTimeout(() => {
        setText(text + fullText.charAt(index));
        setIndex(index + 1);
      }, 100); // Adjust the speed here
      return () => clearTimeout(timeoutId);
    }
  }, [text, index]);

  return (
    <div className="font-mono ml-36 fixed top-[10%] z-0 left-[30%]  h-[50%] rounded-md    w-[100%] opacity-10 text-wrap bg-black-400 text-2xl p-4"> 
      <pre className='animate-blink'>
        {text}
        <span className="border-r-2 border-black animate-blink"></span>
      </pre>
    </div>
  );
}
// [rgb(26,25,54)]

export default Marque;
