import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';

const OutputView = {
  printErrorMessage(message) {
    Console.print(message);
  },

  printStartMessage() {
    Console.print(OUTPUT_MESSAGE.start);
  },
};

export default OutputView;
