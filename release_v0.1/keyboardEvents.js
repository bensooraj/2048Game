window.addEventListener('keydown', function(e) {
    if (e.keyCode === 38) {
        e.stopPropagation();
        testArr.moveUp();
        testArr.magicWhoosh();
        testArr.prettyPrint();
        console.log('-------------------------------');

    } else if (e.keyCode === 40) {
        e.stopPropagation();
        testArr.moveDown();
        testArr.magicWhoosh();
        testArr.prettyPrint();
        console.log('-------------------------------');

    } else if (e.keyCode === 37) {
        e.stopPropagation();
        testArr.moveLeft();
        testArr.magicWhoosh();
        testArr.prettyPrint();
        console.log('-------------------------------');

    } else if (e.keyCode === 39) {
        e.stopPropagation();
        testArr.moveRight();
        testArr.magicWhoosh();
        testArr.prettyPrint();
        console.log('-------------------------------');

    }
});