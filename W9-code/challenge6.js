let vote = ["A", "B", "B", "C", "A"];
let voteA = 0;
let voteB = 0;
let voteC = 0;
let winner = "";
for (let i = 0; i < vote.length; i++) {
  if (vote[i] == "A") {
    voteA++;
  } else if (vote[i] == "B") {
    voteB++;
  } else voteC++;
}
// find maximum;
if (voteA >= voteB && voteA >= voteC) {
  // a = 2 b = 2 c = 1
  winner += "A" + " ";
}
if (voteB >= voteA && voteB >= voteC) {
  winner += "B" + " ";
}
if (voteC >= voteA && voteC >= voteB) {
  winner += "C" + " ";
}
if (winner.length == 1) {
  console.log(winner + "is the winner");
} else console.log(winner + "are the winner");
