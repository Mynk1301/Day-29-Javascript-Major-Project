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




function bookSeat(seatNumber){
    seatNumber = parseInt(seatNumber);
    form.classList.remove('hidden');
    let bookNow = document.querySelector('#book');
    bookNow.addEventListener('click',()=>{
        let nameInput = document.getElementById('name');
        let emailInput = document.getElementById('email');
        let phoneInput = document.getElementById('phone');
        arr[seatNumber - 1 ] = {
            seatNumber : seatNumber,
            name : nameInput.value ,
            email : emailInput.value ,
            phone : phoneInput.value,
            status:true,
        }
        nameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        renderSeats();
        form.classList.add('hidden');
    })
}




let seatsContainer = document.querySelector(".seats");

renderSeats = () => {
    seatsContainer.innerHTML=""
    arr.map((item) => {
        let button = document.createElement('button');
        button.classList.add("seat");
        button.innerText = item.seatNumber;

        if(item.status === true){
            button.classList.add('seat-booked');
            setTimeout(()=>{
                button.innerText = 'x';
                button.classList.remove('seat-booked');
                button.classList.add('seat-cancel')
                button.addEventListener('click',()=>{
                    let cancelPop = document.querySelector('#cancel-pop');
                    let cancelYes = document.querySelector('#cancel-yes');
                    let cancelNo = document.querySelector('#cancel-no');
                    cancelPop.classList.remove('hidden');
                    cancelYes.addEventListener('click',()=>{
                        button.classList.remove('seat-booked','seat-cancel');
                        button.innerText = item.seatNumber;
                        cancelPop.classList.add('hidden');

                    })

                    cancelNo.addEventListener('click',()=>{
                        cancelPop.classList.add('hidden');
                    })


                })

            },2000)

            // button.setAttribute('disabled' , true);

        }

        else{

            button.addEventListener('click' , (e)=>{
            let seatNumber = e.target.innerText;
            bookSeat(seatNumber)

        });
        }

        seatsContainer.appendChild(button);

    });

};


renderSeats();

showBookedSeats=()=>{

    let showBookedSeat = document.createElement('div');
    showBookedSeat.classList.add('showBookedSeat')
    showBookedSeat.innerHTML = `<div class="showBookedSeats">
          <div class="showBookedSeat">
            <p>14 : </p>
            <p> </p>
          </div>
  </div>`
  let showBookedSeats = document.querySelector('.showBookedSeats')
  showBookedSeats.appendChild('showBookedSeat');

}
let ee = document.querySelector('#ee');
ee.addEventListener('click',showBookedSeats())

