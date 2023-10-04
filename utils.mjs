export const increaseCount = (counter, id) => {
  return counter.map((c) =>
    c.id == id ? { ...c, count: c.count + 1 } : { ...c }
  );
};

export function increaseAll() {
  app.store.counter = app.store.counter.map((c) => {
    return { ...c, count: (c.count += 1) };
  });
}

export function decreaseAll() {
  app.store.counter = app.store.counter.map((c) => {
    return { ...c, count: (c.count -= 1) };
  });
}
