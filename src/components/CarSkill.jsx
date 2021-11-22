import React, { useState } from 'react'

export const CarSkill = ({img,title,content}) => {

    const [DisplayContent1, setDisplayContent1] = useState(false);



    return (
        <div className="skill-content" >
            <div className="image_skill">
                <img src={img} alt="" width="200px" />
            </div>
            <p>{title}</p>
            <div className="skills-show-content" >{content}</div>
        </div>

    );
}
