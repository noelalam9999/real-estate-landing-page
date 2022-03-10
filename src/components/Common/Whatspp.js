import { useState, useEffect } from "react";






const Whatsapp = ({ footerBgClass }) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
  
     <>
      <a
        href="https://wa.me/+8801740035118"
        className={`whatsapp_float ${scroll > top ? "show" : ""}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
  
      </>
  );
};

export default Whatsapp;
