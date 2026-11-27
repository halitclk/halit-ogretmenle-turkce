// Ortaokul Türkçe Öğretmeni Ders Materyalleri Verisi
// NOT: Kendi dosyalarınızı eklemek için "fileUrl" alanına dosyanızın yolunu yazın (Örn: "dosyalar/fiilimsiler.pdf" veya Google Drive linki)
const materialsData = [
    {
        id: "turkce-01",
        title: "8. Sınıf LGS Fiilimsiler (Eylemsiler) Renkli Şema & Çözümlü Test",
        category: "dil-bilgisi",
        categoryName: "Dil Bilgisi",
        grade: "8. Sınıf (LGS)",
        fileType: "PDF",
        fileSize: "2.8 MB",
        icon: "ph-file-pdf",
        color: "text-amber-600 bg-amber-50 dark:bg-amber-950/40",
        downloads: 1240,
        description: "İsim-fiil, sıfat-fiil ve zarf-fiil ekleri, kalıcı isim tuzakları ve 25 adet MEB tarzı çıkmış soru analizi.",
        fileUrl: "" // Örnek: "dosyalar/fiilimsiler.pdf" veya Drive linki
    },
    {
        id: "turkce-02",
        title: "LGS Türkçe Yeni Nesil Paragraf & Sözel Mantık Çözüm Taktikleri",
        category: "lgs",
        categoryName: "LGS Hazırlık",
        grade: "8. Sınıf",
        fileType: "PDF Fasikül",
        fileSize: "4.5 MB",
        icon: "ph-exam",
        color: "text-rose-600 bg-rose-50 dark:bg-rose-950/40",
        downloads: 2150,
        description: "Grafik-tablo yorumlama, şifreleme, akıl yürütme sorularında zaman kazandıran pratik soru çözme stratejileri.",
        fileUrl: ""
    },
    {
        id: "turkce-03",
        title: "Yazım Kuralları ve Noktalama İşaretleri Hızlı Başvuru Kartı",
        category: "dil-bilgisi",
        categoryName: "Dil Bilgisi",
        grade: "5, 6, 7 ve 8. Sınıf",
        fileType: "PDF (Özet)",
        fileSize: "1.2 MB",
        icon: "ph-article",
        color: "text-teal-600 bg-teal-50 dark:bg-teal-950/40",
        downloads: 3400,
        description: "Büyük harflerin yazımı, de/da ve ki'nin yazımı, kesme işareti ve iki nokta gibi en sık karıştırılan kuralların tek sayfalık özeti.",
        fileUrl: ""
    },
    {
        id: "turkce-04",
        title: "Kitap Tahlili Değerlendirme Formu & Okuma Günlüğü Şablonu",
        category: "okuma-yazma",
        categoryName: "Okuma & Tahlil",
        grade: "Tüm Ortaokul",
        fileType: "PDF Yazdırılabilir",
        fileSize: "1.9 MB",
        icon: "ph-books",
        color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40",
        downloads: 980,
        description: "Karakter analizi, ana fikir, yer/zaman incelemesi ve öğrencinin kendi düşüncelerini yazabileceği estetik tahlil kağıdı.",
        fileUrl: ""
    },
    {
        id: "turkce-05",
        title: "8. Sınıf Cümlenin Ögeleri & Cümle Türleri Akıl Haritası",
        category: "dil-bilgisi",
        categoryName: "Dil Bilgisi",
        grade: "8. Sınıf (LGS)",
        fileType: "PDF Görsel",
        fileSize: "3.1 MB",
        icon: "ph-tree-structure",
        color: "text-amber-600 bg-amber-50 dark:bg-amber-950/40",
        downloads: 1450,
        description: "Yüklem merkezli öge bulma yöntemi, tamlamaları bölmeme kuralı ve ara sözlerin şematik gösterimi.",
        fileUrl: ""
    },
    {
        id: "turkce-06",
        title: "5 ve 6. Sınıflar İçin Yaratıcı Yazarlık & Hikaye Tamamlama Atölyesi",
        category: "okuma-yazma",
        categoryName: "Yazarlık & Etkinlik",
        grade: "5 ve 6. Sınıf",
        fileType: "PDF Çalışma Kağıdı",
        fileSize: "2.3 MB",
        icon: "ph-pencil-circle",
        color: "text-rose-600 bg-rose-50 dark:bg-rose-950/40",
        downloads: 870,
        description: "Yarım bırakılmış sürükleyici olay örgüleri, betimleme ipuçları ve kelime kutucuklarıyla yazma şevki aşılayan etkinlik seti.",
        fileUrl: ""
    }
];

