import * as React from 'react';



function GameReady() {
  function onClickEvent(event){
    if (Tetris.currentInstance) {
    Tetris.currentInstance.mouseClicked(event.layerX, event.layerY);
    }
    }
 return (
        <canvas className="gameCanvas" id="gameCanvas" width="600" height="500" onClick='onClickEvent(event)'>Your browser does not natively support Html5, or the Canvas Tag. Using this browser is slowing the progress of the web. Please get a modern browser, such as Google Chrome or Mozzila FireFox</canvas>

  );
}

//<canvas className="gameCanvas" id="gameCanvas" width="600" height="500" onClick='onClickEvent(event)'>Your browser does not natively support Html5, or the Canvas Tag. Using this browser is slowing the progress of the web. Please get a modern browser, such as Google Chrome or Mozzila FireFox</canvas>


export default GameReady;
