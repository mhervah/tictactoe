const makeMove = function (board, location, isX) {
  if (board[location[0]][location[1]] === " ") {
    if (isX) {
      board[location[0]][location[1]] = "x";
    } else {
      board[location[0]][location[1]] = "o";
    }
    return 0;
  } else return -1;
};

//Extra use my html change make move function
const nextMove = function (board, isX) {
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === " ") {
        board[i][j] = "o";
        if (
          findWinner(board) !== undefined &&
          findWinner(board).winner === "o"
        ) {
          board[i][j] = " ";
          return [i, j];
        } else board[i][j] = " ";
      }
    }
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === " ") {
        board[i][j] = "x";
        if (
          findWinner(board) !== undefined &&
          findWinner(board).winner === "x"
        ) {
          board[i][j] = " ";
          return [i, j];
        } else board[i][j] = " ";
      }
    }
  const rand = function (num) {
    return Math.round(Math.random() * num);
  };
  let n1 = rand(2);
  let n2 = rand(2);
  while (board[n1][n2] !== " ") {
    n1 = rand(2);
    n2 = rand(2);
  }
  return [n1, n2];
};

const findWinner = function (board) {
  let winObj = {};
  if (
    board[0][0] === board[0][1] &&
    board[0][0] === board[0][2] &&
    board[0][1] === board[0][2]
  ) {
    if (board[0][0] === "x")
      winObj = {
        winner: "x",
        winningLocations: [
          [0, 0],
          [0, 1],
          [0, 2],
        ],
      };
    if (board[0][0] === "o")
      winObj = {
        winner: "o",
        winningLocations: [
          [0, 0],
          [0, 1],
          [0, 2],
        ],
      };
  }
  if (
    board[1][0] === board[1][1] &&
    board[1][0] === board[1][2] &&
    board[1][1] === board[1][2]
  ) {
    if (board[1][0] === "x")
      winObj = {
        winner: "x",
        winningLocations: [
          [1, 0],
          [1, 1],
          [1, 2],
        ],
      };
    if (board[1][0] === "o")
      winObj = {
        winner: "o",
        winningLocations: [
          [1, 0],
          [1, 1],
          [1, 2],
        ],
      };
  }
  if (
    board[2][0] === board[2][1] &&
    board[2][0] === board[2][2] &&
    board[2][1] === board[2][2]
  ) {
    if (board[2][0] === "x")
      winObj = {
        winner: "x",
        winningLocations: [
          [2, 0],
          [2, 1],
          [2, 2],
        ],
      };
    if (board[2][0] === "o")
      winObj = {
        winner: "o",
        winningLocations: [
          [2, 0],
          [2, 1],
          [2, 2],
        ],
      };
  }
  if (
    board[0][0] === board[1][0] &&
    board[1][0] === board[2][0] &&
    board[0][0] === board[2][0]
  ) {
    if (board[0][0] === "x")
      winObj = {
        winner: "x",
        winningLocations: [
          [0, 0],
          [1, 0],
          [2, 0],
        ],
      };
    if (board[0][0] === "o")
      winObj = {
        winner: "o",
        winningLocations: [
          [0, 0],
          [1, 0],
          [2, 0],
        ],
      };
  }
  if (
    board[0][1] === board[1][1] &&
    board[1][1] === board[2][1] &&
    board[0][1] === board[2][1]
  ) {
    if (board[0][1] === "x")
      winObj = {
        winner: "x",
        winningLocations: [
          [0, 1],
          [1, 1],
          [2, 1],
        ],
      };
    if (board[0][1] === "o")
      winObj = {
        winner: "o",
        winningLocations: [
          [0, 1],
          [1, 1],
          [2, 1],
        ],
      };
  }
  if (
    board[0][2] === board[1][2] &&
    board[1][2] === board[2][2] &&
    board[0][2] === board[2][2]
  ) {
    if (board[0][2] === "x")
      winObj = {
        winner: "x",
        winningLocations: [
          [0, 2],
          [1, 2],
          [2, 2],
        ],
      };
    if (board[0][2] === "o")
      winObj = {
        winner: "o",
        winningLocations: [
          [0, 2],
          [1, 2],
          [2, 2],
        ],
      };
  }
  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0] === board[2][2]
  ) {
    if (board[0][0] === "x")
      winObj = {
        winner: "x",
        winningLocations: [
          [0, 0],
          [1, 1],
          [2, 2],
        ],
      };
    if (board[0][0] === "o")
      winObj = {
        winner: "o",
        winningLocations: [
          [0, 0],
          [1, 1],
          [2, 2],
        ],
      };
  }
  if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[0][2] === board[2][0]
  ) {
    if (board[0][2] === "x")
      winObj = {
        winner: "x",
        winningLocations: [
          [0, 2],
          [1, 1],
          [2, 0],
        ],
      };
    if (board[0][2] === "o")
      winObj = {
        winner: "o",
        winningLocations: [
          [0, 2],
          [1, 1],
          [2, 0],
        ],
      };
  }
  let isOver = true;
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) if (board[i][j] === " ") isOver = false;

  if (isOver && !winObj.hasOwnProperty("winner"))
    winObj = {
      winner: "none",
    };
  if (winObj.hasOwnProperty("winner")) return winObj;
  else return;
};

