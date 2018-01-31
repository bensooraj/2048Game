window.addEventListener('keydown', function(e) {
    if (e.keyCode === 38) {
        e.stopPropagation();
        testArr.moveUp();
        updateGrid();
        testArr.magicWhoosh();
        updateGrid();
        testArr.prettyPrint();
        console.log('-------------------------------');

    } else if (e.keyCode === 40) {
        e.stopPropagation();
        testArr.moveDown();
        updateGrid();
        testArr.magicWhoosh();
        updateGrid();
        testArr.prettyPrint();
        console.log('-------------------------------');

    } else if (e.keyCode === 37) {
        e.stopPropagation();
        testArr.moveLeft();
        updateGrid();
        testArr.magicWhoosh();
        updateGrid();
        testArr.prettyPrint();
        console.log('-------------------------------');

    } else if (e.keyCode === 39) {
        e.stopPropagation();
        testArr.moveRight();
        updateGrid();
        testArr.magicWhoosh();
        updateGrid();
        testArr.prettyPrint();
        console.log('-------------------------------');

    }
});