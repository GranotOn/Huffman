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

function createNodeArray(obj) {
    var arr = [];
    Object.keys(obj).forEach((key) => {
        arr.push(new Node({freq: obj[key], name: key}))
    });
    return arr;
}

function sortNodeArray(arr) {
    arr.sort((a, b) => a.data.freq - b.data.freq)
}

function code(data) {
    var obj = parseDataToObject(data);
    var arr = createNodeArray(obj);
    
    var i = 0;
    while (arr.length > 1) {
        const a = arr[0], b = arr[1];
        const p_freq = a.getFreq() + b.getFreq();
        const p_name = "z_" + i.toString()
        const parent = new Node({freq: p_freq, name: p_name});

        parent.setRightNode(a);
        parent.setLeftNode(b);
        arr.splice(0, 2);
        arr.push(parent);
        sortNodeArray(arr);
        ++i;
    }
    
    return arr;
}

export { code };
