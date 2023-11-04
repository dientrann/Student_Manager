import { useEffect } from "react";


export default function StudentTool({setType, setDataUpdate, students, setDataSearch , setTypeTable,setListSearch, setStatusSort, statusSort}) {

    return (
        <>
            <div className="studentTool">
                <button onClick={()=>{
                    setType("add")
                    setDataUpdate(null)

                }} className="btnAdd">Thêm Mới Sinh Viên</button>
                <div className="search">
                    <input id="search" type="text" name="search" placeholder="Search" onKeyUp={()=>{
                        setTypeTable("search")
                        let dataSearch = document.getElementById("search").value;
                        setListSearch(students.filter((student)=>{
                            return student.studentID.includes(dataSearch)
                        }))
                        setDataSearch(dataSearch);
                    }} />
                    <button className="btnSearch">Tìm Kiếm</button>
                </div>
                <div>
                    <button onClick={()=>{
                        if (statusSort){
                            handleSortAge()
                            setStatusSort(false)
                        }
                        else{

                        }
                    }}>Sắp Xếp</button>
                </div>
            </div>
        </>
    )
}