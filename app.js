let arr = [
  { seatNumber: 1 },
  { seatNumber: 2 },
  { seatNumber: 3 },
  { seatNumber: 4 },
  { seatNumber: 5 },
  { seatNumber: 6 },
  { seatNumber: 7 },
  { seatNumber: 8 },
  { seatNumber: 9 },
  { seatNumber: 10 },
  { seatNumber: 11 },
  { seatNumber: 12 },
  { seatNumber: 13 },
  { seatNumber: 14 },
  { seatNumber: 15 },
  { seatNumber: 16 },
  { seatNumber: 17 },
  { seatNumber: 18 },
  { seatNumber: 19 },
  { seatNumber: 20 },
  { seatNumber: 21 },
  { seatNumber: 22 },
  { seatNumber: 23 },
  { seatNumber: 24 },
  { seatNumber: 25 },
  { seatNumber: 26 },
  { seatNumber: 27 },
  { seatNumber: 28 },
  { seatNumber: 29 },
  { seatNumber: 30 },
  { seatNumber: 31 },
  { seatNumber: 32 },
  { seatNumber: 33 },
  { seatNumber: 34 },
  { seatNumber: 35 },
  { seatNumber: 36 },
  { seatNumber: 37 },
  { seatNumber: 38 },
  { seatNumber: 39 },
  { seatNumber: 40 },
];

let form = document.querySelector('.form');
let seatsContainer = document.querySelector(".seats");


function bookSeat(seatNumber){
    seatNumber = parseInt(seatNumber);
    form.classList.remove('hidden');

    let bookNow = document.querySelector('#book');
    bookNow.addEventListener('click',()=>{
        form.classList.add('hidden');
    })

}
renderSeats = () => {
    arr.forEach(item => {
        let button = document.createElement('button');
        button.classList.add("seat");
        button.innerText = (item.seatNumber);
        button.addEventListener('click' , (e)=>{
            let seatNumber = e.target.innerText;
            bookSeat(seatNumber);

        });
        seatsContainer.appendChild(button);
    });

};





renderSeats();
