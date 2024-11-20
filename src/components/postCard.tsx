import React from "react";
interface myComponentProps {
    className: string,
    content: any,
}
export const PostCard:React.FC<myComponentProps> = (props) => {
    return (
    <div className={`${props.className || ""} w-full bg-light-gray dark:bg-dark-gray rounded-[0.25rem] py-[2rem] px-[3rem] shadow-md`}>
        {props.content}
    </div>
    );
}