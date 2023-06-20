export default class ArrayBufferConverter {
  static load(buffer) {
    this.buffer = buffer;
  }

  static toString() {
    const bufferNew = new Uint16Array(this.buffer);
    let bufferToString = '';
    for (let i = 0; i < bufferNew.length; i += 1) {
      bufferToString += String.fromCharCode(bufferNew[i]);
    }
    return bufferToString;
  }
}

export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    // i += 1 одно и тоже что и i++
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}
