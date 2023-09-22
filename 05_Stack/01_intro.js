class Stack{

    constructor(){
        this.item=[];
    }

    push(element){
        this.item.push(element);
    }

    pop(){
        return this.item.pop();
    }

    isEmpty(){
        return this.item==0;
    }

    peek(){
        return this.item[this.item.length-1];
    }

    size(){
        return this.item.length;
    }

    print(){
        console.log(this.item.toString());
    }
}

let stack = new Stack();
console.log(stack.isEmpty());