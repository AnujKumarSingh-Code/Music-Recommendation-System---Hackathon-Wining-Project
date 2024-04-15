const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const N = 1e5 + 10;
const vis = new Array(N).fill(false);
const g = new Array(N).fill(null).map(() => []);
const result = [];
let maxx = 0;
let sum = 0;

class MusicNode {
  constructor(name, genre, theme, potd) {
    this.name = name;
    this.genre = genre;
    this.theme = theme;
    this.potd = potd;
  }
}

function dfs(vertex) {
  for (const child of g[vertex]) {
    result.push([child[0], child[1]]);
  }
}

function main() {
  rl.question("Enter the number of songs:", (n) => {
    n = parseInt(n);
    rl.on('line', (line) => {
      const [title, genre, potd] = line.split(" ");
      g[parseInt(genre)].push([parseInt(potd), title]);
    });

    rl.on('close', () => {
      const history = [
        new MusicNode("song1", 1, 1, 6),
        new MusicNode("song2", 2, 2, 7)
      ];

      for (const i of history) {
        if (!vis[i.genre]) {
          dfs(i.genre);
        }
        vis[i.genre] = true;
      }

      result.sort((a, b) => b[0] - a[0]);

      for (let i = 0; i < result.length; i++) {
        console.log(result[i][1]);
      }

      console.log();
    });
  });
}

main();
