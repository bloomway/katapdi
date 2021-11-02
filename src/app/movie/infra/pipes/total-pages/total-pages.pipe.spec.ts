import { TotalPagesPipe } from './total-pages.pipe';

describe('TotalPagesPipe', () => {
  it('create an instance', () => {
    const pipe = new TotalPagesPipe();
    expect(pipe).toBeTruthy();
  });

  it('should returns empty array when totalPage is equal to zero', () => {
      const underTest = new TotalPagesPipe();
      const result = underTest.transform(0, 0);
      expect(result.length).toEqual(0);
  });

  it('should returns null when totalPage is negative', () => {
    const underTest = new TotalPagesPipe();
    const result = underTest.transform(-1, 0);
    expect(result).toEqual(null);
  });

  it('should returns null when currentPage is negative', () => {
    const underTest = new TotalPagesPipe();
    const result = underTest.transform(0, -1);
    expect(result).toEqual(null);
  });

  it('should returns an array containing a 5 elements when totalPage less than 8', () => {
    const underTest = new TotalPagesPipe();
    const result = underTest.transform(5, 0);
    expect(result.length).toEqual(5);
  });

  it('should returns an array containing "..." when totalPage greater than 8', () => {
    const underTest = new TotalPagesPipe();
    const result = underTest.transform(20, 0);
    expect(result).toContain('...');
  });
});
