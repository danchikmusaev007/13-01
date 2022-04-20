const colour = prompt('Выберите цвет: red, yellow, green');

switch (colour) {
    case 'red':
        alert('стоп!')
        break;
    case 'yellow':
        alert('опасно ехать, подожди')
        break;
    case 'green':
        alert('можно ехать')
        break
    default:
        alert('undefined')
        break;
}
