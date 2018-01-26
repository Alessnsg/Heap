export default class Heap {
  /**
  * @constructor
  * @param {object} [configuration = {}] heap configuration
  * @param {array} [configuration.nodes = []] - initial nodes
  * @param {function} [configuration.comparator = this.comparator] - comparator function
  * @description configurate heap
  **/
  constructor( { nodes = [], comparator = this.comparator } = {} ) {
    this.nodes = nodes;
    this.comparator = comparator;
  }
  
  /**
  * BASIC OPERATIONS
  **/
  
  /**
  * @public
  * @param {...number} nodes - nodes to insert 
  * @description insert nodes
  * @return {object} Heap - return heap
  **/
  insert(...nodes) {
    /**
    * push new nodes
    **/
    this.nodes.push(...nodes)
    /**
    * sort nodes
    **/
    this.sort()
    /**
    * return heap
    **/
    return this
  }
  
  /**
  * @public
  * @param {number} index - index to remove
  * @description remove the item on the given index
  * @return {object} Heap - return heap
  **/
  remove(index) {
    /**
    * get nodes
    **/
    const nodes = this.nodes
    /**
    * filter the node with the given index
    **/
    const filtered = nodes.filter((node, nodeIndex) => nodeIndex !== index)
    /**
    * set the filtered nodes
    **/
    this.nodes = filtered
    /**
    * sort nodes
    **/
    this.sort()
    /**
    * return heap
    **/
    return this
  }
  
  /**
  * @public
  * @param {number} index - index of the node to replace
  * @param {number} node - node 
  * @description replace a node on the given index
  * @return {object} Heap - return heap
  **/
  replace(index, node) {
    /**
    * get nodes
    **/
    const nodes = this.nodes
    /**
    * replace node
    **/
    nodes[index] = node 
    /**
    * assign nodes again
    **/
    this.nodes = nodes
    /**
    * sort nodes
    **/
    this.sort()
    /**
    * return heap
    **/
    return this
  }
  
  /**
  * @public
  * @description get and remove fisrt item
  * @return {number} node
  **/
  shift() {
    /**
    * get and remove the first item
    **/
    const node = this.nodes.shift()
    /**
    * sort nodes
    **/
    this.sort()
    /**
    * return node
    **/
    return node
  }

  sort() {
    /**
    * get nodes
    **/
    const nodes = this.nodes
    /**
    * get comparator function
    **/
    const compare = this.comparator;
    /**
    * iterate binary tree
    **/
    for (let index = Math.floor(nodes.length/2); index >= 0; index--) {
      /**
      * compare nodes to sort
      **/
      compare.call(this, nodes, index)
    }
  }
  
  /**
  * INTERNAL OPERATIONS
  **/
  comparator (nodes, index)  {
    /**
    * get largest number
    **/
    let largest = index
    /**
    * get nodes size
    **/
    const size = nodes.length
    /**
    * get left node
    **/
    const left = 2 * index + 1
    /**
    * get right node
    **/
    const right = left + 1
    /**
    * swap nodes function
    **/
    const swap = (nodes, firstIndex, secondIndex) => {
      const temporary = nodes[firstIndex]
      nodes[firstIndex] = nodes[secondIndex]
      nodes[secondIndex] = temporary
    }
    
    /**
    * if left node is larger is the largest
    **/
    if (
      left <= size &&
      nodes[left] > nodes[largest]
    ) {
      largest = left
    }

    /**
    * if right node is larger is the largest
    **/
    if (
      right <= size &&
      nodes[right] > nodes[largest]
    ) {
      largest = right
    }

    /**
    * if largest is not equals to the index sort again
    **/
    if ( largest !== index ) {
      swap(nodes, index, largest)
      this.sort(nodes, largest)
    }
  }
  
  /**
  * INSPECTION OPERATIONS
  **/
  get peek() {
    return this.nodes[0]
  }
  
  get size() {
    return this.nodes.length
  }
  
  get isEmpty() {
    return this.nodes.length === 0
  }
  
  get toString() {
    return this.nodes.toString();
  }
  
  get toArray() {
    return this.nodes;
  }
  
  get nodes() {
    return this.nodes;
  }
}