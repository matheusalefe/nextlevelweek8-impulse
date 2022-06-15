import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react'

/*################################################################### 
***Version
  
    220615 MAM                Initial Version
***Description***
    Widget                    Create a widget to det users feedback 
***Props***
    Popover.Panel             Content showed whe the button is clicked
    Popover.button             Button mechanism

#####################################################################*/

export function Widget() {
  return( 
      <Popover className='absolute bottom-5 right-5 group'>
        
        <Popover.Panel>Hello, world!</Popover.Panel>

        <Popover.Button className='bg-brand-500 px-3 h-12 rounded-full text-white flex items-center hover:bg-brand-300'>

          <ChatTeardropDots className='w-6 h-6' />

          <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-linear'>

            <span className='pl-2'>
              Feedback
            </span>
            
          </span>

        </Popover.Button>
      </Popover> 
    )
  }