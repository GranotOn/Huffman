export default class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  setLeftNode(data) {
    this.left = data;
  }

  setRightNode(data) {
    this.right = data;
  }

  getCount() {
    return this.data.count;
  }

  getValue() {
    return this.data.val;
  }
}
