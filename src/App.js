import React, {useState} from 'react';
import ReactDom from 'react-dom';
import style from "./style";
import {makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";

const AppStyle = makeStyles(style);
const App = () => {
    const classes = AppStyle();

    const tbodyData = [

        {
            "id": 1,
            "product_name": "Weetabix",
            "product_category": "Cereal",
            "unit_price": "501"
        },
        {
            "id": 2,
            "product_name": "Colgate Toothpaste",
            "product_category": "Toiletries",
            "unit_price": "119"
        },
        {
            "id": 3,
            "product_name": "Imperial Leather Soap",
            "product_category": "Toiletries",
            "unit_price": "235"
        },
        {
            "id": 4,
            "product_name": "Sunlight Detergent",
            "product_category": "Toiletries",
            "unit_price": "401"
        },
        {
            "id": 5,
            "product_name": "Sunlight Detergent",
            "product_category": "Toiletries",
            "unit_price": "401"
        },
        {
            "id": 6,
            "product_name": "Sunlight Detergent",
            "product_category": "Toiletries",
            "unit_price": "401"
        }, {
            "id": 7,
            "product_name": "Sunlight Detergent",
            "product_category": "Toiletries",
            "unit_price": "401"
        }, {
            "id": 8,
            "product_name": "Sunlight Detergent",
            "product_category": "Toiletries",
            "unit_price": "401"
        }
    ];

    const theadData = Object.keys(tbodyData[0]);
    const [cols, setCols] = useState(theadData);
    const [rows, setRows] = useState(tbodyData);
    const [dragOver, setDragOver] = useState("");

    const handleDragStart = e => {
        const {id} = e.target;
        const idx = cols.indexOf(id);
        e.dataTransfer.setData("colIdx", idx);
    };

    const handleDragOver = e => e.preventDefault();
    const handleDragEnter = e => {
        const {id} = e.target;
        setDragOver(id);
    };

    const handleOnDrop = e => {
        const {id} = e.target;
        const droppedColIdx = cols.indexOf(id);
        const draggedColIdx = e.dataTransfer.getData("colIdx");
        const tempCols = [...cols];

        tempCols[draggedColIdx] = cols[droppedColIdx];
        tempCols[droppedColIdx] = cols[draggedColIdx];
        setCols(tempCols);
        setDragOver("");
    };

    // const handleChange = e => {
    //
    //     console.log(e.target.value);
    // }


    return (
        <div className="App">
            <Table className={classes.table}>
                <thead>
                <tr className={classes.tr}>
                    {cols.map(col => (
                        <th className={classes.th}
                            id={col}
                            key={col}
                            draggable
                            onDragStart={handleDragStart}
                            onDragOver={handleDragOver}
                            onDrop={handleOnDrop}
                            onDragEnter={handleDragEnter}
                            dragOver={col === dragOver}
                            // contentEditable={"true"}
                            // onClick={handleChange}
                        >
                            {col}
                        </th>
                    ))}
                </tr>

                </thead>
                <tbody>
                {rows.map(row => (
                    <tr key={row.id} className={classes.tr}>
                        {Object.entries(row).map(([k, v], idx) => (
                            <td className={classes.td} key={v} dragOver={cols[idx] === dragOver}>
                                {row[cols[idx]]}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};
export default App;