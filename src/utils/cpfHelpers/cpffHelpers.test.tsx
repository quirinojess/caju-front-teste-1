import { cpfMask, isValidCpf } from './index';

describe('cpfMask helper', () => {
  it('should return cpf formated correctly', () => {
    expect(cpfMask('11122233300')).toBe('111.222.333-00');
  });

  it('should return error of formater', () => {
    expect(cpfMask('11122233300')).not.toBe('111.222.33300');
  });
});

describe(' isValidCpf helper', () => {
  it('should return cpf is valir', () => {
    expect(isValidCpf('360.488.548-54')).toBeTruthy();
  });

  it('should return cpf is valid without punctuation', () => {
    expect(isValidCpf('36048854854')).toBeTruthy();
  });

  it('should return error of validate if all numbers all equal', () => {
    expect(isValidCpf('000.000.000-00')).toBeFalsy();
  });

  it('should return error of validate if all numbers all equal and without punctuation', () => {
    expect(isValidCpf('0000000000')).toBeFalsy();
  });

  it('should return error if cpf dont contains a eleven digit', () => {
    expect(isValidCpf('000000')).toBeFalsy();
  });

  it('should return error if cpf is not valid number', () => {
    expect(isValidCpf('36012854822')).toBeFalsy();
  });

  it('should return error if cpf is not all numbers', () => {
    expect(isValidCpf('000aaa000-00')).toBeFalsy();
  });
});
