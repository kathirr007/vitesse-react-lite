import { useState, type KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export const IndexPage = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleKeyDownEnter = (e: KeyboardEvent) => {
    if (e && e.code === 'Enter' && name) {
      navigate(`/hi/${name}`);
    }
  };

  const handleClickEnter = () => {
    if (name) {
      navigate(`/hi/${name}`);
    }
  };

  return (
    <div>
      <div className='iconify inline-block text-4xl carbon--campsite hover:opacity-75'></div>
      <p>
        <a rel='noreferrer' href='https://github.com/flower-f/revitesse-lite' target='_blank'>
          Revitesse Lite
        </a>
      </p>

      <p>
        <em className='text-sm opacity-75'>Opinionated Vite Starter Template</em>
      </p>

      <div className='py-4'></div>

      <input
        id='input'
        placeholder="What's your name?"
        type='text'
        autoComplete='false'
        className='w-[250px] rounded border border-solid border-gray-200 bg-transparent px-4 py-2 text-center outline-none dark:border-gray-700'
        onKeyDown={handleKeyDownEnter}
        onChange={(e) => setName(e.target.value)}
      />

      <div>
        <button className='btn m-3 text-sm' onClick={handleClickEnter} disabled={!name}>
          Go
        </button>
      </div>
    </div>
  );
};
