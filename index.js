let DOT = require('jvsdisplayotron');
let dothat = new DOT.DOTHAT();

dothat.lcd.setContrast(45);
dothat.lcd.write('Get To Work!');

dothat.backlight.setLeftToRGB(255,0,0);
dothat.backlight.setMiddleToRGB(0,255,0);
dothat.backlight.setRightToRGB(0,0,255);

dothat.kill(false);
