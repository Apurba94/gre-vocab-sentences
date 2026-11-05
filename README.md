# Sentence Writing with New Words

Write your own sentence for each new GRE word, and check it uses the word in the right way.

Part of the [GRE and TOEFL Study Suite](https://github.com/Apurba94/gre-toefl-study-suite): 100 free study apps for the GRE General Test and more. It works offline, as a Windows program or in the browser.

## Download and run

- **Windows:** download `Sentence Writing with New Words.exe` from the [latest release](https://github.com/Apurba94/gre-vocab-sentences/releases/latest) and open it. Nothing to install. It opens in its own window and saves your progress in your user folder.
- **Browser:** open it online in the suite's web edition at https://gre-toefl-study-suite.vercel.app/apps/gre-vocab-sentences/ . Progress stays in that browser.
- **From source:** `python launcher.py` (Python 3.10 or later, no packages needed).

## What it does

Writing a sentence of your own is one of the best ways to make a new word stick. Pick a word from the GRE bank, read its meaning, and write a sentence that shows you know it. The app checks the basics a program can check, and keeps your sentences to review.

Sections: Write, My sentences, Progress, About.

## How to use it

1. Press **New word** in **Write**, or search for one.
2. Write a sentence where the context makes the meaning clear: "The abstruse lecture lost half the class" is better than "The lecture was abstruse."
3. Review your sentences in **My sentences**.

## Good to know

- All questions, passages and definitions were written for this suite. None are official ETS questions. For official practice, use the materials on ets.org.
- It follows the GRE General Test as shortened in September 2023 and the TOEFL iBT as updated in January 2026. Formats change, so check ets.org before your test.
- Feedback on writing and speaking counts things a program can count honestly, such as length and linking words. It does not give an official score.
- Not endorsed by or affiliated with ETS. GRE and TOEFL are registered trademarks of ETS.

## For developers

The app is plain HTML and JavaScript in `web/`, run by a small Python launcher that serves it on 127.0.0.1 only and needs a secret token for saving. Tests: `node --test "tests/*.test.js"` (23 tests) and `python -m unittest discover -s tests`. Build the .exe with `python build_exe.py`.

Built with AI assistance (Claude Code). MIT licence. By JANIN A APURBA.
