class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addNode(data) {
    this.children.push(new Node(data));
  }

  removeNode(data) {
    this.children = this.children.filter(node => node.data !== data);
  }
}

// const n = new Node('a');
// n.addNode(new Node('b'));

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];
    while(arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];
    while(arr.length) {
      const node = arr.shift();

      arr.unshift(...node.children);
      fn(node);
    }
  }
}

const levelWidth = (root) => {
  const arr = [root, 's'];
  const counters = [0];

  while(arr.length > 1) {
    const node = arr.shift();

    if(node === 's') {
      counters.push(0);
      arr.push('s');
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

const tree = new Tree();
const root = new Node(0);

root.addNode(1);
root.addNode(2);
root.addNode(3);
root.children[0].addNode(4)
root.children[2].addNode(5)
// tree.root = root;

// console.log(a)
// console.log(b)
// console.log(root)
console.log(levelWidth(root))
