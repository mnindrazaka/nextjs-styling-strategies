import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <p>Choose the styling strategies : </p>
      <ol>
        <li>
          <Link href="/vanilla">Vanilla</Link>
        </li>
        <li>
          <Link href="/css-modules">CSS Modules</Link>
        </li>
        <li>
          <Link href="/inline-style">Inline Style</Link>
        </li>
        <li>
          <Link href="/css-in-js">CSS in JS</Link>
        </li>
        <li>
          <Link href="/vanilla-extract">Vanilla Extract</Link>
        </li>
      </ol>
    </div>
  );
};

export default Home;
