testArr = [
    [ 1,    null, 2,    null ],
    [ 1,    2,    2,    null ],
    [ null, null, null, 4],
    [ 1,    null, 2,    null ]
];

Array.prototype.prettyPrint = function() {
    let line = '';
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (this[row][col] === null) {
                line += this[row][col] + "  "
            } else {
                line += this[row][col] + "     "
            }
        }
        console.log(line);
        line = '';
    }
};
console.log("Start: ");
testArr.prettyPrint();
console.log('-------------------------------');

// Move Right
Array.prototype.moveRight = function () {
    for (let row = 0; row < 4; row++) {
        this[row].sumRight();
        for (let col = 0; col < 4; col++) {
            if (this[row][col] === null) {
                this[row] = this[row].splice(col, 1).concat(this[row]);
            }
        }
    }
}
// testArr.moveRight();

// console.log('');
// testArr.prettyPrint();

// Move left
Array.prototype.moveLeft = function () {
    for (let row = 0; row < 4; row++) {
        this[row].sumLeft();
        for (let col = 3; col >= 0; col--) {
            if (this[row][col] === null) {
                this[row].splice(col, 1);
                this[row].splice(this[row].length, 0, null);
            }
        }
    }
}
// testArr.moveLeft();

// console.log('');
// testArr.prettyPrint();

// Move down
Array.prototype.moveDown = function() {
    let tempArray = new Array(0);

    for (let col = 0; col < 4; col++) {

        for (let row = 0; row < 4; row++) {
            tempArray.push(this[row][col])
        }

        tempArray.sumRight();

        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i] === null) {
                tempArray.splice(i, 1);
                tempArray.splice(0, 0, null)
            }
        }

        for (let row = 0; row < 4; row++) {
            this[row][col] = tempArray[row]
        }

        tempArray = [];
    }
    return this;
};
// testArr.moveDown();

// console.log('');
// testArr.prettyPrint();

// Move up
Array.prototype.moveUp = function() {

    let tempArray = new Array(0);

    for (let col = 0; col < 4; col++) {

        for (let row = 0; row < 4; row++) {
            tempArray.push(this[row][col])
        }

        tempArray.sumLeft();

        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i] === null) {
                tempArray.splice(i, 1);
                tempArray.splice(tempArray.length, 0, null);

                if (tempArray[i] === null) {
                    tempArray.splice(i, 1);
                    tempArray.splice(tempArray.length, 0, null);

                    if (tempArray[i] === null) {
                        tempArray.splice(i, 1);
                        tempArray.splice(tempArray.length, 0, null);
                    }
                }
            }
        }

        for (let row = 0; row < 4; row++) {
            this[row][col] = tempArray[row]
        }

        tempArray = [];
    }
    return this;
};
// testArr.moveUp();

// console.log('');
// testArr.prettyPrint();

// // // // // // Addition/Merging functions // // // // // // 

Array.prototype.sumRight = function () {

    for (let i = 3; i > 0; i--) {
        if (this[i] === null) {
            continue;
        }

        let j = i - 1;
        while (this[j] === null) {
            j--;
        }
        if (this[i] === this[j]) {
            this[i] += this[j];
            this[j] = null;
            i = j;
        }
    }
    return this;
};

Array.prototype.sumLeft = function () {
    for (let i = 0; i < this.length - 1; i++) {
        if (this[i] === null) {
            continue;
        }
        let j = i + 1;
        while (this[j] === null) {
            j++;
        }
        if (this[i] === this[j]) {
            this[i] += this[j];
            this[j] = null;
            i = j;
        }
    }
};

// // // // // // // // // // // // // // // // // // // // // // // // 
// 1. Find empty indices
// 2. Select one of the indices in random
// 3. Select one of either 2 or 4, in random and
// 4. Assign value from [step 3] to the random index from [step 2]

Array.prototype.magicWhoosh = function () {
    var emptyIndices = [];

    for (let row = 0; row < this.length; row++) {
        for (let col = 0; col < this[row].length; col++) {
            if (this[row][col] === null) {
                emptyIndices.push([row, col]);
            }
        }
    }

    var l = emptyIndices[Math.floor(Math.random() * emptyIndices.length)]
    var row = l[0], col = l[1];

    var rand2or4 = Math.random() > 0.5 ? 2 : 4;
    this[row][col] = rand2or4

}
