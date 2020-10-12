module.exports = function check(str, bracketsConfig) {
    const strAsString = str.split('');

    while (true) {
        let foundSequence = false;
        for (let i = 0; i < bracketsConfig.length; i++) {
            const [ leftBracket, rightBracket] = bracketsConfig[i];

            for (let i = 0; i < strAsString.length; i++) {
                if (strAsString[i] === leftBracket && strAsString[i + 1] === rightBracket) {
                    strAsString.splice(i + 1, 1);
                    strAsString.splice(i, 1);
                    foundSequence = true;
                    break;
                }
            }

        }

        if (!foundSequence) {
            break;
        }
    }

    return strAsString.length <= 0;
}
