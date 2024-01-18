import sum from '.';

describe('sum', () => {
  it('sums two values', () => {
    expect(sum(1, 2)).toEqual(3);
  })
})