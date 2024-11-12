const dna = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"];

const table = document.getElementById("dnaMatrix");

dna.forEach((string) => {
  const row = document.createElement("tr");

  for (const letter of string) {
    const cell = document.createElement("td");
    cell.textContent = letter; 
    row.appendChild(cell); 
  }

  table.appendChild(row);
});

const highlightCells = (index) => {
  index.forEach(([row, col]) => {
    const cell = table.rows[row].cells[col];
    cell.classList.add("highlight");
  });
};

const searchForMutant = () => {
    const btn = document.getElementById("search");
    btn.on
}


const isMutant = () => {
  const rowNum = dna.length;
  const colNum = dna[0].length;

  console.log("ROW", rowNum, "COL", colNum);

  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const currentLetter = dna[row][col];
      console.log("Current Letter", currentLetter);

      // horizontal check
      if (
        col <= colNum - 4 &&
        currentLetter === dna[row][col + 1] &&
        currentLetter === dna[row][col + 2] &&
        currentLetter === dna[row][col + 3]
      ) {
        console.log(`Found mutant. Same four letters in ${row}`);
        highlightCells([
          [row, col],
          [row, col + 1],
          [row, col + 2],
          [row, col + 3],
        ]);
      }

      // vertical check
      if (
        row <= rowNum - 4 &&
        currentLetter === dna[row + 1][col] &&
        currentLetter === dna[row + 2][col] &&
        currentLetter === dna[row + 3][col]
      ) {
        console.log(`Found mutant. Same four letters in ${col}`);
        highlightCells([
          [row, col],
          [row + 1, col],
          [row + 2, col],
          [row + 3, col],
        ]);
      }

      // diagonal check down - right
      if (
        col <= colNum - 4 &&
        row <= rowNum - 4 &&
        currentLetter === dna[row + 1][col + 1] &&
        currentLetter === dna[row + 2][col + 2] &&
        currentLetter === dna[row + 3][col + 3]
      ) {
        console.log(
          `Found mutant. Same four letters in diagonal rigth row: ${row} and col: ${col}`
        );
        highlightCells([
          [row, col],
          [row + 1, col + 1],
          [row + 2, col + 2],
          [row + 3, col + 3],
        ]);
      }

      // diagonal check down - left
      if (
        col >= 3 &&
        row <= rowNum - 4 &&
        currentLetter === dna[row + 1][col - 1] &&
        currentLetter === dna[row + 2][col - 2] &&
        currentLetter === dna[row + 3][col - 3]
      ) {
        console.log(
          `Found mutant. Same four letters in in diagonal rogth row: ${row} and col: ${col}`
        );
        highlightCells([
          [row, col],
          [row + 1, col - 1],
          [row + 2, col - 2],
          [row + 3, col - 3],
        ]);
      }
    }
  }
  console.log("Not mutant found");
  return false;
};

