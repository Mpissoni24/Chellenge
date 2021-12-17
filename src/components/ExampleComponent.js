/* eslint-disable */
import React from "react";
import Chess from "~/helpers/chess";

export const ExampleComponent = (props) => {
  const [reactBoard, setReactBoard] = React.useState(Chess.board);

  React.useEffect(() => {
    setTimeout(() => {
      setReactBoard(Chess.handleMove(reactBoard, 0, 0));
    }, 200);
  }, []);

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

  return (
    <div /* onClick={handleMove} */ className="ExampleComponent">
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
                    className="rColumn move"
                  ></div>
                );
              }
              return <div onClick={handleMoveChess} className="rColumn" />;
            })}
          </div>
        );
      })}
    </div>
  );
};
