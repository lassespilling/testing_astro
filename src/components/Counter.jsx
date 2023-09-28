export default function Counter() {
  const [count, setCount] = createSignal(1);

  createEffect(() => {
    console.log('Count is', count);
  });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count() + 1)}>+1</button>
    </div>
  );
}
