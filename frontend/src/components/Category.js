import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import '../styles/recipes.css'


function Category() {

  const category = useParams().category
  const [isLoading, setLoading] = useState(true);
  const [cat, setCat] = useState();
    
  
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/recipes/?category=${category}`).then(resp => {
      setCat(resp.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
        <div className='recipes'>
            <h1>{category}</h1>
            <div>
                <table>
                    <thead>
                        <tr> 
                            <th>Название</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cat.map((name) =>
                                <tr key={name.id}>
                                    <td><a href={`/dishes/${name.id}`}>{name.name}</a></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
  );
}

export default Category;