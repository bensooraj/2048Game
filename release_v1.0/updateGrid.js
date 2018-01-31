function updateGrid() {
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            // console.log(row+''+col+'');
            let targetCell = document.getElementById(row + '' + col + '');
            if (testArr[row][col] === null) {
                targetCell.textContent = "";
                continue;
            }
            targetCell.textContent = testArr[row][col];
        }
    }
}