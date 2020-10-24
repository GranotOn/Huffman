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

  static createNodeArrayFromObject(obj) {
    const arr = [];
    Object.keys(obj).forEach((key) => {
      const node = new Node({ val: key, count: obj[key] });
      arr.push({ node, count: obj[key], name: key });
    });

    return arr;
  }

  static createNodeArrayItem(val, count) {
    return { node: new Node({ val: key }), count: count, name: val };
  }
}
