import { render } from '@testing-library/react';
import React from 'react';
interface Props {
    id: number;
    itemName: string;
    finishChange: Function;
    totalChange: Function;
    deleteCallback: Function;
}
function ListItem(props: Props) {
    const listDeleteBtn = () => {};
    return (
        <li>
            {props.itemName}
            <button
                onClick={() => {
                    props.deleteCallback(props.id);
                }}
            >
                删除
            </button>
        </li>
    );
}
export default ListItem;
