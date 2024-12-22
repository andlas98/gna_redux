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
    <div className={`${props.className || ""} w-full bg-light-gray dark:bg-dark-gray py-[2rem] px-[3rem]`}>
        <div className="article-card-header-container flex items-center">
            <div className="mr-[1rem]">
                {props.articleHeaderImg !== "" ? <img src={props.articleHeaderImg} alt="article-card-header-img" /> : <GamepadOutlined />}
            </div>
            <a className="text-white text-[1.5rem] dark:text-dark-mode-red-text" target="_blank" rel="noreferrer" href={props.articleLink}>
                {props.articleHeadline}
            </a>
        </div>
        <div className="flex justify-between max-md:flex-col max-md:items-center">
            <div className="article-source-and-publish-date-container flex flex-col">
                <p className="text-white">From: <span className="italic">{props.articleSource}</span> ({props.articleAuthor})</p>
                <p className="text-white">Date: {props.articlePublishDate}</p>
            </div>
            <div className="article-tags-container">
                {props.articleTags && props.articleTags.map((tag, index) => (
                    <span key={index} className="dark:bg-dark-mode-red p-[0.25rem] rounded-[0.25rem] italic text-[0.75rem]">{tag}</span>
                ))}
            </div>
        </div>

    </div>
    );
}