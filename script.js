// EK-2 Formu
function showEk2Modal(employeeIndex) {
    const employee = appState.currentEmployees[employeeIndex];
    appState.currentEmployeeIndex = employeeIndex;
    
    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];
    
    const nextExamDate = new Date();
    nextExamDate.setFullYear(nextExamDate.getFullYear() + 5);
    const formattedNextExamDate = nextExamDate.toISOString().split('T')[0];
    
    const doctorInfo = JSON.parse(localStorage.getItem('doctorInfo')) || {};
    
    const ek2Content = document.getElementById('ek2FormContent');
    ek2Content.innerHTML = `
        <table class="table table-bordered">
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
                    <th colspan="16" style="text-align: left;">${appState.currentWorkplace?.name || ''}</th>
                </tr>
                <tr>
                    <th colspan="2">SGK Sicil No.</th>
                    <th colspan="16" style="text-align: left;"></th>
                </tr>
                <tr>
                    <th colspan="2">Adresi</th>
                    <th colspan="16" style="text-align: left;">${appState.currentWorkplace?.address || ''}</th>
                </tr>
                <tr>
                    <th colspan="2">Tel ve Faks No</th>
                    <th colspan="16" style="text-align: left;"><strong>/</strong></th>
                </tr>
                <tr>
                    <th colspan="2">E-Posta</th>
                    <th colspan="16" style="text-align: left;"></th>
                </tr>
                <tr>
                    <th colspan="18">
                        <p>İşe giriş/periyodik muayene olmayı kabul ettiğimi ve muayene sırasında verdiğim bilgilerin doğru ve eksiksiz olduğunu beyan ederim.</p>
                        <p>Çalışanın Adı Soyadı</p>
                        <p>İMZA</p>
                        <p><strong>ÇALIŞANIN</strong></p>
                    </th>
                </tr>
                <tr>
                    <th colspan="5">Adı ve soyadı</th>
                    <th colspan="13" style="text-align: left;"><strong>${employee.name || ''}</strong></th>
                </tr>
                <tr>
                    <th colspan="5">T.C.Kimlik No</th>
                    <th colspan="13" style="text-align: left;"><strong>${employee.tckn || ''}</strong></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="5">Doğum Yeri ve Tarihi</td>
                    <td colspan="15" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="5">Cinsiyeti</td>
                    <td colspan="15" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="5">Eğitim durumu</td>
                    <td colspan="15" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="5">Medeni durumu</td>
                    <td colspan="4" style="text-align: left;"></td>
                    <td colspan="4" style="text-align: left;">Çocuk sayısı</td>
                    <td colspan="7" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="5">Ev Adresi</td>
                    <td colspan="15" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="5">Tel No.</td>
                    <td colspan="15" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="5">Mesleği</td>
                    <td colspan="15" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="5">Yaptığı iş (Ayrıntılı olarak tanımlanacaktır.)</td>
                    <td colspan="15" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="5">Çalıştığı bölüm</td>
                    <td colspan="15" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="3">Daha önce çalıştığı yerler(Bu günden geçmişe doğru)</td>
                    <td colspan="5" style="text-align: left;">İşkolu</td>
                    <td colspan="9" style="text-align: left;">Yaptığı iş</td>
                    <td colspan="3" style="text-align: left;">Giriş-çıkış tarihi</td>
                </tr>
                <tr>
                    <td colspan="3" style="text-align: left;">1.</td>
                    <td colspan="5" style="text-align: left;"></td>
                    <td colspan="9" style="text-align: left;"></td>
                    <td colspan="3" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="3" style="text-align: left;">2.</td>
                    <td colspan="5" style="text-align: left;"></td>
                    <td colspan="9" style="text-align: left;"></td>
                    <td colspan="3" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="3" style="text-align: left;">3.</td>
                    <td colspan="5" style="text-align: left;"></td>
                    <td colspan="9" style="text-align: left;"></td>
                    <td colspan="3" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="3" style="text-align: left;"><strong>Özgeçmişi</strong></td>
                    <td colspan="17" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="3" style="text-align: left;">Kan grubu</td>
                    <td colspan="17" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="3" style="text-align: left;">Konjenital/kronik hastalık</td>
                    <td colspan="17" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="20" style="text-align: left;">Bağışıklama</td>
                </tr>
                <tr>
                    <td style="text-align: left;">- Tetanoz</td>
                    <td colspan="19" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td style="text-align: left;">- Hepatit</td>
                    <td colspan="19" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td style="text-align: left;">- Diğer</td>
                    <td colspan="19" style="text-align: left;"></td>
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
                    <td colspan="4" style="text-align: left;"></td>
                    <td colspan="7" style="text-align: left;"></td>
                    <td colspan="5" style="text-align: left;"></td>
                    <td colspan="4" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="4" style="text-align: left;"></td>
                    <td colspan="7" style="text-align: left;"></td>
                    <td colspan="5" style="text-align: left;"></td>
                    <td colspan="4" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="4" style="text-align: left;"></td>
                    <td colspan="7" style="text-align: left;"></td>
                    <td colspan="5" style="text-align: left;"></td>
                    <td colspan="4" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="20" style="text-align: left;"><strong>TIBBİ ANAMNEZ</strong></td>
                </tr>
                <tr>
                    <td colspan="15" style="text-align: left;">1. Aşağıdaki yakınmalardan herhangi birini yaşadınız mı?</td>
                    <td colspan="4" style="text-align: left;">Hayır</td>
                    <td style="text-align: left;">Evet</td>
                </tr>
                <tr>
                    <td colspan="15" style="text-align: left;">- Balgamlı öksürük</td>
                    <td colspan="4" style="text-align: left;"></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="15" style="text-align: left;">- Nefes darlığı</td>
                    <td colspan="4" style="text-align: left;"></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="15" style="text-align: left;">- Göğüs ağrısı</td>
                    <td colspan="4" style="text-align: left;"></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="15" style="text-align: left;">- Çarpıntı</td>
                    <td colspan="4" style="text-align: left;"></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="15" style="text-align: left;">- Sırt ağrısı</td>
                    <td colspan="4" style="text-align: left;"></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="15" style="text-align: left;">- İshal veya kabızlık</td>
                    <td colspan="4" style="text-align: left;"></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="15" style="text-align: left;">- Eklemlerde ağrı</td>
                    <td colspan="4" style="text-align: left;"></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="15" style="text-align: left;">-Diğer (belirtiniz)</td>
                    <td colspan="4" style="text-align: left;"></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="15" style="text-align: left;">2. Aşağıdaki hastalıklardan herhangi birini geçirdiniz mi?</td>
                    <td colspan="4" style="text-align: center;">Hayır</td>
                    <td style="text-align: center;">Evet</td>
                </tr>
                <tr>
                    <td colspan="15" style="text-align: left;">- Kalp hastalığı</td>
                    <td colspan="4" style="text-align: left;"></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="15" style="text-align: left;">- Şeker hastalığı</td>
                    <td colspan="4" style="text-align: left;"></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="15" style="text-align: left;">- Böbrek rahatsızlığı</td>
                    <td colspan="4" style="text-align: left;"></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="15" style="text-align: left;">- Sarılık</td>
                    <td colspan="4" style="text-align: left;"></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="15" style="text-align: left;">- Mide veya on iki parmak ülseri</td>
                    <td colspan="4" style="text-align: left;"></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="15" style="text-align: left;">- İşitme kaybı</td>
                    <td colspan="4" style="text-align: left;"></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="15" style="text-align: left;">- Görme bozukluğu</td>
                    <td colspan="4" style="text-align: left;"></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="15" style="text-align: left;">- Sinir sistemi hastalığı</td>
                    <td colspan="4" style="text-align: left;"></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="15" style="text-align: left;">- Deri hastalığı</td>
                    <td colspan="4" style="text-align: left;"></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="15" style="text-align: left;">- Besin zehirlenmesi</td>
                    <td colspan="4" style="text-align: left;"></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="15" style="text-align: left;">-Diğer (belirtiniz)</td>
                    <td colspan="4" style="text-align: left;"></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="10" style="text-align: left;">3. Hastanede yattınız mı?</td>
                    <td colspan="2" style="text-align: left;">Hayır</td>
                    <td colspan="2" style="text-align: left;"></td>
                    <td colspan="3" style="text-align: left;">Evet, ise tanı?</td>
                    <td colspan="3" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="10" style="text-align: left;">4. Ameliyat geçirdiniz mi?</td>
                    <td colspan="2" style="text-align: left;">Hayır</td>
                    <td colspan="2" style="text-align: left;"></td>
                    <td colspan="3" style="text-align: left;">Evet, ise neden?</td>
                    <td colspan="3" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="10" style="text-align: left;">5. İş kazası geçirdiniz mi?</td>
                    <td colspan="2" style="text-align: left;">Hayır</td>
                    <td colspan="2" style="text-align: left;"></td>
                    <td colspan="3" style="text-align: left;">Evet, ise ne oldu?</td>
                    <td colspan="3" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="10" style="text-align: left;">6. Meslek Hastalıkları şüphesi ile ilgili tetkik ve muayeneye tabi tutuldunuz mu?</td>
                    <td colspan="2" style="text-align: left;">Hayır</td>
                    <td colspan="2" style="text-align: left;"></td>
                    <td colspan="3" style="text-align: left;">Evet, ise sonuç?</td>
                    <td colspan="3" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="10" style="text-align: left;">7. Maluliyet aldınız mı?</td>
                    <td colspan="2" style="text-align: left;">Hayır</td>
                    <td colspan="2" style="text-align: left;"></td>
                    <td colspan="3" style="text-align: left;">Evet, ise nedir ve oranı?</td>
                    <td colspan="3" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="10" style="text-align: left;">8. Şu anda herhangi bir tedavi görüyor musunuz?</td>
                    <td colspan="2" style="text-align: left;">Hayır</td>
                    <td colspan="2" style="text-align: left;"></td>
                    <td colspan="3" style="text-align: left;">Evet, ise nedir?</td>
                    <td colspan="3" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="3">9. Sigara içiyor musunuz?</td>
                    <td colspan="3" style="text-align: left;">Hayır</td>
                    <td style="text-align: left;"></td>
                    <td colspan="13" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="3"></td>
                    <td colspan="3" style="text-align: left;">Bırakmış</td>
                    <td style="text-align: left;"></td>
                    <td colspan="6" style="text-align: left;">..........ay/yıl önce</td>
                    <td colspan="4" style="text-align: left;">.............ay/yıl içmiş</td>
                    <td colspan="3" style="text-align: left;">...........adet/gün içmiş</td>
                </tr>
                <tr>
                    <td colspan="3"></td>
                    <td colspan="3" style="text-align: left;">Evet</td>
                    <td style="text-align: left;"></td>
                    <td colspan="6" style="text-align: left;">..........yıldır</td>
                    <td colspan="7" style="text-align: left;">..............adet/gün</td>
                </tr>
                <tr>
                    <td colspan="3">10. Alkol alıyor musunuz?</td>
                    <td colspan="3" style="text-align: left;">Hayır</td>
                    <td style="text-align: left;"></td>
                    <td colspan="13" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="3" style="text-align: left;"></td>
                    <td colspan="3" style="text-align: left;">Bırakmış</td>
                    <td style="text-align: left;"></td>
                    <td colspan="6" style="text-align: left;">..............yıl önce</td>
                    <td colspan="4" style="text-align: left;">..............yıl içmiş</td>
                    <td colspan="3" style="text-align: left;">................sıklıkla içmiş</td>
                </tr>
                <tr>
                    <td colspan="3" style="text-align: left;"></td>
                    <td colspan="3" style="text-align: left;">Evet</td>
                    <td style="text-align: left;"></td>
                    <td colspan="6" style="text-align: left;">..........yıldır</td>
                    <td colspan="7" style="text-align: left;">..............sıklıkla</td>
                </tr>
                <tr>
                    <td colspan="20" style="text-align: left;"><strong>FİZİK MUAYENE SONUÇLARI</strong></td>
                </tr>
                <tr>
                    <td colspan="6" style="text-align: left;">a) Duyu organları</td>
                    <td colspan="14" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="6" style="text-align: left;">- Göz</td>
                    <td colspan="14" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="6" style="text-align: left;">- Kulak-Burun-Boğaz</td>
                    <td colspan="14" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="6" style="text-align: left;">- Deri</td>
                    <td colspan="14" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="6">b) Kardiyovasküler sistem muayenesi</td>
                    <td colspan="14" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="6">c) Solunum sistemi muayenesi</td>
                    <td colspan="14" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="6">d) Sindirim sistemi muayenesi</td>
                    <td colspan="14" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="6">e) Ürogenital sistem muayenesi</td>
                    <td colspan="14" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="6">f) Kas-iskelet sistemi muayenesi</td>
                    <td colspan="14" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="6" style="text-align: left;">g) Nörolojik muayene</td>
                    <td colspan="14" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="6" style="text-align: left;">ğ) Psikiyatrik muayene</td>
                    <td colspan="14" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="6" style="text-align: left;">h) Diğer</td>
                    <td colspan="14" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="20" style="text-align: left;">-TA : / mm-Hg</td>
                </tr>
                <tr>
                    <td colspan="20" style="text-align: left;">-Nb : / dk.</td>
                </tr>
                <tr>
                    <td colspan="20" style="text-align: left;">-Boy: Kilo: Vücut Kitle İndeksi :</td>
                </tr>
                <tr>
                    <td colspan="20" style="text-align: left;"><strong>LABORATUVAR BULGULARI</strong></td>
                </tr>
                <tr>
                    <td colspan="6" style="text-align: left;">a) Biyolojik analizler</td>
                    <td colspan="14" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="6" style="text-align: left;">- Kan</td>
                    <td colspan="14" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="6" style="text-align: left;">- İdrar</td>
                    <td colspan="14" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="6" style="text-align: left;">b) Radyolojik analizler</td>
                    <td colspan="14" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="6" style="text-align: left;">c) Fizyolojik analizler</td>
                    <td colspan="14" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="6" style="text-align: left;">- Odyometre</td>
                    <td colspan="14" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="6" style="text-align: left;">- SFT</td>
                    <td colspan="14" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="6" style="text-align: left;">d) Psikolojik testler</td>
                    <td colspan="14" style="text-align: left;"></td>
                </tr>
                <tr>
                    <td colspan="6" style="text-align: left;">e) Diğer</td>
                    <td colspan="14" style="text-align: left;"></td>
                </tr>
            </tbody>
        </table>

        <div class="mt-3">
            <p><strong>KANAAT VE SONUÇ * :</strong></p>
            <p>1- ...................................................................................................................................................... işinde bedenen ve ruhen çalışmaya elverişlidir.</p>
            <p>2- ................................................................................................................................... şartı ile çalışmaya elverişlidir</p>
            <p class="small">(*Yapılan muayene sonucunda çalışanın gece veya vardiyalı çalışma koşullarında çalışıp çalışamayacağı ile vücut sağlığını ve bütünlüğünü tamamlayıcı uygun alet teçhizat vs... bulunması durumunda çalışan için bu koşullarla çalışmaya elverişli olup olmadığı kanaati belirtilecektir.)</p>
        </div>

        <div class="mt-4 border-top pt-3">
            <div class="row">
                <div class="col-md-6">
                    <p class="mb-1">${formattedToday.split('-').reverse().join('.')}</p>
                </div>
                <div class="col-md-6">
                    <div class="signature-line mb-2"></div>
                    <div class="text-center">
                        <p class="mb-0">${doctorInfo.name || 'Doktor Adı Soyadı'}</p>
                        <p class="small text-muted">Diploma No: ${doctorInfo.diplomaNo || ''} - Tarih: ${doctorInfo.diplomaDate || ''}</p>
                        <p class="small text-muted">Sertifika No: ${doctorInfo.certificateNo || ''} - Tarih: ${doctorInfo.certificateDate || ''}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const ek2Modal = new bootstrap.Modal(document.getElementById('ek2Modal'));
    ek2Modal.show();
}
