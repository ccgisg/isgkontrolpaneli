// EK-2 Formu
function showEk2Modal(employeeIndex) {
    const employee = appState.currentEmployees[employeeIndex];
    appState.currentEmployeeIndex = employeeIndex;
    
    const today = new Date();
    const formattedToday = today.toLocaleDateString('tr-TR');
    const formattedTodayInput = today.toISOString().split('T')[0];
    
    const nextExamDate = new Date();
    nextExamDate.setFullYear(nextExamDate.getFullYear() + 5);
    const formattedNextExamDate = nextExamDate.toLocaleDateString('tr-TR');
    const formattedNextExamDateInput = nextExamDate.toISOString().split('T')[0];
    
    const ek2Content = document.getElementById('ek2FormContent');
    ek2Content.innerHTML = `
        <style>
            .ek2-form-table {
                width: 100%;
                border-collapse: collapse;
                font-size: 12px;
            }
            .ek2-form-table td, .ek2-form-table th {
                border: 1px solid #000;
                padding: 5px;
                vertical-align: top;
            }
            .ek2-form-table input {
                border: none;
                width: 100%;
                background: transparent;
            }
            .ek2-form-table input:focus {
                outline: none;
                background: #f0f8ff;
            }
            .ek2-form-container {
                overflow-x: auto;
            }
        </style>
        <div class="ek2-form-container">
            <table class="ek2-form-table">
                <colgroup>
                    <col style="width: 16%" />
                    <col style="width: 1%" />
                    <col style="width: 2%" />
                    <col style="width: 0%" />
                    <col style="width: 7%" />
                    <col style="width: 0%" />
                    <col style="width: 3%" />
                    <col style="width: 2%" />
                    <col style="width: 1%" />
                    <col style="width: 2%" />
                    <col style="width: 6%" />
                    <col style="width: 1%" />
                    <col style="width: 2%" />
                    <col style="width: 2%" />
                    <col style="width: 7%" />
                    <col style="width: 8%" />
                    <col style="width: 0%" />
                    <col style="width: 2%" />
                    <col style="width: 5%" />
                    <col style="width: 20%" />
                </colgroup>
                <thead>
                    <tr>
                        <th colspan="18" style="text-align: left;"><strong>İŞYERİNİN</strong></th>
                        <th colspan="2" rowspan="9" style="text-align: left;"></th>
                    </tr>
                    <tr>
                        <th colspan="2">Ünvanı</th>
                        <th colspan="16" style="text-align: left;"><input type="text" value="${appState.currentWorkplace?.name || ''}"></th>
                    </tr>
                    <tr>
                        <th colspan="2">SGK Sicil No.</th>
                        <th colspan="16" style="text-align: left;"><input type="text"></th>
                    </tr>
                    <tr>
                        <th colspan="2">Adresi</th>
                        <th colspan="16" style="text-align: left;"><input type="text" value="${appState.currentWorkplace?.address || ''}"></th>
                    </tr>
                    <tr>
                        <th colspan="2">Tel ve Faks No</th>
                        <th colspan="16" style="text-align: left;"><input type="text" value="/"></th>
                    </tr>
                    <tr>
                        <th colspan="2">E-Posta</th>
                        <th colspan="16" style="text-align: left;"><input type="text"></th>
                    </tr>
                    <tr>
                        <th colspan="18">
                            <p>İşe giriş/periyodik muayene olmayı kabul ettiğimi ve muayene sırasında verdiğim bilgilerin doğru ve eksiksiz olduğunu beyan ederim.</p>
                            <p>Çalışanın Adı Soyadı: <input type="text" value="${employee.name || ''}"></p>
                            <p>İMZA</p>
                            <p><strong>ÇALIŞANIN</strong></p>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="5">Adı ve soyadı</th>
                        <th colspan="13" style="text-align: left;"><input type="text" value="${employee.name || ''}"></th>
                    </tr>
                    <tr>
                        <th colspan="5">T.C.Kimlik No</th>
                        <th colspan="13" style="text-align: left;"><input type="text" value="${employee.tckn || ''}"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="5">Doğum Yeri ve Tarihi</td>
                        <td colspan="15" style="text-align: left;"><input type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="5">Cinsiyeti</td>
                        <td colspan="15" style="text-align: left;"><input type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="5">Eğitim durumu</td>
                        <td colspan="15" style="text-align: left;"><input type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="5">Medeni durumu</td>
                        <td colspan="4" style="text-align: left;"><input type="text"></td>
                        <td colspan="4" style="text-align: left;">Çocuk sayısı</td>
                        <td colspan="7" style="text-align: left;"><input type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="5">Ev Adresi</td>
                        <td colspan="15" style="text-align: left;"><input type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="5">Tel No.</td>
                        <td colspan="15" style="text-align: left;"><input type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="5">Mesleği</td>
                        <td colspan="15" style="text-align: left;"><input type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="5">Yaptığı iş (Ayrıntılı olarak tanımlanacaktır.)</td>
                        <td colspan="15" style="text-align: left;"><input type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="5">Çalıştığı bölüm</td>
                        <td colspan="15" style="text-align: left;"><input type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="3">Daha önce çalıştığı yerler(Bu günden geçmişe doğru)</td>
                        <td colspan="5" style="text-align: left;">İşkolu</td>
                        <td colspan="9" style="text-align: left;">Yaptığı iş</td>
                        <td colspan="3" style="text-align: left;">Giriş-çıkış tarihi</td>
                    </tr>
                    <tr>
                        <td colspan="3" style="text-align: left;">1.</td>
                        <td colspan="5" style="text-align: left;"><input type="text"></td>
                        <td colspan="9" style="text-align: left;"><input type="text"></td>
                        <td colspan="3" style="text-align: left;"><input type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="text-align: left;">2.</td>
                        <td colspan="5" style="text-align: left;"><input type="text"></td>
                        <td colspan="9" style="text-align: left;"><input type="text"></td>
                        <td colspan="3" style="text-align: left;"><input type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="text-align: left;">3.</td>
                        <td colspan="5" style="text-align: left;"><input type="text"></td>
                        <td colspan="9" style="text-align: left;"><input type="text"></td>
                        <td colspan="3" style="text-align: left;"><input type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="text-align: left;"><strong>Özgeçmişi</strong></td>
                        <td colspan="17" style="text-align: left;"><input type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="text-align: left;">Kan grubu</td>
                        <td colspan="17" style="text-align: left;"><input type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="text-align: left;">Konjenital/kronik hastalık</td>
                        <td colspan="17" style="text-align: left;"><input type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="20" style="text-align: left;">Bağışıklama</td>
                    </tr>
                    <tr>
                        <td style="text-align: left;">- Tetanoz</td>
                        <td colspan="19" style="text-align: left;"><input type="text"></td>
                    </tr>
                    <tr>
                        <td style="text-align: left;">- Hepatit</td>
                        <td colspan="19" style="text-align: left;"><input type="text"></td>
                    </tr>
                    <tr>
                        <td style="text-align: left;">- Diğer</td>
                        <td colspan="19" style="text-align: left;"><input type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="20" style="text-align: left;"><strong>Soygeçmişi</strong></td>
                    </tr>
                    <tr>
                        <td colspan="4" style="text-align: left;">Anne</td>
                        <td colspan="7" style="text-align: left;">Baba</td>
                        <td colspan="5" style="text-align: left;">Kardeş</td>
                        <td colspan="4" style="text-align: left;">Çocuk</td>
                    </tr>
                    <tr>
                        <td colspan="4" style="text-align: left;"><input type="text"></td>
                        <td colspan="7" style="text-align: left;"><input type="text"></td>
                        <td colspan="5" style="text-align: left;"><input type="text"></td>
                        <td colspan="4" style="text-align: left;"><input type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="4" style="text-align: left;"><input type="text"></td>
                        <td colspan="7" style="text-align: left;"><input type="text"></td>
                        <td colspan="5" style="text-align: left;"><input type="text"></td>
                        <td colspan="4" style="text-align: left;"><input type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="4" style="text-align: left;"><input type="text"></td>
                        <td colspan="7" style="text-align: left;"><input type="text"></td>
                        <td colspan="5" style="text-align: left;"><input type="text"></td>
                        <td colspan="4" style="text-align: left;"><input type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="20" style="text-align: left;"><strong>TIBBİ ANAMNEZ</strong></td>
                    </tr>
                    <tr>
                        <td colspan="15" style="text-align: left;">1. Aşağıdaki yakınmalardan herhangi birini yaşadınız mı?</td>
                        <td colspan="4" style="text-align: left;">Hayır <input type="radio" name="symptoms" value="no"></td>
                        <td style="text-align: left;">Evet <input type="radio" name="symptoms" value="yes"></td>
                    </tr>
                    <!-- Diğer tıbbi anamnez soruları bu şekilde devam eder -->
                    
                    <!-- Fizik Muayene Sonuçları -->
                    <tr>
                        <td colspan="20" style="text-align: left;"><strong>FİZİK MUAYENE SONUÇLARI</strong></td>
                    </tr>
                    <tr>
                        <td colspan="20" style="text-align: left;">-TA : <input type="text" style="width: 80px;"> / mm-Hg</td>
                    </tr>
                    <tr>
                        <td colspan="20" style="text-align: left;">-Nb : <input type="text" style="width: 80px;"> / dk.</td>
                    </tr>
                    <tr>
                        <td colspan="20" style="text-align: left;">-Boy: <input type="text" style="width: 80px;"> Kilo: <input type="text" style="width: 80px;"> Vücut Kitle İndeksi : <input type="text" style="width: 80px;"></td>
                    </tr>
                    
                    <!-- Kanaat ve Sonuç -->
                    <tr>
                        <td colspan="20">
                            <p><strong>KANAAT VE SONUÇ * :</strong></p>
                            <p><strong>1-</strong> <input type="text" style="width: 80%;" placeholder="işinde bedenen ve ruhen çalışmaya elverişlidir."></p>
                            <p><strong>2-</strong> <input type="text" style="width: 80%;" placeholder="şartı ile çalışmaya elverişlidir"></p>
                            <p><em>(*Yapılan muayene sonucunda çalışanın gece veya vardiyalı çalışma koşullarında çalışıp çalışamayacağı ile vücut sağlığını ve bütünlüğünü tamamlayıcı uygun alet teçhizat vs... bulunması durumunda çalışan için bu koşullarla çalışmaya elverişli olup olmadığı kanaati belirtilecektir.)</em></p>
                        </td>
                    </tr>
                    
                    <!-- İmza Bölümü -->
                    <tr>
                        <td colspan="20">
                            <div style="text-align: center; margin-top: 20px;">
                                <p>${formattedToday}</p>
                                <div style="border-top: 1px solid #000; width: 300px; margin: 10px auto;"></div>
                                <p>İMZA</p>
                                <div style="margin-top: 20px; text-align: left; width: 60%; margin-left: auto; margin-right: auto;">
                                    <p>Adı ve Soyadı: <input type="text" style="width: 70%;"></p>
                                    <p>Diploma Tarih ve No: <input type="text" style="width: 70%;"></p>
                                    <p>Diploma Tescil Tarih ve No: <input type="text" style="width: 70%;"></p>
                                    <p>İşyeri Hekimliği Belgesi Tarih ve No: <input type="text" style="width: 70%;"></p>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    const ek2Modal = new bootstrap.Modal(document.getElementById('ek2Modal'));
    ek2Modal.show();
    
    // Tarih değişikliklerini dinle
    const examDateInput = document.getElementById('ek2ExamDate');
    if (examDateInput) {
        examDateInput.addEventListener('change', function() {
            const examDate = new Date(this.value);
            const nextExamDate = new Date(examDate);
            nextExamDate.setFullYear(nextExamDate.getFullYear() + 5);
            document.getElementById('ek2NextExamDate').value = nextExamDate.toISOString().split('T')[0];
        });
    }
}
