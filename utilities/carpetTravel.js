exports.carpetTravel = (magic, distance, startPoint) => {
    let successfulIndexArray = {};
    let circumference = magic.length;

    let journey = 0;

    let sp = startPoint;

    let stage = 0;
    let totalIteration = circumference

    while (sp < circumference) {
        journey = journey + (magic[sp] - distance[sp]);
        stage++
        
        
        if (stage < totalIteration) {
            sp++;
        } else {
            circumference = startPoint;
            sp = 0;
        }
    }
    successfulIndexArray[startPoint] = journey;


    return successfulIndexArray;

    // if (successfulIndexArray.length < 1) {
    //     return -1
    // } else {
    //     return journey //Math.min(...successfulIndexArray);
    // }

}