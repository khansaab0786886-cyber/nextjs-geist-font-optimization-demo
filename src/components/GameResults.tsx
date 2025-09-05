'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GameMode } from '@/types/game';

interface GameResultsProps {
  score: number;
  totalQuestions: number;
  mode: GameMode;
  onPlayAgain: () => void;
  onBackToMenu: () => void;
}

export default function GameResults({ 
  score, 
  totalQuestions, 
  mode, 
  onPlayAgain, 
  onBackToMenu 
}: GameResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getResultMessage = () => {
    if (percentage === 100) return "Perfect! You're a superstar! 🌟";
    if (percentage >= 90) return "Amazing! Almost perfect! 🏆";
    if (percentage >= 80) return "Great job! You're doing awesome! 🎉";
    if (percentage >= 70) return "Well done! Keep practicing! 👏";
    if (percentage >= 60) return "Good effort! You're learning! 📚";
    return "Nice try! Practice makes perfect! 💪";
  };

  const getResultEmoji = () => {
    if (percentage === 100) return "🏆";
    if (percentage >= 90) return "🌟";
    if (percentage >= 80) return "🎉";
    if (percentage >= 70) return "👏";
    if (percentage >= 60) return "📚";
    return "💪";
  };

  const getResultColor = () => {
    if (percentage >= 90) return "from-yellow-400 to-orange-400";
    if (percentage >= 80) return "from-green-400 to-blue-400";
    if (percentage >= 70) return "from-blue-400 to-purple-400";
    if (percentage >= 60) return "from-purple-400 to-pink-400";
    return "from-pink-400 to-red-400";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white/95 backdrop-blur-sm shadow-2xl border-0">
        <CardHeader className="text-center pb-6">
          <div className="text-8xl mb-4 animate-bounce">
            {getResultEmoji()}
          </div>
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Game Complete!
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-8">
          {/* Score Display */}
          <div className={`bg-gradient-to-r ${getResultColor()} rounded-2xl p-8 text-center text-white`}>
            <h2 className="text-3xl font-bold mb-4">
              {getResultMessage()}
            </h2>
            <div className="text-6xl font-bold mb-2">
              {score}/{totalQuestions}
            </div>
            <div className="text-2xl font-semibold">
              {percentage}% Correct!
            </div>
          </div>

          {/* Game Mode Info */}
          <div className="text-center">
            <div className="bg-gray-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {mode === 'counting' ? '🔢 Counting Game' : '🔤 Alphabet Game'}
              </h3>
              <p className="text-gray-600 text-lg">
                {mode === 'counting' 
                  ? 'You practiced counting objects!' 
                  : 'You practiced matching letters with words!'
                }
              </p>
            </div>
          </div>

          {/* Encouragement Messages */}
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-blue-100 rounded-xl p-4">
              <div className="text-3xl mb-2">🎯</div>
              <p className="text-blue-800 font-semibold">
                Keep Learning!
              </p>
            </div>
            <div className="bg-green-100 rounded-xl p-4">
              <div className="text-3xl mb-2">🚀</div>
              <p className="text-green-800 font-semibold">
                You're Improving!
              </p>
            </div>
            <div className="bg-purple-100 rounded-xl p-4">
              <div className="text-3xl mb-2">⭐</div>
              <p className="text-purple-800 font-semibold">
                Have Fun!
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-2 gap-4">
            <Button 
              onClick={onPlayAgain}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white text-xl py-6 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Play Again! 🔄
            </Button>
            <Button 
              onClick={onBackToMenu}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-xl py-6 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Main Menu 🏠
            </Button>
          </div>

          {/* Fun Facts */}
          <div className="text-center">
            <div className="bg-yellow-100 border-2 border-yellow-300 rounded-xl p-4">
              <h4 className="text-lg font-bold text-yellow-800 mb-2">
                🌟 Did you know? 🌟
              </h4>
              <p className="text-yellow-700">
                {mode === 'counting' 
                  ? 'Counting helps develop math skills and logical thinking!'
                  : 'Learning letters is the first step to reading amazing stories!'
                }
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
