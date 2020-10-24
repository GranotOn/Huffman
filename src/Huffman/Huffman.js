import Node from "./Tree.js";

function parseDataToObject(data) {
  const obj = [...data].reduce(
    // count each char's occurance
    (acc, char) => ((acc[char] = (acc[char] || 0) + 1), acc),
    {}
  );

  return sortObject(obj);
}

function sortObject(obj) {
  return Object.fromEntries(Object.entries(obj).sort((a, b) => {
    return a[1] - b[1];
  }));
}

function code(obj) {
    var arr = Node.createNodeArrayFromObject(obj);
    if (arr.length <= 1)
        return arr[0] || null;
    
    return codeHelper(arr, 0);
}

function codeHelper(arr, i) {
    if (arr.length === 1)
        return arr;

    var left = arr[0], right = arr[1];
    var nodeItem = Node.createNodeArrayItem("z_" + i.toString(), left.count + right.count);
    nodeItem.node.setLeftNode = left.node;
    nodeItem.node.setRightNode = right.node;

    return codeHelper(arr.splice(0, 2), i++)
}

export { parseDataToObject, code };
