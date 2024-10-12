import "../styles/data.css"

function Data(props) {

    const { card } = props

    if (!card || card.length === 0) return <p>Нет данных.</p>

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Категория</th>
                        <th>Название</th>
                        <th>Рецепт</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        persons.map((card) =>
                            <tr key={card.id}>
                                <td>{card.id}</td>
                                <td>{card.category}</td>
                                <td>{card.name}</td>
                                <td>{card.text}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
      </div>
    )
}

export default Data