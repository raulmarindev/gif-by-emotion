import { Face, FaceClient } from '@azure/cognitiveservices-face';
import { ApiKeyCredentials } from '@azure/ms-rest-js';
import {
  FaceDetectWithStreamOptionalParams,
  FaceDetectWithStreamResponse,
  Emotion,
  DetectedFace,
} from '@azure/cognitiveservices-face/esm/models';

const apiKey = process.env.NEXT_PUBLIC_COMPUTER_VISION_API_SUBSCRIPTION_KEY;
const endpoint = process.env.NEXT_PUBLIC_COMPUTER_VISION_API_ENDPOINT;

if (!apiKey || !endpoint) {
  throw new Error(
    'Set your environment variables for your cognitive services subscription key and endpoint.'
  );
}

const credentials = new ApiKeyCredentials({
  inHeader: {
    'Ocp-Apim-Subscription-Key': apiKey,
  },
});

const faceClient = new FaceClient(credentials, endpoint);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function analyzeFaceInImage(
  base64Image: string
): Promise<EmotionType[]> {
  if (faceClient) {
    const face = new Face(faceClient);
    const options: FaceDetectWithStreamOptionalParams = {
      returnFaceAttributes: ['age', 'emotion', 'gender', 'smile'],
    };

    const facesDetectionResult: FaceDetectWithStreamResponse = await face.detectWithStream(
      dataURItoBlob(base64Image),
      options
    );

    if (facesDetectionResult.some((face) => face)) {
      const detectedFace: DetectedFace = facesDetectionResult[0];

      if (detectedFace.faceAttributes?.emotion) {
        console.log(detectedFace.faceAttributes);
        return getDominantEmotions(
          detectedFace.faceAttributes.emotion as IExtendedEmotion
        );
      }
    }
  }

  return ['neutral', 'neutral'] as EmotionType[];
}

interface IExtendedEmotion extends Emotion {
  [key: string]: number | undefined;
}

export type EmotionType = keyof Emotion;

function getDominantEmotions(emotions: IExtendedEmotion): EmotionType[] {
  const emotionsArray = [];

  console.log(emotions);
  if (emotions) {
    for (const prop in emotions) {
      let weight = 0;
      if (emotions[prop] && prop !== 'neutral') {
        weight = emotions[prop]!;
      }
      emotionsArray.push({
        emotionName: prop,
        emotionWeight: weight,
      });
    }
  }

  emotionsArray.sort((a, b) => b.emotionWeight - a.emotionWeight);

  return emotionsArray.slice(0, 2).map((e) => e.emotionName) as EmotionType[];
}

function dataURItoBlob(dataURI: string) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  let byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
    byteString = atob(dataURI.split(',')[1]);
  else byteString = unescape(dataURI.split(',')[1]);

  // separate out the mime component
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to a typed array
  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], { type: mimeString });
}
