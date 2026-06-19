import React from "react";
import { GamepadOutlined } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
interface myComponentProps {
    className: string,
    articleHeaderImg: string | undefined, // header image for the article (optional)
    articleHeadline: string, // headline of the article
    articleLink: string, // link to the article
    articleAuthor: string, // author of the article
    articleSource: string, // Polygon, Destructroid, etc.
    articlePublishDate: string // date day was published,
    articleTags: Array<string>, // tags for the article (optional)
    articlePreview: React.ReactNode, // preview of the article (optional)
    entry: { [key: string]: any },
}

const PostCard:React.FC<myComponentProps> = (props) => {

    const maxVisibleArticleTags = 3;
    const [ showPreview, setShowPreview ] = React.useState(false);

    return (
    <div className={`${props.className || ""} w-full bg-gradient-to-br from-dark-gray to-almost-black py-6 px-6 hover:bg-gradient-to-br hover:from-dark-gray/90 hover:to-almost-black/90 transition-colors duration-200`}>
        <div className="article-card-header-container mb-4">
            <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-dark-mode-red/10 rounded-lg flex items-center justify-center">
                    {props.articleHeaderImg && props.articleHeaderImg !== "" ? (
                        <img src={props.articleHeaderImg} alt="article-header" className="w-full h-full object-cover rounded-lg" />
                    ) : (
                        <GamepadOutlined className="text-dark-mode-red-text" />
                    )}
                </div>
                <a 
                    className="flex-1 text-lg font-semibold text-dark-mode-red-text hover:text-dark-mode-red transition-colors duration-200 line-clamp-2" 
                    target="_blank" 
                    rel="noreferrer" 
                    href={props.articleLink}
                >
                    {props.articleHeadline.replace(/&#039;/g, "'")}
                </a>
            </div>
        </div>

        <div className="flex justify-between gap-6 flex-col lg:flex-row mb-4">
            <div className="article-source-and-publish-date-container flex flex-col gap-1 text-sm">
                <p className="text-light-gray/80"><span className="font-medium text-white">Source:</span> {props.articleSource}</p>
                <p className="text-light-gray/60"><span className="font-medium text-light-gray/80">Author:</span> {props.articleAuthor}</p>
                <p className="text-light-gray/60"><span className="font-medium text-light-gray/80">Date:</span> {props.articlePublishDate}</p>
            </div>

            <div className="article-tags-and-preview-container flex flex-col gap-3 lg:items-end">
                <div className="article-tags-container flex flex-wrap gap-2">
                    {props.articleTags && props.articleTags.slice(0, maxVisibleArticleTags).map((tag, index) => (
                        <span key={index} className={`bg-dark-mode-red/30 text-dark-mode-red-text px-3 py-1 rounded-full text-xs font-medium border border-dark-mode-red/50 hover:bg-dark-mode-red/50 transition-colors duration-200`}>
                            {tag}
                        </span>
                    ))}
                    {props.articleTags && props.articleTags.length > maxVisibleArticleTags && 
                        <Tooltip title={props.articleTags.slice(maxVisibleArticleTags).join(", ")} arrow>
                            <span className="bg-dark-mode-red/20 text-dark-mode-red-text px-3 py-1 rounded-full text-xs font-medium border border-dark-mode-red/30 cursor-help">
                                +{props.articleTags.length - maxVisibleArticleTags}
                            </span>
                        </Tooltip>
                    }
                </div>
                <div className="view-preview-btn">
                    <button 
                        onClick={() => setShowPreview(!showPreview)}
                        className="px-4 py-2 text-sm font-medium bg-dark-mode-red/20 text-dark-mode-red-text border border-dark-mode-red/50 rounded-lg hover:bg-dark-mode-red/40 hover:border-dark-mode-red transition-all duration-200"
                    >
                        {showPreview ? 'Hide Preview' : 'Show Preview'}
                    </button>
                </div>
            </div>
        </div>

        {showPreview && (
            <div className={`article-preview-container bg-almost-black/50 border border-dark-mode-red/20 p-4 mt-4 rounded-lg backdrop-blur-sm ${showPreview ? 'animate-fade-in' : ''}`}>
                <div className="article-preview text-light-gray/80 text-sm leading-relaxed mb-4 prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: props.articlePreview as string }} />
                <button 
                    onClick={() => setShowPreview(false)}
                    className="w-full px-4 py-2 text-sm font-medium bg-dark-mode-red/20 text-dark-mode-red-text border border-dark-mode-red/50 rounded-lg hover:bg-dark-mode-red/40 hover:border-dark-mode-red transition-all duration-200"
                >
                    Hide Preview
                </button>
            </div>
        )}
    </div>
    );
};

export default PostCard;