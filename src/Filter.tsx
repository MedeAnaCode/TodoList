
function Filter () {

    return (
        <fieldset>
            <legend>Фильтрация:</legend>

            <div>
                <input type="radio" id="all" name="filter" value="all" defaultChecked/>
                <label htmlFor="all">Все</label>
            </div>

            <div>
                <input type="radio" id="active" name="filter" value="active"/>
                <label htmlFor="active">Активные</label>
            </div>

            <div>
                <input type="radio" id="done" name="filter" value="done"/>
                <label htmlFor="done">Выполненные</label>
            </div>
        </fieldset>
    );
}

export default Filter;
