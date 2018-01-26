# Heap

A no dependencies JavaScript Heap implementation 

## Getting Started

Heap is a data structure to sort information based on a comparator function

## Examples

```js 
import Heap from 'heap-struct'

const heap = new Heap({
  nodes: [1, 6, 8, 225, 100, 200, 150, 200]
})

heap.peek // 225
```

```js 
import Heap from 'heap-struct'

const heap = new Heap()

heap.insert(5, 6, 20, 5)
heap.peek // 20
heap.replace(0, 100)
heap.peek // 100
```

