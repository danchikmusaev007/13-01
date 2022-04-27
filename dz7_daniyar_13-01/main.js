// class dog {
//     constructor(weight, height, color, gender, breed) {
//         this.weight = weight;
//         this.height = height;
//         this.color = color;
//         this.gender = gender;
//         this.breed = breed;
//     }
// }
// const arez = new dog(80, 1.5, "white", "domestic", "alabay");
// const bobik = new dog(30, 50, "orange", "domestic", "chi-hua-hua");
// console.log(arez)
// console.log(bobik)
// //
//
// class animal {
//     constructor(type, gender, color,voice) {
//         this.type = type;
//         this.gender = gender;
//         this.color = color;
//         this.voice = voice;
//     }
//     woice(){
//         console.log(this.voice)
//     }
// }
//
// class cat extends animal {
//     constructor(type, gender, color, voice, height, weight) {
//         super(type, gender, color, voice);
//         this.height = height;
//         this.weight = weight;
//     }
// }
//
// const kassy = new cat(
//     "pet",
//     "male",
//     "black",
//     "myaaaa",
//     30,
//     7
// )
// // console.log(kassy)
//
// const Tomka = new cat(
//     "хищник",
//     "female",
//     "white",
//     "э не на",
//     1.30,
//     50
// )
//
// console.log(Tomka)
// Tomka.woice()
// console.log(arez)



class home {
    constructor(roof, floor, wallpaper, chandeiler, paintings, carpet, furniture, dishes, window, door, dishwasher, table, computer, mouse, bath) {
        this.roof = roof;
        this.floor = floor;
        this.wallpaper = wallpaper;
        this.chandeiler = chandeiler;
        this.paintings = paintings;
        this.statue = carpet;
        this.furiture = furniture;
        this.dishes = dishes;
        this.window = window;
        this.door = door;
        this.dishwasher = dishwasher;
        this.table = table;
        this.computer = computer;
        this.mouse = mouse;
        this.bath = bath
    }
}
const dom = new home(12.000, "orange", "white", "big", 12.12, "brown", "future", "verification", 13, "orange", "just", "big", "powerful", "hyper_x", "yellow" )
console.log(dom)

class shcool {
    constructor(book, copybook, studentsbook, desk, pen, board, smartboard, window, magazine, cactus) {
        this.book = book;
        this.copybook = copybook;
        this.desk = desk;
        this.pen = pen;
        this.board = board;
        this.smartboard = smartboard;
        this.window = window;
        this.magazine = magazine;
        this.cactus = cactus;
    }
}
const second = new shcool("just", "lol", "big", "blue", "brown", "cool", "verycool", "white", "red", "green")
console.log(second)