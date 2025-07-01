// Veritabanı Sınıfı (Optimize Edilmiş)
class Database {
    constructor() {
        this.dbName = 'isyeriHekimligiDB';
        this.version = this.getDBVersion();
        this.db = null;
    }

    getDBVersion() {
        return parseInt(localStorage.getItem('dbVersion')) || 5;
    }

    async initDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.version);

            request.onerror = (event) => {
                console.error("Veritabanı hatası:", event.target.error);
                reject(new Error(`Veritabanı açılamadı: ${event.target.error.message}`));
            };

            request.onblocked = () => {
                reject(new Error("Veritabanı başka bir sekmede açık. Lütfen diğer sekmeleri kapatın."));
            };

            request.onsuccess = (event) => {
                this.db = event.target.result;
                resolve(this.db);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                const oldVersion = event.oldVersion;
                
                // Schema güncellemeleri
                if (!db.objectStoreNames.contains('workplaces')) {
                    db.createObjectStore('workplaces', { keyPath: 'id' });
                }
                
                let employeeStore;
                if (!db.objectStoreNames.contains('employees')) {
                    employeeStore = db.createObjectStore('employees', { keyPath: 'id' });
                } else {
                    employeeStore = event.target.transaction.objectStore('employees');
                }
                
                if (!employeeStore.indexNames.contains('workplaceId')) {
                    employeeStore.createIndex('workplaceId', 'workplaceId', { unique: false });
                }

                if (!db.objectStoreNames.contains('files')) {
                    db.createObjectStore('files', { keyPath: 'id' });
                }

                localStorage.setItem('dbVersion', this.version);
            };
        });
    }

    // Diğer metodlar aynı kalabilir...
}

// EK-2 Formu Düzeltmesi
function showEk2Modal(employeeIndex) {
    const employee = appState.currentEmployees[employeeIndex];
    if (!employee) {
        showError('Çalışan bilgisi bulunamadı');
        return;
    }

    // Düzeltilmiş Google Docs URL
    const docxUrl = 'https://docs.google.com/document/d/1i_4ZaDcmsPYuLDzGwAdxuD5CYgfGaRHG/edit?usp=sharing';
    const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(docxUrl)}&embedded=true`;
    
    document.getElementById('ek2FormContent').innerHTML = `
        <iframe src="${viewerUrl}" width="100%" height="600px" frameborder="0"></iframe>
        <div class="employee-info mt-3">
            <p><strong>Ad Soyad:</strong> ${employee.name || ''}</p>
            <p><strong>TCKN:</strong> ${employee.tckn || ''}</p>
        </div>
    `;
    
    appState.currentEmployeeIndex = employeeIndex;
    new bootstrap.Modal(document.getElementById('ek2Modal')).show();
}

// Dosya Yükleme İyileştirmesi
async function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    if (!fileInput.files || fileInput.files.length === 0) {
        showError('Lütfen bir dosya seçin');
        return;
    }

    const file = fileInput.files[0];
    const employee = appState.currentEmployees[appState.currentFileUploadIndex];
    
    if (!employee) {
        showError('Çalışan bilgisi bulunamadı');
        return;
    }

    try {
        const fileData = {
            id: Date.now().toString(),
            employeeId: employee.id,
            workplaceId: appState.currentWorkplace.id,
            name: file.name,
            type: file.type,
            size: file.size,
            lastModified: file.lastModified,
            uploadDate: new Date().toISOString()
        };

        await appState.db.addFile(fileData);
        alert(`${employee.name} için ${file.name} dosyası başarıyla yüklendi`);
        
        bootstrap.Modal.getInstance(document.getElementById('fileUploadModal')).hide();
    } catch (error) {
        console.error('Dosya yükleme hatası:', error);
        showError('Dosya yüklenirken hata oluştu: ' + error.message);
    }
}

// Excel Export Güvenlik Kontrolü
function exportToExcel() {
    try {
        if (typeof XLSX === 'undefined') {
            throw new Error('XLSX kütüphanesi yüklenmedi');
        }

        if (!appState.currentWorkplace) {
            throw new Error('İşyeri bilgisi bulunamadı');
        }

        if (!appState.currentEmployees || appState.currentEmployees.length === 0) {
            throw new Error('Dışa aktarılacak çalışan bulunamadı');
        }

        // Veri hazırlama
        const data = [
            ['S.No', 'Ad Soyad', 'TCKN', 'Muayene Tarihi', 'Sonraki Muayene Tarihi'],
            ...appState.currentEmployees.map((emp, index) => [
                index + 1,
                emp.name || '',
                emp.tckn || '',
                emp.examDate ? formatDate(emp.examDate) : '',
                emp.nextExamDate ? formatDate(emp.nextExamDate) : ''
            ])
        ];

        // Excel dosyası oluşturma
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, 'Çalışan Listesi');

        // Dosyayı indirme
        const fileName = `${appState.currentWorkplace.name}_Çalışan_Listesi_${new Date().toISOString().slice(0,10)}.xlsx`;
        XLSX.writeFile(wb, fileName);
    } catch (error) {
        console.error('Excel export hatası:', error);
        showError('Excel dosyası oluşturulamadı: ' + error.message);
    }
}
