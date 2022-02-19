//import {} notation
import { export4 } from './export4.js'; 
//import {} with as for some renaming
import { export3 as importing } from './export3.js'
//import * as for all the exports from the other file
import * as exported from './export.js'
//default import ./ for relative path / for absolute path
import mycustomdefault from './export.js'

mycustomdefault();

exported.lastName();

importing();

export4();