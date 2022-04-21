const lol = prompt('colour')
switch (lol) {
    case 'red':
        document.getElementsByClassName('red_inner')[0].style.background = 'red'
        break;
    case 'green':
        document.getElementsByClassName('green_inner')[0].style.background = 'green'
        break;
    case 'yellow':
        document.getElementsByClassName('yellow_inner')[0].style.background = 'yellow'
        break;
    default:
        alert('undefined')
        break;
}