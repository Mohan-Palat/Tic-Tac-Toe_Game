console.log('script connected!')

//add event listener for every tile clicked
document.querySelector('.one').addEventListener('click', (event) => {
    let tile = event.target;
    console.log(tile.dataset.clicked);
    tile.dataset.clicked = true;
    console.log(tile.dataset.clicked);
    console.log(tile.style);
    tile.style.backgroundColor = "red";
})