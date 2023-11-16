import { Console } from '@woowacourse/mission-utils';
import parseString from '../utils/parseString.js';
import { INPUT_MESSAGE } from '../constants/messages.js';

const InputView = {
  /**
   * 코치들의 이름을 입력받는다.
   * @returns {String[]} - 코치들의 이름
   */
  async getNames() {
    const coachNames = await Console.readLineAsync(INPUT_MESSAGE.requireNames);

    return parseString(coachNames);
  },

  /**
   * 이름을 전달받아, 해당 이름을 가진 코치가 못먹는 음식을 입력받는다.
   * @param {string} name
   * @returns {String[]} - 못먹는 음식들
   */
  async getHateMenus(name) {
    const hateMenus = await Console.readLineAsync(INPUT_MESSAGE.requireHateMenus(name));

    return parseString(hateMenus);
  },
};

export default InputView;
