const readline = require('readline');

const words = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  // console.log(`Thank you for your valuable feedback: ${answer}`);

  words.push(answer);

  rl.question("What's an activity you like doing? ", (answer2) => {
    // console.log(`Thank you for your valuable feedback: ${answer}`);

    words.push(answer2);
    rl.question('What do you listen to while doing that? ', (answer3) => {
      // console.log(`Thank you for your valuable feedback: ${answer}`);

      words.push(answer3);

      console.log(`${words[0]} loves listening to ${words[2]} while ${words[1]}.`);
      rl.close();
    });
  });
});
