import { useState } from "react";
import { CloseButton } from "./CloseButton"
import bugImageUrl from '../assets/bug.svg'
import ideaImageUrl from '../assets/idea.svg'
import thoughtImageUrl from '../assets/thought.svg'


const feedbackTypes = {
    BUG :{
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt:'Imagem de um Inseto'
        }
    },
    IDEA :{
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt:'Imagem de uma Lâmpada'
        }
    },
    OTHER :{
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt:'Imagem de uma nuvem de pensamento'
        }
    },
}

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackType, setFeedbackType ] = useState<FeedbackType | null>(null)

    return (
    <div className=" bg-zinc-800 p5 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        <div className="p-[1rem]">
            <header>
                <CloseButton />
                <span className="text-xl lending-6">Deixe o seu feedback</span>
            </header>

            {!feedbackType ? (<div className="flex py-8 gap-2 w-full">
                    { Object.entries(feedbackTypes).map(([key, value]) => {
                        
                        return (
                            <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            onClick={() => setFeedbackType(key as FeedbackType)}
                            type="button"
                            >
                                <img src={value.image.source} alt={value.image.alt} />
                                <span>{value.title}</span>
                            </button>
                        );
                    }) }
                </div>) : (
                    <p>Hello, world!</p>
                )
                }
                

            <footer className="text-xs text-neutral-400 underline-offset-2">
                Uma solução <a href="http://www.info-rmi.com/">InfoRMI</a> 
            </footer>
        </div>
        
    </div>
    )
}

