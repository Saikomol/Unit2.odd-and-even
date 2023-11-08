// TODO: this file! :)

/* <body>
    <form>
      <label>
        Add a Number to the Bank
        <input name="number" type="number" />
      </label>
      <button>Add Number</button>
    </form>
    <main>
      <section id="numberBank">
        <h1>Number Bank</h1>
        <output></output>
        <div>
          <button id="sortOne">Sort 1</button>
          <button id="sortAll">Sort All</button>
        </div>
      </section>
      <section id="sortedNumbers">
        <h1>Sorted Numbers</h1>
        <section id="odds">
          <h2>Odds</h2>
          <output></output>
        </section>
        <section id="evens">
          <h2>Evens</h2>
          <output></output>
        </section>
      </section>
    </main> */



const numberBank =[]//to collect the number
const odds =[]
const evens =[]

const form = document.querySelector('form');//check1
const input = document.querySelector('input')//check1
const sortOneButton = document.querySelector('#sortOne')//link to sort 1 button
const sortAllButton = document.querySelector('#sortAll')//link to sort All button

function addNumberToBank(e){
  e.preventDefault();
  const number = Number(input.value);// use Number to convert string to number
  numberBank.push(number);//now push the number in array
  input.value='';
  console.log(numberBank);
  render()
}

form.addEventListener('submit',addNumberToBank);//eventListener call for submit by use call function

 function sortOne(){//function that can isolate one numbe to be odd or even
 console.log('sortOne');
 const number = numberBank.pop();// cut out the array number and
 if(number % 2 === 0){//if the number become even then push the number in
   evens.push(number)
 }else{
   odds.push(number)// else it will odds
 }
 render()
 console.log(odds);
 console.log(evens);
 }

 function sortAll(){
 console.log('sortAll');
   while(numberBank.length>0){// this will continous superate until end
     sortOne();
   }
} 

const numberBankEl = document.querySelector('#numberBank output')//
const oddsEl = document.querySelector('#odds output')
const evensEl = document.querySelector('#evens output')

function render(){
numberBankEl.textContent = numberBank
oddsEl.textContent = odds
evensEl.textContent = evens
}

sortOneButton.addEventListener('click',sortOne);
sortAllButton.addEventListener('click',sortAll);