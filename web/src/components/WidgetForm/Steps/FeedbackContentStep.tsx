import { ArrowLeft, Camera } from "phosphor-react";
import { useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";
interface FeedbackTypeContentProps {
    feedbackType:  FeedbackType;
    onFeedbackRestartRRequested: () => void;
}
export function FeedbackContentStep({
    feedbackType,
    onFeedbackRestartRRequested
    } : FeedbackTypeContentProps){
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const feedbackTypeInfo = feedbackTypes[feedbackType]

    return(
        <>
            <header className="w-full flex justify-center pt-[0.9rem] items-center">
                
                <button 
                    type="button" 
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestartRRequested}
                    >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>

                <span className="text-xl lending-6 flex items-center text-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="h-6 w-6"/>
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton />

            </header>
    
            <form className="my-4 w-full">
                <textarea
                className="min-w-[30.4rem] w-full min-h-[11.2rem] placeholder border-transparent ring-transparent bg-zinc-400 text-zinc-100 border-2 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                placeholder="Conte com detalhes o que está acontecendo: "

                />
            </form>
            <footer className="flex gap-2 mt-2">
                <ScreenshotButton 
                screenshot={screenshot}
                onScreenshotTook={setScreenshot}
                />

                <button
                type="submit"
                className="p-3 bg-brand-500 rounded-md border-transparent flex1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none text-zinc-100 w-full h-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
                >
                Enviar Feedback
                </button>
            </footer>
            
        </>)
}