class GeographyGame {
    constructor() {
        this.currentRound = 1;
        this.score = 0;
        this.streak = 0;
        this.bestStreak = this.loadBestStreak();
        this.gameState = 'welcome';
        this.todayQuestions = [];
        this.currentQuestionIndex = 0;
        
        this.initializeGame();
        this.setupEventListeners();
    }

    initializeGame() {
        this.updateDateDisplay();
        this.generateDailyQuestions();
        this.loadGameState();
    }

    updateDateDisplay() {
        const today = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        document.getElementById('dateDisplay').textContent = today.toLocaleDateString('en-US', options);
    }

    generateDailyQuestions() {
        // Generate questions based on today's date for consistency
        const today = new Date();
        const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
        
        this.todayQuestions = this.getQuestionsForDay(seed);
    }

    getQuestionsForDay(seed) {
        const allQuestions = [
            {
                question: "Which country is home to the kangaroo?",
                correctAnswer: "Australia",
                possibleAnswers: ["Australia", "New Zealand", "Fiji", "Papua New Guinea", "Indonesia"]
            },
            {
                question: "Which country has the largest population in the world?",
                correctAnswer: "China",
                possibleAnswers: ["China", "India", "United States", "Indonesia", "Pakistan"]
            },
            {
                question: "Which country is known for the pyramids?",
                correctAnswer: "Egypt",
                possibleAnswers: ["Egypt", "Sudan", "Libya", "Morocco", "Tunisia"]
            },
            {
                question: "Which country is home to the Amazon rainforest?",
                correctAnswer: "Brazil",
                possibleAnswers: ["Brazil", "Peru", "Colombia", "Venezuela", "Ecuador"]
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                correctAnswer: "Japan",
                possibleAnswers: ["Japan", "China", "South Korea", "North Korea", "Taiwan"]
            },
            {
                question: "Which country has the largest land area in the world?",
                correctAnswer: "Russia",
                possibleAnswers: ["Russia", "Canada", "China", "United States", "Brazil"]
            },
            {
                question: "Which country is home to the kangaroo?",
                correctAnswer: "Australia",
                possibleAnswers: ["Australia", "New Zealand", "Fiji", "Papua New Guinea", "Indonesia"]
            },
            {
                question: "Which country is known for the Great Wall?",
                correctAnswer: "China",
                possibleAnswers: ["China", "Mongolia", "North Korea", "South Korea", "Japan"]
            },
            {
                question: "Which country is home to the Taj Mahal?",
                correctAnswer: "India",
                possibleAnswers: ["India", "Pakistan", "Bangladesh", "Nepal", "Sri Lanka"]
            },
            {
                question: "Which country is known for the Colosseum?",
                correctAnswer: "Italy",
                possibleAnswers: ["Italy", "Greece", "Spain", "France", "Portugal"]
            },
            {
                question: "Which country is home to Machu Picchu?",
                correctAnswer: "Peru",
                possibleAnswers: ["Peru", "Chile", "Bolivia", "Ecuador", "Colombia"]
            },
            {
                question: "Which country is known for the Eiffel Tower?",
                correctAnswer: "France",
                possibleAnswers: ["France", "Germany", "Belgium", "Switzerland", "Luxembourg"]
            },
            {
                question: "Which country is home to the Great Barrier Reef?",
                correctAnswer: "Australia",
                possibleAnswers: ["Australia", "New Zealand", "Fiji", "Papua New Guinea", "Indonesia"]
            },
            {
                question: "Which country is known for the Kremlin?",
                correctAnswer: "Russia",
                possibleAnswers: ["Russia", "Ukraine", "Belarus", "Kazakhstan", "Poland"]
            },
            {
                question: "Which country is home to the Serengeti?",
                correctAnswer: "Tanzania",
                possibleAnswers: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi"]
            }
        ];

        // Use seed to select 5 questions for the day
        const selectedQuestions = [];
        const usedIndices = new Set();
        
        for (let i = 0; i < 5; i++) {
            let index;
            do {
                index = (seed + i * 7) % allQuestions.length;
            } while (usedIndices.has(index));
            
            usedIndices.add(index);
            
            // Randomly select a trap answer from possible answers (excluding correct answer)
            const question = allQuestions[index];
            const possibleTrapAnswers = question.possibleAnswers.filter(answer => answer !== question.correctAnswer);
            const randomTrapIndex = (seed + i * 13) % possibleTrapAnswers.length;
            const trapAnswer = possibleTrapAnswers[randomTrapIndex];
            
            selectedQuestions.push({
                question: question.question,
                correctAnswer: question.correctAnswer,
                trapAnswer: trapAnswer
            });
        }

        return selectedQuestions;
    }

