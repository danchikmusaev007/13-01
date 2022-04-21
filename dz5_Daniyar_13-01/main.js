const lol = prompt('colour')
switch (lol) {
    case 'red':
        document.getElementsByClassName('red_inner')[0].style.background = 'red'
        document.getElementsByClassName('red_inner')[0].innerText = 'stop'
		alert('stop_please')
        break;
    case 'green':
        document.getElementsByClassName('green_inner')[0].style.background = 'green'
        document.getElementsByClassName('green_inner')[0].innerText = 'go'
		alert('you can')
        break;
    case 'yellow':
        document.getElementsByClassName('yellow_inner')[0].style.background = 'yellow'
        document.getElementsByClassName('yellow_inner')[0].innerText = 'wait'
		alert('wait_please')
        break;
    default:
        alert('undefined')
        break;
}