async function getTodos() {
  // throw new Error("Confidential access required");
  await wait(2000);
  return fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json())
}

export default async function Home() {
  const todos = await getTodos();
  return (
    <div className="text-center">
      <h1>Hellow</h1>
      <div className="text-xs text-neutral-300">
        {
          todos.map(todo => (
            <div key={todo.id} >
              <p> {todo.completed} {todo.title}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

function wait(duration: number) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  });
}
