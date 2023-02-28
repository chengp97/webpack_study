import _ from 'lodash'
const element = document.createElement('div');
element.innerHTML = _.join(['Hello', '静态引入'], ' ');
document.body.appendChild(element)