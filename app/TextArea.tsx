'use client';

import React, { useEffect, useState } from 'react';
import usePartySocket from 'partysocket/react';

const TextArea = ({
  get,
  add,
}: {
  get: () => void;
  add: (value: string) => void;
}) => {
  const [text, setText] = useState(
    'Hello 👋, you can start entering your text here!'
  );

  const getTextAreaText = async () => {
    try {
      const response = await fetch('/api/textarea');
      const data = await response.json();
      setText(data);
    } catch (error) {
      console.log(error);
      if (error instanceof Error) alert(error.message);
    }
  };

  useEffect(() => {
    getTextAreaText();
  }, []);

  const partySocket = usePartySocket({
    host: 'https://textarea-party.israeljuri.partykit.dev/',
    room: 'my-new-room',
    onMessage: (event) => {
      const message = event.data;
      setText(message);
    },
  });

  const handleChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value;
    add(value);
    partySocket.send(value);
  };

  return (
    <textarea
      className="outline-none text-black focus:border-blue-500 w-full h-full border border-gray-300 p-5 text-lg rounded-md"
      onChange={handleChange}
      value={text}
    ></textarea>
  );
};

export default TextArea;
