'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function createTopic() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const Router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/api/topics', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    });
    Router.push('/');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center mt-[20vh] gap-3'>
      <input
        type='text'
        placeholder='Topic title'
        className='border w-[400px] p-2'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='Topic description'
        className='border w-[400px] p-2'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        type='submit'
        className='bg-blue-500 text-2xl text-white p-3 hover:bg-blue-600 w-[200px]'>
        Criar
      </button>
    </form>
  );
}
