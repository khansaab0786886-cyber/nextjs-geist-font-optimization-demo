import { CountingQuestion, AlphabetQuestion } from '@/types/game';

export const countingQuestions: CountingQuestion[] = [
  {
    id: 1,
    objects: ['🍎', '🍎', '🍎'],
    correctAnswer: 3,
    options: [2, 3, 4, 5]
  },
  {
    id: 2,
    objects: ['⭐', '⭐', '⭐', '⭐', '⭐'],
    correctAnswer: 5,
    options: [3, 4, 5, 6]
  },
  {
    id: 3,
    objects: ['🐶', '🐶'],
    correctAnswer: 2,
    options: [1, 2, 3, 4]
  },
  {
    id: 4,
    objects: ['🎈', '🎈', '🎈', '🎈'],
    correctAnswer: 4,
    options: [2, 3, 4, 5]
  },
  {
    id: 5,
    objects: ['🌸'],
    correctAnswer: 1,
    options: [1, 2, 3, 4]
  },
  {
    id: 6,
    objects: ['🚗', '🚗', '🚗', '🚗', '🚗', '🚗'],
    correctAnswer: 6,
    options: [4, 5, 6, 7]
  },
  {
    id: 7,
    objects: ['🍌', '🍌', '🍌', '🍌', '🍌', '🍌', '🍌'],
    correctAnswer: 7,
    options: [5, 6, 7, 8]
  },
  {
    id: 8,
    objects: ['🎯', '🎯', '🎯', '🎯', '🎯', '🎯', '🎯', '🎯'],
    correctAnswer: 8,
    options: [6, 7, 8, 9]
  }
];

export const alphabetQuestions: AlphabetQuestion[] = [
  {
    id: 1,
    word: 'Apple',
    image: '🍎',
    correctLetter: 'A',
    options: ['A', 'B', 'C', 'D']
  },
  {
    id: 2,
    word: 'Ball',
    image: '⚽',
    correctLetter: 'B',
    options: ['A', 'B', 'C', 'D']
  },
  {
    id: 3,
    word: 'Cat',
    image: '🐱',
    correctLetter: 'C',
    options: ['A', 'B', 'C', 'D']
  },
  {
    id: 4,
    word: 'Dog',
    image: '🐶',
    correctLetter: 'D',
    options: ['B', 'C', 'D', 'E']
  },
  {
    id: 5,
    word: 'Elephant',
    image: '🐘',
    correctLetter: 'E',
    options: ['C', 'D', 'E', 'F']
  },
  {
    id: 6,
    word: 'Fish',
    image: '🐟',
    correctLetter: 'F',
    options: ['D', 'E', 'F', 'G']
  },
  {
    id: 7,
    word: 'Giraffe',
    image: '🦒',
    correctLetter: 'G',
    options: ['E', 'F', 'G', 'H']
  },
  {
    id: 8,
    word: 'House',
    image: '🏠',
    correctLetter: 'H',
    options: ['F', 'G', 'H', 'I']
  }
];

export const encouragingMessages = [
  "Great job! 🌟",
  "Awesome! 🎉",
  "Well done! 👏",
  "Fantastic! ✨",
  "You're amazing! 🏆",
  "Perfect! 💫",
  "Excellent! 🎊",
  "Wonderful! 🌈"
];

export const tryAgainMessages = [
  "Try again! You can do it! 💪",
  "Almost there! Give it another try! 🌟",
  "Don't give up! Try once more! 🎯",
  "You're learning! Try again! 📚",
  "Keep going! You've got this! 🚀"
];
