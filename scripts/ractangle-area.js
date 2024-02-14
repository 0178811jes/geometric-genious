function calculatRectangleArea (){
    // get the rectangle length
    const lengthInput = document.getElementById('rectangle-length');
    const lengthtext = lengthInput.value;
    const length = parseFloat(lengthtext);
    // console.log(length);

    // get the rectagle width
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);

    // get area value calculate
    const area = length * width 
    console.log(area);

    // display area
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area
}