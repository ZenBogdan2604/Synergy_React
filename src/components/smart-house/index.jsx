import { useState } from "react"
import styles from './style.module.css'
import { useLocalStorage } from "../../hook/useLocalStorage";

const SmartHouse = () => {
    const [device, setDevice] = useLocalStorage('SMART', [
        {
            id: 1,
            name: "Лампа",
            isPower: false,
            isEdit: false,
        },
        {
            id: 2,
            name: "Телевизор",
            isPower: false,
            isEdit: false,
        },
        {
            id: 3,
            name: "Колонка",
            isPower: false,
            isEdit: false,
        },
    ]);
    const [addValue, setAddValue] = useState("");
    const [editValue, setEditValue] = useState("");

    const handleAdd = () => {
        setDevice([
            ...device, 
            { 
            id: device[device.length - 1].id + 1,
            name: addValue, 
            isPower: false, 
            isEdit: false,
        },
    ]);
        setAddValue('')
    };

    const handleDelete = (idDevice) => {
        setDevice(() => device.filter((el) => el.id !== idDevice));
    };

    const handlePower = (idDevice) => {
        setDevice(() =>
        device.map((el) => {
            if (el.id === idDevice){
                setEditValue(el.name);
                return { ... el, isPower: !el.isPower };
            }
            return el;
        })
        );
    };

    const showEditDialog = (idDevice) => {
        setDevice(() =>
        device.map((el) => {
            if (el.id === idDevice){
                setEditValue(el.name);
                return { ... el, isEdit: true };
            }
            return el;
        })
        );
    };

    const handleEdit = (idDevice) => {
        setDevice(() =>
        device.map((el) => {
            if (el.id === idDevice){
                return { ... el, name: editValue, isEdit: false };
            }
            return el;
        })
        );
    };

    console.log(device);

    return (
        <div  className={styles.container_items}>
            <h1>Устройства умного дома</h1>

            <div>
                <input value={addValue} onChange={(e) => setAddValue(e.target.value)} />
                <button  onClick={handleAdd}>Добавить устройство</button>
            </div>

            <div >
                {device.map((item) => {
                    return (
                        <div>
                            {item.isEdit ? (
                                <div className={styles.edit}>
                                    <input 
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                    />
                                    <button onClick={() => handleEdit(item.id)}>Save</button>
                                </div>
                            ) : (
                            <div className={styles.item} key={item.id}>
                            <div className={styles.header_text}>{item.name}</div>
                            <div>
                                <button onClick={() => showEditDialog(item.id)}>Edit</button>
                                <button
                                    onClick={() => handlePower(item.id)}
                                    style={
                                        item.isPower
                                        ? {background: 'red'}
                                        : {background: '#00ff00'}
                                    }
                                >
                                    {item.isPower ? 'OFF' : 'ON'}
                                </button>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </div>
                        </div>
                        )}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default SmartHouse;