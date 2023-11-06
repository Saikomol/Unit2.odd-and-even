// TODO: this file! :)
const state = {
    start: [],
    odd:[],
    even:[],
};
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


const form = document.querySelector('form');//form
const input = document.querySelector('input')
const number =[]

form.addEventListener('submit',(event)=>{
    console.log(event);
    console.log(input.value);
    //input.value='';
    event.preventDefault();
    number.push(input.value);
    console.log(number);
})

function render(){
    const numberBank = document.querySelector('')
}


