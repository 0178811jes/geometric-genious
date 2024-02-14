function calculateEllipsesArea (){
    // get a input value
    const ellipesInputA = document.getElementById('ellipses-a');
    const ellipesText = ellipesInputA.value;
    const ellipesA = parseFloat(ellipesText);
    console.log(ellipesA);

    // get b input value
    const ellipesInputB = document.getElementById('ellipses-b');
    const ellipesTextB = ellipesInputB.value;
    const ellipesB = parseFloat(ellipesTextB);
    console.log(ellipesB);

    // total value
    const area = 3.14 * ellipesA * ellipesB;
    console.log(area);

    // display value
    const ellipesArea = document.getElementById('ellipses-area');
    ellipesArea.innerText = area;
}