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
        {props.articleHeaderImg !== "" ? <img src={props.articleHeaderImg} alt="article-card-header-img" /> : <GamepadOutlined />}
        <p>{props.articleHeadline}</p>
        <div className="flex">
            <div className="article-source-and-publish-date-container flex flex-col">\
                <p>From: {props.articleSource}</p>
                <p>Date: {props.articlePublishDate}</p>
            </div>

        </div>

    </div>
    );
}