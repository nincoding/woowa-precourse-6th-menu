const OUTPUT_MESSAGE = {
  start: '점심 메뉴 추천을 시작합니다.',
};

const INPUT_MESSAGE = {
  requireNames: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
};

const ERROR_MESSAGE = {
  invaildLength: '[ERROR] 이름은 최소 2글자, 최대 4글자 입력해야 합니다.',
  invaildMinMember: '[ERROR] 코치는 최소 2명 이상 입력해야 합니다.',
  invaildMaxMember: '[ERROR] 코치는 최대 5명 이하 입력해야 합니다.',
  invalidUnique: '[ERROR] 이름은 중복되지 않아야 합니다.',
};

export { OUTPUT_MESSAGE, INPUT_MESSAGE, ERROR_MESSAGE };
