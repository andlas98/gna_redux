import React from "react";
import { GamepadOutlined } from "@mui/icons-material";
interface myComponentProps {
    className: string,
    articleHeaderImg: string | undefined,
    articleHeadline: string,
    articleLink: string,
    articleAuthor: string,
    articleSource: string,
    articlePublishDate: string,
    articleTags: Array<string>,
}

export const PostCard:React.FC<myComponentProps> = (props) => {
    return (
    <div className={`${props.className || ""} w-full bg-light-gray dark:bg-dark-gray rounded-[0.25rem] py-[2rem] px-[3rem] shadow-md border-dark-mode-red border-[1px] border-[solid]`}>
        <div className="article-card-header-container flex">
            {props.articleHeaderImg !== "" ? <img src={props.articleHeaderImg} alt="article-card-header-img" /> : <GamepadOutlined />}
            <a className="text-white" href={props.articleLink}>{props.articleHeadline}</a>
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