import React, { useState, useEffect } from "react";

import axios from "axios";
import Button from "utils/Button";

import { urlRutas } from "utils/endpoints";


const PDFPrint = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(urlRutas)
      .then((res) => setPosts(res.data));
  }, []);

  const cols = [
    { field: "idCarrera", header: "Id Carrera" },
    { field: "idCurso", header: "Id Curso" },
    { field: "codigoMateria", header: "Código Materia" },
    { field: "medicion", header: "Medición" },
    { field: "materia", header: "Materia" },
   
  ];

  const exportColumns = cols.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));

    const exportPDF = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default('landscape');
        
        doc.setFont("helvetica", "bold");
        doc.text("ESCUELA SUPERIOR POLITÉCNICA DEL LITORAL", 80,10);
        doc.text("SISTEMA GESTIÓN DE RUTAS DE MEDICIÓN", 87,16);
        doc.text("MÓDULO RUTAS DE MEDICIÓN", 105,22);
        const img="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"
        doc.addImage(img, 'PNG',  0, -5, 65, 40);
        doc.setFillColor(0,28,67);
        doc.rect(50,45, 200, 6,'F');
        doc.setTextColor(255,255,255);
        doc.text("Resultados Rutas de Medición", 108,50.5);
        doc.autoTable(exportColumns, posts, {
          startY: doc.autoTableEndPosY() + 70,
          margin: { horizontal: 10 },
          styles: { overflow: 'linebreak' },
          bodyStyles: { valign: 'top' },
          columnStyles: { email: { columnWidth: 'wrap' } },
          theme: "striped"
        });
        doc.save("rutas.pdf");
      });
    });
  };

  return(
    <Button  onClick={exportPDF} style={{ backgroundColor: '#001c43'}}>Descargar PDF</Button>
    
  )

}

export default PDFPrint;