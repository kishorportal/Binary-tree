class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
const breadthFirstPrint = (root)=>{
    const queue = [root];
    while(queue.length > 0){
       const curr = queue.shift();
       console.log(curr.val);
       if(curr.left !== null){
           queue.push(curr.left);
       }
       if(curr.right !== null){
           queue.push(curr.right);
       }
    }
}
// cl
const bfs = (root,target)=>{
    const queue = [root];
    while(queue.length > 0){
       const curr = queue.shift();
       if(curr.val === target){
           return true;
       }
       if(curr.left !== null){
           queue.push(curr.left);
       }
       if(curr.right !== null){
           queue.push(curr.right);
       }
    }
    return false;

}
const sumTree = (root)=>{
    const queue = [root];
    let sum = 0;
    while(queue.length > 0){
       const curr = queue.shift();
       sum += curr.val;
       if(curr.left !== null){
           queue.push(curr.left);
       }
       if(curr.right !== null){
           queue.push(curr.right);
       }
    }
    return sum;
}
console.log(sumTree(a));
// console.log(bfs(a,"e"));
// console.log(bfs(a,"z"));
