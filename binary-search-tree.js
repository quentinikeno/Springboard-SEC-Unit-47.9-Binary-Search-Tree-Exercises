class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	/** insert(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses iteration. */

	insert(val) {
		const node = new Node(val);

		// Set the root to be the new node if the tree is empty.
		if (this.root === null) {
			this.root = node;
			return this;
		}

		let current = this.root;
		// Loop and search the tree for a place to add the node.
		while (current) {
			// Throw an error if the val already exists in the tree.
			if (current.val === val)
				throw new Error(
					"Duplicate value: value is already in binary search tree."
				);

			const valLessCurrent = val < current.val;
			const next = valLessCurrent ? current.left : current.right;
			if (next === null) {
				if (valLessCurrent) {
					current.left = node;
				} else {
					current.right = node;
				}
				return this;
			}
			current = next;
		}
	}

	/** insertRecursively(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses recursion. */

	insertRecursively(val, current = this.root) {
		const node = new Node(val);

		// Set the root to be the new node if the tree is empty.
		if (this.root === null) {
			this.root = node;
			return this;
		}

		// Recursively search the tree for a place to add the node.
		// Throw an error if the val already exists in the tree.
		if (current.val === val)
			throw new Error(
				"Duplicate value: value is already in binary search tree."
			);

		const valLessCurrent = val < current.val;
		const next = valLessCurrent ? current.left : current.right;
		if (next === null) {
			if (valLessCurrent) {
				current.left = node;
			} else {
				current.right = node;
			}
			return this;
		}
		return this.insertRecursively(val, next);
	}

	/** find(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses iteration. */

	find(val) {
		let current = this.root;

		while (current) {
			if (current.val === val) {
				return current;
			}
			current = val < current.val ? current.left : current.right;
		}

		return;
	}

	/** findRecursively(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses recursion. */

	findRecursively(val, current = this.root) {
		if (current === null) return;
		if (current.val === val) return current;
		return val < current.val
			? this.findRecursively(val, current.left)
			: this.findRecursively(val, current.right);
	}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
	 * Return an array of visited nodes. */

	dfsPreOrder(current = this.root, visited = []) {
		visited.push(current.val);
		if (current.left) this.dfsPreOrder(current.left, visited);
		if (current.right) this.dfsPreOrder(current.right, visited);

		return visited;
	}

	/** dfsInOrder(): Traverse the array using in-order DFS.
	 * Return an array of visited nodes. */

	dfsInOrder() {}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
	 * Return an array of visited nodes. */

	dfsPostOrder() {}

	/** bfs(): Traverse the array using BFS.
	 * Return an array of visited nodes. */

	bfs() {}

	/** Further Study!
	 * remove(val): Removes a node in the BST with the value val.
	 * Returns the removed node. */

	remove(val) {}

	/** Further Study!
	 * isBalanced(): Returns true if the BST is balanced, false otherwise. */

	isBalanced() {}

	/** Further Study!
	 * findSecondHighest(): Find the second highest value in the BST, if it exists.
	 * Otherwise return undefined. */

	findSecondHighest() {}
}

module.exports = BinarySearchTree;
