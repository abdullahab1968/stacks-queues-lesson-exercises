/* Write your class below */
class Queue{
    constructor(){
        this.queue = []
        this.length = 0
    }
    enqueue(x){
        this.queue.push(x)
        this.length++
    }
    isEmpty(){
        return this.length === 0
    }
    peek(){
        return this.queue[0] || null
    }
    dequeue(){
        if(!this.isEmpty()){
            this.length--
            return this.queue.splice(0, 1)
        }
        return null
    } 
    
    print(){
        console.log(this.queue);
    }

}
let q = new Queue()
console.log(q.isEmpty())    //true
q.print()                   //[]
q.enqueue(2)
console.log(q.isEmpty())    //false
q.enqueue(4)
q.print()                   //[2, 4]
console.log(q.peek())       //2
q.dequeue()
q.dequeue()
console.log(q.peek())       //null
console.log(q.isEmpty())    //true








//You can paste the test code from the lesson below to test your solution




/* Do not remove the exports below */
module.exports = Queue