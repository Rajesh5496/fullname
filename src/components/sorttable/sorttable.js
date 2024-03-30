import React from "react";
import { useState } from "react";

function Sorttable() {

    // let asc = true
    // let ascd = true
    let temp = [

        { date: "2022-09-01", views: 100, article: "Article 1" },

        { date: "2023-09-01", views: 100, article: "Article 1" },

        { date: "2023-09-02", views: 150, article: "Article 2" },

        { date: "2023-09-02", views: 120, article: "Article 3" },

        { date: "2020-09-03", views: 200, article: "Article 4" }

    ]
    const [arr, setArr] = useState(temp)
    const [asc, setAsc] = useState(true)
    const [ascd, setAscd] = useState(true)

    const handledate = () => {
        console.log(ascd)
        const sortedArr = [...arr].sort((a, b) => {
            return ascd ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
        });
        setArr(sortedArr);
        // ascd = !ascd;
        setAscd(previous => !previous);
    };
    const handleviews = (() => {
        console.log(asc)
        const sortedArr = [...arr].sort((a, b) => {
            return asc ? a.views - b.views : b.views - a.views;
        });
        setArr(sortedArr);
        setAsc(previous => !previous);
    })
    return (
        <div>
            <h1>Date and Views Table</h1>
            <button onClick={handledate}>Sort by Date</button>
            <button onClick={handleviews}>Sort by Views</button>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Views</th>
                    <th>Article</th>
                </tr>
                <tbody>
                    {arr.map((ele) => (
                        <tr>
                            <td>{ele.date}</td>
                            <td>{ele.views}</td>
                            <td>{ele.article}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Sorttable