'use client';

import { useRouter } from 'next/navigation';

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const handleRemove = async () => {
    await fetch('http://localhost:3000/api/topics', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    router.refresh();
  };

  return (
    <>
      <button onClick={handleRemove} className='font-bold text-red-700'>
        Remover
      </button>
    </>
  );
}
