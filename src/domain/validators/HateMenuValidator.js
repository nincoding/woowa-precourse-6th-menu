import throwValidationError from '../../utils/throwValidationError.js';
import { ERROR_MESSAGE } from '../../constants/messages.js';
import { VALID_CONDITION } from '../../constants/conditions.js';
import { MENU } from '../../constants/constant.js';

class HateMenuValidator {
  static validate(hateMenus) {
    throwValidationError(!this.isValidhateMenuCount(hateMenus), ERROR_MESSAGE.invalidMaxCount);
    throwValidationError(!this.isValidUniqueName(hateMenus), ERROR_MESSAGE.invalidUnique);
    throwValidationError(!this.isValidContainMenu(hateMenus), ERROR_MESSAGE.invalidContainMenu);
  }

  // 못먹는 메뉴의 최대 개수를 검증한다.
  static isValidhateMenuCount(hateMenus) {
    const hateMenuCount = hateMenus.length;

    return hateMenuCount <= VALID_CONDITION.maxhateMenuCount;
  }

  // 못먹는 메뉴들의 중복이 없는지 검증한다.
  static isValidUniqueName(hateMenus) {
    const uniqueHateMenus = new Set(hateMenus);

    return uniqueHateMenus.size === hateMenus.length;
  }

  // 못먹는 메뉴들이 메뉴판에 존재하는지 검증한다.
  static isValidContainMenu(hateMenus) {
    return hateMenus.every((menu) => Object.values(MENU).join(', ').includes(menu.trim()));
  }
}

export default HateMenuValidator;
