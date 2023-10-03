export const increaseCount = (counter, id) => {
  return counter.map((c) =>
    c.id == id ? { ...c, count: c.count + 1 } : { ...c }
  );
};
