//Weakmap

// WeakMap.prototype.delete(key)
// Removes any value associated to the key. WeakMap.prototype.has(key) will return false afterwards.

// WeakMap.prototype.get(key)
// Returns the value associated to the key, or undefined if there is none.

// WeakMap.prototype.set(key, value)
// Sets the value for the key in the WeakMap object. Returns the WeakMap object.

// WeakMap.prototype.has(key)
// Returns a Boolean asserting whether a value has been associated to the key in the WeakMap object or not.


//It seems that this API coud be implemented in JS with an array of keys and an array of values.


class ClearableWeakMap {
  constructor(init) {
    this._wm = new WeakMap(init)
  }
  clear() {
    this._wm = new WeakMap()
  }
  delete(k) {
    return this._wm.delete(k)
  }
  get(k) {
    return this._wm.get(k)
  }
  has(k) {
    return this._wm.has(k)
  }
  set(k, v) {
    this._wm.set(k, v)
    return this
  }
}

//this is an example of using weak map in a class