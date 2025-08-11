export default async function editTopic({ params }) {
  const { id } = await params;

  const res = await fetch('http://localhost:3000/api/topics');
  const data = await res.json();

  return <p>{id}</p>;
}
