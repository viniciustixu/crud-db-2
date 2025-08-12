import RemoveBtn from './RemoveBtn';
import EditBtn from './EditBtn';
import NewTopicBtn from './NewTopicBtn';

export default async function TopicList({ id }) {
  const res = await fetch('http://localhost:3000/api/topics');
  const data = await res.json();

  return (
    <div className='flex flex-col items-center mt-[20vh]'>
      {data.topics.map((t) => (
        <div
          key={t._id}
          className='border flex gap-5 mb-5 p-2 w-[700px] justify-between'>
          <h2>{t.title}</h2>
          <p>{t.description}</p>
          <div>
            <EditBtn id={t._id} title={t.title} description={t.description} />
            <RemoveBtn id={t._id} />
          </div>
        </div>
      ))}
      <NewTopicBtn />
    </div>
  );
}
