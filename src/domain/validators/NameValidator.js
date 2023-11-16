import throwValidationError from '../../utils/throwValidationError.js';
import { ERROR_MESSAGE } from '../../constants/messages.js';
import { VALID_CONDITION } from '../../constants/conditions.js';

class NameValidator {
  static validate(names) {
    throwValidationError(!this.isValidLength(names), ERROR_MESSAGE.invalidLength);
    throwValidationError(!this.isValidMinMember(names), ERROR_MESSAGE.invalidMinMember);
    throwValidationError(!this.isValidMaxMember(names), ERROR_MESSAGE.invalidMaxMember);
    throwValidationError(!this.isValidUniqueName(names), ERROR_MESSAGE.invalidUnique);
  }

  // 모든 이름의 길이가 유효한지 검증한다.
  static isValidLength(names) {
    return names.every((name) => {
      return (
        name.length >= VALID_CONDITION.minNameLength && name.length <= VALID_CONDITION.maxNameLength
      );
    });
  }

  // 멤버의 수가 최소 숫자 이상인지 검증한다.
  static isValidMinMember(names) {
    const memberCount = names.length;

    return memberCount >= VALID_CONDITION.minMemberCount;
  }

  // 멤버의 수가 최대 숫자 이하인지 검증한다.
  static isValidMaxMember(names) {
    const memberCount = names.length;

    return memberCount <= VALID_CONDITION.maxMemberCount;
  }

  // 이름이 중복되지 않은지 검증한다.
  static isValidUniqueName(names) {
    const uniqueNames = new Set(names);

    return uniqueNames.size === names.length;
  }
}

export default NameValidator;
