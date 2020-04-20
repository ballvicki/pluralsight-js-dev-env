import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('£0,000');

console.log(`I would pay ${courseValue} for this amazing course!`);  // eslint-disable-line no-console
