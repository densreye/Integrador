import { Form } from "formik";
import { useState } from "react";
import FormGroupText from "utils/FormGroupText";
 
const Criterios = ({})=>{
    const [criterias, setCriteriasList] = useState([{ 
      Criterio: "",
      Insatisfactorio: "",
      Desarrollo: "",
      Satisfactorio: "",
      Ejemplar: "",
      
    }]);

    const handleCriteriaChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...criterias];
      list[index][name] = value;
      setCriteriasList(list)
    };

    const handleCriteriaRemove = (index) => {
      const list = [...criterias];
      list.splice(index, 1);
      setCriteriasList(list);
      console.log(criterias);
    };

    const handleCriteriaAdd = () => {
      setCriteriasList([...criterias, { criteria: "" }]);
      console.log(criterias);
    };
  
      return (
        

        <Form >
          <div className="" >
            
            {criterias.map((singleCriteria, index) => (
              <div key={index} className="form-inline" px={0.5} >
                <div className="form-group" >
                  
                  <FormGroupText
                    placeholder="Criterio"
                    id="criteria"
                    campo="criterio"
                    value={singleCriteria.criteria}
                    onChange={(e) => handleCriteriaChange(e, index)}
                    required
                  />
                  <FormGroupText
                    placeholder="Insatisfactorio"
                    id="criteria"
                    campo="insatisfactorio"
                    value={singleCriteria.criteria2}
                    onChange={(e2) => handleCriteriaChange(e2, index)}
                    required
                  />
                  <FormGroupText
                    placeholder="Desarrollo"
                    id="criteria"
                    campo="desarrollo"
                    value={singleCriteria.criteria3}
                    onChange={(e3) => handleCriteriaChange(e3, index)}
                    required
                  />
                    <FormGroupText
                    placeholder="Satisfactorio"
                    id="criteria"
                    campo="satisfactorio"
                    value={singleCriteria.criteria4}
                    onChange={(e4) => handleCriteriaChange(e4, index)}
                    required
                  />
                    <FormGroupText
                    placeholder="Ejemplar"
                    id="criteria"
                    campo="ejemplar"
                    value={singleCriteria.criteria5}
                    onChange={(e5) => handleCriteriaChange(e5, index)}
                    required
                  />
                  
                  {criterias.length - 1 === index && criterias.length < 5 && (
                    <button
                      type="button"
                      onClick={handleCriteriaAdd}
                      className="add-btn"
                    >
                      <span>Agregar</span>
                    </button>
                  )}
                </div>
                <div className="second-division">
                  {criterias.length !== 1 && (
                    <button
                      type="button"
                      onClick={() => handleCriteriaRemove(index)}
                      className="remove-btn"
                    >
                      <span>Eliminar</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Form>
      );
    }    
export default Criterios