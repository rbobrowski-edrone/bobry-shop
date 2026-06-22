// =============================================
// PRODUCT & CATEGORY DATA
// =============================================

const STORE_URL = window.location.origin + window.location.pathname.replace(/[^/]*$/, '');

const categories = [
    { id: '1', name: 'Drewno & Patyki', icon: '\u{1FAB5}', description: 'Selekcjonowane drewno z polskich lasów — od premium patyków po sezonowane polana.' },
    { id: '2', name: 'Materiały Budowlane', icon: '\u{1F9F1}', description: 'Wszystko do żeremia i tamy — zaprawy, uszczelniacze, mech, glina.' },
    { id: '3', name: 'Pielęgnacja Zębów', icon: '\u{1F9B7}', description: 'Profesjonalne ostrzenie i pielęgnacja siekaczy. Twoje narzędzie pracy zasługuje na najlepsze.' },
    { id: '4', name: 'Przekąski', icon: '\u{1F33F}', description: 'Wyselekcjonowane przysmaki — kora, pączki, korzonki. Bez konserwantów.' },
    { id: '6', name: 'Cyfrowa Pracownia', icon: '\u{1F9E0}', description: 'LLM-y, serwery MCP i pliki .skill dla bobrów-builderów. Tradycja spotyka algorytmy.' },
    { id: '5', name: 'Zestawy & Prezenty', icon: '\u{1F381}', description: 'Skompletowane pakiety na każdą okazję życiową bobra.' }
];

