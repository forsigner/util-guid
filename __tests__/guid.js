'use strict';

jest.dontMock('../lib/guid');
var guid = require('../lib/guid');

describe('guid', () => {
  it('#guid(16) should return a string whose length is 16', () => {
    expect(guid(16).length).toBe(16);
  });

  it('#guid(32) should return a string whose length is 32', () => {
    expect(guid(32).length).toBe(32);
  });

  it('#guid() should return a default string whose length is 32', () => {
    expect(guid().length).toBe(32);
  });

  it('Every time invoke guid() should return a different value', () => {
    expect(guid(16)).not.toEqual(guid(16));
    expect(guid(32)).not.toEqual(guid(32));
    expect(guid()).not.toEqual(guid());
console.log(guid());
console.log(guid(32));
console.log(guid(16));
  });

});