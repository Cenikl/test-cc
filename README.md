# Code Complexity
To know code complexity, we need to calculate its Cyclomatic compexity value, basically its measures the complexity (readability,maintenability) value of a code, the lower the better 
<br> <br>


## Code before refactoring :
- _1st method_ : This piece of code have 2 for its complexity because its is composed by :
    * the method declaration addRice()
    * if else statement inside

            addRice() {
                if (!this.ricePresent) {
                    this.ricePresent = true;
                    console.log('Rice has been added.');
                } else {
                    console.log('There\'s already rice in the rice cooker.');
                }
            },
<br>

- _2nd method_ : This one have 4, composed by : <br>
    * the method declaration cookRice()
    * if statement
    * && condition inside if
    * else if statement

            cookRice() {
                if (this.ricePresent && !this.riceCooked){
                    console.log('Cooking rice...');
                    this.delaySync(1500);
                    this.riceCooked = true;
                    console.log('The rice has been cooked!');
                } else if (!this.ricePresent) {
                    console.log('Cannot cook. The rice cooker is empty.');
                } else {
                    console.log('The rice is already cooked.');
                }
            },
<br>

- _3rd method_ : This one piece have 4 for its value :
    * the method declartion steam()
    * if statement
    * && condition inside if
    * else if statement

            steam() {
                if (this.ricePresent && !this.steamingInProgress) {
                    console.log('Steaming in progress...');
                    this.steamingInProgress = true;
                    this.delaySync(1500);
                    this.steamingInProgress = false;
                    console.log('Steaming completed!');
                } else if (!this.ricePresent) {
                    console.log('Cannot steam. The rice cooker is empty.');
                } else {
                    console.log('Steaming is already in progress.');
                }
            },

<br>

- _4th method_ : 6 for its complexity value :
    * the method declaration keepWarm()
    * if statement
    * 2 && conditions inside if
    * double else if statements

            keepWarm() {
                if (this.ricePresent && this.riceCooked && !this.heatingInProgress) {
                    console.log('The rice is now being kept warm.');
                    this.heatingInProgress = true;
                } else if (!this.ricePresent) {
                    console.log('Cannot keep warm. The rice cooker is empty.');
                } else if (!this.riceCooked) {
                    console.log('Cannot keep warm. The rice is not cooked.');
                } else {
                    console.log('Keeping warm is already in progress.');
                }
            },
<br>

- _5th method_ : This one have 4 :
    * the methode declaration removeRice()
    * if statement
    * 2 && conditions inside if

            removeRice() {
                if (this.ricePresent && (this.riceCooked || this.heatingInProgress)) {
                    this.ricePresent = false;
                    this.riceCooked = false;
                    this.steamingInProgress = false;
                    this.heatingInProgress = false;
                    console.log('The rice has been removed from the rice cooker.');
                } else {
                    console.log('There\'s no rice to remove or it is not cooked yet.');
                }
            },
<br>

- _6th method_ : 1 for its value since it only have its method declaration delaySync() and then it nothing too complex
<br>

        delaySync(ms) {
            const start = Date.now();
            while (Date.now() - start < ms) {}
        }
<br>

- _7th method_ : the highest which is 11 for its value :
    * the method declaation simulateRiceCooker()
    * while statement
    * 3 if statements
    * 5 else if statements
    * break statement

            export function simulateRiceCooker() {
                let input;
                const condition = true;

                while (condition) {
                    displayMenu();
                    input = prompt('Enter your choice: ');

                if (input) {
                const choice = parseInt(input);

                if (!isNaN(choice)) {
                    if (choice === 1) {
                        riceCooker.addRice();
                    } else if (choice === 2) {
                        riceCooker.cookRice();
                    } else if (choice === 3) {
                        riceCooker.steam();
                    } else if (choice === 4) {
                        riceCooker.keepWarm();
                    } else if (choice === 5) {
                        riceCooker.removeRice();
                    } else if (choice === 6) {
                        console.log('Thank you for using the Rice Cooker Simulator. Goodbye!');
                        break;
                    } else {
                        console.log('Invalid choice. Please select a valid option.');
                    }
                } else {
                    console.log('Invalid input. Please enter a valid number.');
                }
                } else {
                    console.log('No input provided.');
                }
            }
            }
<br> <br>

## Code after refactoring :

- 1st method : This piece of code have 4 for its complexity because its is composed by :
    * the method declaration addRice()
    * if statement inside
    * the return statement of the condition
    * the return statement of the method

            addRice() {
                if (!this.ricePresent) {
                    this.ricePresent = true;
                    console.log('Rice has been added.');
                    return;
                }
                    console.log('There\'s already rice in the rice cooker.');
                    return;
            },
<br>

- 2nd method : This one have 5, composed by :
    * the method declaration cookRice()
    * double if statements
    * a return statement each inside the if conditions

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
<br>

- 3rd method : This one piece have 6 for its value :
    * the method declartion steam()
    * double if statements
    * a return statement each inside the if conditions
    * return statement at the end of the method

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
<br>

- 4th method : 8 for its complexity value :
    * the method declaration keepWarm()
    * 3 if statements
    * 3 return statement each inside the if statements
    * return statement at the end of the method

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
<br>
- 5th method : This one have 7 :
    * the methode declaration removeRice()
    * 1 condition with if statement
    * 2 conditions to check in the if...else statement
    * 3 return statements

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
<br>
- 6th method : 1 for its value since it only have its method declaration delaySync() and then it nothing too complex

    delaySync(ms) {
        const start = Date.now();
        while (Date.now() - start < ms) {}
    }
<br>
- 7th method : the highest which is 11 for its value :
    * the method declaation simulateRiceCooker()
    * while statement
    * switch statement
    * 6 cases inside the switch
    * return statement inside the 6th case
    * default case

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
<br>

### With these comparison, we can say that the code before refactoring is much better because it have less code complexity value