const products = [
    { id: 'WOD-001', title: 'Patyk Brzozowy Premium "Mistrzowski" 30cm', price: 24.99, categoryId: '1', categoryName: 'Drewno & Patyki', icon: '\u{1FAB5}', sku: 'BOB-WOD-001', image: 'images/WOD-001.png', description: 'Ręcznie selekcjonowany patyk brzozowy z lasów Roztocza. Idealny balans giętkości i kruchości, sprawdzony przez trzy pokolenia bobrów Kowalskich. Średnica 2cm, długość 30cm. Bez sęków.' },
    { id: 'WOD-002', title: 'Gałąź Osikowa Codziennego Użytku 50cm', price: 18.99, categoryId: '1', categoryName: 'Drewno & Patyki', icon: '\u{1F33F}', sku: 'BOB-WOD-002', image: 'images/WOD-002.png', description: 'Klasyczna gałąź osiki — nasz bestseller od 2024 roku. Lekka, łatwa w transporcie, doskonała zarówno do prac konstrukcyjnych jak i wieczornych przekąsek. Sprzedawana na sztuki.' },
    { id: 'WOD-003', title: 'Polano Dębowe Reserva 18 miesięcy', price: 89.99, categoryId: '1', categoryName: 'Drewno & Patyki', icon: '\u{1FAB5}', sku: 'BOB-WOD-003', image: 'images/WOD-003.png', description: 'Dębowe polano sezonowane 18 miesięcy w naszej suszarni nad Wisłą. Aromat tytoniu i wanilii, długie wykończenie. Limitowana edycja jesienna. Ok. 4kg.' },
    { id: 'WOD-004', title: 'Zestaw Craftowy Mieszany 12 szt.', price: 64.99, categoryId: '1', categoryName: 'Drewno & Patyki', icon: '\u{1FAB5}', sku: 'BOB-WOD-004', image: 'images/WOD-004.png', aiAssisted: true, description: 'Wyselekcjonowany mix: brzoza, osika, wierzba, topola — po 3 kawałki każdego gatunku. Selekcja przez computer vision, ostateczna weryfikacja przez bobra-mistrza. Z kartą degustacyjną i sugerowanym pairingiem do projektów żeremiowych.' },
    { id: 'BLD-001', title: 'Zaprawa do Żeremi "ŻereMix Pro" 5kg', price: 79.99, categoryId: '2', categoryName: 'Materiały Budowlane', icon: '\u{1F9F1}', sku: 'BOB-BLD-001', image: 'images/BLD-001.png', description: 'Profesjonalna zaprawa na bazie gliny bagiennej i mchu wodoodpornego. Schnie pod wodą, odporna na erozję, rekomendowana przez Stowarzyszenie Architektów Żeremiowych. Wystarcza na ok. 2m² powierzchni.' },
    { id: 'BLD-002', title: 'Uszczelniacz do Tam EkoStop 1L', price: 49.99, categoryId: '2', categoryName: 'Materiały Budowlane', icon: '\u{1F6E2}\u{FE0F}', sku: 'BOB-BLD-002', image: 'images/BLD-002.png', description: 'Naturalny uszczelniacz na bazie żywicy świerkowej. Wodoodporny do 8 atmosfer, mrozoodporny do -25°C, bezpieczny dla ryb i roślin wodnych. Aplikator w zestawie.' },
    { id: 'BLD-003', title: 'Mech Sphagnum Klasa A 2kg', price: 34.99, categoryId: '2', categoryName: 'Materiały Budowlane', icon: '\u{1F331}', sku: 'BOB-BLD-003', image: 'images/BLD-003.png', aiAssisted: true, description: 'Premium mech torfowy zbierany ręcznie na Bagnach Biebrzańskich. Doskonała izolacja termiczna i akustyczna żeremia. Naturalnie antybakteryjny. Każda dostawa skanowana CNN-em pod kątem patogenów i obcych zanieczyszczeń. Pakowany w worku oddychającym.' },
    { id: 'BLD-004', title: 'Glina Bagienna "DamSeal" Premium 10kg', price: 56.99, categoryId: '2', categoryName: 'Materiały Budowlane', icon: '\u{1FAA3}', sku: 'BOB-BLD-004', image: 'images/BLD-004.png', description: 'Drobnoziarnista glina z czystych źródeł podlaskich, gotowa do użycia. Idealna do uszczelniania krytycznych elementów konstrukcyjnych. Wiadro z ergonomicznym uchwytem do transportu w zębach.' },
    { id: 'TTH-001', title: 'Kamień Ostrzący Arkansas "SiekaczMaster"', price: 119.99, categoryId: '3', categoryName: 'Pielęgnacja Zębów', icon: '\u{1FAA8}', sku: 'BOB-TTH-001', image: 'images/TTH-001.png', description: 'Naturalny kamień ostrzący z USA, gradacja 1200. Klasyczna pomoc w codziennej pielęgnacji siekaczy. Dwustronny: zgrubny i wykańczający. Z futerałem z naturalnej skóry.' },
    { id: 'TTH-002', title: 'Pasta do Polerowania Siekaczy "EmaliaShine" 50ml', price: 39.99, categoryId: '3', categoryName: 'Pielęgnacja Zębów', icon: '\u{1F9F4}', sku: 'BOB-TTH-002', image: 'images/TTH-002.png', description: 'Naturalna pasta z mikrokryształkami krzemienia i ekstraktem z dębu. Wzmacnia szkliwo, usuwa naloty po korze brzozowej, zostawia delikatny aromat sosny. Tubka starcza na ok. 3 miesiące.' },
    { id: 'TTH-003', title: 'Krzemień Mistrzowski 2000 grit', price: 89.99, categoryId: '3', categoryName: 'Pielęgnacja Zębów', icon: '\u{1F48E}', sku: 'BOB-TTH-003', image: 'images/TTH-003.png', description: 'Drobnoziarnisty krzemień do finalnego ostrzenia. Wykończenie lustrzane, gotowe na każdą gałąź. Pochodzenie: kopalnia w Krzemionkach Opatowskich. Z certyfikatem autentyczności.' },
    { id: 'TTH-004', title: 'Olejek do Pielęgnacji Szkliwa "ZębOil" 30ml', price: 29.99, categoryId: '3', categoryName: 'Pielęgnacja Zębów', icon: '\u{1F4A7}', sku: 'BOB-TTH-004', image: 'images/TTH-004.png', description: 'Mieszanka olejków: migdałowy, jojoba, ekstrakt z propolisu. Codzienna pielęgnacja, ochrona przed mikropęknięciami. Aplikator z pędzelkiem z naturalnego włosia.' },
    { id: 'SNK-001', title: 'Kora Brzozowa Suszona "Chrupka" 200g', price: 22.99, categoryId: '4', categoryName: 'Przekąski', icon: '\u{1F968}', sku: 'BOB-SNK-001', image: 'images/SNK-001.png', description: 'Chrupiąca kora brzozowa, suszona naturalnie 48h. Delikatny smak migdałów, lekko goryczkowy finisz. Idealna na wieczorną przekąskę przy budowie tamy. Bez konserwantów.' },
    { id: 'SNK-002', title: 'Pączki Wierzbowe w Marynacie 150g', price: 28.99, categoryId: '4', categoryName: 'Przekąski', icon: '\u{1FAD9}', sku: 'BOB-SNK-002', image: 'images/SNK-002.png', description: 'Wczesnowiosenne pączki wierzby białej marynowane w soli morskiej i ziołach. Tekstura jak kapary, smak ziołowy, świeży. Pairing idealny z polanem dębowym. Słoik 150g.' },
    { id: 'SNK-003', title: 'Korzonki Tatarakowe Snack 100g', price: 19.99, categoryId: '4', categoryName: 'Przekąski', icon: '\u{1F330}', sku: 'BOB-SNK-003', image: 'images/SNK-003.png', description: 'Suszone korzonki tataraku z Mazur. Aromat goździków i imbiru, lekko ostry finisz. Tradycyjna przekąska bobrowa, znana z właściwości trawiennych. Saszetka resealable.' },
    { id: 'SNK-004', title: 'Mix Liściasty Premium 250g', price: 26.99, categoryId: '4', categoryName: 'Przekąski', icon: '\u{1F342}', sku: 'BOB-SNK-004', image: 'images/SNK-004.png', description: 'Suszony mix liści: topola, osika, wierzba, jesion. Różnorodność tekstur i smaków w jednym opakowaniu. Idealne na dłuższe wyprawy poza terytorium.' },
    { id: 'SET-001', title: 'Zestaw Startowy "Młody Bóbr"', price: 149.99, categoryId: '5', categoryName: 'Zestawy & Prezenty', icon: '\u{1F381}', sku: 'BOB-SET-001', image: 'images/SET-001.png', description: 'Wszystko czego potrzebujesz do pierwszej tamy: 5 patyków konstrukcyjnych, 1kg zaprawy ŻereMix, mała tubka uszczelniacza, ilustrowany przewodnik "Twoja pierwsza tama w 7 krokach". Idealny prezent dla młodego pokolenia.' },
    { id: 'SET-002', title: 'Zestaw Profesjonalny "Architekt Żeremia"', price: 449.99, categoryId: '5', categoryName: 'Zestawy & Prezenty', icon: '\u{1F9F0}', sku: 'BOB-SET-002', image: 'images/SET-002.png', description: 'Kompletny zestaw dla zaawansowanych: 5kg ŻereMix, 1L uszczelniacza, 2kg mchu, miarka składana 3m, plan architektoniczny żeremia DIY i roczna subskrypcja kwartalnika "Współczesne Żeremie".' },
    { id: 'SET-003', title: 'Pakiet Powodziowy "EmergencyDam"', price: 199.99, categoryId: '5', categoryName: 'Zestawy & Prezenty', icon: '\u{1F392}', sku: 'BOB-SET-003', image: 'images/SET-003.png', description: 'Zestaw awaryjny na wiosenne roztopy: szybkoschnąca zaprawa 2kg, uszczelniacz ekspresowy 500ml, 10 patyków konstrukcyjnych, latarka czołowa wodoodporna. Pakowane w worek wodoszczelny.' },
    { id: 'SET-004', title: 'Pakiet Premium "Castor Lifestyle"', price: 329.99, categoryId: '5', categoryName: 'Zestawy & Prezenty', icon: '\u{1F381}', sku: 'BOB-SET-004', image: 'images/SET-004.png', description: 'Wykwintny prezent: dębowe polano Reserva 18m, kamień ostrzący Arkansas, słoik pączków wierzbowych, kora brzozowa premium 200g. W eleganckim drewnianym pudełku z grawerunkiem.' },
    { id: 'AID-001', title: 'ŻereGPT Pro · Doradca Architektoniczny LLM-as-a-Service', price: 599.00, categoryId: '6', categoryName: 'Cyfrowa Pracownia', icon: '\u{1F9E0}', sku: 'BOB-AID-001', image: 'images/AID-001.png', aiAssisted: true, description: 'Personalny agent oparty na modelu Beaver 2.1 Pro, dofinetiunowany na 40 000 planów żeremi z lat 1923–2025. Doradza w doborze gatunków drewna, optymalizacji kąta tamy i wytrzymałości konstrukcji pod prognozowane roztopy. Dostęp przez REST API, dedykowany MCP server lub przeglądarkowe UI. Subskrypcja roczna, bez rate-limitów na bobra.' },
    { id: 'AID-002', title: 'Castor MCP Hub · Hostowany Serwer MCP', price: 49.00, categoryId: '6', categoryName: 'Cyfrowa Pracownia', icon: '\u{1F310}', sku: 'BOB-AID-002', image: 'images/AID-002.png', aiAssisted: true, description: 'Zarządzany serwer MCP z 24 narzędziami specyficznymi dla branży bobrowej: sprawdzenie stanu magazynu, integracja z IMGW, symulator tamy, dane hydrologiczne, optymalizator receptur zapraw, generator faktur. SLA 99.9%, audit logi, RBAC. Transport: stdio, SSE i WebSocket. Wsparcie dla Claude Desktop, Claude Code, Cursor, Windsurf. Subskrypcja miesięczna 49 zł/mc, roczna 499 zł.' },
    { id: 'AID-003', title: 'Pattern Pack · 240+ Promptów dla Bobra-Buildera', price: 89.00, categoryId: '6', categoryName: 'Cyfrowa Pracownia', icon: '\u{1F4D1}', sku: 'BOB-AID-003', image: 'images/AID-003.png', aiAssisted: true, description: 'Wyselekcjonowana kolekcja 240+ promptów wypracowanych przez naszych seniorów. Cztery moduły: Codzienne Rzemiosło (przeglądy kodu w idiomatycznym polskim, refaktoryzacja patyków konstrukcyjnych), Architektura Tam (projektowanie systemów, RFC), Ocena Przekąsek (rubryki oceniające) oraz Dokumentacja Żeremia (autogeneracja dokumentacji). Format markdown z YAML frontmatter, aktualizacje przez kanał RSS.' },
    { id: 'AID-004', title: 'TamoSkan Pro · Wizualna Inspekcja Tam', price: 149.00, categoryId: '6', categoryName: 'Cyfrowa Pracownia', icon: '\u{1F50D}', sku: 'BOB-AID-004', image: 'images/AID-004.png', aiAssisted: true, description: 'Aplikacja mobilna i desktopowa do wizualnej inspekcji tam i żeremi. Wgrywasz 8–24 zdjęcia z różnych kątów (lub przelot drona w 4K), model Beaver 2.1 Pro Vision identyfikuje 14 klas defektów: pęknięcia konstrukcyjne, wycieki, drewno w fazie rozkładu, niedostateczne uszczelnienie, erozję, biofilm. Raport PDF z mapą punktową, priorytetami napraw oraz listą rekomendowanych produktów z naszego sklepu. iOS, Android, macOS, Linux. Subskrypcja 149 zł/mc lub 1499 zł/rok.' },
    { id: 'SKL-001', title: 'tree-species-detector.skill', price: 49.00, categoryId: '6', categoryName: 'Cyfrowa Pracownia', icon: '\u{1F4DC}', sku: 'BOB-SKL-001', image: 'images/SKL-001.svg', aiAssisted: true, description: 'Skill uruchamiany gdy bóbr potrzebuje rozpoznać gatunek drzewa ze zdjęcia kory lub próbki drewna. Zwraca nazwę gatunku, klasę twardości (1–5) i rekomendowane zastosowanie. Wymaga modelu wizyjnego — testowany na Beaver 2.1 Pro Vision. Format: pojedynczy plik .skill z YAML frontmatter, ok. 3 KB, gotowy do wrzucenia do ~/.claude/skills/.' },
    { id: 'SKL-002', title: 'dam-engineer.skill', price: 149.00, categoryId: '6', categoryName: 'Cyfrowa Pracownia', icon: '\u{1F4DC}', sku: 'BOB-SKL-002', image: 'images/SKL-002.svg', aiAssisted: true, description: 'Skill uruchamiany przy projektowaniu tamy pod konkretne warunki hydrologiczne. Uwzględnia natężenie przepływu, spadek terenu, dostępne gatunki drewna i sezonowe wahania poziomu wody. Wbudowane formuły wytrzymałościowe walidowane przez 39 lat danych terenowych. Najlepszy partner dla modeli Instruct (testowany na Beaver 2.1 Pro Instruct).' },
    { id: 'SKL-003', title: 'snack-critic.skill', price: 19.00, categoryId: '6', categoryName: 'Cyfrowa Pracownia', icon: '\u{1F4DC}', sku: 'BOB-SKL-003', image: 'images/SKL-003.svg', aiAssisted: true, description: 'Skill uruchamiany przy ocenie chrupkości kory, balansu marynaty pączków wierzbowych lub intensywności aromatu korzonków tatarakowych. Zwraca ocenę w skali 100 punktów i sugerowany pairing z naszego katalogu. Trenowany na 12 000 recenzji od członków Stowarzyszenia Krytyków Bobrowych.' },
    { id: 'SKL-004', title: 'flood-predictor.skill', price: 89.00, categoryId: '6', categoryName: 'Cyfrowa Pracownia', icon: '\u{1F4DC}', sku: 'BOB-SKL-004', image: 'images/SKL-004.svg', aiAssisted: true, description: 'Skill uruchamiany na wiosnę przy ocenie ryzyka roztopów. Łączy dane IMGW, modele hydrologiczne i 40 lat regionalnej historii powodzi. Zwraca prognozę w godzinach, rekomendację działań (od „brak akcji" do „ewakuacja") oraz przedział ufności. Głowica LSTM dospawana do bazowego modelu Beaver 2.1 Pro.' }
];

