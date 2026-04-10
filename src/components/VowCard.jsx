import styles from './VowCard.module.css';

export default function VowCard({ vow, activeLevel, onToggle }) {
  const isActive = activeLevel >= 0;
  const fearVal = isActive ? vow.levels[activeLevel].fear : 0;
  const isSingle = vow.levels.length === 1;

  return (
    <div className={`${styles.card} ${isActive ? styles.hasActive : ''}`}>
      <div className={styles.header}>
        <div className={`${styles.icon} ${isActive ? styles.iconActive : ''}`}>
          {vow.icon}
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{vow.name}</div>
          <div className={styles.baseEffect}>{vow.baseEffect}</div>
        </div>
        <div className={styles.fearBadge}>
          {fearVal > 0 ? fearVal : '—'}
          <span>FEAR</span>
        </div>
      </div>

      <div className={styles.levels}>
        {/* OFF button for multi-level vows */}
        {!isSingle && (
          <button
            className={`${styles.levelBtn} ${activeLevel === -1 ? styles.active : ''}`}
            onClick={() => onToggle(vow.id, -1)}
          >
            <span className={styles.lvLabel}>OFF</span>
            <span className={styles.lvEffect}>inactive</span>
          </button>
        )}

        {vow.levels.map((lvl, i) => {
          const isLvlActive = activeLevel === i;
          if (isSingle) {
            return (
              <button
                key={i}
                className={`${styles.levelBtn} ${styles.single} ${isLvlActive ? styles.active : ''}`}
                onClick={() => onToggle(vow.id, isLvlActive ? -1 : 0)}
              >
                <span className={styles.lvLabel}>{isLvlActive ? '✔ ON' : 'ACTIVATE'}</span>
                <span className={styles.lvEffect}>{lvl.effect}</span>
                <span className={styles.lvFear}>{lvl.fear} fear</span>
              </button>
            );
          }
          return (
            <button
              key={i}
              className={`${styles.levelBtn} ${isLvlActive ? styles.active : ''}`}
              onClick={() => onToggle(vow.id, i)}
            >
              <span className={styles.lvLabel}>Lv {lvl.label}</span>
              <span className={styles.lvFear}>{lvl.fear}</span>
              <span className={styles.lvEffect}>{lvl.effect}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
