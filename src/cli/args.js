const parseArgs = () => {
    process.argv.forEach((value, index, array) => {
        if (array[index + 1]) {
            console.log(`${value} is ${array[index + 1]}`)
        }
    })
};

parseArgs();
