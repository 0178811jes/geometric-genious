function calculatParalelogramArea (){
    // get base calculation
    const paralelogramInput = document.getElementById('paralelogram-base');
    const paralelogramText = paralelogramInput.value;
    const paralelogramBase = parseFloat(paralelogramText);
    // console.log(paralelogram);

    // get height calculate
    const paralelogramHeightInput = document.getElementById('paralelogram-height');
    const paralelogramHeightText = paralelogramHeightInput.value;
    const paralelogramHeight = parseFloat(paralelogramHeightText);
    // console.log(paralelogramHeight);

    // value calculate
    const area = paralelogramBase * paralelogramHeight
    // console.log(area);

    // display area
    const poaralelogramArea = document.getElementById('paralelogram-area');
    poaralelogramArea.innerText = area
}


