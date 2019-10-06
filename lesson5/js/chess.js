// "use strict";
//
// let chess = document.getElementById("chess");
//
// let chessTable = document.createElement("table");
// chessTable.className = "table";
//
// let letters = ["", "A", "B", "C", "D", "E", "F", "G", "H", ""];

// const chessTr = document.createElement("tr");
// chessTr.className = "tr";
// chessTable.appendChild(chessTr);

// const chessTd = document.createElement("td");
// chessTd.className = "td";
// chessTr.appendChild(chessTd);


// for (let row = 0; row < 10; row++) {
//     const chessTr = document.createElement("tr");
//     chessTr.className = "tr";
//
//     for (let col = 0; col < 10; col++) {
//         const chessTd = document.createElement("td");
//         chessTd.className = "td";
//         chessTr.appendChild(chessTd);
//         if ((row === 0 || row === 9) && (col !== 0 && col !== 9)) {
//             chessTd.textContent = col;
//             continue;
//         }
//         if (col === 0 || col === 9) {
//             chessTd.textContent = letters[row];
//             continue;
//         }
//
//         if ((row + col) % 2 === 0) {
//             chessTd.classList.add("grey");
//         } else {
//             chessTd.classList.add("black");
//         }
//     }
//
//     chessTable.appendChild(chessTr);
// }
//
// chess.appendChild(chessTable);

"use strict";

let chess = document.getElementById("chess");

let chessTable = document.createElement("table");
chessTable.className = "table";

let letters = ["", "A", "B", "C", "D", "E", "F", "G", "H", ""];

for (let row = 0; row < 10; row++) {
    const chessTr = document.createElement("tr");
    chessTr.className = "tr";

    for (let col = 0; col < 10; col++) {
        const chessTd = document.createElement("td");
        chessTd.className = "td";
        chessTr.appendChild(chessTd);
        if ((row === 9) && (col !== 9)) {
            chessTd.textContent = letters[col];
            continue;
        }
        if ((row === 0) && (col !== 0)) {
            chessTd.textContent = letters[col];
            chessTd.classList.add("rotate");
            continue;
        }
        if (col === 0) {
            if (row === 0) {
                continue;
            }
            chessTd.textContent = row;
            continue;
        }
        if (col === 9) {
            if (row === 9) {
                continue;
            }
            chessTd.textContent = row;
            chessTd.classList.add("rotate");
            continue;
        }

        if ((row + col) % 2 === 0) {
            chessTd.classList.add("grey");
        } else {
            chessTd.classList.add("black");
        }
    }

    chessTable.appendChild(chessTr);
}

chess.appendChild(chessTable);
