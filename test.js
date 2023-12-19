import promptSync from 'prompt-sync';
import {displayMenu} from "./menu.js";
const prompt = promptSync();

export const riceCooker = {
  ricePresent: false,
  riceCooked: false,
  steamingInProgress: false,
  heatingInProgress: false,

  addRice() {
    if (!this.ricePresent) {
      this.ricePresent = true;
      console.log('Rice has been added.');
      return;
    }
    console.log('There\'s already rice in the rice cooker.');
    return;
  },

  cookRice() {
    if(!this.ricePresent){
        console.log('Cannot cook. The rice cooker is empty.');
        return;
    }
    if(this.riceCooked){
        console.log('The rice is already cooked.');
        return;
    }
    console.log('Cooking rice...');
    this.delaySync(1500);
    this.riceCooked = true;
    console.log('The rice has been cooked!');
  },

  steam() {
    if(!this.ricePresent){
        console.log('Cannot steam. The rice cooker is empty.');
        return;
    }
    if(this.steamingInProgress){
        console.log('Steaming is already in progress.');
        return;
    }
    console.log('Steaming in progress...');
    this.steamingInProgress = true;
    this.delaySync(1500);
    this.steamingInProgress = false;
    return 'Steaming completed!';
  },

  keepWarm() {
    if(!this.ricePresent){
        console.log('Cannot keep warm. The rice cooker is empty.');
        return;
    }
    if(!this.riceCooked){
        console.log('Cannot keep warm. The rice is not cooked.');
        return;
    }
    if(!this.heatingInProgress){
        console.log('Keeping warm is already in progress.');
        return;
    }
    this.heatingInProgress = true;
    console.log('The rice is now being kept warm.');
    return;
  },

  removeRice() {
    if(!this.ricePresent) {
        console.log('There\'s no rice to remove or it is not cooked yet.');
        return;
    }
    if(this.riceCooked || this.heatingInProgress){
        this.ricePresent = false;
        this.riceCooked = false;
        this.steamingInProgress = false;
        this.heatingInProgress = false;
        console.log('The rice has been removed from the rice cooker.');
        return;
    }
    else{
        console.log('There is rice but not cooked yet');
        return;
    }
  },

  delaySync(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
    }
  },
};


export function simulateRiceCooker() {
  while (true) {
    displayMenu();
    let input = prompt('Enter your choice: ');
    switch(input){
        case 1:
            riceCooker.addRice();
        case 2:
            riceCooker.cookRice();
        case 3:
            riceCooker.steam();
        case 4:
            riceCooker.keepWarm();
        case 5:
            riceCooker.removeRice();
        case 6:
            console.log('Thank you for using the Rice Cooker Simulator. Goodbye!');
            return false;
        default:
            console.log('Invalid choice. Please select a valid option.');
    }
  }
}

simulateRiceCooker();