import React from 'react'

const Partie_1 = () => {
    const Buteurs = [
        {
            "id": 1,
            "player": {
                "player_id": 19779, "player_name": "Karim Benzema"
            },
            "team": "Real madrid",
            "goals": { "home": 7, "away": 7 }
        },
        {
            "id": 2,
            "player": {
                "player_id": 4934, "player_name": "Hakim ziyach"
            },
            "team": "Chelsea",
            "goals": { "home": 9, "away": 4 }
        },
        {
            "id": 3,
            "player": {
                "player_id": 34, "player_name": "Luka Modric"
            },
            "team": "Real madrid",
            "goals": { "home": 15, "away": 3 }
        }

    ]


    const Buteurs2 = [...Buteurs,{
        "id": 34,
        "player": {
            "player_id": 154, "player_name": "Halland"
        },
        "team": "Manchester City",
        "goals": { "home": 9, "away": 9 }
    }] //Q5



    let player = Buteurs.find(ply => ply.player.player_name == "Karim Benzema")//Q1
    let players_plus_3buts = Buteurs.filter(ply => ply.goals.away > 3)//Q2
    let plus_buts_interieur = Buteurs.map(ply => ply.goals.home)//Q3 , Q4
   
    return (
        <>
            <h1><li>Partie N1</li></h1>
            {/*Q1 */
                <fieldset>
                    <legend><h1>Q1 :</h1> </legend>
                    <h3>joueurs  Karim Benzema : {player.goals.home + player.goals.away} total buts</h3>
                </fieldset>
            }
            {
                /*Q2 */
                <>
                    <fieldset>
                        <legend><h1>Q2 :</h1> </legend>
                        <h1>
                            joueurs qui ont marqué plus que 3 buts à l’extérieur "away" : {players_plus_3buts.length} J
                        </h1>
                        <table border={1}>
                            <tr>
                                <th> Name </th>
                                <th> away goals</th>
                                <th>home goals</th>
                                <th>total goals</th>
                            </tr>
                            {
                                players_plus_3buts.map(ply => {
                                    return (
                                        <tr>
                                            <td>{ply.player.player_name} </td>
                                            <td>{ply.goals.away}</td>
                                            <td>{ply.goals.home}</td>
                                            <td>{ply.goals.home + ply.goals.away}</td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </fieldset>
                </>

            }
            {/*Q3 */
                <fieldset>
                    <legend><h1>Q3 :</h1> </legend>
                    <h3>plus grand buts a l'interieur : {Math.max(...plus_buts_interieur)} buts </h3>
                </fieldset>
            }
            {/*Q4 */
                <fieldset>
                    <legend><h1>Q4 :</h1> </legend>
                    <h3>la somme des buts a l'interieur : {plus_buts_interieur.reduce((buts,iv)=>buts+iv,0)} buts </h3>
                </fieldset>
            }

{
                /*Q5 */
                <>
                    <fieldset>
                        <legend><h1>Q5 :</h1> </legend>
                        <table border={1}>
                            <tr>
                                <th> Name </th>
                                <th> away goals</th>
                                <th>home goals</th>
                                <th>total goals</th>
                            </tr>
                            {
                                Buteurs2.map(ply => {
                                    return (
                                        <tr>
                                            <td>{ply.player.player_name} </td>
                                            <td>{ply.goals.away}</td>
                                            <td>{ply.goals.home}</td>
                                            <td>{ply.goals.home + ply.goals.away}</td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </fieldset>
                </>

            }
        </>
    )
}

export default Partie_1