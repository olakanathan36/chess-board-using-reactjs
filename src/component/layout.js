import React from "react";
import './layout.css';

export default function Layout() {
    return (
        <div className="chessboard">
            <table>
                <tbody>
                    <tr>
                        <td className="white"><i className="fa-regular fa-chess-rook team1"></i></td>
                        <td className="black"><i className="fa-regular fa-chess-knight team1"></i></td>
                        <td className="white"><i className="fa-regular fa-chess-bishop team1"></i></td>
                        <td className="black"><i className="fa-regular fa-chess-queen team1"></i></td>
                        <td className="white"><i className="fa-regular fa-chess-king team1"></i></td>
                        <td className="black"><i className="fa-regular fa-chess-bishop team1"></i></td>
                        <td className="white"><i className="fa-regular fa-chess-knight team1"></i></td>
                        <td className="black"><i className="fa-regular fa-chess-rook team1"></i></td>
                    </tr>
                    <tr>
                        <td className="black"><i className="fa-regular fa-chess-pawn team1"></i></td>
                        <td className="white"><i className="fa-regular fa-chess-pawn team1"></i></td>
                        <td className="black"><i className="fa-regular fa-chess-pawn team1"></i></td>
                        <td className="white"><i className="fa-regular fa-chess-pawn team1"></i></td>
                        <td className="black"><i className="fa-regular fa-chess-pawn team1"></i></td>
                        <td className="white"><i className="fa-regular fa-chess-pawn team1"></i></td>
                        <td className="black"><i className="fa-regular fa-chess-pawn team1"></i></td>
                        <td className="white"><i className="fa-regular fa-chess-pawn team1"></i></td>
                    </tr>
                    <tr>
                        <td className="white"></td>
                        <td className="black"></td>
                        <td className="white"></td>
                        <td className="black"></td>
                        <td className="white"></td>
                        <td className="black"></td>
                        <td className="white"></td>
                        <td className="black"></td>
                    </tr>
                    <tr>
                        <td className="black"></td>
                        <td className="white"></td>
                        <td className="black"></td>
                        <td className="white"></td>
                        <td className="black"></td>
                        <td className="white"></td>
                        <td className="black"></td>
                        <td className="white"></td>
                    </tr>
                    <tr>
                        <td className="white"></td>
                        <td className="black"></td>
                        <td className="white"></td>
                        <td className="black"></td>
                        <td className="white"></td>
                        <td className="black"></td>
                        <td className="white"></td>
                        <td className="black"></td>
                    </tr>
                    <tr>
                        <td className="black"></td>
                        <td className="white"></td>
                        <td className="black"></td>
                        <td className="white"></td>
                        <td className="black"></td>
                        <td className="white"></td>
                        <td className="black"></td>
                        <td className="white"></td>
                    </tr>
                    <tr>
                        <td className="white"><i className="fa-solid fa-chess-pawn team2"></i></td>
                        <td className="black"><i className="fa-solid fa-chess-pawn team2"></i></td>
                        <td className="white"><i className="fa-solid fa-chess-pawn team2"></i></td>
                        <td className="black"><i className="fa-solid fa-chess-pawn team2"></i></td>
                        <td className="white"><i className="fa-solid fa-chess-pawn team2"></i></td>
                        <td className="black"><i className="fa-solid fa-chess-pawn team2"></i></td>
                        <td className="white"><i className="fa-solid fa-chess-pawn team2"></i></td>
                        <td className="black"><i className="fa-solid fa-chess-pawn team2"></i></td>
                    </tr>
                    <tr>
                        <td className="black"><i className="fa-solid fa-chess-rook team2"></i></td>
                        <td className="white"><i className="fa-solid fa-chess-knight team2"></i></td>
                        <td className="black"><i className="fa-solid fa-chess-bishop team2"></i></td>
                        <td className="white"><i className="fa-solid fa-chess-king team2"></i></td>
                        <td className="black"><i className="fa-solid fa-chess-queen team2"></i></td>
                        <td className="white"><i className="fa-solid fa-chess-bishop team2"></i></td>
                        <td className="black"><i className="fa-solid fa-chess-knight team2"></i></td>
                        <td className="white"><i className="fa-solid fa-chess-rook team2"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
