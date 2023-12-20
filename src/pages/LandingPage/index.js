import React from "react";
import logoQubisa from "../../assets/logo-QuBisa-white.jpg";
import logoDLS from "../../assets/DLS white.png";
import banner from "../../assets/Qubisa Corporate Services-01.jpg";

const LandingPage = () => {
  return (
    <div>
      <div className="">
        <img className="me-4" alt="" src={logoQubisa} width={120} />
        <img alt="" src={logoDLS} width={130} />
      </div>
      <div className="row mt-5">
        <div className="col">
          <p className="fs-1 text-white fw-bold-title">
            Qubisa Corporate Digital Learning Solutions
          </p>
          <p className="text-white mt-4">
            Discover the ultimate platform for your organization's digital
            education needs. Our suite of cutting-edge offerings includes
            Corporate Learning, Enterprise Private Learning Platform, and so
            much more. We're committed to deliver the finest in digital learning
            solutions because your success is our mission.{" "}
          </p>
        </div>
        <div className="col">
          <iframe
            className="rounded-5 d-block d-sm-none mx-auto"
            width="320"
            height="180"
            src="https://www.youtube.com/embed/WG-RWuxD-xE?si=cNp30bMoCnGADNTX"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className="rounded-5 d-none d-sm-block"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WG-RWuxD-xE?si=cNp30bMoCnGADNTX"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <img
        className="mt-5 rounded-3 mx-auto d-block d-sm-none"
        alt=""
        src={banner}
        width={330}
        height="auto"
      />
      <img
        className="mt-5 rounded-3 mx-auto d-none d-sm-block"
        alt=""
        src={banner}
        width={1100}
        height="auto"
      />
      <div className="text-white mt-5 bg-red">
        <p>
          Play now for your shot at winning these incredible prizes:
          <br />
          <ul>
            <li>
              Unlock a Voucher for a Free Corporate Learning Portal with QuBisa
              Paylater Wallet, valued at Rp 100 Million. (*Terms and conditions
              apply.)
            </li>
            <li>
              Enjoy a FREE Digital Learning Transformation Consultation Session
              for Your Organization, worth Rp 5 Million.
            </li>
            <li>
              Plus, for those who register at the QuBisa booth, seize an
              exclusive 30% discount on 'QuBisa Goes to Office' services until
              December.
            </li>
          </ul>
          Seize your chance and let these fantastic rewards flow your way!
        </p>
        <button
          className="w-75 rounded-5 border-0 p-2 fw-bold mx-auto d-block d-sm-none"
          onClick={() =>
            window.open("https://onegml.com/wof-dls-qubisa/", "_blank")
          }
        >
          Get The Prize
        </button>
        <button
          className="w-25 rounded-5 border-0 p-2 fw-bold mx-auto d-none d-sm-block"
          onClick={() =>
            window.open("https://onegml.com/wof-dls-qubisa/", "_blank")
          }
        >
          Get The Prize
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
