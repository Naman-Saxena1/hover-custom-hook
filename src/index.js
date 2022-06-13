import React from 'react';
import ReactDOM from 'react-dom';
import useHover from './use-hover';

function App() {
  const [hoverRef, isHovered] = useHover();

  return (
    <div
      ref={hoverRef}
      style={{
        color: 'white',
        padding: '8rem',
        width: '12rem',
        textAlign: 'center',
        fontSize: '5rem',
        backgroundColor: isHovered ? '#00e3e3' : '#ccc'
      }}
    >
      {isHovered ? '😁' : '☹️'}
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
