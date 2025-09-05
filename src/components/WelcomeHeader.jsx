import React from 'react';
import Button from '../components/Button';

const WelcomeHeader = ({ title, subtitle, buttonText, onButtonClick, buttonClassName = "" }) => {
  return (
    <div className="px-6 py-7 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg mb-8 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full">
        <h2 className="text-[18px] mb-2 font-medium">{title}</h2>
        <p className="text-[12px]">{subtitle}</p>
      </div>
      {buttonText && (
        <Button
          onClick={onButtonClick} 
          className={buttonClassName}
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default WelcomeHeader;
