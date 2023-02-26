import Lotto from './lotto/Lotto';
import BonusNumberReward from './reward/BonusReward';
import Reward from './reward/Reward';
import WinningLotto from './WinningLotto';

class LottoResult {
  /** @type {Reward[]} */
  static DEFAULT_REWARDS = [
    new Reward(6, 2_000_000_000),
    new BonusNumberReward(5, 30_000_000),
    new Reward(5, 1_500_000),
    new Reward(4, 50_000),
    new Reward(3, 5_000),
  ];

  /** @type {WinningLotto} */
  #winningLotto;

  /** @type {Reward[]} */
  #rewards;

  /**
   * @param {WinningLotto} winningLotto
   * @param {Reward[]} rewards
   */
  constructor(winningLotto, rewards = LottoResult.DEFAULT_REWARDS) {
    this.#winningLotto = winningLotto;
    this.#rewards = rewards;
  }

  getRewards() {
    return this.#rewards;
  }

  /**
   * @param {Lotto} lotto
   * @returns {Reward | null}
   */
  findReward(lotto) {
    const foundReward =
      this.#rewards.find((reward) => {
        return reward.isQualified(lotto, this.#winningLotto);
      }) ?? null;
    return foundReward;
  }
}

export default LottoResult;