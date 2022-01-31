function parseSum(sum){
    if((typeof sum) !== 'string') return `can't parse ${sum}`;
    const sumSplit = sum.split('.');
    const newInt = sumSplit[0].split('').reduceRight((acc, cur, index) => { 
        if ((index + 1) % 3 == 0){
            acc.push(' ');
          }
          acc.push(cur);
          return acc;
    }, []);
    return newInt.join('').concat('.', sumSplit[1]);
}
console.log(parseSum('3123123.00'));

