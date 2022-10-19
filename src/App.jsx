import * as React from 'react';
import GameReady from './components/gameReady';
//import { styled } from '@mui/material/styles';
//import { Grid, Box } from '@mui/material';
//import { height } from '@mui/system';

/*
import  './cookie';
import './gameControls';
import './jawsjs'
import {Block} from './Block';
import './Shapes';
import './WallKicks';
import {ControlGroup} from './ControlGroup';
import './Background';
import {RandomBag} from './RandomBag';
import {PreviewGroup} from './PreviewGroup';
import {ScoreTracker} from './ScoreTracker';
import {TtyBlock} from './TtyBlock';
import {Game} from './Game';
import './Game_Logic';
import {Button} from './Button';

import {Tetris, TetrisControl, redirectToScore, sendScoreRequest} from './tetris.js';

*/

//import * as cookie from './scripts/cookie.jsx'

function App() {
  return (
    <div style={{width:'100vw', height:'100vh'}}>
      <table border="0" className='mainTable'>
       <tbody>
        <tr>
          <td className='menuCell'>
            <div className='menu'>
              <br /><br />

              <a href='' className='bareLink'>
                <div className='menuItem selectedMenuItem'>Play Tetris</div>
              </a>

              <br />

              <a href='' className="bareLink">
                <div className="menuItem">Keyboard Controls Options</div>
              </a>

              <br />

              <a href='' className="bareLink">
                <div className="menuItem">About</div>
              </a>

              <br />

              <div className="instructions">
                <b> &gt; How to play </b>
                <p>Use the keyboard or touch controls to rotate and move the blocks as they fall</p>
                <p>Place the blocks to form horizontal lines, which will be removed and make all the blocks above fall down. If the blocks reach the top of the screen, the game is over!</p>
                <p>Clear multiple lines at a time, or clear lines in consective moves to earn more points.</p>
              </div>
            </div>
          </td>

          <td className='contentCell'>
            <div className='gamePanel'>
              <div className='gameElements'>
                <div className='ttyOutput scoreOutput' id="scoreDiv"></div>
                <div className='ttyOutput linesOutput' id="linesDiv"></div>
                <div className="ttyOutput levelOutput" id="levelDiv"></div>
                <div className="ttyOutput tickerOutput" id="tickerDiv"></div>

                
                <div className="gameEndOutputHidden" id="gameEndContainer">
                  <div style={{padding: 5 + 'px'}} id="gameEndDiv"></div>
                </div>

                <GameReady />
              </div>

              <div className='controlsTitle'>
                <br />
                <b>Controls:</b>
                <br />

                <table border="1" cellPadding="3" className="controlsTable">
                 <tbody>
                  <tr className='controlsTableHeader'>
                    <td width="80">Move Block</td>
                    <td width="80">Soft Drop</td>
                    <td width="80">Rotate</td>
                    <td width="80">Save Piece</td>
                    <td width="80">Hard Drop</td>
                    <td width="80">Pause</td>
                  </tr>

                  <tr>
                    <td><span id="shiftLeft">Left</span>, <span id="shiftRight">Right</span></td>
                    <td><span id="softDrop">Down</span></td>
                    <td><span id="rotateLeft">Z</span>, <span id="rotateRight">X, Up</span></td>
                    <td><span id="swap">C, Shift</span></td>
                    <td><span id="hardDrop">Space</span></td>
                    <td>Esc</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <br/>
                <a href='' className="bareLink">
                  <div className="menuItem">Controls Options</div>
                </a>
            </div>
          </td>

        </tr>
       </tbody> 
      </table>
    </div>
  );
}

export default App;
