import React, { useEffect, useState, useRef } from 'react';
import ListItem from './ListItem';
enum STATUS {
    UNFINISHED = 0, //未完成
    WILL_FINISHED = 1,
    FINISHED = 2
}
interface ListItemType {
    id: number;
    name: string;
    status: STATUS;
    createTime: number;
    finishedTime: number | null;
}
interface State {
    lists: ListItemType[];
}
// export default class TodoList extends React.Component<{},State>{
//     constructor(props:{}){
//         super(props);
//         this.state={
//             lists:[
//                 {
//                     id:0,
//                     name:'吃饭',
//                 },
//                 {
//                     id:1,
//                     name:'睡觉',
//                 },
//                 {
//                     id:2,
//                     name:'学习',
//                 },
//                 {
//                     id:3,
//                     name:'打游戏',
//                 },
//             ]
//         };
//     }
//     finishChange=()=>{

//     }
//     totalChange=()=>{

//     }
//     render(){
//         return(
//             <div className="container">
//                 <h1>TodoList</h1>
//                 <ul>
//                     {
//                         this.state.lists.map((item)=>{
//                             return(
//                                 <ListItem itemName={item.name} key={item.id} finishChange={this.finishChange} totalChange={this.totalChange}/>
//                             )
//                         })
//                     }

//                 </ul>
//             </div>
//         )
//     }

// }
export default function TodoList() {
    let [list, setList] = useState<ListItemType[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        return function () {};
    }, [list]);
    const finishChange = () => {};
    const totalChange = () => {};
    const deleteCallback = (id: number) => {
        console.log(id);
    };
    // interface ListItemType {
    //     id: number;
    //     name: string;
    //     status: Status;
    //     createTime: number;
    //     finishedTime: number;
    // }
    const onClickSubmitBtn = () => {
        let name = inputRef.current ? inputRef.current.value : '';
        if (list.filter((value) => value.name === name).length) return;
        let createTime = new Date().getTime();
        let finishedTime = null;
        let id = list ? list.length : 0;
        let status = STATUS.UNFINISHED;
        setList([
            ...list,
            {
                id,
                name,
                createTime,
                finishedTime,
                status
            }
        ]);
    };
    return (
        <div className="container">
            <h1>TodoList</h1>
            <input type="text" placeholder="输入要做的事..." ref={inputRef} />
            <button onClick={onClickSubmitBtn}>提交</button>
            <ul>
                {list &&
                    list.map((item) => {
                        return (
                            <ListItem
                                itemName={item.name}
                                id={item.id}
                                finishChange={finishChange}
                                totalChange={totalChange}
                                deleteCallback={deleteCallback}
                            />
                        );
                    })}
            </ul>
        </div>
    );
}
