import styles from '@/styles/Glitch.module.css';

export default function GlitchText({ text }) {
  return (
    <div className={styles.glitch} data-text={text}>
      {text}
      {/* <span aria-hidden="true">{text}</span>
      <span aria-hidden="true">{text}</span> */}
    </div>
  );
} 