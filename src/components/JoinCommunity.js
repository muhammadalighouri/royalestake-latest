import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import "../scss/footer.scss"
const JoinCommunity = () => {
    return (
        <section className='join__community'>
            <div className="container">
                <div className="join">
                    <h2>JOIN OUR COMMUNITY</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                    </p>
                    <div className="btn__container">
                        <a href="https://twitter.com/adoptablebabes" target={"_blank"}>
                            <div className="btn">
                                <AiOutlineTwitter />
                                TWITTER
                            </div>
                        </a>
                        <a href={"https://discord.com/invite/DcrwzT9WnD"} target={"_blank"}>
                            <div className="btn">
                                <FaDiscord />
                                DISCORD
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default JoinCommunity
