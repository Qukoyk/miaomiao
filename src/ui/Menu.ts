/**
 * Menu - 处理 UI 菜单交互
 */
export class Menu {
  private menuElement: HTMLElement;
  private hiderButton: HTMLElement;
  private ghostButton: HTMLElement;

  constructor() {
    this.menuElement = document.getElementById('menu')!;
    this.hiderButton = document.getElementById('btn-hider')!;
    this.ghostButton = document.getElementById('btn-ghost')!;

    this.setupHoverEffects();
  }

  private setupHoverEffects(): void {
    [this.hiderButton, this.ghostButton].forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.05)';
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
      });
    });
  }

  public show(): void {
    this.menuElement.classList.remove('hidden');
  }

  public hide(): void {
    this.menuElement.classList.add('hidden');
  }

  public onHiderSelected(callback: () => void): void {
    this.hiderButton.addEventListener('click', callback);
  }

  public onGhostSelected(callback: () => void): void {
    this.ghostButton.addEventListener('click', callback);
  }
}
