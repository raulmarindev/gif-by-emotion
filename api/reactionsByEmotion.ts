import { EmotionType } from './emotion';
import ReactionType from './reactionType';

interface ReactionsByEmotion {
  emotion: EmotionType;
  reactions: ReactionType[];
}

export const getRandomReaction = (emotion: EmotionType) => {
  const possibleReactions = Reactions.find((r) => r.emotion === emotion)
    ?.reactions;
  if (possibleReactions) {
    return possibleReactions[
      Math.floor(Math.random() * possibleReactions.length)
    ];
  }

  return 'slow-clap';
};

const Reactions: ReactionsByEmotion[] = [
  {
    emotion: 'anger',
    reactions: ['angry', 'middle-finger', 'oh-no-you-didnt', 'rage'],
  },
  {
    emotion: 'contempt',
    reactions: ['disgusted', 'frustrated', 'meh', 'sarcastic', 'frown', 'yawn'],
  },
  {
    emotion: 'disgust',
    reactions: ['disgusted', 'wtf', 'meh', 'thumbs-down', 'eww'],
  },
  {
    emotion: 'fear',
    reactions: ['scared', 'shocked'],
  },
  {
    emotion: 'happiness',
    reactions: ['applause', 'awesome', 'awww', 'happy-dance'],
  },
  {
    emotion: 'sadness',
    reactions: ['disappointed', 'sorry', 'hug'],
  },
  {
    emotion: 'surprise',
    reactions: ['shocked', 'wtf'],
  },
];
