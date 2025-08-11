import Link from 'next/link';

export default function EditBtn({ id }) {
  return (
    <>
      <Link
        href={`http://localhost:3000/editTopic/${id}`}
        className='text-blue-400 mr-2'>
        Editar
      </Link>
    </>
  );
}
