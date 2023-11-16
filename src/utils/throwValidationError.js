const throwValidationError = (condition, errorMessage) => {
  if (condition) {
    throw new Error(errorMessage);
  }
};

export default throwValidationError;
