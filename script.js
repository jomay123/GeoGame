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
        const allQuestions = GAME_DATA.questions;

        // Use seed to select 5 questions for the day
        const selectedQuestions = [];
        const usedIndices = new Set();
        
        for (let i = 0; i < 5; i++) {
            let index;
            do {
                index = (seed + i * 7) % allQuestions.length;
            } while (usedIndices.has(index));
            
            usedIndices.add(index);
            
            // Randomly select a correct answer and a trap answer from the correct answers
            const question = allQuestions[index];
            const correctAnswers = question.correctAnswers;
            
            // Select one correct answer as the "correct" answer for this day
            const correctAnswerIndex = (seed + i * 7) % correctAnswers.length;
            const correctAnswer = correctAnswers[correctAnswerIndex];
            
            // Select a different correct answer as the trap answer
            const trapAnswerIndex = (seed + i * 13) % correctAnswers.length;
            const trapAnswer = correctAnswers[trapAnswerIndex];
            
            selectedQuestions.push({
                question: question.question,
                correctAnswers: correctAnswers,
                correctAnswer: correctAnswer,
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
        
        // Create autocomplete dropdown
        const dropdown = document.createElement('div');
        dropdown.className = 'autocomplete-dropdown';
        dropdown.id = 'autocompleteDropdown';
        
        // Allow Enter key to submit
        textInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleTextAnswer();
            }
        });
        
        // Add input event listener for autocomplete
        textInput.addEventListener('input', (e) => {
            this.showAutocomplete(e.target.value, question.correctAnswers);
        });
        
        // Hide dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!inputContainer.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });
        
        inputContainer.appendChild(textInput);
        inputContainer.appendChild(submitButton);
        inputContainer.appendChild(dropdown);
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
        
        // Check if the user's answer is in the list of correct answers
        const isCorrectAnswer = question.correctAnswers.some(answer => 
            answer.toLowerCase() === userAnswer
        );
        
        // Check if player hit the trap
        if (userAnswer === question.trapAnswer.toLowerCase()) {
            this.showAnswerResult(false, "You hit the trap answer! Game over.", question.correctAnswer, question.trapAnswer);
            return;
        }
        
        // Check if answer is correct
        if (isCorrectAnswer) {
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
        const question = this.todayQuestions[this.currentQuestionIndex];
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';
        
        const resultDiv = document.createElement('div');
        resultDiv.className = 'answer-result';
        
        const messageElement = document.createElement('p');
        messageElement.className = isCorrect ? 'correct-message' : 'incorrect-message';
        messageElement.textContent = message;
        
        const trapAnswerElement = document.createElement('p');
        trapAnswerElement.className = 'trap-answer';
        trapAnswerElement.innerHTML = `<strong>Trap Answer:</strong> ${trapAnswer}`;
        
        const allCorrectAnswersElement = document.createElement('p');
        allCorrectAnswersElement.className = 'all-correct-answers';
        allCorrectAnswersElement.innerHTML = `<strong>All Correct Answers:</strong> ${question.correctAnswers.join(', ')}`;
        
        resultDiv.appendChild(messageElement);
        resultDiv.appendChild(trapAnswerElement);
        resultDiv.appendChild(allCorrectAnswersElement);
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
        }, 3000);
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
    
    showAutocomplete(input, correctAnswers) {
        const dropdown = document.getElementById('autocompleteDropdown');
        const textInput = document.getElementById('countryInput');
        
        if (!input.trim()) {
            dropdown.style.display = 'none';
            return;
        }
        
        // Get all countries from the comprehensive list
        const allCountries = this.getAllCountries();
        
        const filteredCountries = allCountries.filter(country => 
            country.toLowerCase().startsWith(input.toLowerCase())
        ).slice(0, 8); // Limit to 8 suggestions
        
        if (filteredCountries.length === 0) {
            dropdown.style.display = 'none';
            return;
        }
        
        dropdown.innerHTML = '';
        dropdown.style.display = 'block';
        
        filteredCountries.forEach(country => {
            const item = document.createElement('div');
            item.className = 'autocomplete-item';
            item.innerHTML = `${this.getCountryFlag(country)} ${country}`;
            
            item.addEventListener('click', () => {
                textInput.value = country;
                dropdown.style.display = 'none';
                textInput.focus();
            });
            
            dropdown.appendChild(item);
        });
    }
    
    getAllCountries() {
        return GAME_DATA.allCountries;
    }
    
    getCountryFlag(country) {
        return GAME_DATA.countryFlags[country] || '🏳️';
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new GeographyGame();
}); 