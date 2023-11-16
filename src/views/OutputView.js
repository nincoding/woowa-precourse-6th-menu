import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';

const OutputView = {
  printErrorMessage(message) {
    Console.print(message);
  },

  printStartMessage() {
    Console.print(OUTPUT_MESSAGE.start);
  },

  printResultMessage() {
    Console.print(OUTPUT_MESSAGE.resultMessage);
  },

  printGenerateMenuTable(data) {
    const keys = Object.keys(data);
    const categoriesIndex = keys.indexOf('카테고리');
    const coachNames = keys.filter((key) => key !== '구분' && key !== '카테고리');

    const table = [
      ['구분', '카테고리', ...coachNames],
      ...data['구분'].map((_, index) => [
        data['구분'][index],
        data['카테고리'][index],
        ...coachNames.map((coachName) => data[coachName][index]),
      ]),
    ];

    const transposedTable = this.transpose(table);

    transposedTable.forEach((row) => Console.print(`[ ${row.join(' | ')} ]`));
  },

  transpose(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
  },

  printEndMessage() {
    Console.print(OUTPUT_MESSAGE.endMessage);
  },
};

export default OutputView;
