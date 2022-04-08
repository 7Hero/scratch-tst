declare global {
  interface Array<T> {
    isEmpty(): boolean;
  }
}
export default Array.prototype.isEmpty = function() {
  return this.length === 0 ? true : false; 
}