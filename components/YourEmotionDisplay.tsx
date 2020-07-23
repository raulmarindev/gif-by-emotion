import * as React from 'react';

const YourEmotionDisplay: React.FC<{
  emotionName1: string;
  emotionName2: string;
  base64Image: string;
}> = ({ emotionName1, emotionName2, base64Image }) => {
  return (
    <div className="w-10/12 max-w-sm pb-4 mx-auto overflow-hidden text-black bg-white rounded shadow-lg lg:w-2/4">
      <div className="w-full mb-4">
        <div className="align-top screenshot-container">
          <img
            src={base64Image}
            alt="screenshot"
            className="screenshot img-circle"
          />
        </div>
        <h1 className="mt-2">
          <div className="text-base font-light">
            These are the dominant emotions in your picture:
          </div>
          <span className="font-semibold">{`${emotionName1}`}</span>
          {' and '}
          <span className="font-semibold">{`${emotionName2}`}</span>
        </h1>
      </div>
    </div>
  );
};

export default YourEmotionDisplay;
