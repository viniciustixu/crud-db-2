'use client';
import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';

export default function EditTopic({ params }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const router = useRouter();

  useEffect(() => {
    async function fetchTopic() {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`);
      const data = await res.json();
      setNewTitle(data.topic.title);
      setNewDescription(data.topic.description);
    }
    fetchTopic();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ newTitle, newDescription }),
    });

    router.push('/');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-2 items-center mt-[30vh]'>
      <input
        className='border border-gray-400 p-2 rounded-md w-[400px]'
        type='text'
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />

      <input
        className='border border-gray-400 p-2 rounded-md w-[400px]'
        type='text'
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />

      <button
        type='submit'
        className='w-[200px] bg-blue-500 text-white p-3 font-bold text-2xl hover:bg-blue-600'>
        Salvar
      </button>
    </form>
  );
}
