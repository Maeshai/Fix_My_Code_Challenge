#!/usr/bin/node
/*
    Print a square with the character #

    The size of the square must be the first argument
    of the program.
*/


if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1)
}

/*
   This line parses the string provided as the second command-line argument (process.argv[2]) 
   as an integer using base 10 (decimal), which is the default behavior of parseInt. 
   This means it expects the string to represent a number in decimal format
*/   
size = parseInt(process.argv[2], 10)

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}
