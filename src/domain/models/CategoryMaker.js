import { Random } from '@woowacourse/mission-utils';

class CategoryMaker {
  #recommendedCategory;
  #number;
  #category;

  constructor(recommendedCategory) {
    this.#recommendedCategory = recommendedCategory;
    this.#number = this.#makeRandomNumber();
    this.#category = this.#calcCategory();
  }

  getCategory() {
    while (this.#isContainCategory()) {
      this.#number = this.#makeRandomNumber();
      this.#category = this.#calcCategory();
    }

    return this.#category;
  }

  #makeRandomNumber() {
    const number = Random.pickNumberInRange(1, 5);

    return number;
  }

  #calcCategory() {
    if (this.#number === 1) return '일식';
    if (this.#number === 2) return '한식';
    if (this.#number === 3) return '중식';
    if (this.#number === 4) return '아시안';
    if (this.#number === 5) return '양식';
  }

  #isContainCategory() {
    const count = this.#recommendedCategory.filter(
      (category) => category === this.#category
    ).length;

    return count > 1;
  }
}

export default CategoryMaker;