// DOM Elemanları
const materialsGrid = document.getElementById('materialsGrid');
const filterButtons = document.querySelectorAll('.mat-filter');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const materialModal = document.getElementById('materialModal');
const modalMaterialTitle = document.getElementById('modalMaterialTitle');
const modalMaterialDesc = document.getElementById('modalMaterialDesc');
const closeMatModal = document.getElementById('closeMatModal');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

let currentFilter = 'all';

// Materyalleri Ekrana Basma
function renderMaterials() {
    if (!materialsGrid) return;

    const filtered = materialsData.filter(item => {
        return currentFilter === 'all' || item.category === currentFilter;
    });

    materialsGrid.innerHTML = filtered.map(item => `
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between group">
            <div>
                <!-- Üst Etiketler -->
                <div class="flex items-center justify-between gap-2 mb-4">
                    <div class="w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                        <i class="ph-bold ${item.icon}"></i>
                    </div>
                    <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40">
                        ${item.grade}
                    </span>
                </div>

                <span class="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">${item.categoryName}</span>
                <h3 class="text-base font-bold text-slate-900 dark:text-white mt-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                    ${item.title}
                </h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    ${item.description}
                </p>
            </div>

            <!-- Alt Kısım -->
            <div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                <div class="text-[11px] text-slate-400 font-medium flex items-center gap-2">
                    <span>${item.fileType}</span>
                    <span>•</span>
                    <span>${item.fileSize}</span>
                </div>

                <button onclick="downloadMaterial('${item.id}')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 hover:bg-amber-600 text-amber-700 dark:text-amber-300 hover:text-white text-xs font-bold transition-all shadow-sm">
                    <i class="ph-bold ph-download-simple"></i>
                    PDF İndir
                </button>
            </div>
        </div>
    `).join('');
}

// İndirme İşlemi
window.downloadMaterial = function(id) {
    const item = materialsData.find(m => m.id === id);
    if (!item) return;

    // Eğer gerçek dosya veya web/Drive bağlantısı atanmışsa doğrudan indir/aç
    if (item.fileUrl && item.fileUrl.trim() !== '') {
        const a = document.createElement('a');
        a.href = item.fileUrl;
        a.download = item.fileUrl.split('/').pop() || 'calisma-materyali';
        if (item.fileUrl.startsWith('http')) {
            a.target = '_blank';
        }
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        return;
    }

    // Dosya yolu henüz boş ise bilgilendirici modalı aç
    modalMaterialTitle.innerText = `${item.title}`;
    modalMaterialDesc.innerText = `Format: ${item.fileType} (${item.fileSize}) — Bu materyal için henüz gerçek bir dosya bağlanmadı. Dosyanızı "dosyalar/" klasörüne atıp app.js içindeki "fileUrl" alanına adını yazarak veya Google Drive linki ekleyerek hemen aktif edebilirsiniz.`;
    materialModal.classList.remove('hidden');
};

if (closeMatModal) {
    closeMatModal.addEventListener('click', () => {
        materialModal.classList.add('hidden');
    });
}

if (materialModal) {
    materialModal.addEventListener('click', (e) => {
        if (e.target === materialModal) materialModal.classList.add('hidden');
    });
}

// Filtre Butonları
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => {
            b.classList.remove('active', 'bg-amber-600', 'text-white', 'shadow-sm', 'shadow-amber-600/30');
            b.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
        });
        btn.classList.add('active', 'bg-amber-600', 'text-white', 'shadow-sm', 'shadow-amber-600/30');
        btn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');

        currentFilter = btn.dataset.filter;
        renderMaterials();
    });
});

// Koyu / Açık Tema Yönetimi
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
        if (themeIcon) themeIcon.classList.replace('ph-moon', 'ph-sun');
    } else {
        document.documentElement.classList.remove('dark');
        if (themeIcon) themeIcon.classList.replace('ph-sun', 'ph-moon');
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        if (themeIcon) themeIcon.classList.replace(isDark ? 'ph-moon' : 'ph-sun', isDark ? 'ph-sun' : 'ph-moon');
    });
}

// Mobil Menü
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// İletişim & Veli Randevu Formu
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        formSuccess.classList.remove('hidden');
        contactForm.reset();
        setTimeout(() => {
            formSuccess.classList.add('hidden');
        }, 5000);
    });
}

