import { useState, useCallback, useMemo } from 'react';
import { VOWS } from './data/vows';
import { buildInitialState, encodeState } from './utils/url';
import VowCard from './components/VowCard';
import Sidebar from './components/Sidebar';
import styles from './App.module.css';

function initState() {
  return buildInitialState(window.location.search);
}

export default function App() {
  const [vowState, setVowState] = useState(initState);

  const handleToggle = useCallback((vowId, levelIndex) => {
    setVowState((prev) => {
      const next = { ...prev, [vowId]: levelIndex };
      // Keep URL in sync silently
      const encoded = encodeState(next);
      window.history.replaceState(
        null,
        '',
        encoded ? `?v=${encoded}` : window.location.pathname
      );
      return next;
    });
  }, []);

  const handleReset = useCallback(() => {
    const empty = {};
    VOWS.forEach((v) => (empty[v.id] = -1));
    setVowState(empty);
  }, []);

  const { totalFear, activeEffects } = useMemo(() => {
    let total = 0;
    const effects = [];
    VOWS.forEach((vow) => {
      const li = vowState[vow.id];
      if (li >= 0) {
        const lvl = vow.levels[li];
        total += lvl.fear;
        effects.push({
          id: vow.id,
          name: vow.name,
          icon: vow.icon,
          desc: lvl.negEffect,
          fear: lvl.fear,
        });
      }
    });
    return { totalFear: total, activeEffects: effects };
  }, [vowState]);

  return (
    <>
      <header className={styles.header}>
        <h1>Oath of the Unseen</h1>
        <p>Hades II — Fear Planner &amp; Vow Builder</p>
      </header>

      <div className={styles.layout}>
        <main>
          <p className={styles.sectionLabel}>Select vow levels to configure your run</p>
          <div className={styles.vowsGrid}>
            {VOWS.map((vow) => (
              <VowCard
                key={vow.id}
                vow={vow}
                activeLevel={vowState[vow.id]}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </main>

        <Sidebar
          totalFear={totalFear}
          activeEffects={activeEffects}
          state={vowState}
          onReset={handleReset}
        />
      </div>
    </>
  );
}
