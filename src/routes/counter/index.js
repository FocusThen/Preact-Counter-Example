import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';

// Note: `name` comes from the URL, courtesy of our router
export default function Counter({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div class={style.profile}>
      <h1>Profile: {name}</h1>
      <p>This is the user profile for a user named {name}.</p>

      <p>Clicked {count} times.</p>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
}
