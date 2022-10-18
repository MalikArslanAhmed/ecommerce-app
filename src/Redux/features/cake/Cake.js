import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    ordered,
    restocked,
    selectCount,
} from './cakeSlice';
import styles from './Cake.module.css';

export function Cake() {
    const countCake = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Order Cake"
                    onClick={() => dispatch(ordered())}
                >
                    -
                </button>
                <span className={styles.value}>{countCake}</span>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(restocked(5))}
                >
                    +
                </button>
            </div>
        </div>
    );
}
