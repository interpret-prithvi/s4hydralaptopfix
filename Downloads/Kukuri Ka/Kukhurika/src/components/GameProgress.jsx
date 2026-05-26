import React from 'react';
import { useNavigate } from 'react-router-dom';

function GameProgress({ gameType, stats, onBack }) {
  const navigate = useNavigate();

  const getGameTitle = () => {
    switch (gameType) {
      case 'math':
        return 'Math Explorer';
      case 'numberRoll':
        return 'Number Roll';
      case 'alphabet':
        return 'Alphabet Explorer';
      case 'nepaliAlphabet':
        return 'Nepali Alphabet Explorer';
      default:
        return 'Game Progress';
    }
  };

  const getMasteredItems = () => {
    if (!stats) return [];
    
    switch (gameType) {
      case 'math':
        return Object.entries(stats.operationsMastered || {})
          .filter(([_, count]) => count >= 10)
          .map(([op]) => op.charAt(0).toUpperCase() + op.slice(1));
      case 'numberRoll':
        return Object.entries(stats.numbersMastered || {})
          .filter(([_, count]) => count >= 5)
          .map(([num]) => parseInt(num))
          .sort((a, b) => a - b);
      case 'alphabet':
        return Object.entries(stats.lettersMastered || {})
          .filter(([_, count]) => count >= 5)
          .map(([letter]) => letter);
      case 'nepaliAlphabet':
        return Object.entries(stats.lettersMastered || {})
          .filter(([_, count]) => count >= 5)
          .map(([letter]) => letter);
      default:
        return [];
    }
  };

  const getLevelProgress = () => {
    if (!stats || !stats.levelProgress) return 0;
    return stats.levelProgress[stats.currentLevel] || 0;
  };

  const getNextLevelXP = () => {
    if (!stats) return 0;
    return stats.levelThreshold - stats.experience;
  };

  const getAccuracy = () => {
    if (!stats || !stats.problemsSolved) return 0;
    return Math.round((stats.correctAnswers / stats.problemsSolved) * 100);
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{getGameTitle()}</h1>
          <div className="mt-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-600">Level {stats?.currentLevel || 1}</span>
              <div className="w-32 h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-[#A2D2FF] rounded-full transition-all duration-300"
                  style={{ width: `${getLevelProgress()}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-500">{getLevelProgress()}%</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold text-gray-800">Total Score: {stats?.totalScore || 0}</p>
          <p className="text-lg text-gray-600">Games Played: {stats?.gamesPlayed || 0}</p>
          <p className="text-lg text-gray-600">Best Streak: {stats?.bestStreak || 0} 🔥</p>
          <p className="text-lg text-gray-600">Experience: {stats?.experience || 0}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-blue-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Progress Overview</h3>
          <div className="space-y-2">
            <p className="text-gray-600">Average Score: {stats?.averageScore || 0}</p>
            <p className="text-gray-600">Last Played: {stats?.lastPlayed ? new Date(stats.lastPlayed).toLocaleDateString() : 'Never'}</p>
            <p className="text-gray-600">Next Level: {getNextLevelXP()} XP needed</p>
            {stats?.problemsSolved && (
              <p className="text-gray-600">Accuracy: {getAccuracy()}%</p>
            )}
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">High Scores</h3>
          <div className="space-y-2">
            <p className="text-gray-600">Easy: {stats?.difficultyHighScores?.Easy || 0}</p>
            <p className="text-gray-600">Medium: {stats?.difficultyHighScores?.Medium || 0}</p>
            <p className="text-gray-600">Hard: {stats?.difficultyHighScores?.Hard || 0}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-2xl">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Mastered Items</h3>
        <div className="flex flex-wrap gap-2">
          {getMasteredItems().map(item => (
            <span key={item} className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
          {getMasteredItems().length === 0 && (
            <p className="text-gray-500">Keep practicing to master items!</p>
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="text-[#A2D2FF] font-semibold hover:underline"
        >
          ← Back to Game
        </button>
        <button
          onClick={() => navigate('/dashboard')}
          className="text-[#A2D2FF] font-semibold hover:underline"
        >
          Back to Dashboard →
        </button>
      </div>
    </div>
  );
}

export default GameProgress; 