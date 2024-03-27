import React from "react"
import styles from "./table.module.css"
import axios from "axios"
import { useState, useEffect } from "react"
import userEvent from "@testing-library/user-event"
function Table() {

    const [tabledata, setTabledata] = useState([])
    const [temptabledata, setTemptabledata] = useState([])
    const [pagenum, setPagenum] = useState(0)
    const [datalength, setDatalength] = useState(0);
    let arr = []

    useEffect(() => {
        axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json").then((response) => {
            // setTemptabledata(response.data)
            // datalength = response.data.length
            // for(let i=0; i<10; i++){
            //     arr.push(response.data[i])
            // }
            // setTabledata(arr)
            // console.log(response.data)
            setTabledata(response.data);
            setDatalength(response.data.length)
        }).catch((error) => {
            alert(error)
            console.error(error)
        })
    }, [])

    const handlenext = ((event) => {
        console.log(datalength)
        console.log(Math.ceil(datalength / 10))
        if (pagenum + 1 < Math.ceil(datalength / 10)) {
            setPagenum(prevnum => prevnum + 1)
        }
        // let offset = pagenum * 10
        // console.log(offset)
        // console.log(temptabledata)
        // arr = []
        // for(let i=offset; i<10; i++){
        //     arr.push(temptabledata[i])
        // }
        // console.log(arr)
        // setTabledata(arr)
    })

    const handleprev = ((event) => {
        if (pagenum >= 1) {
            setPagenum(prevnum => prevnum - 1)
        }
    })
    let offset
    let paginatedData
    // if (pagenum >= 0 && pagenum < Math.ceil(datalength / 10)) {
         offset = pagenum * 10;
         paginatedData = tabledata.slice(offset, offset + 10);
    // }


    return (
        <>
            <div className={styles.headingcss}>
                <p>Employee Data Table</p>
            </div>
            <div>
                <table>
                    
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                    <tbody>
                    {paginatedData.map((ele) => (
                        <tr>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>{ele.role}</td>
                        </tr>
                    ))}
                     </tbody>
                </table>
            </div>
            <div className={styles.pagination}>
                <button onClick={handleprev} className={styles.pagbutton}>Previous</button>
                <p className={styles.pagnum}>{pagenum + 1}</p>
                <button onClick={handlenext} className={styles.pagbutton}>Next</button>
            </div>
        </>
    )

}
export default Table