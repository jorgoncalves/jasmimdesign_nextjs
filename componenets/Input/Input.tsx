import { ChangeEvent } from 'react';
import styles from './Input.module.css';

export default function Input({
  label,
  id,
  onChange,
  type = 'text',
  useRef
}: {
  label: string;
  id: string;
  onChange: any;
  type?: string;
  useRef?: any;
}) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {type === 'text' || type === 'email' || type === 'number' ? (
        <input ref={useRef} className={styles.input} type={type} name={id} id={id} onChange={(e) => onChange(id, e)} />
      ) : (
        <textarea ref={useRef} className={styles.textarea} id={id} onChange={(e) => onChange(id, e)} />
      )}
    </div>
  );
}
