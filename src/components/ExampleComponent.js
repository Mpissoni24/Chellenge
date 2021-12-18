/* eslint-disable */
import React from "react";
import Chess from "~/helpers/chess";

export const ExampleComponent = (props) => {
  const [reactBoard, setReactBoard] = React.useState(Chess.board);
  const [solution, setSolution] = React.useState("move")


  React.useEffect(() => {
    setTimeout(() => {
      setReactBoard(Chess.handleMove(reactBoard, 0, 0));
    }, 200);
  }, []);

  /* Logica para el movimiento del caballo */
  /* handleMove se utiliza para modificar el arreglo */
  const handleMoveChess = (e) => {
    if (e.target.id) {
      const index = e.target.id.split(",");
      const row = Number(index[0]);
      const column = Number(index[1]);
      setReactBoard(Chess.handleMove(reactBoard, column, row));
    }else{
      alert("Click on the glowing box ")
    }
  };

  /* Quitar o habilitar posibles movimientos */
  const handleSolution = (e) => {
    e.preventDefault()
    if(solution === "move"){
      setSolution("none")
    }else{
      setSolution("move")
    }
  }

  return (
    <div /* onClick={handleMove} */ className="ExampleComponent">
      <div className="title">
      <img className="horseIcon" src="images/imgbin_chess-piece-knight-bishop-rook-png.png" />
      <h1>Chess Master</h1>
      <button onClick={handleSolution}> {solution === "move"?"Remove Solutions":"Enable Solutions"} </button>
      </div>
      <div className="contentRow">
        {reactBoard.map((row, ri) => {
        return (
          <div className="row">
            {row.map((rColumn, ci) => {
              if (rColumn === 1) {
                return (
                  <div onClick={handleMoveChess} className="rColumn">
                    <img src="images/piece.png" />
                  </div>
                );
              } else if (rColumn === 2) {
                return (
                  <div
                    id={`${ri},${ci}`}
                    onClick={handleMoveChess}
                    className={`rColumn ${solution}`}
                  ></div>
                );
              }
              return <div onClick={handleMoveChess} className="rColumn" />;
            })}
          </div>
        );
      })}
      </div>
      
    </div>
  );
};
