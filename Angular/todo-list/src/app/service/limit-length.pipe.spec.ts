import { LimitLengthPipe } from './limit-length.pipe';

describe('LimitLengthPipe', () => {
  let pipe: LimitLengthPipe;

  beforeEach(() => {
    pipe = new LimitLengthPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should truncate strings longer than the limit', () => {
    const result = pipe.transform('Hello World', 5);
    expect(result).toBe('Hello...');
  });

  it('should not modify strings shorter than the limit', () => {
    const result = pipe.transform('Hello', 5);
    expect(result).toBe('Hello');
  });

  it('should handle empty string input', () => {
    const result = pipe.transform('', 5);
    expect(result).toBe('');
  });

  it('should handle limit of 0', () => {
    const result = pipe.transform('Hello World', 0);
    expect(result).toBe('...');
  });
});
