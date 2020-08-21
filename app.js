var board = [
    [" a8 ", " b8 ", " c8 ", " d8 ", " e8 ", " f8 ", " g8 ", " h8 "],

    [" a7 ", " b7 ", " c7 ", " d7 ", " e7 ", " f7 ", " g7 ", " h7 "],

    [" a6 ", " b6 ", " c6 ", " d6 ", " e6 ", " f6 ", " g6 ", " h6 "],

    [" a5 ", " b5 ", " c5 ", " d5 ", " e5 ", " f5 ", " g5 ", " h5 "],

    [" a4 ", " b4 ", " c4 ", " d4 ", " e4 ", " f4 ", " g4 ", " h4 "],

    [" a3 ", " b3 ", " c3 ", " d3 ", " e3 ", " f3 ", " g3 ", " h3 "],

    [" a2 ", " b2 ", " c2 ", " d2 ", " e2 ", " f2 ", " g2 ", " h2 "],

    [" a1 ", " b1 ", " c1 ", " d1 ", " e1 ", " f1 ", " g1 ", " h1 "]
];

/* Queen Object */
let queen =
{
    position:
    {
        x: 0,
        y: 3
    },
    direction: 's'
}

// Default Position and Direction of queen 
document.write("<h3> Default direction of Queen is: <font color='orangered'>" + queen.direction + " </font>and Queen position is: <font color='orangered'>" + board[queen.position.x][queen.position.y] + "</font></h3>")
document.write("<h2> <font color='green'>After Updation :</h2></font>")

// Take direction for queen from user 
var direction = prompt("Enter direction :\n 1. n \n 2. s \n 3. e \n 4. w \n 5. ne \n 6. nw \n 7. se \n 8. sw ")

// Take Steps for queen from user 
var steps = prompt("Enter the number of stpes you want to move your queen ")

changeDirection(direction)//calling changeDirection function

//changeDirection function body
function changeDirection(direction) {
    switch (direction) {
        case 'n':
            document.write("<h3>Queen Direction is<font color='orangered'> North </font></h3>");
            queen.direction = 'n'; //updating direction of queen in queen object
            break
        case 'e':
            document.write("<h3>Queen Direction is <font color='orangered'> East </font></h3>");
            queen.direction = 'e'; //updating direction of queen in queen object
            break
        case 'w':
            document.write("<h3>Queen Direction is <font color='orangered'> West </font></h3>");
            queen.direction = 'w'; //updating direction of queen in queen object
            break
        case 's':
            document.write("<h3> Queen Direction is <font color='orangered'> South </font></h3>");
            queen.direction = 's'; //updating direction of queen in queen object
            break
        case 'nw':
            document.write("<h3>Queen Direction is <font color='orangered'> NorthWest </font></h3> ");
            queen.direction = 'nw'; //updating direction of queen in queen object
            break
        case 'ne':
            document.write("<h3>Queen Direction is <font color='orangered'> NorthEast </font> </h3>");
            queen.direction = 'ne'; //updating direction of queen in queen object
            break
        case 'se':
            document.write("<h3>Queen Direction is <font color='orangered'> SouthEast </font></h3>");
            queen.direction = 'se'; //updating direction of queen in queen object
            break
        case 'sw':
            document.write("<h3>Queen Direction is <font color='orangered'> SouthWest </font></h3>");
            queen.direction = 'sw'; //updating direction of queen in queen object
            break
        default:
            document.write("<h3>Enter Valid Direction</h3>")
    }
}
jumpMoveForward(queen.direction, parseInt(steps)) //calling jumpMoveForward function

