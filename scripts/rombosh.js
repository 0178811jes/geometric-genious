function calculateRombosArea (){
//    get d1 value
    const d1Input = document.getElementById('rombosh-d1');
    const d1Text = d1Input.value;
    const d1 = parseFloat(d1Text);
    // console.log(d1);

    // get d2 value
    const d2Input = document.getElementById('rombosh-d2');
    const d2Text = d2Input.value;
    const d2 = parseFloat(d2Text);
    // console.log(d2);

    // total value 

    const area = 0.5 * d1 * d2;
    console.log(area);
    
    // display calculate area
    
    const romboshArea = document.getElementById('rombosh-area');
    romboshArea.innerText = area;
}