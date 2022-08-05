import React from "react";
import MyInput from "./input/MyInput";
import MySelect from "./select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div style={{ textAlign: 'right' }}>
      <MyInput
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}

        placeholder="Поиска..."

      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue="Сортировка"
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
      />

    </div>


  )

};

export default PostFilter