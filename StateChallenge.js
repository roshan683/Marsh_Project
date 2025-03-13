import { useState } from "react";
/*const users =[
{ name:"Alice" ,age:25},
{name:"Bob", age:30},
{name:"Roshan", age:40},
{name:"rakesh", age:45},
];*/

export function StateChallenge(){

    const [users,setUsers]= useState([
        { name:"Alice" ,age:25},
        {name:"Bob", age:30},
        {name:"Roshan", age:40},
        {name:"rakesh", age:45},
        ]);
        console.log(users);
        const userCount=users.length;
        console.log(userCount);
        const average= (users.reduce((accum,curr) => accum + curr.age, 0))/userCount;

    return(
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map((cur,index) =>{
              return(
                <li key={index}>
             {cur.name} -{cur.age} year old
                </li>
              )
         } )}
            </ul>
            <p>totak usres:{userCount}</p>
            <p>totak usres:{average}</p>
        </div>
    )
}