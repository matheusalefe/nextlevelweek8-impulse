import { ChatTeardropDots } from 'phosphor-react'

export function Widget() {
    return (
      <div className='position-absolute bottom-4 right-4 text-white'>
        <button className="bg-brand-500">
          <ChatTeardropDots />
        </button>
      </div>
    )
  }