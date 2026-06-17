"use client";

import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded py-8">
      <div className="flex flex-col gap-3">
        <Fade direction="up" duration={600}>
          <div>
            <p className="text-sm text-base-content/45 tracking-wide">© {new Date().getFullYear()} — Boishakhi Ghosh Mukta. All rights reserved.</p>
          </div>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;