// Başlat
initTheme();
renderMaterials();

// Eğitici Oyunlar Veritabanı ve Değiştirme Mantığı
const educationalGames = {
    genel: {
        title: "🎯 Genel Anlamlı Kelimeler Macerası",
        badge: "5 ve 6. Sınıf • Sözcükte Anlam",
        desc: "Genel ve özel anlamlı sözcükleri macera dolu adımlarla ayırt etmeyi sağlayan, doğru eşleştirmelerle puan toplayıp görevleri tamamlayabileceğiniz interaktif öğrenme oyunu.",
        url: "https://sites.google.com/view/genel-anlaml-kelimeler-maceras/full-page-embed",
        frameTitle: "Genel Anlamlı Kelimeler Macerası — Oyun Ekranı"
    },
    ozet: {
        title: "📖 Özet Çıkarma Macerası — Hikâye Oyunu",
        badge: "Tüm Sınıflar • Paragraf & Metin Çözümleme",
        desc: "Sürükleyici hikâyeleri okuyup ana düşünceyi, olay örgüsünü ve kritik detayları yakalayarak doğru özet adımlarını keşfedeceğiniz interaktif Türkçe oyunu.",
        url: "https://sites.google.com/view/ozetckarmamacerasi-hikye-oyunu/full-page-embed",
        frameTitle: "Özet Çıkarma Macerası — Oyun Ekranı"
    }
};

window.switchGame = function(gameKey) {
    const game = educationalGames[gameKey];
    if (!game) return;

    const titleEl = document.getElementById('activeGameTitle');
    const badgeEl = document.getElementById('activeGameBadge');
    const descEl = document.getElementById('activeGameDesc');
    const fsEl = document.getElementById('activeGameFullscreen');
    const openTabEl = document.getElementById('activeGameOpenTab');
    const frameTitleEl = document.getElementById('activeGameFrameTitle');
    const frameEl = document.getElementById('activeGameFrame');

    if (titleEl) titleEl.innerText = game.title;
    if (badgeEl) badgeEl.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> ${game.badge}`;
    if (descEl) descEl.innerText = game.desc;
    if (fsEl) fsEl.href = game.url;
    if (openTabEl) openTabEl.href = game.url;
    if (frameTitleEl) frameTitleEl.innerText = game.frameTitle;
    if (frameEl) frameEl.src = game.url;

    // Seçici butonların görsel aktiflik durumu
    const btnGenel = document.getElementById('game-btn-genel');
    const btnOzet = document.getElementById('game-btn-ozet');

    if (btnGenel && btnOzet) {
        if (gameKey === 'genel') {
            btnGenel.className = "game-select-btn text-left p-5 rounded-2xl border-2 transition-all duration-300 border-amber-600 bg-amber-50/70 dark:bg-amber-950/40 shadow-md";
            const statGenel = btnGenel.querySelector('.game-status-label');
            if (statGenel) {
                statGenel.innerHTML = `<i class="ph-bold ph-play-circle text-base"></i> Aktif Oyun`;
                statGenel.className = "game-status-label text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1";
            }

            btnOzet.className = "game-select-btn text-left p-5 rounded-2xl border-2 transition-all duration-300 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-amber-400";
            const statOzet = btnOzet.querySelector('.game-status-label');
            if (statOzet) {
                statOzet.innerHTML = `<i class="ph-bold ph-arrow-circle-right text-base"></i> Oynamak İçin Seç`;
                statOzet.className = "game-status-label text-xs font-bold text-slate-400 flex items-center gap-1";
            }
        } else {
            btnOzet.className = "game-select-btn text-left p-5 rounded-2xl border-2 transition-all duration-300 border-amber-600 bg-amber-50/70 dark:bg-amber-950/40 shadow-md";
            const statOzet = btnOzet.querySelector('.game-status-label');
            if (statOzet) {
                statOzet.innerHTML = `<i class="ph-bold ph-play-circle text-base"></i> Aktif Oyun`;
                statOzet.className = "game-status-label text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1";
            }

            btnGenel.className = "game-select-btn text-left p-5 rounded-2xl border-2 transition-all duration-300 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-amber-400";
            const statGenel = btnGenel.querySelector('.game-status-label');
            if (statGenel) {
                statGenel.innerHTML = `<i class="ph-bold ph-arrow-circle-right text-base"></i> Oynamak İçin Seç`;
                statGenel.className = "game-status-label text-xs font-bold text-slate-400 flex items-center gap-1";
            }
        }
    }
};
