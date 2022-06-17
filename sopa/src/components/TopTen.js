import { highScores } from "../defaultScores";
function TopTen() {
    

    let highScores = [
    {"name":"Hector",
     "value":500
    },
    {"name":"Johnny",
     "value":100
    },
    {"name":"Mia",
     "value":1100
    }
    ]

    let sortedScores = highScores.sort((c1, c2) => (c1.value < c2.value) ? 1 : (c1.value > c2.value) ? -1 : 0);
    
    
    return(

        <div className="menuTop10">
            <h3>Top 10 Jogadores:</h3>
            <div>
                {sortedScores.map((data, key) => {
                    return (
                        <div key={key}> {data.name} - {data.value} points</div>
                    );
                })}
            </div>
        </div>
        

    );
    }
  
export default TopTen;