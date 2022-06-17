import { highScores } from "../defaultScores";

import "./css/TopTen.css";

function TopTen() {

    const onHighScoreClick = () => {
        let element = document.getElementById("Top10");
        console.log(element);
        element.classList.toggle("hidden");
    }

    let sortedScores = highScores.sort((c1, c2) => (c1.value < c2.value) ? 1 : (c1.value > c2.value) ? -1 : 0);
    
    
    return(
        <div className="menuTop10">
            <button onClick={onHighScoreClick} className="hsButton">Top10</button>
            <div id="Top10" className="hidden">
                <h3>Top 10 Jogadores:</h3>
                <div>
                    {sortedScores.map((data, key) => {
                        return (
                            <div key={key}> {data.name} - {data.value} points</div>
                        );
                    })}
                </div>
            </div>
        </div>
        

    );
    }
  
export default TopTen;