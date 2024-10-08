function readFunction(functionT){
    const letterslist = (() => {
        const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
        return caps.concat(caps.map(letter => letter.toLowerCase()));
    })();
    for (letter in functionT){
        if (letter === letterslist[1]){
            return 0;
        }
    }
}