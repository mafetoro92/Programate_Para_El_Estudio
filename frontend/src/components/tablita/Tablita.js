import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import RequestService from "../../config/index";
import { CSVLink } from "react-csv";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function BasicTable({ rows, actions = false }) {
    const classes = useStyles();

    const header = [];

    for (const key in rows[0]) {
        header.push(key);
    }

    const getUser = async () => {
        const { data } = await RequestService.get("/candidate/candidate");
        const { users } = data;
    };
    getUser();

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {header.map((row, index) => (
                                <TableCell key={index} align="right">
                                    {row}
                                </TableCell>
                            ))}
                            {actions && (
                                <TableCell align="right">Acciones</TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((prop) => (
                            <TableRow key={prop.id}>
                                {header.map((row, index) => (
                                    <TableCell key={index} align="right">
                                        {prop[row]}
                                    </TableCell>
                                ))}
                                <TableCell align="right">
                                    {actions &&
                                        actions.map((action, index) =>
                                            action.status ? (
                                                <span key={index}>
                                                    {action.icon}
                                                </span>
                                            ) : null
                                        )}
                                    {/* <i className="far fa-check-square"> </i>
                                    <i className="far fa-edit"> </i>
                                    <i className="far fa-eye"> </i>
                                    <i className="far fa-trash-alt"> </i> */}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="containerButton">
                <div>
                    <CSVLink data={rows} filename="prueba CSV">
                        <button className="btn btn-success">Exportar</button>
                    </CSVLink>
                </div>
            </div>
        </>
    );
}
