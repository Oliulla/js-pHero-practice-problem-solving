// Write function that take 3 parameters for 3 side of a triangle
// Then you have to calculate area of that triangle
function areaTriangle(a, b, c) {
    const s = (a + b + c)/2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    const fixed = area.toFixed(4);
    return fixed;
}
console.log(areaTriangle(5, 6, 7));