# How to Update the MCC Energy Website

A plain-English guide for keeping mccenergy.ca up to date — no coding required.

---

## The big picture

- The website is just a set of plain text files in this folder.
- It lives on **GitHub** (github.com/malcolmocean/mccenergy) and is published free by
  **GitHub Pages** at **mccenergy.ca**.
- You make changes by asking **Claude Code** (the app you used to build this) in plain
  English. Claude edits the files; you review; then you publish.

You never have to write code. You describe what you want.

---

## Making a change (the loop)

1. **Open Claude Code in this project folder.**
   (The folder named `Website`, the same place this file lives.)

2. **Say what you want, in plain English.** Examples that have worked:
   - "On the home page, change the phone number to 902-555-1234."
   - "Add a new project to the Portfolio page called …, with this photo …"
   - "Add a new associate for company X, link to their website Y."
   - "Fix the wording of this sentence …"

3. **Preview it.** Say **"show me the preview"** and Claude opens the site so you can see
   the change before anyone else does.

4. **Publish it.** When you're happy, say **"push it live"**. The change appears on
   mccenergy.ca about a minute later.

That's the whole loop: **ask → preview → push live.**

---

## Page map (what's where)

| Page | File to mention |
|------|-----------------|
| Home | `index.html` |
| About | `About.html` |
| Associates | `Associates.html` |
| Services | `Services.html` |
| Portfolio | `Portfolio.html` |
| Insights (blog index) | `Insights.html` |
| Individual blog articles | `Insights/ArticleID/…` |
| Testimonials | `Testimonials.html` |
| Contact | `Contact-Us.html` |
| Associate detail pages | `About/…-Inc.html` |
| Look & feel (colours, fonts) | `styles.css` |
| Images / logos | the `Visual/` folder |

You don't need to remember file names — just name the **page** ("the Services page")
and Claude will find it.

---

## Handy things to know

- **Colours & fonts** are all set at the top of `styles.css`. The brand green is
  `#00c110`. Change it once there and the whole site updates.
- **Adding an image:** put the image file in the `Visual/` folder (or just tell Claude
  where it is), then ask Claude to use it.
- **The contact form** emails bruce@mccenergy.ca by opening the visitor's email program.
  No server or monthly fee is involved.
- **Previewing locally** uses a small helper at `.claude/serve.ps1` (because this PC has
  no Node/Python). It's already set up — "show me the preview" just works.

---

## If something goes wrong

- Nothing you do in the preview is live until you say "push it live."
- Every published version is saved in GitHub's history, so a bad change can always be
  undone — just ask Claude to "undo the last change" or "revert to yesterday's version."

---

*Built with Claude Code. Keep this file in the project so future-you has the cheat sheet.*
