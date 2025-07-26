# 🌍 Daily Geography Challenge

A fun daily geography quiz game where players must answer questions correctly while avoiding the game's predetermined "trap" answers!

## 🎮 How to Play

1. **Answer Correctly**: Each question has multiple choice answers, and you need to select the correct one
2. **Avoid the Trap**: The game has a predetermined "trap" answer for each question - if you choose this, you lose!
3. **Survive 5 Rounds**: Make it through all 5 questions without hitting a trap to win
4. **Daily Challenge**: New questions are generated every day based on the date

## 🚀 Features

- **Daily Questions**: 5 new geography questions every day
- **Trap Mechanics**: Avoid the game's predetermined answers to survive
- **Progress Tracking**: Visual progress bar and round counter
- **Streak System**: Track your best streak across multiple days
- **Responsive Design**: Works on desktop and mobile devices
- **Local Storage**: Saves your progress and best streak
- **Modern UI**: Clean, beautiful interface with smooth animations

## 🎯 Game Rules

- Each day presents 5 geography questions
- You must answer correctly to advance
- If your answer matches the game's "trap" answer, you lose immediately
- Wrong answers also result in game over
- Survive all 5 rounds to win
- Your best streak is saved and displayed

## 🛠️ Technical Details

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **No Dependencies**: Pure vanilla JavaScript
- **Local Storage**: Saves game state and statistics
- **Responsive**: Mobile-first design
- **Daily Seed**: Questions are deterministically generated based on the date

## 📁 File Structure

```
/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and animations
├── script.js           # Game logic and functionality
└── README.md           # This file
```

## 🚀 Getting Started

1. **Download the files** to your local machine
2. **Open `index.html`** in your web browser
3. **Start playing** the daily geography challenge!

No server setup required - this is a pure client-side application.

## 🎨 Customization

### Adding New Questions

To add more questions, edit the `allQuestions` array in `script.js`:

```javascript
{
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
    correctAnswer: "Correct Answer",
    trapAnswer: "Trap Answer"
}
```

### Styling Changes

Modify `styles.css` to customize the appearance:
- Colors and gradients
- Fonts and typography
- Layout and spacing
- Animations and transitions

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🎯 Game Mechanics

### Question Generation
- Questions are selected based on the current date
- Each day gets 5 unique questions from a pool of 15
- The selection is deterministic (same date = same questions)

### Trap System
- Each question has a "trap" answer that looks correct but is wrong
- Common misconceptions are often used as traps
- Players must think carefully to avoid obvious but incorrect answers

### Scoring
- **Correct Answer**: +1 point, continue to next round
- **Trap Answer**: Game over immediately
- **Wrong Answer**: Game over
- **Win Condition**: Complete all 5 rounds

## 🔮 Future Enhancements

Potential features for future versions:
- More question categories (history, science, etc.)
- Difficulty levels
- Multiplayer mode
- Leaderboards
- Achievement system
- Sound effects and music
- Dark mode toggle

## 📄 License

This project is open source and available under the MIT License.

---

**Enjoy the Daily Geography Challenge!** 🌍✨ 