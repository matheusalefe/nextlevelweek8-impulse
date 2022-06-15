export function WidgetForm(){
    return (
    <div className=" bg-zinc-800 p5 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        <header>
            <span className="text-xl lending-6">Cabeçalho</span>
        </header>

        <div id='conteudo'>
            Hello, world!
        </div>

        <footer className="text-xs text-neutral-400 underline-offset-2">
            Uma solução <a href="http://www.info-rmi.com/">InfoRMI</a> 
        </footer>
    </div>
    )
}

