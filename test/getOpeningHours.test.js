const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Test 1 - não passando argumentos', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });
  // =======================================================================================
  it('Test 2 - Para os argumentos Monday e 09:00-AM', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });
  it('Test 3 - Para os argumentos Tuesday e 09:00-AM', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toEqual(expected);
  });
  it('Test 4 - Para os argumentos Wednesday e 09:00-PM', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });

  // =======================================================================================

  it('Para os argumentos Thu e 09:00-AM', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow();
  });
  it('Para os argumentos Friday e 09:00-ZM', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow();
  });
  it('Para os argumentos Saturday e C9:00-AM', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow();
  });
  it('Para os argumentos Sunday e 09:c0-AM', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow();
  });
  it('Para os argumentos Monday e 13:00-AM', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow();
  });
  it('Para os argumentos Tuesday e 09:60-AM', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow();
  });
});
