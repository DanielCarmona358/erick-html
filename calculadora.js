class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ' '
        this.previousOperand = ' '
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)

    }

    appenNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand === '') return;
         
        this.compute()
       
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';

    }
    

    compute() { 
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN (current)) return
        switch (thi.operation) {
            case '+':
                computation = prev + current
                break
            case '+':
                computation = prev + current
                break
            case '+':
                computation = prev + current
                break 
            case '+':
                computation = prev + current
                break
            default:
                return          
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ' '
    }
    
    getDisplayNumber(number) 
    {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('')[0])
        const decimalDigits = stringNumber.split('')[1]
        let integerDisplay 
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } 
        else 
        {
            integerDisplay = integerDigits.toLocaleString('es',maximumFractionDigits)  ; 
            
            if (decimalDigits != null) {
                return `${integerDisplay}.${decimalDigits}`;
            } else {
                    return integerDisplay;
                }
            
        }
    }

    updateDisplay()
    {
        this.currentOperandTextElement.innerText = 
        this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operand}`;
        }
    }    
    
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-equal]')
const equalsButtons = document.querySelectorAll('button[type="submit"]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]')
const currentOperandTextElement = document.querySelectorAll('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appenNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach (button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})
equalsButtons.onclick = function(){
    calculator.compute()
    calculator.updateDisplay()
}

allClearButton.onclick = function() {
    calculator.clear()
    calculator.updateDisplay()
}

deleteButton. onclick = function() {
    calculator.delete()
    calculator.updateDisplay()
}