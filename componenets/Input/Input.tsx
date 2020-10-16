import styles from './Input.module.css';

export default function Footer({
  label,
  id,
  type = 'text'
}: {
  label: string;
  id: string;
  type?: string;
}) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>{type === "text"
      ?
      <input className={styles.input} type={type} name={id} id={id} />
    : <textarea className={styles.textarea} id={id}/>  
    }
    </div>
  );
}
