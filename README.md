# 🎓 AkademiLab — Kişisel Eğitim & İçerik Paylaşım Platformu

Bu proje, kendi bilgi birikiminizi, ders notlarınızı, videolarınızı ve eğitim içeriklerinizi modern, hızlı ve şık bir arayüzle paylaşmanız için hazırlanmış kişisel bir internet sitesi şablonudur.

---

## 🚀 Öne Çıkan Özellikler

- **Modern & Temiz Tasarım:** Tailwind CSS altyapısı ve Plus Jakarta Sans tipografisiyle profesyonel görünüm.
- **Duyarlı (Responsive):** Mobil, tablet ve masaüstü ekranlarla %100 tam uyumlu.
- **Koyu / Açık Tema (Dark Mode):** Kullanıcının sistem veya manuel tercihini `localStorage` ile tarayıcıda hatırlar.
- **Canlı Ders Arama:** Arama kutusuna yazıldıkça ders başlığı ve açıklamalarında anında dinamik filtreleme.
- **Kategori Filtreleme:** Web Geliştirme, Python & Veri, UI/UX Tasarım, Git & Araçlar gibi sekmelerle hızlı ayrıştırma.
- **Hızlı Ders Önizleme (Modal):** Ana sayfadan ayrılmadan dersin müfredatını, süresini ve seviyesini inceleyebilme.
- **Kapsamlı Ders Okuma Sayfası (`ders-detay.html`):** Video oynatıcı alanı, müfredat kenar çubuğu, indirilebilir kaynaklar, kod blokları ve ipucu kutuları.
- **Eğitmen & İletişim Bölümü:** Hakkınızda bilgi, sosyal medya bağlantıları ve e-posta bülten abonelik formu.

---

## 📁 Proje Dosya Yapısı

```
egitim-sitesi/
│
├── index.html          # Ana sayfa (Hero, arama, filtreler, kurs kartları, hakkımda, bülten)
├── ders-detay.html     # Örnek ders/eğitim okuma sayfası (Müfredat, video, kod blokları)
├── app.js              # Kurs veritabanı (JSON), arama, filtreleme ve tema yönetimi mantığı
└── README.md           # Proje dokümantasyonu ve kullanım kılavuzu
```

---

## 🛠️ Nasıl Çalıştırılır ve Görüntülenir?

1. Proje herhangi bir derleyici, NodeJS veya harici kütüphane kurulumu **gerektirmez**.
2. Doğrudan `index.html` dosyasına çift tıklayarak tarayıcınızda (Chrome, Edge, Firefox vb.) anında açıp inceleyebilirsiniz.
3. İleride VS Code kullanırsanız **Live Server** eklentisiyle anlık canlı önizleme yapabilirsiniz.

---

## ✏️ Kendi İçeriklerinizi Nasıl Eklersiniz?

- **Yeni Eğitimler Eklemek İçin:** `app.js` dosyasının en başındaki `coursesData` dizisine yeni bir nesne eklemeniz yeterlidir. Otomatik olarak ana sayfaya ve arama sistemine dahil olur.
- **Kişisel Bilgilerinizi Güncellemek İçin:** `index.html` içerisindeki `[Adınız Soyadınız]` alanlarını ve biyografi metnini kendi bilgilerinizle değiştirin.
