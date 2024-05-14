class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function buildTree(arr) {
    if (!arr.length) return null;
  
    const queue = [];
    const root = new TreeNode(parseInt(arr[0]));
    queue.push(root);
  
    for (let i = 1; i < arr.length; i += 2) {
      const current = queue.shift();
  
      if (arr[i] !== "null") {
        current.left = new TreeNode(parseInt(arr[i]));
        queue.push(current.left);
      }
  
      if (i + 1 < arr.length && arr[i + 1] !== "null") {
        current.right = new TreeNode(parseInt(arr[i + 1]));
        queue.push(current.right);
      }
    }
  
    return root;
  }
  
  function isSubtree(s, t) {
    if (!s) return !t;
    return isSameTree(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
  }
  
  function isSameTree(s, t) {
    if (!s && !t) return true;
    if (!s || !t || s.val !== t.val) return false;
    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
  }
  
  function checkSubtree() {
    const tree1Input = document.getElementById("tree1").value.trim();
    const tree2Input = document.getElementById("tree2").value.trim();
  
    const tree1Array = tree1Input.split(",");
    const tree2Array = tree2Input.split(",");
  
    const tree1 = buildTree(tree1Array);
    const tree2 = buildTree(tree2Array);
  
    if (isSubtree(tree1, tree2)) {
      displayResult("Tree 2 is a subtree of Tree 1.");
    } else {
      displayResult("Tree 2 is not a subtree of Tree 1.");
    }
  }
  
  function displayResult(message) {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = message;
  }
  