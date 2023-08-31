// Modules
//Every file in node is a module (by default)
//Modules-encapsulated (only minimum is shared)
// We are in charge of what we are sharing
const names= require('./4-names')
const sayHi=require('./5-utils')
const checkAndBake = require('./6-alternative-flavor')
require('./7-mind-grenade')
// sayHi('Rajat Dhakal')
// sayHi(names.john)
// sayHi(names.peter)