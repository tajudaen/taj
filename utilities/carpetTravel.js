exports.carpetTravel = (magic, distance, startPoint) => {
    let successfulIndexArray = [];
    let circumference = magic.length;

    let journey = 0;

    let sp = startPoint;

    let stage = 1;

    while (sp < circumference) {
        journey += magic[sp] - distance[sp];
        if (journey > -1) {
            if (stage++ < circumference) {
                sp++;
            } else {
                circumference = startPoint;
                sp = 0;
            }
        } else {
            break;
        }
    }

    if (journey > -1) {
        successfulIndexArray.push(startPoint);
    }

    if (successfulIndexArray.length < 1) {
        return -1
    } else {
        return journey //Math.min(...successfulIndexArray);
    }

}