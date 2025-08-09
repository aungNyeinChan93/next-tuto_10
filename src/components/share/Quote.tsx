import React, { Suspense } from "react";
import Loader from "./Loader";

// getQuotes
export const getQuotes = async () => {
  try {
    const response = await fetch("https://dummyjson.com/quotes");
    const { quotes } = await response.json();
    return quotes;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
};

// getTodos
export const getTodos = async () => {
  try {
    const response = await fetch("https://dummyjson.com/todos");
    const { todos } = await response.json();
    return todos;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
};

// getUsers
export const getUsers = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const { users } = await response.json();
    return users;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
};

const Quotes = async () => {
  const [quotes, users, todos] = await Promise.all([
    getQuotes(),
    getUsers(),
    getTodos(),
  ]);

  //   console.log({ users, todos, quotes });

  return (
    <React.Fragment>
      <main className="container mx-auto p-10 my-2">
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 ">
          <Suspense fallback={"Quotes Loading  ... "}>
            <div>
              <h4>Quotes </h4>
              {quotes &&
                Array.isArray(quotes) &&
                quotes?.map((quote) => (
                  <div
                    className="p-2 my-2 text-base text-indigo-400 bg-amber-300 rounded-md"
                    key={quote.id}
                  >
                    {quote.quote}
                  </div>
                ))}
            </div>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <div>
              <h4>Users </h4>
              {users &&
                Array.isArray(users) &&
                users?.map((user) => (
                  <div
                    className="p-2 my-2 text-base text-indigo-400 bg-amber-300 rounded-md"
                    key={user.id}
                  >
                    {user.username}
                  </div>
                ))}
            </div>
          </Suspense>
          <Suspense fallback={"todo laoding ... "}>
            <div>
              <h4>Todos </h4>
              {todos &&
                Array.isArray(todos) &&
                todos?.map((todo) => (
                  <div
                    className="p-2 my-2 text-base text-indigo-400 bg-amber-300 rounded-md"
                    key={todo.id}
                  >
                    {todo.todo}
                  </div>
                ))}
            </div>
          </Suspense>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Quotes;
