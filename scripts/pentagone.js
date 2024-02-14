function calculatePentagonArea (){
//      get p value
    const pentagoneInput = document.getElementById('pentagon-p');
    const pentagoneText = pentagoneInput.value;
    const pentaP = parseFloat(pentagoneText)
    // console.log(pentaP);

    // get b value
    const pentaBeInput = document.getElementById('pentagon-b');
    const pentaBeText = pentaBeInput.value;
    const pentaB = parseFloat(pentaBeText);
    // console.log(pentaB);

    // total value
    const area = 0.5 * pentaP * pentaB ;
    console.log(area);

    // disply value
    const pentagonArea = document.getElementById('pentagone-area');
    pentagonArea.innerText = area;

}