let canvas = document.getElementById('materialCanvas');
let c = canvas.getContext('2d');

let color1='blue'
let color2='orange'


boxPattern = function (color1, color2) {
    
    let bw = 400;
    let b16 = bw / 16;
    let pattern1 = [0, 1, 4, 5, 8, 9, 12, 13, 16];
    let pattern2 = [0, 3, 4, 7, 8, 11, 12, 15, 16]
    let rowPattern1 = [-12, -8, -4, 0, 4, 8, 12, 16, 20]
    let rowPattern2 = [-11, -7, -3, 1, 5, 9, 13, 17, 21]
    let rowPattern3 = [-10, -6, -2, 2, 6, 10, 14, 18, 22]

    for (j = -b16 * 16; j <= b16 * 40; j += b16 * 2) {
        for (let i = -b16 * 8; i <= bw * 2; i += b16) {
            console.log('hello');
            c.beginPath();
            c.moveTo(i, i + j + 2 * b16);
            c.lineTo(i - b16, i + j + b16);
            c.lineTo(i, i + j);
            c.lineTo(i + b16, i + j + b16)
            c.closePath();
            c.stroke();
            //only need 2 patterns here, but we do need four
            //row
            if (rowPattern1.includes(j / (b16 * 2))) {
                if (pattern1.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (rowPattern2.includes(j / (b16 * 2))) {
                if (pattern2.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (rowPattern3.includes(j / (b16 * 2))) {
                if (pattern1.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else {
                if (pattern2.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            }
            c.fill();
        };//end for i 
    }//end for j
};//end box  

accentPattern = function (color1, color2) {
    let bw = 400;
    let b16 = bw / 16;
    let pattern1 = [3, 4, 11, 12];
    let row1 = [0, 1, 8, 9, 16, 17];

    for (j = -b16 * 16; j <= b16 * 40; j += b16 * 2) {
        for (let i = -b16 * 8; i <= bw * 2; i += b16) {
            console.log('hello');
            c.beginPath();
            c.moveTo(i, i + j + 2 * b16);
            c.lineTo(i - b16, i + j + b16);
            c.lineTo(i, i + j);
            c.lineTo(i + b16, i + j + b16)
            c.closePath();
            c.stroke();
            if (row1.includes(j/ (b16*2))){
                if (pattern1.includes(i / b16)) {
                    c.fillStyle = color2;
                } else {
                    c.fillStyle = color1;
                }
            } else {
                c.fillStyle = color1
            }
            c.fill();
        }
    }
};

celticPattern = function (color1, color2) {
    let bw = 400;
    let b16 = bw / 16;
    let pattern1 = [16];
    let pattern2 = [15, 16];
    let pattern3 = [12, 13, 16];
    let pattern4 = [11, 12, 15, 16];
    let pattern5 = [8, 9, 16];
    let pattern6 = [7, 8, 15, 16];
    let pattern7 = [0, 1, 4, 5, 8, 9, 10, 11, 12, 16];
    let pattern8 = [0, 3, 4, 7, 11, 15, 16];
    let pattern9 = [0, 1, 6, 8, 9, 10, 11, 12, 13, 16];
    let pattern10 = [0, 5, 7, 9, 12, 15, 16];
    let pattern11 = [0, 1, 4, 5, 6, 7, 8, 11, 16];
    let pattern12 = [0, 5, 8, 9, 10, 11, 12, 13, 14, 16];
    let pattern13 = [0, 1, 4, 7, 9, 13, 15, 16];
    let pattern14 = [0, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16];
    let pattern15 = [0, 1, 5, 7, 9, 11, 15, 16];
    let pattern16 = [0, 4, 6, 7, 8, 9, 10, 11, 12, 13, 16];
    let pattern17 = [0, 1, 3, 7, 9, 12, 15, 16];
    let pattern18 = [0, 2, 3, 4, 5, 6, 7, 8, 11, 16];
    let pattern19 = [0, 5, 8, 9, 10, 11, 12, 15, 16];
    let pattern20 = [0, 1, 4, 7, 9, 11, 16];
    let pattern21 = [0, 3, 4, 5, 6, 7, 8, 10, 15, 16];
    let pattern22 = [0, 1, 5, 9, 12, 13, 16];
    let pattern23 = [0, 4, 5, 6, 7, 8, 11, 12, 15, 16];
    let pattern24 = [0, 1, 8, 9, 12, 13, 16];
    let pattern25 = [0, 7, 8, 11, 12, 15, 16];
    let pattern26 = [0, 1, 4, 5, 8, 9, 12, 13, 16];
    let pattern27 = [0, 3, 4, 7, 8, 11, 12];
    let pattern28 = [0, 1, 4, 5, 8, 9];
    let pattern29 = [0, 3, 4, 7, 8]

    for (j = -b16 * 16; j <= b16 * 40; j += b16 * 2) {
        for (let i = -b16 * 8; i <= bw * 2; i += b16) {
            console.log('hello');
            c.beginPath();
            c.moveTo(i, i + j + 2 * b16);
            c.lineTo(i - b16, i + j + b16);
            c.lineTo(i, i + j);
            c.lineTo(i + b16, i + j + b16)
            c.closePath();
            c.stroke();
            if (j / (b16 * 2) == -8) {
                if (pattern1.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == -7) {
                if (pattern2.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == -6) {
                if (pattern3.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == -5) {
                if (pattern4.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == -4) {
                if (pattern5.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == -3) {
                if (pattern6.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == -2) {
                if (pattern7.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == -1) {
                if (pattern8.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == 0) {
                if (pattern9.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == 1) {
                if (pattern10.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == 2) {
                if (pattern11.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == 3) {
                if (pattern12.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == 4) {
                if (pattern13.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == 5) {
                if (pattern14.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == 6) {
                if (pattern15.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == 7) {
                if (pattern16.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == 8) {
                if (pattern17.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == 9) {
                if (pattern18.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == 10) {
                if (pattern19.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == 11) {
                if (pattern20.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == 12) {
                if (pattern21.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == 13) {
                if (pattern22.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == 14) {
                if (pattern23.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == 15) {
                if (pattern24.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == 16) {
                if (pattern25.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == 17) {
                if (pattern26.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == 18) {
                if (pattern27.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (j / (b16 * 2) == 19) {
                if (pattern28.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else {
                if (pattern29.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            }
            c.fill();
        } //end for i
    }//end for j
};//end celtic

egyptianEyePattern = function (color1, color2) {
    let bw = 400;
    let b16 = bw / 16;

    let pattern1 = [0, 1, 2, 3, 5, 6, 7, 8, 13];
    let pattern2 = [3, 8, 9, 10, 11, 13, 14, 15, 16];
    let pattern3 = [0, 2, 7, 11, 16];
    let pattern4 = [1, 6, 8, 10, 15];
    let pattern5 = [0, 5, 9, 14, 16];

    let row1 = [-10, -5, 0, 5, 10, 15];
    let row2 = [-9, -4, 1, 6, 11, 16];
    let row3 = [-8, -3, 2, 7, 12, 17];
    let row4 = [-7, -2, 3, 8, 13, 18];
    // let row5 = [4];
    //row 5 is the else 
    for (j = -b16 * 16; j <= b16 * 40; j += b16 * 2) {
        for (let i = -b16 * 8; i <= bw * 2; i += b16) {
            console.log('hello');
            c.beginPath();
            c.moveTo(i, i + j + 2 * b16);
            c.lineTo(i - b16, i + j + b16);
            c.lineTo(i, i + j);
            c.lineTo(i + b16, i + j + b16)
            c.closePath();
            c.stroke();
            //The egyptian eye does not function like Emerald did, 
            //when row 1 completes its first 16, it actually turns into row4, 
            //then row2, then row5, then row3, THEN row 1 again.  May need longer 
            //arrays, as I can't subract or add 16 to the 'row if's' like I could have 
            //done with emerald, as this pattern seems to run on a factor of 8? (16x(the five rows))
            //Also, I still think there is some positioning that I am not taking into account, 
            //the first 5 rows are correct, then it gets off.
            if (row1.includes(j / (b16 * 2))) {
                if (pattern1.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (row2.includes(j / (b16 * 2))) {
                if (pattern2.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (row3.includes(j / (b16 * 2))) {
                if (pattern3.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (row4.includes(j / (b16 * 2))) {
                if (pattern4.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else {
                if (pattern5.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            }
            c.fill();
        };//end for i 
    }//end for j
};//end egyptian eye

emeraldPattern = function (color1, color2) {
    let bw = 400;
    let b16 = bw / 16;
    let pattern1 = [0, 1, 3, 5, 8, 9, 11, 13, 16];
    let pattern2 = [1, 3, 4, 7, 9, 11, 12, 15];
    let pattern3 = [1, 4, 5, 7, 9, 12, 13, 15];
    let pattern4 = [0, 3, 5, 7, 8, 11, 13, 15, 16];
    let row1 = [-16, -12, -8, -4, 0, 4, 8, 12, 16, 20, 24, 28, 32, 36];
    let row2 = [-15, -11, -7, -3, 1, 5, 9, 13, 17];
    let row3 = [-14, -10, -6, -2, 2, 6, 10, 14, 18];
    for (j = -b16 * 16; j <= b16 * 40; j += b16 * 2) {
        for (let i = -b16 * 8; i <= bw * 2; i += b16) {
            console.log('hello');
            c.beginPath();
            c.moveTo(i, i + j + 2 * b16);
            c.lineTo(i - b16, i + j + b16);
            c.lineTo(i, i + j);
            c.lineTo(i + b16, i + j + b16)
            c.closePath();
            c.stroke();
            if (row1.includes(j / (b16 * 2))) {
                if (pattern1.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (row2.includes(j / (b16 * 2))) {
                if (pattern2.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else if (row3.includes(j / (b16 * 2))) {
                if (pattern3.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else {
                if (pattern4.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            }
            c.fill();
        };//end for i 
    }//end for j
};//end emerald

verticalStripPattern = function (color1, color2) {
    let bw = 400;
    let b16 = bw / 16;
    let pattern1 = [0, 1, 4, 5, 8, 9, 12, 13, 16];


    for (j = -b16 * 16; j <= b16 * 40; j += b16 * 2) {
        for (let i = -b16 * 8; i <= bw * 2; i += b16) {
            console.log('hello');
            c.beginPath();
            c.moveTo(i, i + j + 2 * b16);
            c.lineTo(i - b16, i + j + b16);
            c.lineTo(i, i + j);
            c.lineTo(i + b16, i + j + b16)
            c.closePath();
            c.stroke();
            if (pattern1.includes(i / b16)) {
                c.fillStyle = color1;
            } else {
                c.fillStyle = color2;
            }
            c.fill();
        };//end for i 
    }//end for j
}//end vertical strip

verticalStripPattern(color1, color2)