const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

const XSound = new Audio("cross.mp3");
const OSound = new Audio("circle.mp3");
const boardSound = new Audio("board.mp3");
const winSound = new Audio("win.mp3");
const drawSound = new Audio("draw.mp3");

let board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

let lw = 15;

canvas.width = 600 + 2 * lw;
canvas.height = 600 + 2 * lw;

const animBoard = function (lw) {
  let x1 = 0;
  let x2 = 0;
  let y1 = 0;
  let y2 = 0;
  let v = 40;
  boardSound.play();

  const animate = function () {
    let end = false;
    const horizontal1 = function () {
      ctx.beginPath();
      ctx.moveTo(0, 200 + lw / 2);
      ctx.lineTo(x1, 200 + lw / 2);
      ctx.lineWidth = lw;
      ctx.stroke();
      if (x1 >= 600 + 2 * lw) {
        end = true;
        return;
      }
      x1 += v;
    };
    const horizontal2 = function () {
      ctx.beginPath();
      ctx.moveTo(0, 400 + lw + lw / 2);
      ctx.lineTo(x2, 400 + lw + lw / 2);
      ctx.lineWidth = lw;
      ctx.stroke();
      if (x2 >= 600 + 2 * lw) {
        end = true;
        return;
      }
      x2 += v;
    };
    const vertical1 = function () {
      ctx.beginPath();
      ctx.moveTo(200 + lw / 2, 0);
      ctx.lineTo(200 + lw / 2, y1);
      ctx.lineWidth = lw;
      ctx.stroke();

      if (y1 >= 600 + 2 * lw) {
        end = true;
        return;
      }
      y1 += v;
    };
    const vertical2 = function () {
      ctx.beginPath();
      ctx.moveTo(400 + lw + lw / 2, 0);
      ctx.lineTo(400 + lw + lw / 2, y2);
      ctx.lineWidth = lw;
      ctx.stroke();

      if (y2 >= 600 + 2 * lw) {
        end = true;
        return;
      }
      y2 += v;
    };
    horizontal1();
    if (end) {
      end = false;
      horizontal2();
    }
    if (end) {
      end = false;
      vertical1();
    }
    if (end) {
      end = false;
      vertical2();
    }
    if (end) return;
    requestAnimationFrame(animate);
  };
  animate();
};

const gameEnd = function (obj, lw) {
  let x1 = obj.winningLocations[0][1] * (200 + lw);
  let y1 = obj.winningLocations[0][0] * (200 + lw);
  let x2 = obj.winningLocations[1][1] * (200 + lw);
  let y2 = obj.winningLocations[1][0] * (200 + lw);
  let x3 = obj.winningLocations[2][1] * (200 + lw);
  let y3 = obj.winningLocations[2][0] * (200 + lw);
  console.log(obj.winningLocations);
  let a = 0;

  const animate = function () {
    ctx.clearRect(x1, y1, 200, 200);
    ctx.clearRect(x2, y2, 200, 200);
    ctx.clearRect(x3, y3, 200, 200);
    ctx.fillStyle = "rgba(240,140,0," + a + ")";
    ctx.fillRect(x1, y1, 200, 200);
    ctx.fillRect(x2, y2, 200, 200);
    ctx.fillRect(x3, y3, 200, 200);
    if (obj.winner === "x") {
      ctx.beginPath();
      ctx.moveTo(x1 + 40, y1 + 40);
      ctx.lineTo(x1 + 160, y1 + 160);
      ctx.moveTo(x1 + 40, y1 + 160);
      ctx.lineTo(x1 + 160, y1 + 40);
      ctx.moveTo(x2 + 40, y2 + 40);
      ctx.lineTo(x2 + 160, y2 + 160);
      ctx.moveTo(x2 + 40, y2 + 160);
      ctx.lineTo(x2 + 160, y2 + 40);
      ctx.moveTo(x3 + 40, y3 + 40);
      ctx.lineTo(x3 + 160, y3 + 160);
      ctx.moveTo(x3 + 40, y3 + 160);
      ctx.lineTo(x3 + 160, y3 + 40);
      ctx.lineWidth = lw;
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(x1 + 100, y1 + 100, 60, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x2 + 100, y2 + 100, 60, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x3 + 100, y3 + 100, 60, 0, 2 * Math.PI);
      ctx.stroke();
    }

    if (a < 0.5) {
      a += 0.01;
    }
    if (a >= 0.5) return;

    requestAnimationFrame(animate);
  };
  winSound.play();
  animate();
};

