import Lotto from '../src/domain/Lotto';

describe('로또 당첨 기능테스트', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;

  test('사용자가 구매한 로또 번호와 당첨 번호를 비교하여 6개가 일치하면 1등이다.', () => {
    const lottoTicket = new Lotto(winningNumbers);

    expect(lottoTicket.calculatePrize(winningNumbers, bonusNumber)).toBe('1');
  });

  test('사용자가 구매한 로또 번호와 당첨 번호를 비교하여 5개가 일치하고 보너스 번호가 일치하면 2등이다.', () => {
    const lottoTicket = new Lotto([2, 3, 4, 5, 6, 7]);

    expect(lottoTicket.calculatePrize(winningNumbers, bonusNumber)).toBe('2');
  });

  test('사용자가 구매한 로또 번호와 당첨 번호를 비교하여 5개가 일치하고 보너스 번호가 일치하지 않으면 3등이다.', () => {
    const lottoTicket = new Lotto([2, 3, 4, 5, 6, 8]);

    expect(lottoTicket.calculatePrize(winningNumbers, bonusNumber)).toBe('3');
  });

  test('사용자가 구매한 로또 번호와 당첨 번호를 비교하여 4개가 일치하면 4등이다.', () => {
    const lottoTicket = new Lotto([3, 4, 5, 6, 7, 8]);

    expect(lottoTicket.calculatePrize(winningNumbers, bonusNumber)).toBe('4');
  });

  test('사용자가 구매한 로또 번호와 당첨 번호를 비교하여 3개가 일치하면 5등이다.', () => {
    const lottoTicket = new Lotto([4, 5, 6, 7, 8, 9]);

    expect(lottoTicket.calculatePrize(winningNumbers, bonusNumber)).toBe('5');
  });

  test.each([
    [2, [5, 6, 7, 8, 9, 10]],
    [1, [6, 7, 8, 9, 10, 11]],
    [0, [7, 8, 9, 10, 11, 12]],
  ])(
    '사용자가 구매한 로또 번호와 당첨 번호를 비교하여 %s개가 일치하면 낙첨이다.',
    (match, numbers) => {
      const lottoTicket = new Lotto(numbers);

      expect(lottoTicket.calculatePrize(winningNumbers, bonusNumber)).toBe('0');
    },
  );
});
