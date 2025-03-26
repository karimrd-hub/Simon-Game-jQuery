# Simon Game

A web-based implementation of the classic Simon memory game using jQuery.

## Description

This project is a digital recreation of the popular Simon electronic memory game. Players must repeat a growing sequence of colors and sounds, testing and improving their memory skills.

## Technical Stack

- HTML5
- CSS3
- JavaScript (jQuery 3.7.1)

## Project Structure

### HTML (`index.html`)
- Responsive layout with mobile-first design
- Uses the "Press Start 2P" Google Font for retro gaming aesthetics
- Contains four colored buttons (green, red, yellow, blue) arranged in a 2x2 grid
- Includes necessary script references for jQuery and game logic

### CSS (`styles.css`)
- Dark blue background theme (`#011F3F`)
- Retro-style title using "Press Start 2P" font
- Responsive button design with:
  - Distinct colors for each button
  - Border radius for rounded corners
  - Animation styles for button presses
  - Game over effects
- Centered layout with container management

### JavaScript (`index.js`)
Core game functionality including:
- Sequence generation and tracking
- User input handling
- Sound effects
- Animation effects
- Game state management
  - Level tracking
  - Pattern memory
  - Win/lose conditions

## Game Features

- Progressive difficulty levels
- Audio feedback for button presses
- Visual animations for user interaction
- Game over state with restart capability
- Score tracking through levels

## Assets

### Sound Effects
Located in `sounds/` directory:
- blue.mp3
- green.mp3
- red.mp3
- yellow.mp3
- wrong.mp3

## How to Play

1. Press any key to start the game
2. Watch and remember the sequence of colors shown
3. Click the buttons in the same sequence
4. Successfully repeat the pattern to advance to the next level
5. Game continues until a wrong sequence is entered
6. Press any key to restart after game over

## Game Logic

The game follows these core mechanics:
- Generates random color sequences
- Tracks player input
- Compares player sequence with game sequence
- Increases difficulty by adding one step per level
- Provides immediate feedback through animations and sounds

## Development

The project uses jQuery for DOM manipulation and event handling, making the code more concise and cross-browser compatible. The game logic is modular with separate functions for:
- Sequence generation (`nextSequence`)
- Sound playback (`playSound`)
- Button animations (`animatePress`)
- Answer checking (`checkAnswer`)
- Game reset (`startOver`)