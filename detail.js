document.addEventListener('DOMContentLoaded', function() {
    // URL'den proje ID'sini al
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');

    // Proje detaylarını tanımla (örnek veriler)
    const projects = {
        '1': {
            title: 'Proje 1',
            description: 'Çığır açan bir mobil uygulama detayları burada yer alacak.',
            image: 'project1.jpg',
            features: [
                'Kullanıcı dostu arayüz',
                'Gelişmiş veri analizi',
                'Çoklu platform desteği'
            ],
            startDate: '2023-01-15',
            endDate: '2023-06-30',
            link: 'https://www.project1.com'
        },
        '2': {
            title: 'Proje 2',
            description: 'Yapay zeka destekli web platformu detayları burada yer alacak.',
            image: 'project1.jpg',
            features: [
                'Makine öğrenimi entegrasyonu',
                'Gerçek zamanlı veri işleme',
                'Kullanıcı analitiği'
            ],
            startDate: '2023-03-01',
            endDate: '2023-12-15',
            link: 'https://www.project2.com'
        },
        '3': {
            title: 'Proje 3',
            description: 'Devrim niteliğinde bir IoT çözümü detayları burada yer alacak.',
            image: 'project1.jpg',
            features: [
                'Akıllı cihaz entegrasyonu',
                'Uzun menzil kablosuz bağlantı',
                'Gelişmiş güvenlik özellikleri'
            ],
            startDate: '2023-05-20',
            endDate: '2024-02-28',
            link: 'https://www.project3.com'
        }
    };

    // Proje ID'sine göre bilgileri al
    const project = projects[projectId];

    // Bilgileri sayfada göster
    if (project) {
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-description').textContent = project.description;
        document.getElementById('project-image').src = project.image;
        document.getElementById('project-start-date').textContent = project.startDate;
        document.getElementById('project-end-date').textContent = project.endDate;
        document.getElementById('project-link').href = project.link;

        // Özellikleri listele
        const featuresList = document.getElementById('project-features');
        project.features.forEach(feature => {
            const listItem = document.createElement('li');
            listItem.textContent = feature;
            featuresList.appendChild(listItem);
        });
    } else {
        document.getElementById('project-title').textContent = 'Proje bulunamadı';
        document.getElementById('project-description').textContent = 'Seçtiğiniz proje bilgileri bulunamadı.';
    }
});
