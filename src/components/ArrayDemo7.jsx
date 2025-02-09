import React from 'react';

const ArrayDemo7 = () => {
    var cricketPlayers = [
        {
            id: 1,
            name: "Virat Kohli",
            runs: 27000,
            wicket: "-",

            age: 36,
            role: "Batsman",
        },
        {
            id: 2,
            name: "MS Dhoni",
            runs: 25000,
            wicket: "-",

            age: 42,
            role: "Batsman",
        },
        {
            id: 3,
            name: "Rohit Sharma",
            runs: 24000,
            wicket: "-",

            age: 37,
            role: "Batsman",
        },
        {
            id: 4,
            name: "KL Rahul",
            runs: 22000,
            wicket: "-",

            age: 31,
            role: "Batsman",
        },
        {
            id: 5,
            name: "Sachin Tendulkar",
            runs: 34000,
            wicket: "-",
            age: 50,
            role: "Batsman",
        },
        {
            id: 6,
            name: "Jasprit Bumrah",
            runs: "-",
            wicket : 300,
            age: 31,
            role: "Bowler",
        },
        {
            id: 7,
            name: "Ravindra Jadeja",
            runs: 10000,
            wicket: 600,
            age: 33,
            role: "All-Rounder",
        },
        {
            id: 8,
            name: "Suresh Raina",
            runs: 15000,
            wicket: 100,
            age: 38,
            role: "All-Rounder",
        },
        {
            id: 9,
            name: "Hardik Pandya",
            runs: 9000,
            wicket: 200,
            age: 33,
            role: "All-Rounder",
        },
        {
        id: 10,
            name: "R Ashwin",
            runs: 10000,
            wicket: 700,
            age: 39,
            role: "All-Rounder",
        }
    ];

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Cricket Details</h1>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Runs</th>
                        <th>Wicket</th>
                        <th>Age</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cricketPlayers.map((player) => {
                            return (
                                <tr key={player.id}>
                                    <td>{player.id}</td>
                                    <td>{player.name}</td>
                                    <td style={{ color: player.runs > 25000 ? 'red' : 'black' }}>{player.runs}</td>
                                    <td>{player.wicket}</td>
                                    {/* <td>
                                        {player.age} {player.age > 40 ?<span style={{ color: "red", fontWeight: "bold" }}> (Please Retired)</span> : null}
                                    </td> */
                                    }

                                    <td>
                                        {player.age} {player.age > 37 && <span style={{ color: "red", fontWeight: "bold" }}> (Retired Player)</span>}
                                    </td>




                                    <td>{player.role}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ArrayDemo7;
