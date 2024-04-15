class song{
     constructor(name, genre, potd, artist){
          this.name=name;
          this.genre=genre;
          this.potd=potd;
          this.artist=artist;
     }
}

const a = new song("Song 1",  2, 7 ,"Artist 1");
const b = new song("Song 2", 1,13, "Artist 2");
const c = new song("Song 3", 1,10 ,"Artist 3");

const songs= [a, b, c]; 

const result=[]

function RecentlyPlayed() {
     const recentlyPlayedList = document.getElementById("recentlyPlayed");
     songs.forEach(song => {
         const li = document.createElement("li");
         li.textContent = song.name;
         recentlyPlayedList.appendChild(li);
          });
 }

function Artists() {
     const artistsList = document.getElementById("artists");
     songs.forEach(song => {
              const li = document.createElement("li");
              li.textContent = song.artist + "";
              artistsList.appendChild(li);
     });
 }

function Genres() {
     const genresList = document.getElementById("genres");
     songs.forEach(song => {
         const li = document.createElement("li");
         li.textContent = song.genre;
         genresList.appendChild(li);
     });
}

function recommend(songs) {
    const N = 1e5 + 10;
    const vis = Array(N).fill(false);
    const g = Array(N).fill().map(() => []);
    const result = [];

    function dfs(vertex) {
        for (const child of g[vertex]) {
            result.push([child[0], child[1]]);
        }
    }

    // Preprocess the songs
    songs.forEach(song => {
        g[song.genre].push([song.potd, song.name]);
    });

    const history = [
        { name: "song1", genre: 1, theme: 1, potd: 6 },
        { name: "song2", genre: 2, theme: 2, potd: 7 }
    ];

    for (const i of history) {
        if (!vis[i.genre]) {
            dfs(i.genre);
        }
        vis[i.genre] = true;
    }
    result.sort((a, b) => b[0] - a[0]);
    for (const item of result) {
        const recsong = document.getElementById("recommended");
        const li = document.createElement("li");
        li.textContent = item[1];
        recsong.appendChild(li);
    }
}


recommend(songs);



RecentlyPlayed();
Artists();
Genres();
resultsong();