import type { FilterPattern } from './types';

function Filter ({ value, onChange }: { value: FilterPattern; onChange: (next: FilterPattern)=> void }) {

    return (
        <fieldset>
            <legend>Фильтрация:</legend>

            <div>
                <input
                    type="radio"
                    id="all"
                    name="filter"
                    value="all"
                    checked={value === 'all'}
                    onChange={(e) => onChange(e.currentTarget.value as FilterPattern)}
                />
                <label htmlFor="all">Все</label>
            </div>

            <div>
                <input
                    type="radio"
                    id="active"
                    name="filter"
                    value="active"
                    checked={value === 'active'}
                    onChange={(e) => onChange(e.currentTarget.value as FilterPattern)}
                />
                <label htmlFor="active">Активные</label>
            </div>

            <div>
                <input
                    type="radio"
                    id="done"
                    name="filter"
                    value="done"
                    checked={value === 'done'}
                    onChange={(e) => onChange(e.currentTarget.value as FilterPattern)}
                />
                <label htmlFor="done">Выполненные</label>
            </div>
        </fieldset>
    );
}

export default Filter;
