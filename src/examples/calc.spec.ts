export function add(x: number, y: number) {
  return x + y;
}

describe('Initial Test', () => {
  test('Add function', () => {
    expect(add(1, 2)).toBe(3);
  });
});
