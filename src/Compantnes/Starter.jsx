import React from 'react'
import { useState } from 'react'
function Starter() {

  const [dice, setDice] = useState(0);
  const [check,setCheck] = useState(0);
  let no = [1,2,3,4,5,6]

  return (
    <div className='w-3xl   p-6 m-auto'>
         <div className='flex justify-around p-7' >
           <h1 className='text-4xl'>Dice Game 🎲</h1>
 </div>
<div className="flex gap-3">
  {
    no.map((num) => (
    <button
      key={num}
      onClick={() => setCheck(num)}
      className="bg-blue-500 text-white p-12 rounded"
    >
      {num}

    </button>
  ))}

</div>
  
<h1 className='text-4xl mt-4'>this no of you choose :{check}</h1>
 
<button 
  onClick={()=>setDice(Math.floor(Math.random()*6)+1)}
class="bg-blue-500 hover:bg-blue-700 ms-80 text-white font-bold mt-12 py-2 px-4 rounded">
Roll Dice
</button>
<h1 className='p-4 text-center text-5xl'>
  {dice==0?"start the game":<img src={`/img/${dice}.png`} alt="Dice" />}
  {dice==check?"Your answer are match":"Not match "}
</h1>


    </div>
  )
}

export default Starter