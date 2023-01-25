export class CounterService {

  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;
  constructor() { }

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Counter to inactive: ' + this.activeToInactiveCounter);
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Counter to active: ' + this.inactiveToActiveCounter);
  }

}
