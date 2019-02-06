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
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }
  passengers(){
    return this.trips().map(trip => {
      return trip.passenger()
    })
  }
}

let passengerIds = 0
class Passenger{
  constructor(name){
    this.name = name
    this.id = ++passengerIds
    store.passengers.push(this)
  }
  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId == this.id 
    })
  }
  drivers(){
    return this.trips().map(trip => {
      return trip.driver()
    })
  }
}

let tripIds = 0
class Trip{
  constructor(name, driver, passenger){
    this.id = ++tripIds
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }
  driver(){
    return store.drivers.find(driver => {
      return driver.id === this.driverId
    })
  }
  passenger(){
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId
    })
  }
}
