let count = 0;

const element = document.getElementById("counter");

const increase = () => {
    count += 1;
    element.innerText = count;
}

const decrease = () => {
    count -= 1;
    element.innerText = count;
}

const reset = () => {
    count = 0;
    element.innerHTML = "<mark>" + count + "</mark>";
}


const selectTheme = (theme) => {
    document.getElementsByTagName('body')[0].className = theme;
    document.getElementsByTagName('main')[0].className = theme;
    const button = document.getElementsByTagName('button')

    for (let i = 0; i < button.length; i++) {
        button[i].className = theme;
    }
}




