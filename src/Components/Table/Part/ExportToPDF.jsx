import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf'

import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

const useStyles = makeStyles(() => ({
    icon: {
        marginRight: 10,
    },
}));

const jsPDFGenerator = () => {
    const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [210, 297]
    })
    autoTable(doc, { html: '#MyyTable' })
    doc.save("Data.pdf")
}
function ExportToPDF() {
    const classes = useStyles()


    return (
        <div>
            <Button
                color='primary'
                variant='contained'
                className={`${classes.btn}`}
                onClick={jsPDFGenerator}
                fullWidth
            >
                <PictureAsPdfIcon
                    className={`${classes.icon}`}
                />
                PDF
            </Button>
        </div>
    )
}

export default ExportToPDF
