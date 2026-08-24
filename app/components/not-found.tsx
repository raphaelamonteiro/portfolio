export default function NotFound() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center">
            <main className="flex w-full flex-1 items-center justify-center px-6 py-32">
                <div className="text-center">
                    <h1 className="title-404 text-9xl font-bold">
                        404
                    </h1>

                    <h2 className="subtitle-404 mt-4 text-lg">
                        Parece que este caminho não leva mais a lugar algum.
                    </h2>

                    <a href="/"
                        className="link-404 relative z-10 mt-6 inline-block cursor-pointer text-xl font-semibold">
                        Clique aqui e volte para casa
                    </a>
                </div>
            </main>
        </div>
    )
}