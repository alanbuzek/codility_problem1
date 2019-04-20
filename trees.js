// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(treeArray) {
  let numberOfSolutions = 0;

  // loop over tree array
  treeArray.forEach((tree, index) => {
    // clone the tree array, set initial values
    let modifiedTreeArray = [...treeArray],
      canBeCut = true,
      previousTree = 0;

    // remove one tree
    modifiedTreeArray.splice(index, 1);

    // loop over modified array
    for (let i = 0; i < modifiedTreeArray.length; i++) {
      if (modifiedTreeArray[i] < previousTree) {
        // if any preceding tree larger then following tree -> can't be cut
        canBeCut = false;
        break;
      } else {
        previousTree = modifiedTreeArray[i];
      }
    }

    if (canBeCut) {
      numberOfSolutions += 1;
    }

    return numberOfSolutions;
  });
}