//jumpMoveForward function body
function jumpMoveForward(direction, steps) {
    if (steps <= 0) {
        document.write("please provide steps correctly")
    }
    else {
        switch (direction) {
            case 'n':
                checkposX = queen.position.x - steps
                if (checkposX >= 8 || checkposX < 0) {
                    document.write("<h3>Queen is going out from battlefield</h3>")
                }
                else {
                    queen.position.x = checkposX //updating position of queen in queen object
                    document.write("<h3>After taking <font color='orangered'>" + steps + "</font> steps to the direction <font color='orangered'> " + queen.direction + "</font> Queen Position is <font color='orangered'> " + board[queen.position.x][queen.position.y] + "</font> </h3>")
                }

                break
            case 'e':
                checkposY = queen.position.y + steps
                if (checkposY >= 8 || checkposY < 0) {
                    document.write("<h3>Queen is going out from battlefield</h3>")
                }
                else {
                    queen.position.y = checkposY //updating position of queen in queen object
                    document.write("<h3>After taking <font color='orangered'>" + steps + "</font> steps to the direction <font color='orangered'> " + queen.direction + "</font> Queen Position is <font color='orangered'> " + board[queen.position.x][queen.position.y] + "</font> </h3>")
                }
                break
            case 'w':
                checkposY = queen.position.y - steps
                if (checkposY >= 8 || checkposY < 0) {
                    document.write("<h3>Queen is going out from battlefield</h3>")
                }
                else {
                    queen.position.y = checkposY //updating position of queen in queen object
                    document.write("<h3>After taking <font color='orangered'>" + steps + "</font> steps to the direction <font color='orangered'> " + queen.direction + "</font> Queen Position is <font color='orangered'> " + board[queen.position.x][queen.position.y] + "</font> </h3>")
                }
                break
            case 's':
                checkposX = queen.position.x + steps
                if (checkposX >= 8 || checkposX < 0) {
                    document.write("<h3>Queen is going out from battlefield</h3>")
                }
                else {
                    queen.position.x = checkposX //updating position of queen in queen object
                    document.write("<h3>After taking <font color='orangered'>" + steps + "</font> steps to the direction <font color='orangered'> " + queen.direction + "</font> Queen Position is <font color='orangered'> " + board[queen.position.x][queen.position.y] + "</font> </h3>")
                }
                break
            case 'nw':
                checkposX = queen.position.x - steps
                checkposY = queen.position.y - steps

                if (checkposX >= 8 || checkposX < 0 || checkposY >= 8 || checkposY < 0) {
                    document.write("<h3>Queen is going out from battlefield</h3>")
                }
                else {
                    queen.position.x = checkposX //updating position of queen in queen object
                    queen.position.y = checkposY
                    document.write("<h3>After taking <font color='orangered'>" + steps + "</font> steps to the direction <font color='orangered'> " + queen.direction + "</font> Queen Position is <font color='orangered'> " + board[queen.position.x][queen.position.y] + "</font> </h3>")
                }
                break
            case 'ne':
                checkposX = queen.position.x - steps
                checkposY = queen.position.y + steps

                if (checkposX >= 8 || checkposX < 0 || checkposY >= 8 || checkposY < 0) {
                    document.write("<h3>Queen is going out from battlefield</h3>")
                }
                else {
                    queen.position.x = checkposX //updating position of queen in queen object
                    queen.position.y = checkposY
                    document.write("<h3>After taking <font color='orangered'>" + steps + "</font> steps to the direction <font color='orangered'> " + queen.direction + "</font> Queen Position is <font color='orangered'> " + board[queen.position.x][queen.position.y] + "</font> </h3>")
                }
                break
            case 'se':
                checkposX = queen.position.x + steps
                checkposY = queen.position.y + steps

                if (checkposX >= 8 || checkposX < 0 || checkposY >= 8 || checkposY < 0) {
                    document.write("<h3>Queen is going out from battlefield</h3>")
                }
                else {
                    queen.position.x = checkposX //updating position of queen in queen object
                    queen.position.y = checkposY
                    document.write("<h3>After taking <font color='orangered'>" + steps + "</font> steps to the direction <font color='orangered'> " + queen.direction + "</font> Queen Position is <font color='orangered'> " + board[queen.position.x][queen.position.y] + "</font> </h3>")
                }
                break
            case 'sw':
                checkposX = queen.position.x + steps
                checkposY = queen.position.y - steps

                if (checkposX >= 8 || checkposX < 0 || checkposY >= 8 || checkposY < 0) {
                    document.write("<h3>Queen is going out from battlefield</h3>")
                }
                else {
                    queen.position.x = checkposX //updating position of queen in queen object
                    queen.position.y = checkposY
                    document.write("<h3>After taking <font color='orangered'>" + steps + "</font> steps to the direction <font color='orangered'> " + queen.direction + "</font> Queen Position is <font color='orangered'> " + board[queen.position.x][queen.position.y] + "</font> </h3>")
                }
                break
        }
    }
}


