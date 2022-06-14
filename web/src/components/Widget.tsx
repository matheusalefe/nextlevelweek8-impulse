import { ChatTeardropDots } from 'phosphor-react';

export function Widget() {
    return( 
      <div className='absolute bottom-5 right-5'>
        <button className='bg-brand-500 px-3 w-12 h-12 rounded-full text-white'><ChatTeardropDots className='w-6 h-6' /></button>
      </div> 
    )
  }