import { useState } from "react";
import { CloseButton } from "../CloseButton"
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";


export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes;



export function WidgetForm(){
    const [feedbackType, setFeedbackType ] = useState<FeedbackType | null>(null)

    function handleRestartFeedback() {
        setFeedbackType(null);
    }

    return (
    <div className=" bg-zinc-900 p5 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        <div className="px-2">
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                ) : (
                    <FeedbackContentStep 
                        feedbackType={feedbackType}
                        onFeedbackRestartRRequested={() => handleRestartFeedback()}
                    />
                )
                }
                

            <footer className="text-xs text-neutral-400 underline-offset-2 text-center py-2">
                Uma solução <a href="http://www.info-rmi.com/">InfoRMI</a> 
            </footer>
        </div>
        
    </div>
    )
}

