import { handleMathOperation } from '../../utils/handleMathOperation';
import { handlePercent } from '../../utils/handlePercent';

const last = (arr) => arr[arr.length - 1];
// const prev = (arr) => arr[arr.length - 2];

export class State {
  constructor(display) {
    this.display = display;
    this.currentState = '';
    this.operator = null;
    this.updateDisplay();
    this.operationComplete = false;
    this.stack = [];
    this.lastArgument = null;
    this.readyToNextMathOperation = false;
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
    if (message === '') {
      this.display.value = '0';
    } else if (message.length > 11) {
      this.display.value = message.slice(-11);
    } else {
      this.display.value = message;
    }
  }

  updateDisplayResult() {
    const message = last(this.stack) || '';
    if (message === '') {
      this.display.value = '0';
    } else if (message.length > 11) {
      this.display.value = message.slice(0, 11);
    } else {
      this.display.value = message;
    }
  }

  resetState() {
    this.currentState = '';
    this.stack = [];
    this.operator = null;
    this.operationComplete = false;
  }

  handleOperation(infoAboutOperation) {
    if (infoAboutOperation === 'AC') {
      this.resetState();
      this.updateDisplay();
    }
    if ('123456789'.includes(infoAboutOperation)) {
      if (this.operationComplete && last(this.stack)) {
        this.stack.push(this.currentState);
        this.currentState = '';
        this.operationComplete = false;
      }
      if (this.currentState === '0') {
        this.currentState = infoAboutOperation;
      } else {
        this.currentState += infoAboutOperation;
      }
      this.updateDisplay();
    }
    if (infoAboutOperation === '0') {
      if (this.currentState === '0') {
        return;
      }
      this.currentState += infoAboutOperation;

      this.updateDisplay();
    }
    if (infoAboutOperation === ',') {
      if (this.currentState.includes('.')) return;
      if (this.currentState.length === 0) {
        this.currentState = '0.';
      } else {
        this.currentState += '.';
      }
      this.updateDisplay();
    }
    if (infoAboutOperation === '±') {
      if (this.operationComplete && last(this.stack)) {
        const lastDigital = last(this.stack);
        if (lastDigital === '0') return;
        if (lastDigital[0] === '-') {
          this.stack[this.stack.length - 1] = lastDigital.slice(1);
        } else {
          this.stack[this.stack.length - 1] = `-${lastDigital}`;
        }
        this.updateDisplayResult();
      } else {
        if (this.currentState === '0') return;
        if (this.currentState[0] === '-') {
          this.currentState = this.currentState.slice(1);
        } else {
          this.currentState = `-${this.currentState}`;
        }
        this.updateDisplay();
      }
    }
    if (infoAboutOperation === '%') {
      if (this.currentState === '0') return;
      const newData = handlePercent(this.currentState);
      if (this.operator) {
        this.stack.push(
          handleMathOperation(this.operator, last(this.stack), newData)
        );
        this.operationComplete = true;
        this.updateDisplayResult();
      } else {
        this.currentState = newData;
        this.updateDisplay();
      }
    }

    if (['+', '-', '×', '÷'].includes(infoAboutOperation)) {
      if (this.currentState === '0') {
        this.operationComplete = infoAboutOperation;
        return;
      }
      if (this.operationComplete) {
        console.log('xxxx');
        // if (this.stack.length === 0) {

        // this.stack.push(this.currentState);
        this.currentState = '';
        this.operator = infoAboutOperation;
        // } else {
        // this.currentstate = '';
        // this.operator = infoAboutOperation;
        // }
      } else {
        console.log('yyyy');
        if (this.readyToNextMathOperation) {
          this.stack.push(
            handleMathOperation(
              this.operator,
              last(this.stack),
              this.currentState
            )
          );
          this.readyToNextMathOperation = false;
          this.operator = infoAboutOperation;
          this.currentState = '';
        } else {
          this.readyToNextMathOperation = true;
          this.operator = infoAboutOperation;
          this.stack.push(this.currentState);
          this.currentState = '';
        }
      }
      this.operationComplete = false;
      this.updateDisplayResult();
    }

    if (infoAboutOperation === '=') {
      const lastArgument = last(this.stack);
      this.stack = [];
      this.stack.push(
        handleMathOperation(this.operator, lastArgument, this.currentState)
      );
      this.operationComplete = true;
      this.readyToNextMathOperation = false;
      this.updateDisplayResult();
    }
    console.log(this);
  }
}
