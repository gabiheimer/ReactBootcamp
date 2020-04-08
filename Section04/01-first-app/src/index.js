// --------- When there is a default export -----------
//import h from './helpers';

// --------- When there is no default export -----------
//import {helpful, sing, sort} from './helpers';

// --------- When there is both -----------
import h, {sort, sing} from './helpers';

h();
sort();
sing();