function RectangleArea(strArr) {

    class Point {
        constructor(str) {
            const parseString = str.split(' ');
            this.x = parseString[0][1];
            this.y= parseString[1][0];
        }
    }
    console.log('1')
    listOfPoints = strArr.map((el) => {return new Point(el)});

    console.log('2', listOfPoints)

    let pointA, pointB, rectangleSide, listOfSides = []
    for (let i=0; i++; i<=3) {
        if (i === 3) {
            pointA = listOfPoints[i];
            pointB = listOfPoints[0];
        } else {
            pointA = listOfPoints[i];
            pointB = listOfPoints[i+1]
        }
        rectangleSide = Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2))
        listOfSides.push(rectangleSide)
    }
    let area, i=0, ok =false

    while(i<2 && !ok) {
        if (listOfSides[i]!== listOfSides[i+1]){
            area = listOfSides[i] * listOfSides[i+1];
            ok = true
        }
    }
    return area;

}

// keep this function call here
console.log(RectangleArea(["(1 1)","(1 3)","(3 1)","(3 3)"]));