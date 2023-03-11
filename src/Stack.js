/* Write your class below */

class Stack{
    constructor(){
        this.stack = []
        this.length = 0
    }
    push(x){
        this.stack[this.length++] = x
    }
    pop(){ 
        this.length--
        return this.stack[this.length]
    }
    peek(){
        return this.stack[this.length - 1] || null
    }
    isEmpty(){
        return this.length === 0
    }
    print(){
        let str = '['
        for(let i =0; i<this.length; i++){
            str += this.stack[i]
            if(i < this.length - 1){
                str += ','
            }
        }
        str += ']'
        console.log(str)
    }
}

let myStack = new Stack()
console.log(myStack.isEmpty())    //true
myStack.print()                    //[]
myStack.push(2)      
console.log(myStack.isEmpty())     //false
myStack.push(4)      
myStack.print()                    //[2,4]
console.log(myStack.peek())        //4
myStack.pop()
myStack.pop()
console.log(myStack.peek())       //null
console.log(myStack.isEmpty())  
myStack.pop()
myStack.print()  





//You can paste the test code from the lesson below to test your solution





/* Do not remove the exports below */
module.exports = Stack