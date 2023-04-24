import React from 'react';
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/Select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <h3 className="text__search">Пошук постів</h3>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder={'Пошук...'}
            >
            </MyInput>
            <hr style={{margin: "15px 0"}}/>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="За замовчуванням"
                options={[
                    {value: 'title', name: 'За назвою'},
                    {value: 'body', name: 'За описом'}
                ]}
            >
            </MySelect>
        </div>
    );
};

export default PostFilter;