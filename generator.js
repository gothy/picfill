var gm = require('gm');

module.exports = {
  generate: function(width, height, bgcolor, textcolor, text, cb) {
    if (!text) {
      text = width + 'x' + height;
    }
    // creating an image
    gm(width, height, bgcolor)
    .options({imageMagick: true})
    .fill(textcolor)
    .fontSize(Math.min( Math.max(width/text.length*1.65, 10), Math.max(height/2, 10), 50 ))
    .antialias(true)
    .drawText(0, 0, text, 'center')
    .toBuffer('PNG', cb);
  }
}