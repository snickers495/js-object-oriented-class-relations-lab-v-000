let store = {drivers: []};
let driverId = 0
 class Driver {
   constructor(name) {
     this.name = name;
     store.drivers.push(this);
   }
 }