let end = true;
const drawO = function (locations, lw) {
  let x = locations[1] * (200 + lw) + 200 / 2;
  let y = locations[0] * (200 + lw) + 200 / 2;
  const radius = 60;
  let curPerc = 0;
  const circ = Math.PI * 2;
  const quart = Math.PI / 2;
  ctx.strokeStyle = "black";

  const animate = function (current) {
    ctx.beginPath();
    ctx.arc(x, y, radius, -quart, circ * current - quart, false);
    ctx.stroke();
    curPerc += 4;
    if (curPerc <= 100) {
      requestAnimationFrame(function () {
        animate(curPerc / 100);
      });
    } else {
      end = true;
      return;
    }
  };

  OSound.play();
  animate();
};

const drawX = function (locations, lw) {
  let y1 = locations[0] * (200 + lw) + 40;
  let x1 = locations[1] * (200 + lw) + 40;
  let i = 0;
  let y2 = locations[0] * (200 + lw) + 160;
  let x2 = locations[1] * (200 + lw) + 40;
  let j = 0;
  let v = 10;
  ctx.strokeStyle = "black";

  const animate = function () {
    const line1 = function () {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x1 + i, y1 + i);
      ctx.lineWidth = lw;
      ctx.stroke();
      i += v;
    };
    const line2 = function () {
      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(x2 + j, y2 - j);
      ctx.lineWidth = lw;
      ctx.stroke();
      j += v;
    };
    if (i <= 120) line1();
    if (i > 120 && j <= 120) {
      line2();
    }
    if (i > 120 && j > 120) {
      end = true;
      return;
    }

    requestAnimationFrame(animate);
  };
  XSound.play();
  animate();
};

animBoard(lw);
canvas.addEventListener("click", function (e) {
  if (Xmove && end && !findWinner(board)) {
    if (
      !(
        (e.offsetX > 200 && e.offsetX < 200 + lw) ||
        (e.offsetX > 400 + lw && e.offsetX < 400 + 2 * lw) ||
        (e.offsetY > 200 && e.offsetY < 200 + lw) ||
        (e.offsetY > 400 + lw && e.offsetY < 400 + 2 * lw)
      )
    ) {
      if (
        board[Math.floor(e.offsetY / (200 + lw))][
          Math.floor(e.offsetX / (200 + lw))
        ] === " "
      ) {
        if (end) {
          end = false;
          drawX(
            [
              Math.floor(e.offsetY / (200 + lw)),
              Math.floor(e.offsetX / (200 + lw)),
            ],
            lw
          );
        }
        makeMove(
          board,
          [
            Math.floor(e.offsetY / (200 + lw)),
            Math.floor(e.offsetX / (200 + lw)),
          ],
          true
        );
        Xmove = false;
      }
    }
  }
});

const starts = Math.round(Math.random());
let Xmove;
if (starts) Xmove = true;
else Xmove = false;

const loop = function () {
  if (findWinner(board) !== undefined && end) {
    if (findWinner(board).winner !== "none") {
      gameEnd(findWinner(board), lw);
      return;
    } else {
      drawSound.play();
      return;
    }
  }
  if (!Xmove && end && findWinner(board) === undefined) {
    let nextO = nextMove(board, false);
    makeMove(board, nextO, false);
    end = false;
    drawO(nextO, lw);
    Xmove = true;
  }

  requestAnimationFrame(loop);
};
loop();

const replaybtn = document.getElementById("replay");

replaybtn.addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  animBoard(lw);
  loop();
});
