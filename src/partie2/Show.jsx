import React from 'react'

const Show = (props) => {
  return (
        /*Q3 */
            <fieldset>
                <legend><h1>Q3 :</h1> </legend>
                <table border={1}>
                    <tr>
                        <th> Nom </th>
                        <th>Prenom</th>
                        <th> Aga</th>
                        <th> Filiere</th>
                    </tr>
                    {
                        props.stg.map(ply => {
                            return (
                                <tr>
                                    <td>{ply.nom} </td>
                                    <td>{ply.prenom}</td>
                                    <td>{ply.age}</td>
                                    <td>{ply.filiere}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </fieldset>

 
  )
}

export default Show