// =============================================
// CART (persisted in localStorage)
// =============================================
let cart = JSON.parse(localStorage.getItem('bobrownia_cart') || '[]');
const CHECKOUT_CUSTOMER_KEY = 'bobrownia_checkout_customer';

function saveCart() {
    localStorage.setItem('bobrownia_cart', JSON.stringify(cart));
}

function addToCart(productId, qty) {
    const p = products.find(pr => pr.id === productId);
    if (!p) return;
    qty = qty || 1;
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ id: p.id, title: p.title, price: p.price, icon: p.icon, sku: p.sku, image: p.image, categoryId: p.categoryId, categoryName: p.categoryName, qty: qty });
    }
    saveCart();
    updateCartUI();
    showToast('Dodano "' + p.title + '" do koszyka');
    edroneAddToCart(p, qty);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    var count = cart.reduce(function(sum, item) { return sum + item.qty; }, 0);
    var countEl = document.getElementById('cart-count');
    if (countEl) countEl.textContent = count;

    var cartItems = document.getElementById('cart-items');
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align:center; color: var(--text-light); padding: 40px 0;">Koszyk jest pusty</p>';
    } else {
        cartItems.innerHTML = cart.map(function(item) {
            return '<div class="cart-item">' +
                '<div class="cart-item-icon">' + item.icon + '</div>' +
                '<div class="cart-item-details">' +
                    '<h4>' + item.title + '</h4>' +
                    '<div class="price">' + item.qty + ' x ' + item.price.toFixed(2) + ' zl</div>' +
                '</div>' +
                '<button class="cart-item-remove" onclick="removeFromCart(\'' + item.id + '\')">&times;</button>' +
            '</div>';
        }).join('');
    }

    var total = cart.reduce(function(sum, item) { return sum + item.price * item.qty; }, 0);
    var totalEl = document.getElementById('cart-total-price');
    if (totalEl) totalEl.textContent = total.toFixed(2) + ' zl';
}

