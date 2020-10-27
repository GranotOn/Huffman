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
    if (this.data.name === name) return "";

    if (this.left && this.left.data.name === name) return "1";

    if (this.right && this.right.data.name === name) return "0";

    var ls, rs;
    if (this.left != null) ls = "1" + this.left.getCode(name);

    if (this.right != null) rs = "0" + this.right.getCode(name);

    if (!ls) return rs;
    if (!rs) return ls;

    return (ls.includes("undefined") ? rs : ls);
  }
}
