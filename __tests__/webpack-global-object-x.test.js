var globalObject = require('../src/webpack-global-object-x');

describe('globalObject', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof globalObject).toBe('function');
  });

  it('it stringifies', function() {
    expect.assertions(1);
    expect(typeof globalObject.toString()).toBe('string');
  });

  it('returns global', function() {
    expect.assertions(1);
    expect(globalObject()).toBe(global);
  });

  it('returns global without defineProperty', function() {
    expect.assertions(1);
    var defineProperty = Object.defineProperty;
    delete Object.defineProperty;
    expect(globalObject()).toBe(global);
    defineProperty(Object, 'defineProperty', {
      configurable: true,
      value: defineProperty,
      writable: true
    });
  });

  it('returns global without defineProperty or __defineGetter__', function() {
    expect.assertions(1);
    var defineProperty = Object.defineProperty;
    delete Object.defineProperty;
    var defineGetter = Object.prototype.__defineGetter__;
    delete Object.prototype.__defineGetter__;
    expect(globalObject()).toBe(global);
    defineProperty(Object, 'defineProperty', {
      configurable: true,
      value: defineProperty,
      writable: true
    });
    defineProperty(Object.prototype, '__defineGetter__', {
      configurable: true,
      value: defineGetter,
      writable: true
    });
  });
});
