import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
interface FeedbackTypeContentProps {
    feedbackType:  FeedbackType;
    onFeedbackRestartRRequested: () => void;
}
export function FeedbackContentStep({
    feedbackType,
    onFeedbackRestartRRequested
    } : FeedbackTypeContentProps){
    
    const feedbackTypeInfo = feedbackTypes[feedbackType]

    return(
        <>
            <header className="w-[12.0rem] flex justify-center pt-[0.9rem] items-center">
                
                <button 
                    type="button" 
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestartRRequested}
                    >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>

                <span className="text-xl lending-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="h-6 w-6"/>
                    { feedbackTypeInfo.title}
                </span>

                <CloseButton />

            </header>
    
            <div className="flex py-8 gap-2 w-full">
           
            </div>
        </>)
}