import { guessChecks } from '../../../common/enums/game.js';
import { generateRandomNumber } from '../../../common/utils/math.js';

export default {
    randomNumber: null,
    checkGuess: function(number) {
        if (number === this.randomNumber) {
            return guessChecks.SUCCESS;
        } else if (number > this.randomNumber) {
            return guessChecks.BIGGER; // 2
        } else if (number < this.randomNumber) {
            return guessChecks.LOWER; // 3
        }
    },
    start: function() {
        this.randomNumber = generateRandomNumber(30, 1);
    },
    reset: function() {
        this.start();
    },
};