    setupEventListeners() {
        document.getElementById('startBtn').addEventListener('click', () => {
            this.startGame();
        });

        document.getElementById('playAgainBtn').addEventListener('click', () => {
            this.resetGame();
        });
    }

    startGame() {
        this.gameState = 'playing';
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.streak = 0;
        
        this.showGameScreen();
        this.displayQuestion();
        this.saveGameState();
    }

    showGameScreen() {
        document.getElementById('welcomeScreen').classList.add('hidden');
        document.getElementById('gameScreen').classList.remove('hidden');
        document.getElementById('resultScreen').classList.add('hidden');
    }

    showResultScreen() {
        document.getElementById('welcomeScreen').classList.add('hidden');
        document.getElementById('gameScreen').classList.add('hidden');
        document.getElementById('resultScreen').classList.remove('hidden');
    }

    displayQuestion() {
        const question = this.todayQuestions[this.currentQuestionIndex];
        
        document.getElementById('questionText').textContent = question.question;
        document.getElementById('currentRound').textContent = this.currentRound;
        document.getElementById('streakCount').textContent = this.streak;
        
        // Update progress bar
        const progressPercentage = ((this.currentRound - 1) / 5) * 100;
        document.getElementById('progressFill').style.width = `${progressPercentage}%`;
        
        // Create text input for country answer
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';
        
        const inputContainer = document.createElement('div');
        inputContainer.className = 'input-container';
        
        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.className = 'country-input';
        textInput.placeholder = 'Enter a country name...';
        textInput.id = 'countryInput';
        
        const submitButton = document.createElement('button');
        submitButton.className = 'submit-btn';
        submitButton.textContent = 'Submit Answer';
        submitButton.addEventListener('click', () => this.handleTextAnswer());
        
        // Allow Enter key to submit
        textInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleTextAnswer();
            }
        });
        
        inputContainer.appendChild(textInput);
        inputContainer.appendChild(submitButton);
        optionsContainer.appendChild(inputContainer);
        
        // Focus on input
        setTimeout(() => textInput.focus(), 100);
    }

    handleTextAnswer() {
        const question = this.todayQuestions[this.currentQuestionIndex];
        const textInput = document.getElementById('countryInput');
        const submitButton = document.querySelector('.submit-btn');
        const userAnswer = textInput.value.trim().toLowerCase();
        
        if (!userAnswer) {
            return; // Don't submit empty answers
        }
        
        // Disable input and button
        textInput.disabled = true;
        submitButton.disabled = true;
        
        // Check if player hit the trap
        if (userAnswer === question.trapAnswer.toLowerCase()) {
            this.showAnswerResult(false, "You hit the trap answer! Game over.", question.correctAnswer, question.trapAnswer);
            return;
        }
        
        // Check if answer is correct
        if (userAnswer === question.correctAnswer.toLowerCase()) {
            this.score++;
            this.streak++;
            this.showAnswerResult(true, "Correct! Well done!", question.correctAnswer, question.trapAnswer);
        } else {
            this.streak = 0;
            this.showAnswerResult(false, "Wrong answer! Game over.", question.correctAnswer, question.trapAnswer);
        }
        
        this.saveGameState();
    }
    
    showAnswerResult(isCorrect, message, correctAnswer, trapAnswer) {
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';
        
        const resultDiv = document.createElement('div');
        resultDiv.className = 'answer-result';
        
        const messageElement = document.createElement('p');
        messageElement.className = isCorrect ? 'correct-message' : 'incorrect-message';
        messageElement.textContent = message;
        
        const correctAnswerElement = document.createElement('p');
        correctAnswerElement.className = 'correct-answer';
        correctAnswerElement.innerHTML = `<strong>Correct Answer:</strong> ${correctAnswer}`;
        
        const trapAnswerElement = document.createElement('p');
        trapAnswerElement.className = 'trap-answer';
        trapAnswerElement.innerHTML = `<strong>Trap Answer:</strong> ${trapAnswer}`;
        
        resultDiv.appendChild(messageElement);
        resultDiv.appendChild(correctAnswerElement);
        resultDiv.appendChild(trapAnswerElement);
        optionsContainer.appendChild(resultDiv);
        
        // Move to next question or end game
        setTimeout(() => {
            if (isCorrect) {
                this.currentQuestionIndex++;
                this.currentRound++;
                
                if (this.currentQuestionIndex >= 5) {
                    this.gameOver(true, "Congratulations! You survived all 5 rounds!");
                } else {
                    this.displayQuestion();
                }
            } else {
                this.gameOver(false, message);
            }
        }, 2000);
    }

    gameOver(won, message) {
        if (won && this.streak > this.bestStreak) {
            this.bestStreak = this.streak;
            this.saveBestStreak();
        }
        
        document.getElementById('resultTitle').textContent = won ? "🎉 Victory!" : "💥 Game Over";
        document.getElementById('resultMessage').textContent = message;
        document.getElementById('todayScore').textContent = this.score;
        document.getElementById('bestStreak').textContent = this.bestStreak;
        
        setTimeout(() => {
            this.showResultScreen();
        }, 2000);
    }

    resetGame() {
        this.currentRound = 1;
        this.score = 0;
        this.streak = 0;
        this.currentQuestionIndex = 0;
        this.gameState = 'welcome';
        
        this.clearGameState();
        this.showWelcomeScreen();
    }

    showWelcomeScreen() {
        document.getElementById('welcomeScreen').classList.remove('hidden');
        document.getElementById('gameScreen').classList.add('hidden');
        document.getElementById('resultScreen').classList.add('hidden');
    }



    saveGameState() {
        const gameData = {
            currentRound: this.currentRound,
            score: this.score,
            streak: this.streak,
            currentQuestionIndex: this.currentQuestionIndex,
            gameState: this.gameState,
            date: new Date().toDateString()
        };
        localStorage.setItem('geographyGameState', JSON.stringify(gameData));
    }

    loadGameState() {
        const saved = localStorage.getItem('geographyGameState');
        if (saved) {
            const gameData = JSON.parse(saved);
            const today = new Date().toDateString();
            
            // Only load if it's from today
            if (gameData.date === today) {
                this.currentRound = gameData.currentRound;
                this.score = gameData.score;
                this.streak = gameData.streak;
                this.currentQuestionIndex = gameData.currentQuestionIndex;
                this.gameState = gameData.gameState;
                
                if (this.gameState === 'playing') {
                    this.showGameScreen();
                    this.displayQuestion();
                }
            } else {
                this.clearGameState();
            }
        }
    }

    clearGameState() {
        localStorage.removeItem('geographyGameState');
    }

    saveBestStreak() {
        localStorage.setItem('geographyGameBestStreak', this.bestStreak.toString());
    }

    loadBestStreak() {
        const saved = localStorage.getItem('geographyGameBestStreak');
        return saved ? parseInt(saved) : 0;
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new GeographyGame();
}); 