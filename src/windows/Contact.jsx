import React from "react";
import { socials } from "#constants";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        
        <img
          src="/images/adrian.jpg"  
          alt="Sanya"
          className="w-20 rounded-full"
        />

        <h3>Let's Connect</h3>
        <p>
          Got an idea? A bug to squash? Or just wanna talk tech? <br />
          I'm in.
          
        </p>
        <a 
  href="mailto:sanyasaxena1465@gmail.com" 
  className="underline text-blue-600"
>
  sanyasaxena1465@gmail.com
</a>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li
              key={id}
              style={{ backgroundColor: bg }}
              className="p-3 rounded-md transition hover:opacity-80"
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
                className="flex items-center gap-3"
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
