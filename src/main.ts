import { Game } from './game/Game';
import './styles/main.css';

/**
 * Main entry point
 * 主入口点
 */
class App {
  private game: Game;

  constructor() {
    this.game = new Game();
    this.animate();
  }

  private animate = (): void => {
    requestAnimationFrame(this.animate);

    this.game.update();
    this.game.render();
  };
}

// Start the application when DOM is ready
// 当 DOM 准备好时启动应用
window.addEventListener('DOMContentLoaded', () => {
  new App();
});
