let store = {
  drivers: [],
  passengers: [],
  trips: []
}
let driverIds = 0
class Driver{
  constructor(name){
    this.name = name
    this.id = ++driverIds
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(function(trip){
      return trip.driverId === this.id
    }).bind(this)
  }
  // passengers(){
  //   return store.passengers.filter(
  //     function(passenger){
  //       return passenger.driverId === this.id
  //   }).bind(this)
  // }
}

let passengerIds = 0
class Passenger{
  constructor(name){
    this.name = name
    this.id = ++passengerIds
    store.passengers.push(this)
  }
}

let tripIds = 0
class Trip{
  constructor(name, driver, passenger){
    this.id = ++tripIds
    if(driver){
      this.driverId = driver.id
    }
    if(passenger){
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }
  trip(){
    return store.trips.find(function(trip){
      return trip.id === this.tripId
    }).bind(this)
  }
  passenger(){
    return store.passengers.find(function(passenger){
      return passenger.id === this.passengerId
    }).bind(this)
  }
}
