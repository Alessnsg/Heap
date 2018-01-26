import Heap from '../dist/'

describe('Heap', () => {
  
  const heap = new Heap()
  
  test('Insert', () => {
    heap.insert(1)
    
    expect(heap.size).toBeGreaterThanOrEqual(1);
  })
  
  test('Remove', () => {
    heap.remove(0)
    
    expect(heap.size).toEqual(0)
  })
  
  test('Replace', () => {
    heap.replace(0, 5)
    
    expect(heap.toArray[0]).toEqual(5);
  })
  
  test('Shift', () => {
    const first = heap.shift()
    
    expect(first).toEqual(5)
    expect(heap.size).toEqual(0)
  })
  
  test('Sort', () => {
    heap.insert(5, 4, 6, 100, 200, 150, 7, 10, 1000)
    
    expect(heap.peek).toEqual(1000)
  })
  
  test('Replace Peek', () => {
    heap.replace(5, 1000000)
    
    expect(heap.peek).toEqual(1000000)
  })
  
  test('Size', () => {
    const size = heap.size
    
    expect(size).toEqual(9)
  })
});