import { useState } from "react"
import StudentCard from "./StudentCard"

export default function StudentList({students , handleDelete, setDataUpdate, setType, listSearch, typeTable, listSort}) {
   
    return (
        <>
            <div className="listStudent">
                <h2 className="titleTable">Danh Sách Sinh Viên</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Mã Sinh Viên</th>
                            <th>Tên Sinh Viên</th>
                            <th>Tuổi</th>
                            <th>Giới Tính</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            typeTable == "table" ? students.map((student, index) => {
                                return (<StudentCard student={student} index={index} handleDelete= {handleDelete} setDataUpdate={setDataUpdate} setType={setType} key={Date.now() * Math.random()} />)

                            }):listSearch.map((student, index) => {
                                return (<StudentCard student={student} index={index} handleDelete= {handleDelete} setDataUpdate={setDataUpdate} setType={setType} key={Date.now() * Math.random()} />)

                            })
                            
                        }

                    </tbody>
                </table>
            </div>

        </>
    )
}