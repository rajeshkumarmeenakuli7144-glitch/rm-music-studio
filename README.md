# RM Music Studio — Website

Poora control aapke paas hai. Ye plain HTML/CSS/JS files hain — koi
subscription, koi platform lock-in nahi. Jahan chaho waha host karo.

## Files
- `index.html` — poora page content
- `styles.css` — design
- `config.js` — **yaha Shorts ke video ID daalne hain** (sirf yahi file baar-baar edit karni padegi)
- `script.js` — Shorts section ko render karta hai
- `robots.txt`, `sitemap.xml` — SEO ke liye

## Shorts add karna (2 minute ka kaam)
1. `config.js` kholo
2. Apne Short ka link uthao, jaise `youtube.com/shorts/AbCd1234xyz`
3. `shorts` list mein add karo:
   ```js
   shorts: [
     { id: "AbCd1234xyz", title: "Naya Sad Song" },
   ],
   ```
4. Save karo — site apne aap update ho jayegi.

**Videos section khud update hota hai** — naya video YouTube pe daaloge,
website pe apne aap dikhega. Kuch edit karne ki zaroorat nahi.

## Free hosting (5 minute)
Kisi bhi ek option se live kar sakte ho, poora control aapke paas rahega:

1. **GitHub Pages** (free, sabse simple)
   - GitHub par naya repo banao, ye saari files upload karo
   - Repo Settings → Pages → branch select karo → site live ho jayegi
2. **Netlify / Vercel** (free)
   - Account banao, is folder ko drag-drop karo — turant live URL milega
3. Apna khud ka domain (jaise `rmmusicstudio.com`) chaho to GoDaddy/Hostinger
   se kharido aur upar wale platforms se connect kar do

## Domain set hone ke baad zaroor karo
`index.html`, `robots.txt`, `sitemap.xml` mein jaha bhi
`rmmusicstudio.example.com` likha hai, wahan apna asli domain daal do
(find & replace kar dena).

## SEO / search ranking behtar karne ke liye
1. Website live hone ke baad [Google Search Console](https://search.google.com/search-console)
   mein add karo aur `sitemap.xml` submit karo
2. `assets/logo.png` aur `assets/og-cover.jpg` (channel logo/banner)
   folder mein daal do — abhi placeholder path hai
3. Videos ke titles YouTube par hi keyword-rich rakho (jaise "Hindi Sad
   Song 2026") — wahi titles yahan website pe bhi khud aa jate hain
4. Regularly naye videos daalte raho — Google fresh content ko prefer
   karta hai
5. Apne social media bio (Instagram, Facebook) mein website ka link daalo
   — backlinks se ranking improve hoti hai

## Ads chalu karna (Google AdSense)
Website pe 3 ad jagah already ban chuki hain (top banner, videos ke neeche,
aur page ke bottom pe) — abhi wahan "Advertisement" likha dashed box dikhega.
Real ads dikhane ke liye:

1. Website live hone ke baad [google.com/adsense](https://www.google.com/adsense)
   par jaake apni site se sign up karo
2. Google review karega (usually kuch din se 2 hafte) — approve hone tak
   wait karo. Approval ke liye site pe real content hona zaroori hai
   (aapki website mein already hai)
3. Approve hone ke baad AdSense aapko ek **Publisher ID** dega
   (`ca-pub-XXXXXXXXXX` jaisa)
4. `index.html` mein `ca-pub-XXXXXXXXXX` likha 2 jagah hai — dono ko
   apni real Publisher ID se replace karo (find & replace kar dena)
5. Har `<div class="ad-slot">` ke andar comment mein `<ins>` block diya
   hai — us comment ko hata do aur apna `data-ad-slot` ID (AdSense
   dashboard se milega) daal do
6. Ad placeholder box (dashed border wala) apne aap replace ho jayega
   real ad se

Agar chaho to sirf ek jagah ad rakhna hai (jaise sirf bottom), baaki
`ad-slot` wale `<div>` blocks `index.html` se hata sakte ho.

## Subscribe button
Header aur CTA ke "Subscribe" button seedha aapke channel
(`@rmmusicstudio_7144`) par le jate hain, one-click subscribe ke saath.
