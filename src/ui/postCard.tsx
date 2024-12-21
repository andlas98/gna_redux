import React from "react";
import { GamepadOutlined } from "@mui/icons-material";
interface myComponentProps {
    className: string,
    articleHeaderImg: string | undefined, // header image for the article (optional)
    articleHeadline: string, // headline of the article
    articleLink: string, // link to the article
    articleAuthor: string, // author of the article
    articleSource: string, // Polygon, Destructroid, etc.
    articlePublishDate: string // date day was published,
    articleTags: Array<string>, // tags for the article (optional)
    entry: { [key: string]: any },

}

export const PostCard:React.FC<myComponentProps> = (props) => {
    return (
    <div className={`${props.className || ""} w-full bg-light-gray dark:bg-dark-gray rounded-[0.25rem] py-[2rem] px-[3rem] shadow-md border-dark-mode-red border-[1px] border-[solid]`}>
        <div className="article-card-header-container flex">
            {props.articleHeaderImg !== "" ? <img src={props.articleHeaderImg} alt="article-card-header-img" /> : <GamepadOutlined />}
            <a className="text-white" target="_blank" rel="noreferrer" href={props.articleLink}>
                {props.articleHeadline}
            </a>
        </div>
        <div className="flex justify-between">
            <div className="article-source-and-publish-date-container flex flex-col">
                <p className="text-white">From: {props.articleSource}</p>
                <p className="text-white">Date: {props.articlePublishDate}</p>
            </div>
            <p>{props.articleTags}</p>
        </div>

    </div>
    );
}