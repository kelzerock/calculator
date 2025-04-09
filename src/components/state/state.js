export class State {
  constructor(display) {
    this.display = display;
    this.currentState = '0';
    this.lastState = null;
    this.operator = null;
    this.updateDisplay();
  }

  set last_State(numStr) {
    this.currentState += numStr;
  }

  get last_State() {
    return this.currentState;
  }

  set operator_info(operator) {
    this.operator = operator;
  }

  get operator_info() {
    return this.operator;
  }

  updateDisplay() {
    const message = this.currentState;
    console.log({ message, state: this.currentState });
    if (message.length > 11) {
      this.display.value = message.slice(-11);
    } else {
      this.display.value = message;
    }
  }

  handleOperation(infoAboutOperation) {
    if (infoAboutOperation === 'AC') {
      this.currentState = '0';
    }
    if ('123456789'.includes(infoAboutOperation)) {
      if (this.currentState === '0') {
        this.currentState = infoAboutOperation;
      } else {
        this.currentState += infoAboutOperation;
      }
    }
    this.updateDisplay();
  }
}
