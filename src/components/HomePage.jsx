import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandle = () => {
    navigate(`/room/${input}`);
  }

  return (
    <div>
      <div>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='enter your name' />
        <button onClick={submitHandle}>join</button>
      </div>
    </div>
  );
}

export default HomePage;
