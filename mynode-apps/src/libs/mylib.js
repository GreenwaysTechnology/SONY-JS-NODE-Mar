
//Code 
//name and city
/**
 * function  require(filePath){
 *  let exports = {};
 * 
 *  exports.name = 'Subramanian'
 *
 *
 *  return exports;
 * }
 *
 */
//private to this module
const foo = 'foo';

exports.name = 'Subramanian'
exports.city = 'Coimbatore';
exports.id = 10;
exports.isActive = true;
exports.skills = ['javascript', 'Node', 'MicroServices'];
exports.calculate = function () {
    return 1000;
}
