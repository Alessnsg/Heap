"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Heap = function () {
  /**
  * @constructor
  * @param {object} [configuration = {}] heap configuration
  * @param {array} [configuration.nodes = []] - initial nodes
  * @param {function} [configuration.comparator = this.comparator] - comparator function
  * @description configurate heap
  **/
  function Heap() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$nodes = _ref.nodes,
        nodes = _ref$nodes === undefined ? [] : _ref$nodes,
        _ref$comparator = _ref.comparator,
        comparator = _ref$comparator === undefined ? this.comparator : _ref$comparator;

    _classCallCheck(this, Heap);

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


  _createClass(Heap, [{
    key: "insert",
    value: function insert() {
      var _nodes;

      /**
      * push new nodes
      **/
      (_nodes = this.nodes).push.apply(_nodes, arguments);
      /**
      *
      **/
      this.sort();
      /**
      * return heap
      **/
      return this;
    }

    /**
    * @public
    * @param {number} index - index to remove
    * @description remove the item on the given index
    * @return {object} Heap - return heap
    **/

  }, {
    key: "remove",
    value: function remove(index) {
      /**
      * get nodes
      **/
      var nodes = this.nodes;
      /**
      * filter the node with the given index
      **/
      var filtered = nodes.filter(function (node, nodeIndex) {
        return nodeIndex !== index;
      });
      /**
      * set the filtered nodes
      **/
      this.nodes = filtered;
      /**
      *
      **/
      this.sort();
      /**
      * return heap
      **/
      return this;
    }

    /**
    * @public
    * @param {number} index - index of the node to replace
    * @param {number} node - node 
    * @description replace a node on the given index
    * @return {object} Heap - return heap
    **/

  }, {
    key: "replace",
    value: function replace(index, node) {
      /**
      * get nodes
      **/
      var nodes = this.nodes;
      /**
      * replace node
      **/
      nodes[index] = node;
      /**
      * assign nodes again
      **/
      this.nodes = nodes;
      /**
      *
      **/
      this.sort();
      /**
      * return heap
      **/
      return this;
    }

    /**
    * @public
    * @description get and remove fisrt item
    * @return {number} node
    **/

  }, {
    key: "shift",
    value: function shift() {
      /**
      * get and remove the first item
      **/
      var node = this.nodes.shift();
      /**
      *
      **/
      this.sort();
      /**
      * return node
      **/
      return node;
    }
  }, {
    key: "sort",
    value: function sort() {
      /**
      *
      **/
      var nodes = this.nodes;
      /**
      *
      **/
      var compare = this.comparator;
      /**
      *
      **/
      for (var index = Math.floor(nodes.length / 2); index >= 0; index--) {
        /**
        *
        **/
        compare.call(this, nodes, index);
      }
    }

    /**
    * INTERNAL OPERATIONS
    **/

  }, {
    key: "comparator",
    value: function comparator(nodes, index) {
      var largest = index;
      var size = nodes.length;
      var left = 2 * index + 1;
      var right = left + 1;
      var swap = function swap(nodes, firstIndex, secondIndex) {
        var temporary = nodes[firstIndex];
        nodes[firstIndex] = nodes[secondIndex];
        nodes[secondIndex] = temporary;
      };

      if (left <= size && nodes[left] > nodes[largest]) {
        largest = left;
      }

      if (right <= size && nodes[right] > nodes[largest]) {
        largest = right;
      }

      if (largest !== index) {
        swap(nodes, index, largest);
        this.sort(nodes, largest);
      }
    }

    /**
    * INSPECTION OPERATIONS
    **/

  }, {
    key: "peek",
    get: function get() {
      return this.nodes[0];
    }
  }, {
    key: "size",
    get: function get() {
      return this.nodes.length;
    }
  }, {
    key: "isEmpty",
    get: function get() {
      return this.nodes.length === 0;
    }
  }, {
    key: "toString",
    get: function get() {
      return this.nodes.toString();
    }
  }, {
    key: "toArray",
    get: function get() {
      return this.nodes;
    }
  }, {
    key: "nodes",
    get: function get() {
      return this.nodes;
    }
  }]);

  return Heap;
}();

exports.default = Heap;