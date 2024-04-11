import TextArea from './TextArea';
import redis from './databaseClient';

export default function Home() {
  const addToDataBase = async (data: string) => {
    'use server';
    redis.set('textarea', data);
  };

  const getFromDataBase = async () => {
    'use server';
    redis.get('textarea');
  };

  return (
    <main className="grid p-5 h-screen bg-gray-100">
      <TextArea add={addToDataBase} get={getFromDataBase} />
    </main>
  );
}
