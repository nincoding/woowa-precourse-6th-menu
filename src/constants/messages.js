const OUTPUT_MESSAGE = {
  start: '점심 메뉴 추천을 시작합니다.',
  resultMessage: '\n메뉴 추천 결과입니다.',
  endMessage: '\n추천을 완료했습니다.\n',
};

const INPUT_MESSAGE = {
  requireNames: '\n코치의 이름을 입력해 주세요. (, 로 구분)\n',
  requireHateMenus: (name) => `\n${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
};

const ERROR_MESSAGE = {
  invalidLength: '[ERROR] 이름은 최소 2글자, 최대 4글자 입력해야 합니다.',
  invalidMinMember: '[ERROR] 코치는 최소 2명 이상 입력해야 합니다.',
  invalidMaxMember: '[ERROR] 코치는 최대 5명 이하 입력해야 합니다.',
  invalidUnique: '[ERROR] 중복되지 않아야 합니다.',
  invalidMaxCount: '[ERROR] 못먹는 메뉴는 최대 2개 이하여야 합니다.',
  invalidContainMenu: '[ERROR] 메뉴판에 못먹는 메뉴가 존재하지 않습니다.',
};

export { OUTPUT_MESSAGE, INPUT_MESSAGE, ERROR_MESSAGE };