function toggleCart() {
    var cartPanel = document.getElementById('cart-panel');
    var cartOverlay = document.getElementById('cart-overlay');
    if (!cartPanel || !cartOverlay) return;
    cartPanel.classList.toggle('open');
    cartOverlay.classList.toggle('open');
}

function closeCart() {
    var cartPanel = document.getElementById('cart-panel');
    var cartOverlay = document.getElementById('cart-overlay');
    if (cartPanel) cartPanel.classList.remove('open');
    if (cartOverlay) cartOverlay.classList.remove('open');
}

function checkout() {
    if (cart.length === 0) {
        showToast('Koszyk jest pusty!');
        return;
    }
    openCheckoutForm();
}

function getStoredCheckoutCustomer() {
    try {
        return JSON.parse(localStorage.getItem(CHECKOUT_CUSTOMER_KEY) || '{}');
    } catch (e) {
        return {};
    }
}

function saveCheckoutCustomer(customer) {
    localStorage.setItem(CHECKOUT_CUSTOMER_KEY, JSON.stringify(customer));
}

function buildCheckoutUserId(email) {
    return 'SHOP-' + String(email || '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

function ensureCheckoutForm() {
    if (document.getElementById('checkout-modal')) return;

    var modal = document.createElement('div');
    modal.className = 'checkout-modal';
    modal.id = 'checkout-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML =
        '<div class="checkout-dialog" role="dialog" aria-modal="true" aria-labelledby="checkout-title">' +
            '<div class="checkout-header">' +
                '<h2 id="checkout-title">Dane do zamówienia</h2>' +
                '<button type="button" class="checkout-close" aria-label="Zamknij" onclick="closeCheckoutForm()">&times;</button>' +
            '</div>' +
            '<form class="checkout-form" id="checkout-form">' +
                '<div class="checkout-grid">' +
                    '<div class="form-group">' +
                        '<label for="checkout-first-name">Imię</label>' +
                        '<input id="checkout-first-name" name="first_name" type="text" autocomplete="given-name" required>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label for="checkout-last-name">Nazwisko</label>' +
                        '<input id="checkout-last-name" name="last_name" type="text" autocomplete="family-name" required>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label for="checkout-email">Email</label>' +
                        '<input id="checkout-email" name="email" type="email" autocomplete="email" required>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label for="checkout-phone">Telefon</label>' +
                        '<input id="checkout-phone" name="phone" type="tel" autocomplete="tel">' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label for="checkout-city">Miasto</label>' +
                        '<input id="checkout-city" name="city" type="text" autocomplete="address-level2" required>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label for="checkout-country">Kraj</label>' +
                        '<select id="checkout-country" name="country" autocomplete="country" required>' +
                            '<option value="PL">Polska</option>' +
                            '<option value="DE">Niemcy</option>' +
                            '<option value="CZ">Czechy</option>' +
                            '<option value="SK">Słowacja</option>' +
                            '<option value="UA">Ukraina</option>' +
                        '</select>' +
                    '</div>' +
                '</div>' +
                '<label class="checkout-consent">' +
                    '<input id="checkout-subscriber" name="subscriber_status" type="checkbox" value="1">' +
                    '<span>Zapisz mnie do newslettera</span>' +
                '</label>' +
                '<div class="checkout-summary">' +
                    '<span><strong id="checkout-items-count">0</strong> szt.</span>' +
                    '<span id="checkout-total-price">0,00 zl</span>' +
                '</div>' +
                '<div class="checkout-actions">' +
                    '<button type="button" class="btn btn-primary" onclick="closeCheckoutForm()">Wróć</button>' +
                    '<button type="submit" class="btn btn-accent">Złóż zamówienie</button>' +
                '</div>' +
            '</form>' +
        '</div>';

    document.body.appendChild(modal);
    document.getElementById('checkout-form').addEventListener('submit', submitCheckoutForm);
    modal.addEventListener('click', function(event) {
        if (event.target === modal) closeCheckoutForm();
    });
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('open')) closeCheckoutForm();
    });
}

