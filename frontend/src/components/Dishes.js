import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import '../styles/recipes.css'


function Dishes() {

  const id = useParams().id
  const [isLoading, setLoading] = useState(true);
  const [dishes, setDishes] = useState();
    
  
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/recipes/all/${id}/`).then(resp => {
      setDishes(resp.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
        <div className='recipes'>
            <div>
                <table>
                    <thead>
                        <tr> 
                            <th>Название</th>
                            <th>Категория</th>
                            <th>Рецепт</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={dishes.id}>
                            <td>{dishes.name}</td>
                            <td>{dishes.category}</td>
                            <td>{dishes.text}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  );
}

export default Dishes;