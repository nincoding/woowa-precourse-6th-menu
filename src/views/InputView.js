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
};

export default InputView;
