import React, { useState } from "react";
import "./Bizness.css";
import buseiness from "../assets/business.jpg";
import { useNavigate, useLocation } from "react-router-dom";

function Bizness() {
  const [activeSection, setActiveSection] = useState("business");
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (id) => {
    setActiveSection(id);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <div className="business">
      <h1 className="business_title">Innox Biznes Inkubatori</h1>

      <div>
        <div>
          <img src={buseiness} alt="business" />
        </div>
        <div>
          <p>
            "InnoX" - innovatsion gʻoyalarga ega boʻlgan yoshlarning startap
            gʻoyalari (loyihalari)ni oʻquv dasturlari va mutaxassis tavsiyalari
            orqali qoʻllab-quvvatlash, grant tanlovlarga yo'naltirishga
            qaratilgan dastur.
          </p>
          <div>
            <p className="talab">
              <b>Davomiyligi:</b> 4 oy
            </p>
            <p className="talab">
              <b>Dars davomiyligi:</b> Haftada 3 kun, 2 soatdan
            </p>
            <p className="talab">
              <b>Dars kunlari: </b>Dushanba, Chorshanba, Juma
            </p>
            <p className="talab">
              <b>Yosh chegarasi:</b> 18-40 yosh oralig‘i
            </p>
            <p className="talab">
              <b>Talab:</b> Iqtisodiyot tarmoqlari va jamoat sohalarining
              muammolari yechimiga qaratilgan gʻoya va loyihasi bo'lishi
            </p>
          </div>
          <span>
            O'quv mashg'ulotlari davomida, ishtirokchilarga tajribali mentorlar
            tomonidan startap bilan bevosita ishlash uchun zarur bilim va
            ko'nikmalar beriladi.
          </span>

          <button
            className="business_btn"
            onClick={() => navigate("/registration")}
          >
            Ro'yhatdan o'tish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bizness;
