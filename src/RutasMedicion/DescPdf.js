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