function fillCheckoutForm() {
    var form = document.getElementById('checkout-form');
    if (!form) return;

    var customer = getStoredCheckoutCustomer();
    ['first_name', 'last_name', 'email', 'phone', 'city'].forEach(function(name) {
        if (form.elements[name]) form.elements[name].value = customer[name] || '';
    });
    form.elements.country.value = customer.country || 'PL';
    form.elements.subscriber_status.checked = customer.subscriber_status === '1';
}

function updateCheckoutSummary() {
    var countEl = document.getElementById('checkout-items-count');
    var totalEl = document.getElementById('checkout-total-price');
    var count = cart.reduce(function(sum, item) { return sum + item.qty; }, 0);
    var total = cart.reduce(function(sum, item) { return sum + item.price * item.qty; }, 0);
    if (countEl) countEl.textContent = count;
    if (totalEl) totalEl.textContent = total.toFixed(2) + ' zl';
}

function openCheckoutForm() {
    ensureCheckoutForm();
    fillCheckoutForm();
    updateCheckoutSummary();

    var modal = document.getElementById('checkout-modal');
    var form = document.getElementById('checkout-form');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('checkout-modal-open');

    var firstEmptyField = Array.prototype.slice.call(form.querySelectorAll('input[required]')).find(function(input) {
        return !input.value;
    });
    setTimeout(function() { (firstEmptyField || form.elements.email).focus(); }, 0);
}

