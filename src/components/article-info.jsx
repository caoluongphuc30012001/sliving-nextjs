import React from 'react';
import arrowRight from "@images/new-home-page/footer/arrow-right.png";
import "./style.scss"
const ArticleInfo = () => {

    return (
        <article >
            <div className="form-contact">
                <div className="contact-title">
                    <p>
                        Please keep in touch to get the latest updates.
                    </p>
                </div>
                <div className="contact-form">
                    <div className="contact-form-group">
                        <input type="text" placeholder="Email address" />
                    </div>
                    <button type="button" className="btn-send">
                        <img src={arrowRight} alt="" />
                    </button>
                </div>
                <div className="contact-desc">
                    <p>Our goal is to translate the positive effects
                        from revolutionizing how companies engage with their clients & their team.
                    </p>
                </div>
            </div>
        </article>
    )
}

export default ArticleInfo;