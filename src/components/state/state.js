import { handleMathOperation } from '../../utils/handleMathOperation';
import { handlePercent } from '../../utils/handlePercent';

export class State {
  constructor(display) {
    this.display = display;
    this.currentState = '';
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
    console.log({
      message,
      stateCur: this.currentState,
      laststate: this.lastState,
      oper: this.operator,
    });
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
    if (infoAboutOperation === '0') {
      if (this.currentState === '0') {
        this.currentState += infoAboutOperation;
      }
    }
    if (infoAboutOperation === ',') {
      if (this.currentState.includes('.')) return;
      if (this.currentState.length === 0) {
        this.currentState = '0.';
      } else {
        this.currentState += '.';
      }
    }
    if (infoAboutOperation === '±') {
      if (this.currentState === '0') return;
      if (this.currentState[0] === '-') {
        this.currentState = this.currentState.slice(1);
      } else {
        this.currentState = `-${this.currentState}`;
      }
    }
    if (infoAboutOperation === '%') {
      if (this.currentState === 0) return;
      const newData = handlePercent(this.currentState);
      this.currentState = newData;
    }
    if (['+', '-', '×', '÷'].includes(infoAboutOperation)) {
      if (this.lastState && this.operator) {
        this.lastState = handleMathOperation(
          this.operator,
          this.lastState,
          this.currentState
        );
        console.log({ lastState: this.lastState });
        this.operator = infoAboutOperation;
        this.currentState = '';
      } else {
        this.lastState = this.currentState;
        this.operator = infoAboutOperation;
        this.currentState = '';
      }
    }
    if (infoAboutOperation === '=') {
      this.currentState = handleMathOperation(
        this.operator,
        this.lastState,
        this.currentState
      );
    }
    this.updateDisplay();
  }
}
