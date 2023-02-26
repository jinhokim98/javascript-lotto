import Messages from '../../constant/Messages';
import Lotto from '../lotto/Lotto';
import WinningLotto from '../WinningLotto';

class Reward {
  /** @type {number} */
  #matchCount;

  /** @type {number} */
  #money;

  /**
   * @param {number} matchCount
   * @param {number} money
   */
  constructor(matchCount, money) {
    this.#matchCount = matchCount;
    this.#money = money;
  }

  getMatchCount() {
    return this.#matchCount;
  }

  getMoney() {
    return this.#money;
  }

  /**
   * @param {Lotto} lotto
   * @param {WinningLotto} winningLotto
   * @returns {boolean}
   */
  isQualified(lotto, winningLotto) {
    return winningLotto.getMatchCount(lotto) === this.#matchCount;
  }

  getName() {
    return Messages.format(Messages.REWARD_NAME, this.#matchCount);
  }
}

export default Reward;