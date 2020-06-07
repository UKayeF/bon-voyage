import { buttonLayout } from './buttonMap';

export const handleButtonPress = (buttons, callback) => {
  if (buttons.some(x => x.value || x.pressed)) {
    const pressedButtons = buttonLayout.xbox
      .map((name, index) => [name, buttons[index]])
      .filter(([_, button]) => button.value || button.pressed)
      .map(([name, value]) => ({ name, value }))
    pressedButtons.forEach(callback)
  }
}
