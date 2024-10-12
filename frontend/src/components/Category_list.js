import React, { useEffect, useState } from 'react';
import axios from 'axios'
import '../styles/recipes.css'


function CategoryList() {

  const [isLoading, setLoading] = useState(true);
  const [category, setCategory] = useState();
    
  
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/category/').then(resp => {
      setCategory(resp.data);
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
                            <th>Категория</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            category.map((value) =>
                                <tr key={value.id}>
                                    <td><a href={`/category/${value.category}`}>{value.category}</a></td>
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

export default CategoryList;