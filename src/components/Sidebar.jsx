import { useState, useRef } from 'react';
import { MILESTONES, MAX_FEAR } from '../data/vows';
import { encodeState } from '../utils/url';
import styles from './Sidebar.module.css';

export default function Sidebar({ totalFear, activeEffects, state, onReset }) {
  const [showUrl, setShowUrl]     = useState(false);
  const [copyLabel, setCopyLabel] = useState('⛓\u00a0\u00a0Copy Share Link');
  const [copied, setCopied]       = useState(false);
  const [iconLabel, setIconLabel] = useState('⎘');
  const inputRef = useRef(null);

  const pct     = Math.min(100, (totalFear / MAX_FEAR) * 100);
  const isMaxed = totalFear >= MAX_FEAR;

  function buildUrl() {
    const encoded = encodeState(state);
    const base    = window.location.origin + window.location.pathname;
    return encoded ? `${base}?v=${encoded}` : base;
  }

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      if (inputRef.current) {
        inputRef.current.select();
        document.execCommand('copy');
      }
    }
  }

  async function handleShare() {
    const url = buildUrl();
    const encoded = encodeState(state);
    window.history.replaceState(null, '', encoded ? `?v=${encoded}` : window.location.pathname);
    setShowUrl(true);
    await copyToClipboard(url);
    setCopyLabel('✔\u00a0\u00a0Link Copied!');
    setCopied(true);
    setTimeout(() => {
      setCopyLabel('⛓\u00a0\u00a0Copy Share Link');
      setCopied(false);
    }, 2200);
  }

  async function handleIconCopy() {
    await copyToClipboard(buildUrl());
    setIconLabel('✔');
    setTimeout(() => setIconLabel('⎘'), 1500);
  }

  function handleReset() {
    onReset();
    setShowUrl(false);
    setCopyLabel('⛓\u00a0\u00a0Copy Share Link');
    setCopied(false);
    window.history.replaceState(null, '', window.location.pathname);
  }

  return (
    <aside className={styles.sidebar}>
      {/* ── Fear Counter ── */}
      <div className={styles.fearCounter}>
        <div className={`${styles.fearNumber} ${isMaxed ? styles.maxed : ''}`}>
          {totalFear}
        </div>
        <div className={styles.fearLabel}>Fear</div>
        <div className={styles.fearMax}>of {MAX_FEAR} maximum</div>
        <div className={styles.fearBarWrap}>
          <div
            className={`${styles.fearBar} ${isMaxed ? styles.danger : ''}`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className={styles.milestones}>
          {MILESTONES.map((m) => (
            <span
              key={m}
              className={`${styles.milestone} ${totalFear >= m ? styles.reached : ''}`}
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* ── Active Effects ── */}
      <div className={styles.effectsPanel}>
        <p className={styles.sectionLabel}>⚠ Active Negative Effects</p>
        {activeEffects.length === 0 ? (
          <p className={styles.noEffects}>No vows selected — your run is unmodified.</p>
        ) : (
          <ul className={styles.effectList}>
            {activeEffects.map((e) => (
              <li key={e.id} className={styles.effectItem}>
                <span className={styles.effectIcon}>{e.icon}</span>
                <span className={styles.effectBody}>
                  <span className={styles.effectName}>{e.name}</span>
                  <span className={styles.effectDesc}>{e.desc}</span>
                </span>
                <span className={styles.effectFear}>+{e.fear}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ── Share ── */}
      <button
        className={`${styles.btnShare} ${copied ? styles.copied : ''}`}
        onClick={handleShare}
      >
        {copyLabel}
      </button>
      {showUrl && (
        <div className={styles.shareUrlWrap}>
          <input
            ref={inputRef}
            type="text"
            className={styles.shareUrlText}
            value={buildUrl()}
            readOnly
            onClick={(e) => e.target.select()}
          />
          <button className={styles.shareUrlCopy} onClick={handleIconCopy} title="Copy">
            {iconLabel}
          </button>
        </div>
      )}

      {/* ── Reset ── */}
      <button className={styles.btnReset} onClick={handleReset}>
        ✕&nbsp;&nbsp;Clear All Vows
      </button>
    </aside>
  );
}
