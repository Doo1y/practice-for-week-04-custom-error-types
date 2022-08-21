const ValidationError = require('./validation-error');

class MaximumLengthExceededError extends ValidationError {
  constructor(diff, message = "Maximum length exceeded", ...params) {

    super(...params);

    this.name = "MaximumLengthExceededError";

    if (diff) {
      this.message = `Maximum length exceeded by ${diff}`;
    } else {
      this.message = message;
    };

  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}