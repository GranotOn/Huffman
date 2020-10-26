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

  getCode(name) {
    if (this.getName() === name)
      return "";
  }
}
