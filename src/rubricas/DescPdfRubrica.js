import React, { useState, useEffect } from "react";

import axios from "axios";
import Button from "utils/Button";

import { urlRubricas } from "utils/endpoints";


const PDFPrintRubrica = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(urlRubricas)
      .then((res) => setPosts(res.data));
  }, []);

  const cols = [
    { field: "nombre", header: "Nombre" },
    { field: "clasificacion", header: "Clasificacion" },
    { field: "fechaCreacion", header: "Fecha Creacion" },
  
   
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
        doc.text("MÓDULO RÚBRICAS", 120,22);
        //doc.addImage(img, "PNG", 5, 0, 50, 50);
        doc.setFillColor(0,28,67);
        doc.rect(50,45, 200, 6,'F');
        doc.setTextColor(255,255,255);
        doc.text("Resultados Rúbricas", 120,50.5);
        doc.autoTable(exportColumns, posts, {
          startY: doc.autoTableEndPosY() + 70,
          margin: { horizontal: 10 },
          styles: { overflow: 'linebreak' },
          bodyStyles: { valign: 'top' },
          columnStyles: { email: { columnWidth: 'wrap' } },
          theme: "striped"
        });
       

          doc.save("rubricas.pdf");
        
        
      });
    });
  };

  return(
    <Button  onClick={exportPDF} style={{ backgroundColor: '#001c43'}}>Descargar PDF</Button>
    
  )

}

export default PDFPrintRubrica;