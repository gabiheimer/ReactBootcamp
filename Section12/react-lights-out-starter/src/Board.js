import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightsOn: 0.5
  }

  constructor(props) {
    super(props);

    this.state = {
      hasWon: false,
      board: this.createBoard()
    }

    this.createBoard = this.createBoard.bind(this);
    this.flipCellsAround = this.flipCellsAround.bind(this);
    this.restart = this.restart.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];

    for(var i = 0; i < this.props.nrows; i++){
      board.push([]);
      for(var j = 0; j < this.props.ncols; j++){
        board[i].push(Math.random() < this.props.chanceLightsOn);
      }
    }

    return board;
  }

  restart(){
    this.setState({
      hasWon: false,
      board: this.createBoard()
    });
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board.slice();
    let [row, col] = coord.split("-").map(Number);


    function flipCell(row, col) {
      // if this coord is actually on board, flip it

      if (row >= 0 && row < nrows && col >= 0 && col < ncols) {
        board[row][col] = !board[row][col];
      }
    }

    let cells = [[0,0],[1,0],[-1,0],[0,1],[0,-1]];
    
    cells.map(cell => flipCell(row+cell[0], col+cell[1]));

    let won = this.updateWin(board);

    this.setState({board: board, hasWon: won});
  }

  updateWin(board){
    let {ncols, nrows} = this.props;

    for(var i = 0; i < nrows; i++){
      for(var j = 0; j < ncols; j++){
        if(board[i][j]) return false;
      }
    }

    return true;
  }

  detectCorners(coord){

  }


  /** Render game board or winning message. */

  render() {
    let {board} = this.state;

    let table = 
      <tbody className='Board-table'>
        {board.map((row, x) => (
          <tr key={x}>{row.map((data, y) => {
            let corner = "";
            if(x === 0 && y === this.props.ncols-1) corner='top-right';
            else if(x === 0 && y === 0) corner='top-left';
            else if(x === this.props.nrows-1 && y === 0) corner = 'bottom-left';
            else if(x === this.props.nrows-1 && y === this.props.ncols-1) corner = 'bottom-right';
            else if(x === this.props.nrows-1) corner="bottom"
            else if(y === this.props.ncols-1) corner="right"
            return <Cell corner={corner} flipCellsAroundMe={this.flipCellsAround} coord={`${x}-${y}`} key={`${x}-${y}`} isLit={data} />
          })}</tr>
        ))}
      </tbody>

    return(
      <div className='Board'>
        {!this.state.hasWon && <h1>L<span className='b1'>i</span>ghts<span className="purple">O<span className='b2'>u</span>t</span></h1>}
        {this.state.hasWon
        ? <div className='Board-won'>
            <h1><span className='b1'>Y</span>OU<span className='purple'>W<span className='b2'>I</span>N</span></h1>
            {this.state.hasWon && <button onClick={this.restart}>PLAY AGAIN</button>}
          </div>
        : <table>{table}</table>}
      </div>
    )
  }
}


export default Board;
