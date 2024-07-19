import React,{useState} from 'react';
import App from './App';

export default function HideComponent(){
  const [show, setShow] = useState(true);

  const handleClick = () =>{
    setShow(prevState =>!prevState);
  }

    return (
      <>
        <h2>This is test app</h2>
        <button
          onClick={() => {
            handleClick(false);
          }}
        >
          {show ? 'Hide' : 'show'}
        </button>
        <br />
        {show ? <App /> : ''}
      </>
    );
  }