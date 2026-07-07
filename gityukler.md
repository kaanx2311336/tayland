# GitHub Yukleme Talimati

## Amac
Bu dosya, kullanici `@gityukler.md` yazdiginda projeyi GitHub'a yuklemek icin kullanilir. Hedef; mevcut degisiklikleri guvenli sekilde kontrol etmek, commit olusturmak ve `origin` remote'una push etmektir.

## Ilk Kontrol
Asistan once kok dizinde su yapilari kontrol eder:

- `AGENTS.md`
- `gityukler.md`
- `.gitignore`
- `prodetayi/`
- `yapilanlar/`

Git deposu yoksa `git init -b main` ile baslatilir. `origin` remote'u yoksa GitHub CLI oturumu kontrol edilir. Mevcut repo yoksa aile rotasi verileri ozel kalacagi icin varsayilan olarak private GitHub reposu olusturulur.

## Guvenlik Kurali
Asistan push oncesi gizli veri riski icin hizli kontrol yapar. `.env`, anahtar dosyalari, yerel ekler, loglar ve bagimlilik klasorleri Git'e alinmaz. Force push, hard reset veya kullanici degisikliklerini geri alma islemi yapilmaz.

## Yapilacak Is
1. `git status --short --branch` ile durum okunur.
2. Gerekirse `.gitignore` eksikleri tamamlanir.
3. Degisiklik varsa `git add -A` ile staging yapilir.
4. Anlamli ve kisa bir commit mesaji yazilir.
5. Ilk yuklemede `git push -u origin main`, sonraki yuklemelerde `git push` calistirilir.
6. Push sonucu, commit hash'i ve GitHub repo adresi kullaniciya bildirilir.

## Degisiklik Yoksa
Commit edilecek degisiklik yoksa yeni commit olusturulmaz. Remote bagliysa sadece durum raporu verilir; gerekirse mevcut branch'in remote ile senkron olup olmadigi kontrol edilir.

## Beklenen Cikti
Islem sonunda asistan sunlari bildirir:

- GitHub repo adresi
- Aktif branch
- Olusturulan commit mesaji ve kisa hash
- Push sonucu
- Guncellenen `prodetayi` ve `yapilanlar` kayitlari

