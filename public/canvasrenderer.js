let canvas = document.getElementById('materialCanvas');
let c = canvas.getContext('2d');



boxPattern = function (color1, color2) {
    color1= 'blue';
    color2 = 'green';
    
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
}//end box  

boxPattern();