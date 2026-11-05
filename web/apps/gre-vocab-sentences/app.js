/* Sentence Writing with New Words: write your own sentence for each new GRE word. */
(function () {
  'use strict';
  const KEY = 'gre-vocab-sentences.mine';
  // Checks a program can make honestly: the word (in some form) is used, the sentence is long enough, and it is not the example.
  const check = (w, s) => {
    const notes = [];
    if (!SK.blankOut(s, w.w)) notes.push('Use the word ' + w.w + ' (any form, such as ' + w.w + 's or ' + w.w + 'ed).');
    if (SK.text.wordCount(s) < 8) notes.push('Write at least eight words, so the sentence shows the meaning.');
    if (SK.norm(s) === SK.norm(w.e)) notes.push('Write your own sentence, not the example.');
    if (!/[.!?]$/.test(s.trim())) notes.push('End with a full stop.');
    return notes;
  };
  const App = {
    about: 'Writing a sentence of your own is one of the best ways to make a new word stick. Pick a word from the GRE bank, read its meaning, and write a sentence that shows you know it. The app checks the basics a program can check, and keeps your sentences to review.',
    how: ['Press **New word** in **Write**, or search for one.', 'Write a sentence where the context makes the meaning clear: "The abstruse lecture lost half the class" is better than "The lecture was abstruse."', 'Review your sentences in **My sentences**.'],
    tabs: [
      { id: 'write', label: 'Write', render(el, ctx) {
        const mine = SK.store.get(KEY, {});
        const fresh = ctx.data.gre_words.filter((w) => !mine[w.id]);
        const w = SK.pick(SK.rng(SK.seedNow()), fresh.length ? fresh : ctx.data.gre_words);
        const area = SK.h('textarea', { style: { minHeight: '80px' }, 'aria-label': 'Your sentence', placeholder: 'Your sentence using ' + w.w });
        const out = SK.h('div', {});
        el.appendChild(SK.card(w.w, SK.h('p', {}, SK.h('em', { text: w.pos + '. ' }), w.d), SK.h('details', {}, SK.h('summary', { text: 'See the example' }), SK.h('p', { text: w.e })), area,
          SK.h('div', { class: 'sk-row', style: { marginTop: '10px' } }, SK.btn('Check and save', () => {
            SK.clear(out);
            const n = check(w, area.value);
            if (n.length) { out.appendChild(SK.note(n.join(' '), 'wrong')); return; }
            mine[w.id] = { w: w.w, s: area.value.trim(), day: SK.dayKey() }; SK.store.set(KEY, mine);
            SK.logPractice(2, 'Vocabulary sentence');
            out.appendChild(SK.note('Saved. Does your sentence show the meaning, or only use the word? Read it again tomorrow.', 'right'));
          }, '', { 'data-auto': 'once' }), SK.btn('New word', () => SK.show('write'), 'ghost')), out));
      } },
      { id: 'mine', label: 'My sentences', render(el) { const m = Object.values(SK.store.get(KEY, {})).reverse(); el.appendChild(SK.card('My sentences (' + m.length + ')', m.length ? SK.table(['Word', 'Sentence', 'Date'], m.map((x) => [SK.h('strong', { text: x.w }), x.s, x.day])) : SK.h('p', { class: 'sk-muted', text: 'Sentences you save appear here.' }))); } },
    ],
    check,
    checks: { 'the checks accept a good sentence and catch common problems': (data, assert) => {
      const w = data.gre_words.find((x) => x.w === 'abate');
      assert.deepEqual(check(w, 'By midnight the angry crowd had finally abated and gone home.'), []);
      assert.ok(check(w, 'The crowd went home.').length >= 2);
      assert.ok(check(w, w.e).some((n) => n.includes('own sentence')));
    } },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();
