import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ChapterDetail() {
  const { subjectId, chapterId } = useParams();
  const navigate = useNavigate();
  const [chapter, setChapter] = useState(null);
  const [isUnlocked, setIsUnlocked] = useState(true);

  // Mock chapter data - In real app, this would come from an API
  useEffect(() => {
    // Simulating API call
    const getChapterGames = () => {
      const gamesBySubject = {
        math: {
          1: [
            {
              id: "math-game",
              title: "Addition Adventure",
              description: "Practice addition with fun animations",
              icon: "➕",
              route: "/game/math-game?level=1",
              difficulty: "Easy",
              points: 100
            },
            {
              id: "number-roll",
              title: "Number Roll",
              description: "Roll and find numbers from 1-10",
              icon: "🎲",
              route: "/game/number-roll?difficulty=Easy",
              difficulty: "Easy",
              points: 100
            }
          ],
          2: [
            {
              id: "math-game",
              title: "Addition Challenge",
              description: "Practice addition with larger numbers",
              icon: "➕",
              route: "/game/math-game?level=2",
              difficulty: "Medium",
              points: 150
            },
            {
              id: "number-roll",
              title: "Number Explorer",
              description: "Find numbers from 1-50",
              icon: "🎲",
              route: "/game/number-roll?difficulty=Medium",
              difficulty: "Medium",
              points: 150
            }
          ],
          3: [
            {
              id: "math-game",
              title: "Math Master",
              description: "Advanced addition practice",
              icon: "➕",
              route: "/game/math-game?level=3",
              difficulty: "Hard",
              points: 200
            },
            {
              id: "number-roll",
              title: "Number Champion",
              description: "Master numbers from 1-100",
              icon: "🎲",
              route: "/game/number-roll?difficulty=Hard",
              difficulty: "Hard",
              points: 200
            }
          ]
        },
        english: {
          1: [
            {
              id: "alphabet-game",
              title: "Alphabet Explorer",
              description: "Learn letters A-M",
              icon: "📝",
              route: "/game/alphabet-game?level=1",
              difficulty: "Easy",
              points: 100
            }
          ],
          2: [
            {
              id: "alphabet-game",
              title: "Alphabet Master",
              description: "Learn letters N-Z",
              icon: "📝",
              route: "/game/alphabet-game?level=2",
              difficulty: "Medium",
              points: 150
            }
          ],
          3: [
            {
              id: "word-match",
              title: "Word Match",
              description: "Match words with their meanings",
              icon: "🔤",
              route: "/game/word-match?level=3",
              difficulty: "Medium",
              points: 150
            }
          ]
        },
        nepali: {
          1: [
            {
              id: "nepali-alphabet",
              title: "Nepali Letters",
              description: "Learn basic Nepali letters",
              icon: "🔤",
              route: "/game/nepali-alphabet?level=1",
              difficulty: "Easy",
              points: 100
            }
          ],
          2: [
            {
              id: "nepali-alphabet",
              title: "Nepali Words",
              description: "Learn common Nepali words",
              icon: "🔤",
              route: "/game/nepali-alphabet?level=2",
              difficulty: "Medium",
              points: 150
            }
          ],
          3: [
            {
              id: "word-match",
              title: "Nepali Word Match",
              description: "Match Nepali words with meanings",
              icon: "🔤",
              route: "/game/word-match?level=3",
              difficulty: "Medium",
              points: 150
            }
          ]
        },
        science: {
          1: [
            {
              id: "science-quiz",
              title: "Basic Science",
              description: "Learn basic science concepts",
              icon: "🔬",
              route: "/game/science-quiz?level=1",
              difficulty: "Easy",
              points: 100
            }
          ],
          2: [
            {
              id: "science-quiz",
              title: "Science Explorer",
              description: "Explore more science topics",
              icon: "🔬",
              route: "/game/science-quiz?level=2",
              difficulty: "Medium",
              points: 150
            }
          ],
          3: [
            {
              id: "science-quiz",
              title: "Science Master",
              description: "Test your science knowledge",
              icon: "🔬",
              route: "/game/science-quiz?level=3",
              difficulty: "Hard",
              points: 200
            }
          ]
        }
      };

      const chapterTitles = {
        math: {
          1: "Numbers 1-10",
          2: "Addition Basics",
          3: "Numbers 1-100"
        },
        english: {
          1: "Alphabet A-M",
          2: "Alphabet N-Z",
          3: "Basic Words"
        },
        nepali: {
          1: "Nepali Alphabet",
          2: "Basic Words",
          3: "Word Practice"
        },
        science: {
          1: "Basic Concepts",
          2: "Simple Experiments",
          3: "Science Quiz"
        }
      };

      const learningObjectives = {
        math: {
          1: ["Count numbers 1-10", "Recognize number patterns", "Basic addition"],
          2: ["Add numbers up to 20", "Understand number bonds", "Mental math practice"],
          3: ["Count numbers 1-100", "Add larger numbers", "Number patterns"]
        },
        english: {
          1: ["Learn letters A-M", "Recognize letter sounds", "Basic word formation"],
          2: ["Learn letters N-Z", "Practice letter sounds", "Word building"],
          3: ["Learn common words", "Understand word meanings", "Word matching"]
        },
        nepali: {
          1: ["Learn basic Nepali letters", "Practice pronunciation", "Letter recognition"],
          2: ["Learn common Nepali words", "Word formation", "Basic vocabulary"],
          3: ["Practice word matching", "Build vocabulary", "Word meanings"]
        },
        science: {
          1: ["Learn basic science concepts", "Understand simple experiments", "Science vocabulary"],
          2: ["Explore more science topics", "Practice experiments", "Scientific thinking"],
          3: ["Test science knowledge", "Apply concepts", "Problem solving"]
        }
      };

      return {
        id: chapterId,
        title: chapterTitles[subjectId][chapterId],
        description: "Learn and practice through fun games!",
        level: "Beginner",
        games: gamesBySubject[subjectId][chapterId],
        learningObjectives: learningObjectives[subjectId][chapterId]
      };
    };

    setChapter(getChapterGames());
  }, [subjectId, chapterId]);

  if (!chapter) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#A2D2FF] to-[#FFC8DD] p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
              <div className="space-y-4">
                <div className="h-32 bg-gray-200 rounded"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A2D2FF] to-[#FFC8DD] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{chapter.title}</h1>
              <p className="text-lg text-gray-600">{chapter.description}</p>
              <div className="mt-2">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {chapter.level}
                </span>
              </div>
            </div>
            <button
              onClick={() => navigate(-1)}
              className="text-[#A2D2FF] font-semibold hover:underline"
            >
              ← Back to Chapters
            </button>
          </div>

          {!isUnlocked ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔒</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Chapter Locked</h2>
              <p className="text-gray-600">Complete the previous chapter to unlock this one!</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Learning Objectives</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {chapter.learningObjectives.map((objective, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-blue-50 p-4 rounded-xl">
                      <span className="text-blue-500 text-xl">✨</span>
                      <span className="text-gray-700">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Interactive Games</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {chapter.games.map((game) => (
                    <div
                      key={game.id}
                      className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                    >
                      <div className="text-4xl mb-4">{game.icon}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{game.title}</h3>
                      <p className="text-gray-600 mb-4">{game.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {game.difficulty}
                        </span>
                        <span className="text-yellow-500 font-semibold">⭐ {game.points} points</span>
                      </div>
                      <button
                        onClick={() => navigate(game.route)}
                        className="mt-4 w-full bg-[#A2D2FF] text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-lg transition duration-300"
                      >
                        Play Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Progress</h3>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-[#A2D2FF] h-4 rounded-full" style={{ width: '0%' }}></div>
                </div>
                <p className="text-gray-600 mt-2">Complete games to earn points and unlock achievements!</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChapterDetail; 