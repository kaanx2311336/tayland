# Guncelleme Talimati

## Amac
Bu dosya, Tayland-Vietnam-Bali aile rotasi projesini kaldigi yerden guncellemek icin kullanilir. Hedef; prompt arsivi, proje paneli, para/butce paneli ve gelecek olay cizgisini birlikte canli tutmaktir.

## Ilk Calistirma Kontrolu
Asistan once kok dizinde su yapilari kontrol eder:

- `AGENTS.md`
- `guncelle.md`
- `prodetayi/`
- `yapilanlar/`
- `scripts/`
- `public/`
- `public/scripts/`
- `public/styles/`
- `public/vision.html`
- `public/styles/vision.css`
- `codex_promptlari/`

Eksik dosya veya klasor varsa mevcut dosyalar ezilmeden tamamlanir.

## Yapilacak Is
Yeni rota, butce, vize, konaklama veya saglik bilgisi geldiginde:

1. Ilgili `prodetayi/` ozetleri okunur.
2. Gerekirse `public/index.html`, `public/scripts/trip-plan.js`, `public/styles/style.css` veya `public/vision.html` guncellenir.
3. Vize ve mevsim bilgileri guncel kaynaklardan dogrulanir.
4. Tamamlanan degisiklik icin `yapilanlar/` altina tarihli log eklenir.

## Kaldigi Yeri Bilme Kurali
`codex_promptlari/prompt_arsivi_state.json` dosyasi projenin arsiv durumunu tutar. Dosya yoksa sifirdan baslatilir, varsa ezilmeden okunur.

## Saat Kurali
Tarih ve saat bazli kayitlarda Europe/Istanbul zaman dilimi esas alinir.

## Beklenen Cikti
Guncelleme sonunda asistan sunlari bildirir:

- Degisen dosyalar
- Guncellenen prodetayi kayitlari
- Eklenen yapilanlar logu
- Bir sonraki pratik komut veya kontrol adimi

## Dogrulama ve Log
Statik panel icin yerel HTTP sunucusu ile sayfa acilir. En azindan ana HTML, CSS ve JS dosyalarinin basariyla servis edildigi kontrol edilir.
