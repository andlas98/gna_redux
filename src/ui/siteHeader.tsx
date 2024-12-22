export default function SiteHeader(){
    return (
        <div>
            <hr className="header-lower-hr dark:border-dark-mode-red m-auto"></hr>
            <b>
                <h2 className="header dark:text-white text-[3rem] text-center py-[1rem]" id="header">
                    <span className="accented-header-letter text-dark-mode-red">G</span>aming <span className="accented-header-letter text-dark-mode-red">N</span>ews <span className="accented-header-letter text-dark-mode-red">A</span>ggregator
                </h2>
            </b>
            <hr className="header-upper-hr dark:border-dark-mode-red w-[85%] m-auto"></hr>
        </div>
    )
} 