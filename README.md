# Tic-Tac-Toe Game

A classic tic-tac-toe game built with React featuring interactive gameplay, move history, and time travel functionality.

## 🎮 Features

- **Interactive Gameplay**: Click on squares to make moves
- **Turn-based Play**: Alternates between X and O players
- **Winner Detection**: Automatically detects and displays the winner
- **Move History**: View and navigate through all previous moves
- **Time Travel**: Jump back to any previous game state
- **Game Reset**: Start a new game at any time

## 🚀 Live Demo

Play the game live: [Demo Link] (Add your deployment URL here)

## 🛠️ Technologies Used

- **React 19.2.0**: Frontend framework with hooks (useState)
- **JavaScript (ES6+)**: Modern JavaScript features
- **CSS3**: Styling and layout
- **HTML5**: Semantic markup

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/SebastianAMartinez/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to play the game

## 🎯 How to Play

1. The game starts with player X
2. Click on any empty square to make your move
3. Players alternate turns (X and O)
4. The first player to get 3 marks in a row (horizontally, vertically, or diagonally) wins
5. Use the move history on the right to jump back to any previous game state
6. Click "Go to game start" to reset the board

## 🏗️ Project Structure

```
tic-tac-toe/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js             # Main game components and logic
│   ├── index.js           # React app entry point
│   └── styles.css         # Game styling
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## 🧩 Components

- **Game**: Main component that manages game state and history
- **Board**: Renders the 3x3 grid and handles square clicks
- **Square**: Individual clickable square component

## 🔧 Available Scripts

- `npm start` - Runs the development server
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App (irreversible)

## 🎨 Customization

You can customize the game by modifying:

- **Styling**: Edit `src/styles.css` to change colors, fonts, and layout
- **Board Size**: Modify the grid logic in `App.js` (currently 3x3)
- **Winning Conditions**: Update the `calculateWinner` function for different win patterns

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Sebastian Martinez**

- GitHub: [@SebastianAMartinez](https://github.com/SebastianAMartinez)
