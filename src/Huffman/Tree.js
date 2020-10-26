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

  getFreq() {
    return this.data.freq;
  }

  getName() {
    return this.data.val;
  }

  getData() {
      return this.data;
  }

  inOrder() {
      return [...this.left.inOrder, this.data, ...this.right.inOrder]
  }
}
