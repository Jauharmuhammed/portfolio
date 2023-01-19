import React from "react";
import DynamicGradient from "./DynamicGradient";

const Contact = () => {
    return (
        <div className="relative min-h-[500] h-screen">
            <DynamicGradient />
            <div className="flex justify-center items-center h-full">
                <div className="text-center text-xl">
                    <h2 className="text-5xl mb-5 ">Have a challeng for me?</h2>
                    <p >I occasionally take on new opportunities.</p>
                    <p><a href="mailto:jauharmuhammedk@gmail.com" className="underline underline-offset-4">Get in touch</a> and I'd love to hear about yours.</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
