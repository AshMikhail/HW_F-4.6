import React, { useEffect, useState } from 'react';
import axios from 'axios'
import '../styles/recipes.css'


function recipes() {

  const [isLoading, setLoading] = useState(true);
  const [Recipes, setRecipes] = useState();
    
  
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/recipes/all/').then(resp => {
      setRecipes(resp.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
        <div className='recipes'>
            <div>
                <h1>Коллекция рецептов!</h1>
                <h4>Тут можно выбрать интересующее блюдо или категорию.</h4>
                <table>
                    <thead>
                        <tr> 
                            <th>Название</th>
                            <th>Категория</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Recipes.map((name) =>
                                <tr key={name.id}>
                                    <td><a href={`/dishes/${name.id}`}>{name.name}</a></td>
                                    <td><a href={`/category/${name.category}`}>{name.category}</a></td>
                                    <td></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
  );
}

export default recipes;