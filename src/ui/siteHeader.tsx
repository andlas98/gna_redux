export default function SiteHeader(){
    return (
        <div className="pt-8 pb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-dark-mode-red to-transparent opacity-30"></div>
            </div>
            <h1 className="header text-white text-4xl md:text-5xl text-center font-bold tracking-tight py-2">
                <span className="text-dark-mode-red">G</span>aming{' '}
                <span className="text-dark-mode-red">N</span>ews{' '}
                <span className="text-dark-mode-red">A</span>ggregator
            </h1>
            <p className="text-light-gray/60 text-center text-sm mt-3">
                Your source for the latest gaming news across multiple platforms
            </p>
            <div className="flex items-center justify-center gap-3 mt-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-dark-mode-red to-transparent opacity-30"></div>
            </div>
        </div>
    )
} 