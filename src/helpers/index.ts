export const filteredArr = (
  arr: Array<{ id: string }>
): Array<{ id: string }> =>
  arr.reduce((acc, current) => {
    const x = acc.find((item) => item.id === current.id);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
