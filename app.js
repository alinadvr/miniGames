const trs = document.querySelectorAll('tr')
const btnReset = document.querySelector('button')

//x - true, o - false
let sign = true
let grid = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]

btnReset.addEventListener('click', function() {
    window.location.reload()
})

function setSign(indexTr, indexTd, object) {
    let user = ''
    if (!isNaN(grid[indexTr][indexTd])) {
        if (sign) user = 'X'
        else user = 'O'
        grid[indexTr][indexTd] = user
        object.innerHTML = user
        sign = !sign
    }
    if (checkWin()) alert(`${user} won!`)
}

trs.forEach(tr => {
    for (let td of tr.children) {
        td.addEventListener('click', setSign)
    }
})

function checkWin() {
    if (grid[0][0] === grid[0][1] && grid[0][1] === grid[0][2]) return true
    if (grid[1][0] === grid[1][1] && grid[1][1] === grid[1][2]) return true
    if (grid[2][0] === grid[2][1] && grid[2][1] === grid[2][2]) return true
    if (grid[0][0] === grid[1][0] && grid[1][0] === grid[2][0]) return true
    if (grid[0][1] === grid[1][1] && grid[1][1] === grid[2][1]) return true
    if (grid[0][2] === grid[1][2] && grid[1][2] === grid[2][2]) return true
    if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) return true
    if (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) return true
    return false
}

// function checkWin() {
//     fromLine:
//     for (let line of grid) {
//         for (let cell = 0; cell < line.length - 1; cell++) {
//             if ((line[cell] !== line[cell + 1]) || line[cell] === undefined) {
//                 continue fromLine
//             }
//         }
//         return true
//     }
//     fromCell:
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid.length - 1; j++) {
//             if ((grid[j][i] !== grid[j + 1][i]) || grid[j][i] === undefined) {
//                 continue fromCell
//             }
//         }
//         return true
//     }
//     if ((grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) && grid[1][1] !== undefined) {
//         return true
//     }
//     if ((grid[2][0] === grid[1][1] && grid[1][1] === grid[0][2]) && grid[1][1] !== undefined) {
//         return true
//     }
//     return false
// }