function closeCheckoutForm() {
    var modal = document.getElementById('checkout-modal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('checkout-modal-open');
}

function getCheckoutCustomerFromForm(form) {
    var formData = new FormData(form);
    var email = String(formData.get('email') || '').trim();
    var country = String(formData.get('country') || 'PL').trim().toUpperCase();

    return {
        email: email,
        first_name: String(formData.get('first_name') || '').trim(),
        last_name: String(formData.get('last_name') || '').trim(),
        phone: String(formData.get('phone') || '').trim(),
        city: String(formData.get('city') || '').trim(),
        country: country || 'PL',
        subscriber_status: form.elements.subscriber_status.checked ? '1' : '0',
        user_id: buildCheckoutUserId(email)
    };
}

function submitCheckoutForm(event) {
    event.preventDefault();

    if (cart.length === 0) {
        closeCheckoutForm();
        showToast('Koszyk jest pusty!');
        return;
    }

    var form = event.currentTarget;
    if (!form.reportValidity()) return;

    var customer = getCheckoutCustomerFromForm(form);
    saveCheckoutCustomer(customer);

    var orderId = 'ORD-' + Date.now();
    var orderItems = cart.map(function(item) { return Object.assign({}, item); });
    edroneOrder(orderId, orderItems, customer);
    cart = [];
    saveCart();
    updateCartUI();
    closeCheckoutForm();
    closeCart();
    window.location.href = 'thank-you.html?order=' + orderId;
}

// =============================================
// TOAST
// =============================================
function showToast(msg) {
    var toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(function() { toast.classList.remove('show'); }, 2500);
}

// =============================================
// PRODUCT CARD HTML HELPER
// =============================================
function productCardHTML(p) {
    return '<div class="product-card">' +
        (p.aiAssisted ? '<span class="ai-badge" title="Selekcja lub receptura wspierana przez modele ML">AI-wspomagane</span>' : '') +
        '<div class="product-image"><a href="product.html?id=' + p.id + '"><img src="' + p.image + '" alt="' + p.title + '"/></a></div>' +
        '<div class="product-info">' +
            '<div class="product-category">' + p.categoryName + '</div>' +
            '<h3><a href="product.html?id=' + p.id + '">' + p.title + '</a></h3>' +
            '<div class="product-price">' + p.price.toFixed(2) + ' zł</div>' +
            '<button class="btn btn-primary" onclick="addToCart(\'' + p.id + '\')">Dodaj do koszyka</button>' +
        '</div>' +
    '</div>';
}

// =============================================
// EDRONE TRACKING
// =============================================
function getFullImageUrl(relativePath) {
    return STORE_URL + relativePath;
}
function edroneReset() {
    var fields = [
        'action_type', 'email', 'first_name', 'last_name', 'user_id',
        'subscriber_status', 'sms_subscriber_status', 'customer_tags',
        'product_ids', 'product_skus', 'product_titles', 'product_images',
        'product_urls', 'product_availability', 'product_counts',
        'product_category_ids', 'product_category_names',
        'order_id', 'country', 'city', 'base_currency', 'order_currency',
        'base_payment_value', 'order_payment_value', 'phone'
    ];
    fields.forEach(function(f) { delete _edrone[f]; });
}

function edroneHomepageView() {
    edroneReset();
    _edrone.action_type = 'homepage_view';
    if (typeof _edrone.init === 'function') _edrone.init();
}

function edroneProductView(product) {
    edroneReset();
    _edrone.action_type = 'product_view';
    _edrone.product_ids = product.id;
    _edrone.product_titles = encodeURIComponent(product.title);
    _edrone.product_images = getFullImageUrl(product.image);
    _edrone.product_urls = STORE_URL + 'product.html?id=' + product.id;
    _edrone.product_skus = product.sku;
    _edrone.product_category_ids = product.categoryId;
    _edrone.product_category_names = encodeURIComponent(product.categoryName);
    _edrone.product_availability = '1';
    if (typeof _edrone.init === 'function') _edrone.init();
}

function edroneCategoryView(categoryIds, categoryNames) {
    edroneReset();
    _edrone.action_type = 'category_view';
    _edrone.product_category_ids = categoryIds;
    _edrone.product_category_names = encodeURIComponent(categoryNames);
    if (typeof _edrone.init === 'function') _edrone.init();
}

function edroneAddToCart(product, qty) {
    edroneReset();
    _edrone.action_type = 'add_to_cart';
    _edrone.product_ids = product.id;
    _edrone.product_titles = encodeURIComponent(product.title);
    _edrone.product_images = getFullImageUrl(product.image);
    _edrone.product_urls = STORE_URL + 'product.html?id=' + product.id;
    _edrone.product_skus = product.sku;
    _edrone.product_counts = String(qty || 1);
    _edrone.product_category_ids = product.categoryId;
    _edrone.product_category_names = encodeURIComponent(product.categoryName);
    if (typeof _edrone.init === 'function') _edrone.init();
}

function edroneOrder(orderId, cartItems, customer) {
    customer = customer || {};
    edroneReset();
    _edrone.action_type = 'order';
    _edrone.email = customer.email;
    _edrone.first_name = customer.first_name;
    _edrone.last_name = customer.last_name;
    _edrone.user_id = customer.user_id || buildCheckoutUserId(customer.email);
    _edrone.subscriber_status = customer.subscriber_status || '0';
    if (customer.phone) _edrone.phone = customer.phone;
    _edrone.order_id = orderId;
    _edrone.country = customer.country || 'PL';
    _edrone.city = customer.city;
    _edrone.base_currency = 'PLN';
    _edrone.order_currency = 'PLN';
    var total = cartItems.reduce(function(s, i) { return s + i.price * i.qty; }, 0);
    _edrone.base_payment_value = total.toFixed(2);
    _edrone.order_payment_value = total.toFixed(2);
    _edrone.product_ids = cartItems.map(function(i) { return i.id; }).join('|');
    _edrone.product_skus = cartItems.map(function(i) { return i.sku; }).join('|');
    _edrone.product_titles = cartItems.map(function(i) { return encodeURIComponent(i.title); }).join('|');
    _edrone.product_images = cartItems.map(function(i) { return getFullImageUrl(i.image); }).join('|');
    _edrone.product_urls = cartItems.map(function(i) { return STORE_URL + 'product.html?id=' + i.id; }).join('|');
    _edrone.product_counts = cartItems.map(function(i) { return i.qty; }).join('|');
    _edrone.product_category_ids = cartItems.map(function(i) { return i.categoryId; }).join('|');
    _edrone.product_category_names = cartItems.map(function(i) { return encodeURIComponent(i.categoryName); }).join('|');
    if (typeof _edrone.init === 'function') _edrone.init();
}

function edroneSubscribe(email, firstName, tag) {
    edroneReset();
    _edrone.action_type = 'subscribe';
    _edrone.email = email;
    _edrone.subscriber_status = '1';
    _edrone.customer_tags = tag || 'Newsletter';
    if (firstName) _edrone.first_name = firstName;
    if (typeof _edrone.init === 'function') _edrone.init();
}

// =============================================
// EDRONE EVENT SIMULATOR
// =============================================
var simulatorInterval = null;

var fakeCustomers = [
    { email: 'sim-ewa-dabrowska-701@example.com', first_name: 'Ewa', last_name: 'Dabrowska', user_id: 'FAKE-701' },
    { email: 'sim-tomasz-grabowski-702@example.com', first_name: 'Tomasz', last_name: 'Grabowski', user_id: 'FAKE-702' },
    { email: 'sim-magdalena-jankowska-703@example.com', first_name: 'Magdalena', last_name: 'Jankowska', user_id: 'FAKE-703' },
    { email: 'sim-rafal-mazur-704@example.com', first_name: 'Rafal', last_name: 'Mazur', user_id: 'FAKE-704' },
    { email: 'sim-zofia-pawlak-705@example.com', first_name: 'Zofia', last_name: 'Pawlak', user_id: 'FAKE-705' },
];

var simulatedActions = [
    { type: 'homepage_view', weight: 25 },
    { type: 'product_view', weight: 25 },
    { type: 'category_view', weight: 15 },
    { type: 'add_to_cart', weight: 12 },
    { type: 'subscribe', weight: 8 },
    { type: 'order', weight: 10 },
    { type: 'order_cancel', weight: 5 },
];

var simOrderCounter = 1000;
var simulatedOrders = [];

function pickWeightedAction() {
    var totalWeight = simulatedActions.reduce(function(s, a) { return s + a.weight; }, 0);
    var rand = Math.random() * totalWeight;
    for (var i = 0; i < simulatedActions.length; i++) {
        rand -= simulatedActions[i].weight;
        if (rand <= 0) return simulatedActions[i].type;
    }
    return 'homepage_view';
}

function pickRandomProduct() { return products[Math.floor(Math.random() * products.length)]; }
function pickRandomCategory() { return categories[Math.floor(Math.random() * categories.length)]; }
function pickRandomCustomerOrAnon() {
    if (Math.random() < 0.4) return null;
    return fakeCustomers[Math.floor(Math.random() * fakeCustomers.length)];
}
function buildSimOrderCustomer(customer) {
    customer = customer || fakeCustomers[Math.floor(Math.random() * fakeCustomers.length)];
    return Object.assign({}, customer, {
        user_id: buildCheckoutUserId(customer.email),
        subscriber_status: '1',
        country: 'PL',
        city: ['Krakow', 'Warszawa', 'Wroclaw', 'Gdansk', 'Poznan'][Math.floor(Math.random() * 5)]
    });
}
function buildSimOrderProducts() {
    var orderProducts = [];
    var numProducts = Math.floor(Math.random() * 3) + 1;
    for (var i = 0; i < numProducts; i++) {
        orderProducts.push(Object.assign({}, pickRandomProduct(), { qty: Math.floor(Math.random() * 3) + 1 }));
    }
    return orderProducts;
}
function edroneOrderCancel(order) {
    var data = new URLSearchParams({
        app_id: _edrone.app_id,
        sender_type: 'server',
        action_type: 'order_cancel',
        order_id: order.order_id,
        email: order.customer.email
    });
    fetch('https://api.edrone.me/trace', { method: 'POST', body: data }).catch(function() {});
}

function simulateEvent() {
    var actionType = pickWeightedAction();
    var customer = null;
    var isAnon = true;

    var logDetail = '';

    switch (actionType) {
        case 'homepage_view':
            edroneHomepageView();
            logDetail = 'Strona główna';
            break;
        case 'product_view':
            var p = pickRandomProduct();
            edroneProductView(p);
            logDetail = p.title;
            break;
        case 'category_view':
            var cat = pickRandomCategory();
            edroneCategoryView(cat.id, cat.name);
            logDetail = cat.name;
            break;
        case 'add_to_cart':
            var p2 = pickRandomProduct();
            var qty = Math.floor(Math.random() * 3) + 1;
            edroneAddToCart(p2, qty);
            logDetail = p2.title + ' x' + qty;
            break;
        case 'subscribe':
            var subCustomer = fakeCustomers[Math.floor(Math.random() * fakeCustomers.length)];
            var tags = ['Newsletter Footer', 'Exit Popup', 'Sidebar Form', 'Checkout Subscribe'];
            var tag = tags[Math.floor(Math.random() * tags.length)];
            edroneSubscribe(subCustomer.email, subCustomer.first_name, tag);
            customer = subCustomer;
            isAnon = false;
            logDetail = subCustomer.email + ' (' + tag + ')';
            break;
        case 'order':
            var orderCustomer = buildSimOrderCustomer(pickRandomCustomerOrAnon());
            var orderProducts = buildSimOrderProducts();
            var orderId = 'SIM-ORD-' + (simOrderCounter++);
            var total = orderProducts.reduce(function(s, p) { return s + p.price * p.qty; }, 0);
            edroneOrder(orderId, orderProducts, orderCustomer);
            simulatedOrders.push({ order_id: orderId, customer: orderCustomer });
            customer = orderCustomer;
            isAnon = false;
            logDetail = orderId + ' (' + total.toFixed(2) + ' PLN, ' + orderCustomer.email + ')';
            break;
        case 'order_cancel':
            if (simulatedOrders.length === 0) {
                actionType = 'order';
                var fallbackCustomer = buildSimOrderCustomer(pickRandomCustomerOrAnon());
                var fallbackProducts = buildSimOrderProducts();
                var fallbackOrderId = 'SIM-ORD-' + (simOrderCounter++);
                var fallbackTotal = fallbackProducts.reduce(function(s, p) { return s + p.price * p.qty; }, 0);
                edroneOrder(fallbackOrderId, fallbackProducts, fallbackCustomer);
                simulatedOrders.push({ order_id: fallbackOrderId, customer: fallbackCustomer });
                customer = fallbackCustomer;
                isAnon = false;
                logDetail = fallbackOrderId + ' (' + fallbackTotal.toFixed(2) + ' PLN, ' + fallbackCustomer.email + ')';
                break;
            }
            var cancelledOrder = simulatedOrders.shift();
            edroneOrderCancel(cancelledOrder);
            customer = cancelledOrder.customer;
            isAnon = false;
            logDetail = cancelledOrder.order_id + ' (' + cancelledOrder.customer.email + ')';
            break;
    }

    addLogEntry(actionType, customer, logDetail, isAnon);
}

function addLogEntry(actionType, customer, detail, isAnon) {
    var time = new Date().toLocaleTimeString();
    var userInfo = isAnon
        ? '<span class="log-anon">anonim</span>'
        : '<span class="log-email">' + (customer ? customer.email : '?') + '</span>';
    var entry = '<div class="log-entry"><span class="log-time">' + time + '</span> <span class="log-action">' + actionType + '</span> ' + userInfo + '<br/><small>' + detail + '</small></div>';
    var logEl = document.getElementById('sim-log');
    if (!logEl) return;
    logEl.innerHTML = entry + logEl.innerHTML;
    var entries = logEl.querySelectorAll('.log-entry');
    for (var i = 50; i < entries.length; i++) entries[i].remove();
}

function startSimulator() {
    if (simulatorInterval) return;
    function scheduleNext() {
        var delay = 3000 + Math.random() * 5000;
        simulatorInterval = setTimeout(function() {
            simulateEvent();
            scheduleNext();
        }, delay);
    }
    simulateEvent();
    scheduleNext();
    document.getElementById('sim-status').textContent = 'Dziala...';
    document.getElementById('sim-status').style.color = '#4ecdc4';
    document.getElementById('sim-start').classList.add('active');
}

function stopSimulator() {
    if (simulatorInterval) { clearTimeout(simulatorInterval); simulatorInterval = null; }
    document.getElementById('sim-status').textContent = 'Zatrzymany';
    document.getElementById('sim-status').style.color = '#e0e0e0';
    document.getElementById('sim-start').classList.remove('active');
}

function sendSingleEvent() { simulateEvent(); }
function clearSimLog() { var el = document.getElementById('sim-log'); if (el) el.innerHTML = ''; }
function toggleSimulator() { document.getElementById('sim-panel').classList.toggle('open'); }

// Init cart UI on page load
document.addEventListener('DOMContentLoaded', function() { updateCartUI(); });
