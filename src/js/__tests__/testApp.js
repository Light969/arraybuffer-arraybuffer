import ArrayBufferConverter, { getBuffer } from '../ArrayBufferConverter.js';

test('Проверяем метод - load()', () => {
  const buffer = getBuffer();
  ArrayBufferConverter.load(buffer);
  expect(ArrayBufferConverter.buffer).toEqual(buffer);
});

test('Проверяем метод - toString()', () => {
  const buffer = getBuffer();
  ArrayBufferConverter.load(buffer);
  expect(ArrayBufferConverter.buffer).toEqual(buffer);
  const result = ArrayBufferConverter.toString();
  const object = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(result).toBe(object);
});
