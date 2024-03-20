import { Post, PostType } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Igorth.png',
      name: 'Igor Dias',
      role: 'Web developer',
    },
    content: [
      { type: 'paragraph', content: 'Hi 👋' },
      {
        type: 'paragraph',
        content: 'Finished a new project using React and Typescript 🚀.',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/IgorTh.png',
      name: 'Laisa Agueda',
      role: 'Student',
    },
    content: [
      { type: 'paragraph', content: 'Hey guys! 👋' },
      {
        type: 'paragraph',
        content: 'Learning a new thing everyday 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
