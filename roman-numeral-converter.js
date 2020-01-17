function convertToRoman(num) {
    let key = [
        {dec:1, rom:"I"},
        {dec:4, rom:"IV"},
        {dec:5, rom:"V"},
        {dec:9, rom:"IX"},
        {dec:10, rom:"X"},
        {dec:40, rom:"XL"},
        {dec:50, rom:"L"},
        {dec:90, rom:"XC"},
        {dec:100, rom:"C"},
        {dec:400, rom:"CD"},
        {dec:500, rom:"D"},
        {dec:900, rom:"CM"},
        {dec:1000, rom:"M"},
        ];

    let x = num;
    let result = [];
    while (x > 0) {
        for (let i=key.length-1; i>=0; i--) {
            if (key[i].dec <= x){
                result.push(key[i].rom);
                x = x-key[i].dec;
                break;
            }
        };
    };
 return result.join("");
}

convertToRoman(400); //change this line to test
