import React, {useEffect} from "react";
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

export const PostCard:React.FC<myComponentProps> = (props) => {

    const maxVisibleArticleTags = 3;
    const [showPreview, setShowPreview] = React.useState(false);

    useEffect(() => {
        if (showPreview) {
            console.log("showing preview")
        }
    },[showPreview]);

    const handleShowPreview = () =>{
        setShowPreview(!showPreview);
    }

    return (
    <div className={`${props.className || ""} w-full bg-dark-gray py-[2rem] px-[3rem]`}>
        <div className="article-card-header-container flex items-center">
            <div className="mr-[1rem]">
                {props.articleHeaderImg !== "" ? <img src={props.articleHeaderImg} alt="article-card-header-img" /> : <GamepadOutlined />}
            </div>
            <a className="text-[1.5rem] text-dark-mode-red-text text-underline" target="_blank" rel="noreferrer" href={props.articleLink}>
                {props.articleHeadline.replace(/&#039;/g, "'")}
            </a>
        </div>
        <div className="flex justify-between max-md:flex-col max-md:items-center">
            <div className="article-source-and-publish-date-container flex flex-col">
                <p className="text-white">From: <span className="italic">{props.articleSource}</span> ({props.articleAuthor})</p>
                <p className="text-white">Date: {props.articlePublishDate}</p>
            </div>

            <div className="article-tags-and-preview-container flex flex-col items-center">
                <div className="article-tags-container ">
                    {props.articleTags && props.articleTags.map((tag, index) => (
                        index < maxVisibleArticleTags &&
                        <span key={index} className={`bg-dark-mode-red p-[0.25rem] rounded-[0.25rem] italic text-[0.75rem] mr-1 ${props.articleTags?.length > maxVisibleArticleTags && ""}`}>{tag}</span>
                    ))}
                    {props.articleTags?.length > maxVisibleArticleTags && 
                    <Tooltip title={props.articleTags.slice(maxVisibleArticleTags).join(", ")} arrow>
                        <button>+{props.articleTags.length - maxVisibleArticleTags}</button>

                    </Tooltip>
                    }
                </div>
                <div className="view-preview-btn">
                    <button onClick={()=>handleShowPreview()}>Show Preview</button>
                </div>
            </div>

        </div>
        {showPreview && (
            <div className="bg-[#2E2E2E] py-[2rem]">
                <div className="article-preview-container" dangerouslySetInnerHTML={{ __html: props.articlePreview as string }} />
                <button className="hide-preview-btn" onClick={() => {handleShowPreview()}}>Hide Preview</button>
            </div>
        )}
    </div>
    );
}