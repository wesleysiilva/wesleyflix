import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const initialValues ={
    name: '',
    description: '',
    color: '#000000',
  }

  const [categorias, setCategorias] = useState([]);  
  const [values, setValues] = useState(initialValues);

  function setValue(chave, v){
    setValues({
      ...values,
      [chave]: v,
    })
  }

  function handleChange(eventInfo){
    const { name, value } = eventInfo.target;
    setValue(
      name, 
      value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name} </h1>

      <form onSubmit={function handleSubmit(eventInfo){
        eventInfo.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(initialValues);
      }}>

        <FormField 
          label="Nome da categoria: "
          value={values.name}
          onChange={handleChange} 
          type="text"
          name="nome"         
        />

        <FormField 
          label="Descrição: "
          value={values.description}
          onChange={handleChange} 
          type="text"
          name="description"         
        />

        <FormField 
          label="Cor: "
          value={values.color}
          onChange={handleChange} 
          type="color"
          name="color"         
        />

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.name}
              </li>
            )
          })}
        </ul>

        <button>
          Cadastrar
        </button>
      </form>
      
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;