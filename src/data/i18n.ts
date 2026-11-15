import type { PaymentMethodId, MainCategory, StoreAddress } from './prices';

export type Lang = 'ru' | 'kk';

export interface Translations {
  // Meta
  pageTitle: string;
  // Header & Navigation
  brandSubtitle: string;
  openMenu: string;
  toCatalogAria: string;
  navCatalog: string;
  navTradeIn: string;
  navFounder: string;
  navFaq: string;
  navContacts: string;
  toggleTheme: string;
  themeToLight: string;
  themeToDark: string;
  openCartAria: string;
  cartLabel: string;
  // Mobile drawer
  catalogCategories: string;
  allProducts: string;
  appleTech: string;
  dysonDevices: string;
  photoAndGadgets: string;
  sectionsLabel: string;
  howBuybackWorks: string;
  founderName: string;
  founderBadge: string;
  faqFull: string;
  contactsAlmaty: string;
  tgUsedTitle: string;
  tgUsedDesc: string;
  tgOpenChannel: string;
  writeWhatsApp: string;
  // Catalog Header & Filters
  catalogTrustBadge: string;
  catalogTitle: string;
  searchPlaceholder: string;
  clearSearch: string;
  tradeInAppliedTitle: string;
  tradeInDiscountPrefix: string;
  tradeInDiscountSuffix: string;
  changeValuation: string;
  resetBtn: string;
  catalogPricesLabel: string;
  discountBadge: string;
  subcategoryLabel: string;
  allLabel: string;
  nothingFound: string;
  resetFilters: string;
  // Product Card
  warranty1Year: string;
  colorLabel: string;
  specialColorPrice: string;
  simTypeLabel: string;
  simEsim: string;
  simPhysical: string;
  storageLabel: string;
  sizeLabel: string;
  installmentWord: string;
  months12: string;
  months24: string;
  onRequest: string;
  promoTitle: string;
  promoSubtitle: string;
  cashTitle: string;
  cashSubtitle: string;
  orderNowWa: string;
  inCartQty: (qty: number) => string;
  addToCart: string;
  tradeInCardBtn: string;
  piecesShort: string;
  // Valuation Banner
  tradeInBannerEyebrow: string;
  tradeInBannerTitle: string;
  tradeInBannerDesc: string;
  tradeInBannerBtn: string;
  // Founder Section
  founderRoleBadge: string;
  founderStoryBadge: string;
  founderSubtitle: string;
  founderBioStart: string;
  founderBioRest: string;
  founderStatYears: string;
  founderStatFollowers: string;
  subscribersText: (count: string) => string;
  shopAccountTitle: string;
  shopAccountSubtitle: string;
  // Messengers Bar
  directContactTitle: string;
  tgOnlyUsedBadge: string;
  directContactDesc: string;
  usedCatalogBtn: string;
  gisAlmaty: string;
  // FAQ
  faqEyebrow: string;
  faqTitle: string;
  faqSubtitle: string;
  onlineCalcBtn: string;
  evaluateWaBtn: string;
  tgTradeInChannelBtn: string;
  backToCatalogTop: string;
  openTgChannel: string;
  // FAQ Quick Cards
  otherQuestionsTitle: string;
  otherQuestionsDesc: string;
  askWaBtn: string;
  lookingForUsedTitle: string;
  onlyUsedBadge: string;
  lookingForUsedDesc: string;
  tgUsedBtn: string;
  wantTradeInTitle: string;
  wantTradeInDesc: string;
  calcOnlineBtn: string;
  // Advantages
  whyTitle: string;
  whySubtitle: string;
  adv1Title: string;
  adv1Desc: string;
  adv2Title: string;
  adv2Desc: string;
  adv3Title: string;
  adv3Desc: string;
  adv4Title: string;
  adv4Desc: string;
  // Contacts
  contactsEyebrow: string;
  contactsTitle: string;
  contactsSubtitle: string;
  schedulePrefix: string;
  workHoursLabel: string;
  phoneNumberLabel: string;
  // Valuation Page
  valBadge: string;
  valTitle: string;
  valDesc: string;
  valReset: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: (gen: string) => string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;
  quickSelect: string;
  step5Title: string;
  step5Desc: string;
  gradations4: string;
  step6Title: string;
  step6Desc: string;
  blockedWarning: string;
  blockedReasonText: string;
  blockedCalcReason: string;
  prelimCalcTitle: string;
  copied: string;
  copy: string;
  finalSumNote: string;
  buybackImpossible: string;
  modelLabel: string;
  batteryShort: string;
  bodyShort: string;
  extrasShort: string;
  sendBuybackWa: string;
  applyTradeInBtn: (price: string) => string;
  guarantee1: string;
  guarantee2: string;
  guarantee3: string;
  tgCardEyebrow: string;
  tgCardDesc: string;
  openBtn: string;
  // How it works
  howEyebrow: string;
  howTitle: string;
  howSubtitle: string;
  howStep1Title: string;
  howStep1Desc: string;
  howStep2Title: string;
  howStep2Desc: string;
  howStep3Title: string;
  howStep3Desc: string;
  // Valuation FAQ
  valFaqEyebrow: string;
  valFaqTitle: string;
  valFaqSubtitle: string;
  // Telegram Showcase & Catalog Callout
  verifiedChannelBadge: string;
  tgShowcaseTitle: string;
  tgShowcaseDesc: string;
  goToTg: string;
  catalogInStockEyebrow: string;
  readyToChooseTitle: string;
  readyToChooseDesc: string;
  goToCatalogBtn: string;
  // Footer & Bottom Nav
  footerDesc: string;
  navValuationShort: string;
  // Cart Drawer
  cartHeader: string;
  closeCartAria: string;
  cartHelperNote: string;
  cartEmptyTitle: string;
  cartEmptyDesc: string;
  goCatalogBtn: string;
  colorPrefix: string;
  perPieceSuffix: string;
  removeItemAria: string;
  paymentForItemLabel: string;
  decreaseQtyAria: string;
  increaseQtyAria: string;
  tradeInCartDiscount: (model: string) => string;
  tradeInPrelimNote: string;
  tradeInFromCartBtn: string;
  totalToPayWithTradeIn: string;
  totalToPay: string;
  unpricedNote: string;
  checkoutWaBtn: string;
  orderCopied: string;
  copyOrderText: string;
  clearCartBtn: string;
  // WhatsApp / Copy messages
  waOneClickGreeting: (shopName: string) => string;
  waModel: string;
  waColor: string;
  waPaymentMethod: string;
  waPrice: string;
  waAvailabilityAsk: string;
  waCartGreeting: string;
  waMyItems: string;
  waQuantity: string;
  waManagerClarify: string;
  waUnpricedSuffix: string;
  waItemsSum: string;
  waTradeInOffset: (model: string) => string;
  waTotalWithTradeIn: string;
  waTotalPay: string;
  waSellGreeting: (shopName: string) => string;
  waBattery: string;
  waBody: string;
  waExtras: string;
  waSiteValuation: string;
  waVisitAsk: string;
  waDefaultConsult: string;
  waTradeInFaqMsg: string;
  waGeneralQuestionMsg: string;
  copyValuationSummaryText: (model: string, storage: string, battery: number, body: string, price: string) => string;
  onlyEsimLabel: (deduction: string) => string;
}

export const TRANSLATIONS: Record<Lang, Translations> = {
  ru: {
    pageTitle: 'Bylance — Каталог техники и оценка iPhone в Алматы',
    brandSubtitle: 'Электроника в Алматы',
    openMenu: 'Открыть меню',
    toCatalogAria: 'В каталог Bylance',
    navCatalog: 'Каталог',
    navTradeIn: 'Trade-In',
    navFounder: 'Об основательнице',
    navFaq: 'FAQ',
    navContacts: 'Контакты',
    toggleTheme: 'Сменить тему',
    themeToLight: 'Переключить на светлую тему',
    themeToDark: 'Переключить на тёмную тему',
    openCartAria: 'Открыть корзину',
    cartLabel: 'Корзина',

    catalogCategories: 'Категории каталога:',
    allProducts: 'Все товары',
    appleTech: 'Техника Apple',
    dysonDevices: 'Устройства Dyson',
    photoAndGadgets: 'Фото и гаджеты',
    sectionsLabel: 'Разделы:',
    howBuybackWorks: 'Как работает выкуп (3 шага)',
    founderName: 'Аружан Жеткерген',
    founderBadge: 'Основательница',
    faqFull: 'Частые вопросы (FAQ)',
    contactsAlmaty: 'Контакты в Алматы',
    tgUsedTitle: 'Каталог Б/У техники в Telegram',
    tgUsedDesc: 'В нашем Telegram публикуются исключительно проверенные Б/У устройства и Trade-In с фото и АКБ.',
    tgOpenChannel: 'Перейти в Telegram-канал ↗',
    writeWhatsApp: 'Написать в WhatsApp',

    catalogTrustBadge: '100% Оригинальная техника с официальной гарантией 1 год',
    catalogTitle: 'Каталог устройств в наличии',
    searchPlaceholder: 'Поиск по названию модели...',
    clearSearch: 'Очистить поиск',
    tradeInAppliedTitle: 'Учтен ваш Trade-In:',
    tradeInDiscountPrefix: 'Скидка',
    tradeInDiscountSuffix: 'на покупку любого нового устройства!',
    changeValuation: 'Изменить оценку',
    resetBtn: 'Сбросить',
    catalogPricesLabel: 'Цены в каталоге:',
    discountBadge: 'Скидка',
    subcategoryLabel: 'Подкатегория:',
    allLabel: 'Все',
    nothingFound: 'Ничего не найдено по запросу',
    resetFilters: 'Сбросить фильтры',

    warranty1Year: '1 год официальной гарантии',
    colorLabel: 'Цвет:',
    specialColorPrice: 'Спеццена для цвета',
    simTypeLabel: 'Тип SIM-карты:',
    simEsim: 'eSIM',
    simPhysical: 'Физическая SIM',
    storageLabel: 'Объём памяти:',
    sizeLabel: 'Размер корпуса:',
    installmentWord: 'рассрочка',
    months12: '12 мес',
    months24: '24 мес',
    onRequest: 'По запросу',
    promoTitle: 'АКЦИЯ',
    promoSubtitle: 'при онлайн-оплате',
    cashTitle: 'НАЛИЧНЫМИ',
    cashSubtitle: 'бумажные деньги',
    orderNowWa: 'Заказать сразу в WhatsApp',
    inCartQty: (qty) => `В корзине (${qty} шт.) +`,
    addToCart: 'В корзину',
    tradeInCardBtn: 'Сдать старый iPhone по Trade-In',
    piecesShort: 'шт.',

    tradeInBannerEyebrow: 'Trade-In и Выкуп iPhone в Алматы',
    tradeInBannerTitle: 'Хотите сдать свой старый iPhone или обменять на новый?',
    tradeInBannerDesc: 'Узнайте точную стоимость вашего устройства в нашем онлайн-калькуляторе на отдельной странице оценки. Выплата сразу деньгами или скидка на новый товар!',
    tradeInBannerBtn: 'Перейти к оценке iPhone',

    founderRoleBadge: 'Основательница Bylance',
    founderStoryBadge: 'Основательница магазина Bylance',
    founderSubtitle: 'Казахстанский блогер и предпринимательница (Алматы & Астана)',
    founderBioStart: 'Основательница магазина',
    founderBioRest: ', который уже более трех лет специализируется на продаже оригинальной техники брендов Apple и Dyson. В социальных сетях Аружан делится честными обзорами гаджетов, бэкстейджами ведения бизнеса, лайфстайлом и путешествиями.',
    founderStatYears: 'Более 3 лет в бизнесе',
    founderStatFollowers: '360 000+ подписчиков',
    subscribersText: (count) => `${count} подписчиков`,
    shopAccountTitle: 'Магазин @bylance_kz ↗',
    shopAccountSubtitle: 'Оригинал Apple & Dyson',

    directContactTitle: 'Прямая связь и каталог Б/У техники',
    tgOnlyUsedBadge: 'Telegram: только Б/У',
    directContactDesc: 'Новая техника в WhatsApp с моментальной консультацией, а свежие поступления проверенной Б/У техники — в Telegram.',
    usedCatalogBtn: 'Каталог Б/У ↗',
    gisAlmaty: '2ГИС Алматы',

    faqEyebrow: 'Помощь покупателю',
    faqTitle: 'Часто задаваемые вопросы (FAQ)',
    faqSubtitle: 'Ответы на популярные вопросы о рассрочке, гарантии, способах оплаты и получении заказов',
    onlineCalcBtn: 'Онлайн-калькулятор оценки →',
    evaluateWaBtn: 'Оценить в WhatsApp у сотрудника',
    tgTradeInChannelBtn: 'Канал Trade-In и Б/У в Telegram',
    backToCatalogTop: 'Наверх к каталогу ↑',
    openTgChannel: 'Открыть Telegram-канал',

    otherQuestionsTitle: 'Остались другие вопросы по товару или покупке?',
    otherQuestionsDesc: 'Напишите нам в WhatsApp — наши ответят',
    askWaBtn: 'Задать вопрос в WhatsApp',
    lookingForUsedTitle: 'Ищете проверенную Б/У технику или Trade-In?',
    onlyUsedBadge: 'Только Б/У',
    lookingForUsedDesc: 'Вся проверенная Б/У техника и устройства по Trade-In выкладываются исключительно в нашем Telegram-канале с живыми фото, процентом АКБ и актуальными ценами.',
    tgUsedBtn: 'Канал Б/У в Telegram ↗',
    wantTradeInTitle: 'Хотите обменять старый iPhone на новую технику с доплатой?',
    wantTradeInDesc: 'По программе Trade-In принимаются исключительно оригинальные Apple iPhone. Оценка онлайн на сайте и точный осмотр в магазине!',
    calcOnlineBtn: 'Оценить в калькуляторе онлайн →',

    whyTitle: 'Почему технику выбирают в Bylance',
    whySubtitle: 'Надёжный магазин в Алматы с честными ценами и официальной гарантией',
    adv1Title: '100% Оригинал',
    adv1Desc: 'Исключительно новые запечатанные устройства в заводской упаковке. Официальная гарантия 1 год на Apple и Dyson.',
    adv2Title: 'Рассрочка Kaspi и Halyk',
    adv2Desc: 'Оформление через Kaspi.kz и Halyk Bank на 3, 6, 12 или 24 месяца удаленно в WhatsApp или в магазине.',
    adv3Title: 'Программа Trade-In',
    adv3Desc: 'Принимаются исключительно оригинальные Apple iPhone: предварительный расчёт на сайте и точная оценка в магазине.',
    adv4Title: 'Быстрый заказ в WhatsApp',
    adv4Desc: 'Заказ в 1 клик с карточки или отправка списка покупок из корзины прямо нашему менеджеру.',

    contactsEyebrow: 'Контакты и адреса',
    contactsTitle: 'Магазины Bylance',
    contactsSubtitle: 'Один магазин продает только новые устройства, второй — б/у iPhone',
    schedulePrefix: 'Режим:',
    workHoursLabel: 'График работы:',
    phoneNumberLabel: 'Номер телефона',

    valBadge: 'Оценка iPhone · Скупка и Trade-In в Алматы',
    valTitle: 'Узнайте, за сколько мы купим ваш iPhone',
    valDesc: 'Выберите поколение, память и состояние. Расчёт появится сразу, а заявку можно мгновенно отправить в WhatsApp или зачесть в Trade-In на новую технику.',
    valReset: 'Сбросить параметры',
    step1Title: 'Поколение iPhone',
    step1Desc: 'Выберите линейку вашего телефона',
    step2Title: 'Версия модели',
    step2Desc: (gen) => `Выберите модификацию для iPhone ${gen}`,
    step3Title: 'Объём встроенной памяти',
    step3Desc: 'Указан в Настройки → Основные → Об этом устройстве',
    step4Title: 'Ёмкость аккумулятора (АКБ)',
    step4Desc: 'Настройки → Аккумулятор → Состояние аккумулятора',
    quickSelect: 'Быстрый выбор:',
    step5Title: 'Состояние корпуса и стекла',
    step5Desc: 'Оцените внешний вид устройства',
    gradations4: '4 градации',
    step6Title: 'Дополнительные параметры и нюансы',
    step6Desc: 'Отметьте, если есть особенности комплектации или ремонта',
    blockedWarning: 'Внимание: устройства с чужим Apple ID или блокировкой активации не выкупаются.',
    blockedReasonText: 'Заблокирован iCloud / чужой Apple ID',
    blockedCalcReason: 'Телефоны с блокировкой iCloud или чужим Apple ID мы не покупаем.',
    prelimCalcTitle: 'Предварительный расчет',
    copied: 'Скопировано!',
    copy: 'Копировать',
    finalSumNote: 'Итоговая сумма подтверждается после 5-минутного осмотра в магазине (ул. Василия Клочкова, 119 или 2 этаж, 20 сектор, 23 витрина)',
    buybackImpossible: 'Выкуп невозможен',
    modelLabel: 'Модель:',
    batteryShort: 'АКБ:',
    bodyShort: 'Корпус:',
    extrasShort: 'Особенности:',
    sendBuybackWa: 'Отправить заявку на выкуп в WhatsApp',
    applyTradeInBtn: (price) => `Обменять на новый по Trade-In (скидка ${price})`,
    guarantee1: 'Деньги сразу: наличными или переводом на Kaspi Gold',
    guarantee2: 'Быстрая диагностика за 5–10 минут при вас',
    guarantee3: 'Честный расчет без скрытых комиссий',
    tgCardEyebrow: 'Каталог Б/У в Telegram:',
    tgCardDesc: 'Реальные фото устройств и остаток АКБ',
    openBtn: 'Открыть',

    howEyebrow: 'Прозрачный процесс',
    howTitle: 'Как работает скупка и Trade-In в Bylance',
    howSubtitle: 'Всего 3 простых шага от онлайн-оценки до получения денег или нового телефона',
    howStep1Title: 'Оцените онлайн',
    howStep1Desc: 'Выберите вашу модель iPhone, объём памяти и состояние аккумулятора в калькуляторе выше. Это занимает ровно минуту.',
    howStep2Title: 'Отправьте заявку в WhatsApp',
    howStep2Desc: 'Нажмите «Отправить заявку» — откроется WhatsApp с заполненной спецификацией вашего устройства. Менеджер подтвердит время визита.',
    howStep3Title: 'Приезжайте и получите оплату',
    howStep3Desc: 'Мастер проверит телефон за 5–10 минут в магазине Bylance. Сразу выплачиваем деньги наличными/Kaspi или оформляем новый гаджет с зачетом суммы.',

    valFaqEyebrow: 'Частые вопросы по выкупу',
    valFaqTitle: 'Вопросы о выкупе и Trade-In iPhone',
    valFaqSubtitle: 'Всё о диагностике, расчёте стоимости, способах выплаты и обмене на новый гаджет',

    verifiedChannelBadge: 'Канал проверенной техники',
    tgShowcaseTitle: 'Каталог Б/У в Telegram:',
    tgShowcaseDesc: 'Каждый день выкладываем проверенные iPhone с остатком аккумулятора, подробными фото и ценой выкупа/продажи.',
    goToTg: 'Перейти в',
    catalogInStockEyebrow: 'Каталог техники в наличии',
    readyToChooseTitle: 'Готовы выбрать новое устройство?',
    readyToChooseDesc: 'В нашем каталоге представлены новые запечатанные Apple iPhone, MacBook, iPad, стайлеры Dyson и фототехника с гарантией и рассрочкой.',
    goToCatalogBtn: 'Перейти в каталог магазина',

    footerDesc: 'Магазин оригинальной электроники в Алматы',
    navValuationShort: 'Оценка iPhone',

    cartHeader: 'Корзина товаров',
    closeCartAria: 'Закрыть корзину',
    cartHelperNote: 'Вы можете выбрать разный способ оплаты для каждого товара (например, один через Kaspi, другой за наличные).',
    cartEmptyTitle: 'В корзине пока ничего нет',
    cartEmptyDesc: 'Выберите нужные товары в каталоге и добавьте их в корзину для быстрой отправки заказа в WhatsApp.',
    goCatalogBtn: 'Перейти в каталог',
    colorPrefix: 'Цвет:',
    perPieceSuffix: 'за шт.',
    removeItemAria: 'Удалить товар',
    paymentForItemLabel: 'Способ оплаты для этого товара:',
    decreaseQtyAria: 'Уменьшить количество',
    increaseQtyAria: 'Увеличить количество',
    tradeInCartDiscount: (model) => `Скидка Trade-In (${model})`,
    tradeInPrelimNote: 'Учтено по предварительной оценке',
    tradeInFromCartBtn: 'Сдать свой старый iPhone в Trade-In (минус от цены)',
    totalToPayWithTradeIn: 'Итого к доплате:',
    totalToPay: 'Итого к оплате:',
    unpricedNote: '* В заказе есть позиции с ценой по запросу, менеджер уточнит их стоимость в WhatsApp.',
    checkoutWaBtn: 'Оформить заказ через WhatsApp',
    orderCopied: 'Текст заказа скопирован!',
    copyOrderText: 'Скопировать текст заказа',
    clearCartBtn: 'Очистить корзину',

    waOneClickGreeting: (shopName) => `Здравствуйте! Хочу оформить заказ в ${shopName}:`,
    waModel: 'Модель',
    waColor: 'Цвет',
    waPaymentMethod: 'Способ оплаты',
    waPrice: 'Цена',
    waAvailabilityAsk: 'Подскажите, есть ли в наличии и как оформить доставку/самовывоз?',
    waCartGreeting: 'Здравствуйте! Хочу оформить заказ.',
    waMyItems: 'Мои товары:',
    waQuantity: 'Количество',
    waManagerClarify: 'Уточняется у менеджера',
    waUnpricedSuffix: ' (без учета позиций с ценой по запросу)',
    waItemsSum: 'Сумма товаров',
    waTradeInOffset: (model) => `• Зачет Trade-In (${model})`,
    waTotalWithTradeIn: '• Итого к доплате с учетом Trade-In',
    waTotalPay: 'Итого к оплате',
    waSellGreeting: (shopName) => `Здравствуйте! Хочу продать iPhone в ${shopName}.`,
    waBattery: 'Аккумулятор',
    waBody: 'Корпус',
    waExtras: 'Особенности',
    waSiteValuation: 'Оценка на сайте',
    waVisitAsk: '\nКогда можно приехать на проверку в магазин?',
    waDefaultConsult: 'Здравствуйте! Хочу проконсультироваться по покупке или Trade-In в магазине Bylance.',
    waTradeInFaqMsg: 'Здравствуйте! Хочу оценить свой iPhone по программе Trade-In в магазине Bylance.',
    waGeneralQuestionMsg: 'Здравствуйте! У меня есть вопрос по покупке техники в Bylance.',
    copyValuationSummaryText: (model, storage, battery, body, price) =>
      `${model} ${storage}, АКБ ${battery}%, ${body}. Оценка Bylance: ${price}`,
    onlyEsimLabel: (deduction) => `только eSIM (-${deduction})`,
  },
  kk: {
    pageTitle: 'Bylance — Алматыдағы техника каталогы және iPhone бағалау',
    brandSubtitle: 'Алматыдағы электроника',
    openMenu: 'Мәзірді ашу',
    toCatalogAria: 'Bylance каталогына өту',
    navCatalog: 'Каталог',
    navTradeIn: 'Trade-In',
    navFounder: 'Негізін қалаушы',
    navFaq: 'FAQ',
    navContacts: 'Байланыс',
    toggleTheme: 'Тақырыпты ауыстыру',
    themeToLight: 'Ашық тақырыпқа ауыстыру',
    themeToDark: 'Қараңғы тақырыпқа ауыстыру',
    openCartAria: 'Себетті ашу',
    cartLabel: 'Себет',

    catalogCategories: 'Каталог санаттары:',
    allProducts: 'Барлық тауарлар',
    appleTech: 'Apple техникасы',
    dysonDevices: 'Dyson құрылғылары',
    photoAndGadgets: 'Фото және гаджеттер',
    sectionsLabel: 'Бөлімдер:',
    howBuybackWorks: 'Сатып алу қалай өтеді (3 қадам)',
    founderName: 'Аружан Жеткерген',
    founderBadge: 'Негізін қалаушы',
    faqFull: 'Жиі қойылатын сұрақтар (FAQ)',
    contactsAlmaty: 'Алматыдағы байланыс',
    tgUsedTitle: 'Telegram-дағы Қ/Б техника каталогы',
    tgUsedDesc: 'Біздің Telegram арнада тек тексерілген Қ/Б құрылғылар мен Trade-In фотосы және АКБ пайызымен жарияланады.',
    tgOpenChannel: 'Telegram арнаға өту ↗',
    writeWhatsApp: 'WhatsApp-қа жазу',

    catalogTrustBadge: '1 жыл ресми кепілдігі бар 100% түпнұсқа техника',
    catalogTitle: 'Қолда бар құрылғылар каталогы',
    searchPlaceholder: 'Модель атауы бойынша іздеу...',
    clearSearch: 'Іздеуді тазалау',
    tradeInAppliedTitle: 'Сіздің Trade-In есептелді:',
    tradeInDiscountPrefix: 'Жеңілдік',
    tradeInDiscountSuffix: 'кез келген жаңа құрылғыны сатып алуға!',
    changeValuation: 'Бағалауды өзгерту',
    resetBtn: 'Қалпына келтіру',
    catalogPricesLabel: 'Каталогтағы бағалар:',
    discountBadge: 'Жеңілдік',
    subcategoryLabel: 'Ішкі санат:',
    allLabel: 'Барлығы',
    nothingFound: 'Сұраныс бойынша ештеңе табылмады:',
    resetFilters: 'Сүзгілерді тазалау',

    warranty1Year: '1 жыл ресми кепілдік',
    colorLabel: 'Түсі:',
    specialColorPrice: 'Түс үшін арнайы баға',
    simTypeLabel: 'SIM-карта түрі:',
    simEsim: 'eSIM',
    simPhysical: 'Физикалық SIM',
    storageLabel: 'Ішкі жады көлемі:',
    sizeLabel: 'Корпус өлшемі:',
    installmentWord: 'бөліп төлеу',
    months12: '12 ай',
    months24: '24 ай',
    onRequest: 'Сұраныс бойынша',
    promoTitle: 'АКЦИЯ',
    promoSubtitle: 'онлайн төлем кезінде',
    cashTitle: 'ҚОЛМА-ҚОЛ',
    cashSubtitle: 'қағаз ақшамен',
    orderNowWa: 'WhatsApp-та бірден тапсырыс беру',
    inCartQty: (qty) => `Себетте (${qty} дана) +`,
    addToCart: 'Себетке қосу',
    tradeInCardBtn: 'Ескі iPhone-ды Trade-In арқылы өткізу',
    piecesShort: 'дана',

    tradeInBannerEyebrow: 'Алматыда iPhone сатып алу және Trade-In',
    tradeInBannerTitle: 'Ескі iPhone-ыңызды өткізгіңіз келе ме немесе жаңасына ауыстырғыңыз келе ме?',
    tradeInBannerDesc: 'Арнайы бағалау бетіндегі онлайн-калькулятор арқылы құрылғыңыздың нақты құнын біліңіз. Төлем бірден қолма-қол немесе жаңа тауарға жеңілдік!',
    tradeInBannerBtn: 'iPhone бағалауға өту',

    founderRoleBadge: 'Bylance негізін қалаушысы',
    founderStoryBadge: 'Bylance дүкенінің негізін қалаушысы',
    founderSubtitle: 'Қазақстандық блогер және кәсіпкер (Алматы & Астана)',
    founderBioStart: 'Үш жылдан астам уақыт бойы Apple және Dyson брендтерінің түпнұсқа техникасын сатуға маманданған',
    founderBioRest: ' дүкенінің негізін қалаушысы. Әлеуметтік желілерде Аружан гаджеттерге шынайы шолулар, бизнес жүргізу процестері, лайфстайл және саяхаттарымен бөліседі.',
    founderStatYears: 'Бизнесте 3 жылдан астам',
    founderStatFollowers: '360 000+ жазылушы',
    subscribersText: (count) => `${count} жазылушы`,
    shopAccountTitle: '@bylance_kz дүкені ↗',
    shopAccountSubtitle: 'Түпнұсқа Apple & Dyson',

    directContactTitle: 'Тікелей байланыс және Қ/Б техника каталогы',
    tgOnlyUsedBadge: 'Telegram: тек Қ/Б',
    directContactDesc: 'Жаңа техника бойынша лезде кеңес — WhatsApp-та, ал тексерілген Қ/Б техниканың жаңа түсімдері — Telegram арнада.',
    usedCatalogBtn: 'Қ/Б каталогы ↗',
    gisAlmaty: '2ГИС Алматы',

    faqEyebrow: 'Сатып алушыға көмек',
    faqTitle: 'Жиі қойылатын сұрақтар (FAQ)',
    faqSubtitle: 'Бөліп төлеу, кепілдік, төлем тәсілдері және тапсырысты алу туралы жиі қойылатын сұрақтарға жауаптар',
    onlineCalcBtn: 'Онлайн-бағалау калькуляторы →',
    evaluateWaBtn: 'WhatsApp-та маманнан бағалау',
    tgTradeInChannelBtn: 'Telegram-дағы Trade-In және Қ/Б арнасы',
    backToCatalogTop: 'Каталогтың жоғарысына ↑',
    openTgChannel: 'Telegram арнаны ашу',

    otherQuestionsTitle: 'Тауар немесе сатып алу бойынша сұрақтарыңыз қалды ма?',
    otherQuestionsDesc: 'WhatsApp-қа жазыңыз — менеджерлеріміз жауап береді',
    askWaBtn: 'WhatsApp-та сұрақ қою',
    lookingForUsedTitle: 'Тексерілген Қ/Б техника немесе Trade-In іздеп жүрсіз бе?',
    onlyUsedBadge: 'Тек Қ/Б',
    lookingForUsedDesc: 'Барлық тексерілген Қ/Б техника және Trade-In құрылғылары тек біздің Telegram арнамызда нақты фотоларымен, АКБ пайызымен және өзекті бағасымен жарияланады.',
    tgUsedBtn: 'Telegram-дағы Қ/Б арнасы ↗',
    wantTradeInTitle: 'Ескі iPhone-ды қосымша ақы төлеп жаңа техникаға ауыстырғыңыз келе ме?',
    wantTradeInDesc: 'Trade-In бағдарламасы бойынша тек түпнұсқа Apple iPhone қабылданады. Сайтта онлайн-бағалау және дүкенде нақты тексеру!',
    calcOnlineBtn: 'Онлайн калькуляторда бағалау →',

    whyTitle: 'Неліктен техниканы Bylance-тан таңдайды',
    whySubtitle: 'Алматыдағы адал бағасы мен ресми кепілдігі бар сенімді дүкен',
    adv1Title: '100% Түпнұсқа',
    adv1Desc: 'Тек зауыттық қаптамадағы жаңа мөрленген құрылғылар. Apple және Dyson техникасына 1 жыл ресми кепілдік.',
    adv2Title: 'Kaspi және Halyk бөліп төлеу',
    adv2Desc: 'Kaspi.kz және Halyk Bank арқылы 3, 6, 12 немесе 24 айға WhatsApp-та қашықтан немесе дүкенде рәсімдеу.',
    adv3Title: 'Trade-In бағдарламасы',
    adv3Desc: 'Тек түпнұсқа Apple iPhone қабылданады: сайтта алдын ала есептеу және дүкенде нақты бағалау.',
    adv4Title: 'WhatsApp арқылы жылдам тапсырыс',
    adv4Desc: 'Карточкадан 1 батырмамен тапсырыс беру немесе себеттен тізімді тікелей менеджерге жіберу.',

    contactsEyebrow: 'Байланыс және мекенжайлар',
    contactsTitle: 'Bylance дүкендері',
    contactsSubtitle: 'Бір дүкен тек жаңа құрылғыларды, екіншісі Қ/Б iPhone сатады',
    schedulePrefix: 'Жұмыс уақыты:',
    workHoursLabel: 'Жұмыс кестесі:',
    phoneNumberLabel: 'Телефон нөмірі',

    valBadge: 'iPhone бағалау · Алматыда сатып алу және Trade-In',
    valTitle: 'Сіздің iPhone-ыңызды қаншаға сатып алатынымызды біліңіз',
    valDesc: 'Буынын, жады көлемін және күйін таңдаңыз. Есептеу бірден шығады, ал өтінімді WhatsApp-қа жіберуге немесе жаңа техникаға Trade-In жеңілдігі ретінде қолдануға болады.',
    valReset: 'Параметрлерді тазалау',
    step1Title: 'iPhone буыны',
    step1Desc: 'Телефоныңыздың сериясын таңдаңыз',
    step2Title: 'Модель нұсқасы',
    step2Desc: (gen) => `iPhone ${gen} үшін нұсқасын таңдаңыз`,
    step3Title: 'Ішкі жады көлемі',
    step3Desc: 'Настройки → Основные → Об этом устройстве бөлімінде көрсетілген',
    step4Title: 'Аккумулятор сыйымдылығы (АКБ)',
    step4Desc: 'Настройки → Аккумулятор → Состояние аккумулятора',
    quickSelect: 'Жылдам таңдау:',
    step5Title: 'Корпус пен әйнектің күйі',
    step5Desc: 'Құрылғының сыртқы түрін бағалаңыз',
    gradations4: '4 деңгей',
    step6Title: 'Қосымша параметрлер мен ерекшеліктер',
    step6Desc: 'Жинақталымы немесе жөндеу тарихы болса белгілеңіз',
    blockedWarning: 'Назар аударыңыз: бөтен Apple ID немесе белсендіру құлпы бар құрылғылар сатып алынбайды.',
    blockedReasonText: 'iCloud бұғатталған / бөтен Apple ID',
    blockedCalcReason: 'iCloud бұғатталған немесе бөтен Apple ID бар телефондарды сатып алмаймыз.',
    prelimCalcTitle: 'Алдын ала есептеу',
    copied: 'Көшірілді!',
    copy: 'Көшіру',
    finalSumNote: 'Қорытынды сома дүкендегі 5 минуттық тексеруден кейін расталады (Василий Клочков көш., 119 немесе 2 қабат, 20 сектор, 23 витрина)',
    buybackImpossible: 'Сатып алу мүмкін емес',
    modelLabel: 'Модель:',
    batteryShort: 'АКБ:',
    bodyShort: 'Корпус:',
    extrasShort: 'Ерекшеліктер:',
    sendBuybackWa: 'WhatsApp-қа сатып алу өтінімін жіберу',
    applyTradeInBtn: (price) => `Trade-In арқылы жаңасына ауыстыру (жеңілдік ${price})`,
    guarantee1: 'Ақша бірден: қолма-қол немесе Kaspi Gold аударымы',
    guarantee2: 'Көз алдыңызда 5–10 минутта жылдам диагностика',
    guarantee3: 'Жасырын комиссиясыз адал есептеу',
    tgCardEyebrow: 'Telegram-дағы Қ/Б каталогы:',
    tgCardDesc: 'Құрылғылардың нақты фотосы және АКБ қалдығы',
    openBtn: 'Ашу',

    howEyebrow: 'Ашық процесс',
    howTitle: 'Bylance-та сатып алу және Trade-In қалай жұмыс істейді',
    howSubtitle: 'Онлайн бағалаудан бастап ақша немесе жаңа телефон алғанға дейінгі 3 қарапайым қадам',
    howStep1Title: 'Онлайн бағалаңыз',
    howStep1Desc: 'Жоғарыдағы калькуляторда iPhone моделін, жады көлемін және аккумулятор күйін таңдаңыз. Бұл небәрі 1 минут алады.',
    howStep2Title: 'WhatsApp-қа өтінім жіберіңіз',
    howStep2Desc: '«Өтінім жіберу» батырмасын басыңыз — құрылғы сипаттамасы толтырылған WhatsApp ашылады. Менеджер келу уақытын растайды.',
    howStep3Title: 'Келіңіз және төлем алыңыз',
    howStep3Desc: 'Шебер Bylance дүкенінде телефонды 5–10 минутта тексереді. Ақшаны бірден қолма-қол/Kaspi арқылы береміз немесе жаңа гаджетке жеңілдік жасаймыз.',

    valFaqEyebrow: 'Сатып алу бойынша жиі сұрақтар',
    valFaqTitle: 'iPhone сатып алу және Trade-In туралы сұрақтар',
    valFaqSubtitle: 'Диагностика, бағаны есептеу, төлем тәсілдері және жаңа гаджетке ауыстыру туралы барлық ақпарат',

    verifiedChannelBadge: 'Тексерілген техника арнасы',
    tgShowcaseTitle: 'Telegram-дағы Қ/Б каталогы:',
    tgShowcaseDesc: 'Күн сайын аккумулятор қалдығы, толық фотосы және сатып алу/сату бағасы көрсетілген тексерілген iPhone-дарды жариялаймыз.',
    goToTg: 'Өту:',
    catalogInStockEyebrow: 'Қолда бар техника каталогы',
    readyToChooseTitle: 'Жаңа құрылғы таңдауға дайынсыз ба?',
    readyToChooseDesc: 'Біздің каталогта кепілдігі мен бөліп төлеуі бар жаңа мөрленген Apple iPhone, MacBook, iPad, Dyson стайлерлері және фототехника ұсынылған.',
    goToCatalogBtn: 'Дүкен каталогына өту',

    footerDesc: 'Алматыдағы түпнұсқа электроника дүкені',
    navValuationShort: 'iPhone бағалау',

    cartHeader: 'Тауарлар себеті',
    closeCartAria: 'Себетті жабу',
    cartHelperNote: 'Әр тауарға бөлек төлем тәсілін таңдай аласыз (мысалы, бірін Kaspi арқылы, екіншісін қолма-қол).',
    cartEmptyTitle: 'Себетте әзірге ештеңе жоқ',
    cartEmptyDesc: 'Каталогтан қажетті тауарларды таңдап, WhatsApp-қа жылдам жіберу үшін себетке қосыңыз.',
    goCatalogBtn: 'Каталогқа өту',
    colorPrefix: 'Түсі:',
    perPieceSuffix: 'данасы',
    removeItemAria: 'Тауарды өшіру',
    paymentForItemLabel: 'Бұл тауар үшін төлем тәсілі:',
    decreaseQtyAria: 'Санын азайту',
    increaseQtyAria: 'Санын көбейту',
    tradeInCartDiscount: (model) => `Trade-In жеңілдігі (${model})`,
    tradeInPrelimNote: 'Алдын ала бағалау бойынша есептелді',
    tradeInFromCartBtn: 'Ескі iPhone-ды Trade-In-ге өткізу (бағадан шегеру)',
    totalToPayWithTradeIn: 'Қосымша төлем сомасы:',
    totalToPay: 'Төленетін жиынтық сома:',
    unpricedNote: '* Тапсырыста бағасы сұраныс бойынша позициялар бар, менеджер олардың бағасын WhatsApp-та нақтылайды.',
    checkoutWaBtn: 'WhatsApp арқылы тапсырыс беру',
    orderCopied: 'Тапсырыс мәтіні көшірілді!',
    copyOrderText: 'Тапсырыс мәтінін көшіру',
    clearCartBtn: 'Себетті тазалау',

    waOneClickGreeting: (shopName) => `Сәлеметсіз бе! ${shopName} дүкенінен тапсырыс бергім келеді:`,
    waModel: 'Модель',
    waColor: 'Түсі',
    waPaymentMethod: 'Төлем тәсілі',
    waPrice: 'Бағасы',
    waAvailabilityAsk: 'Қолда бар ма және жеткізу/алып кетуді қалай рәсімдеуге болады?',
    waCartGreeting: 'Сәлеметсіз бе! Тапсырыс бергім келеді.',
    waMyItems: 'Менің тауарларым:',
    waQuantity: 'Саны',
    waManagerClarify: 'Менеджерден нақтыланады',
    waUnpricedSuffix: ' (бағасы сұраныс бойынша тауарларды есептемегенде)',
    waItemsSum: 'Тауарлар сомасы',
    waTradeInOffset: (model) => `• Trade-In есебі (${model})`,
    waTotalWithTradeIn: '• Trade-In есептелгеннен кейінгі қосымша төлем',
    waTotalPay: 'Барлығы төлемге',
    waSellGreeting: (shopName) => `Сәлеметсіз бе! ${shopName} дүкеніне iPhone сатқым келеді.`,
    waBattery: 'Аккумулятор',
    waBody: 'Корпус',
    waExtras: 'Ерекшеліктері',
    waSiteValuation: 'Сайттағы бағалау',
    waVisitAsk: '\nДүкенге тексеруге қашан келуге болады?',
    waDefaultConsult: 'Сәлеметсіз бе! Bylance дүкенінде сатып алу немесе Trade-In бойынша кеңес алғым келеді.',
    waTradeInFaqMsg: 'Сәлеметсіз бе! Bylance дүкенінде Trade-In бағдарламасы бойынша iPhone-ымды бағалатқым келеді.',
    waGeneralQuestionMsg: 'Сәлеметсіз бе! Bylance дүкенінен техника сатып алу бойынша сұрағым бар еді.',
    copyValuationSummaryText: (model, storage, battery, body, price) =>
      `${model} ${storage}, АКБ ${battery}%, ${body}. Bylance бағалауы: ${price}`,
    onlyEsimLabel: (deduction) => `тек eSIM (-${deduction})`,
  },
};

export function localizePaymentMethod(id: PaymentMethodId, lang: Lang): {
  name: string;
  shortLabel: string;
  badge: string;
  description: string;
} {
  if (lang === 'ru') {
    switch (id) {
      case 'kaspi':
        return { name: 'Kaspi рассрочка', shortLabel: 'Kaspi', badge: '0-0-12 / 0-0-24', description: 'Оформление рассрочки или кредита через Kaspi Bank' };
      case 'halyk':
        return { name: 'Halyk рассрочка', shortLabel: 'Halyk', badge: '0-0-12 / 0-0-24', description: 'Рассрочка без переплат через приложение Halyk Bank' };
      case 'promo':
        return { name: 'Акционная цена', shortLabel: 'Акция', badge: 'Спеццена', description: 'Специальная сниженная цена по текущей акции магазина' };
      case 'cash':
        return { name: 'Скидка за наличную оплату', shortLabel: 'Наличный расчёт', badge: 'Скидка', description: 'Лучшая цена при оплате наличными или прямым переводом' };
    }
  }
  switch (id) {
    case 'kaspi':
      return { name: 'Kaspi бөліп төлеу', shortLabel: 'Kaspi', badge: '0-0-12 / 0-0-24', description: 'Kaspi Bank арқылы бөліп төлеу немесе несие рәсімдеу' };
    case 'halyk':
      return { name: 'Halyk бөліп төлеу', shortLabel: 'Halyk', badge: '0-0-12 / 0-0-24', description: 'Halyk Bank қосымшасы арқылы үстемесіз бөліп төлеу' };
    case 'promo':
      return { name: 'Акциялық баға', shortLabel: 'Акция', badge: 'Арнайы баға', description: 'Дүкеннің ағымдағы акциясы бойынша арнайы төмендетілген баға' };
    case 'cash':
      return { name: 'Қолма-қол төлем жеңілдігі', shortLabel: 'Қолма-қол', badge: 'Жеңілдік', description: 'Қолма-қол ақшамен немесе тікелей аударым кезіндегі ең тиімді баға' };
  }
}

export function localizeCategory(id: MainCategory, lang: Lang): { name: string; description: string } {
  if (lang === 'ru') {
    switch (id) {
      case 'apple': return { name: 'Apple', description: 'iPhone, iPad, MacBook, AirPods, Apple Watch' };
      case 'dyson': return { name: 'Dyson', description: 'Стайлеры и выпрямители волос' };
      case 'other': return { name: 'Фото и гаджеты', description: 'Фотокамеры, Ray-Ban Meta, DJI, Яндекс Станция' };
    }
  }
  switch (id) {
    case 'apple': return { name: 'Apple', description: 'iPhone, iPad, MacBook, AirPods, Apple Watch' };
    case 'dyson': return { name: 'Dyson', description: 'Стайлерлер мен шаш түзеткіштер' };
    case 'other': return { name: 'Фото және гаджеттер', description: 'Фотокамералар, Ray-Ban Meta, DJI, Яндекс Станция' };
  }
}

export function localizeStoreAddress(addr: StoreAddress, lang: Lang): StoreAddress {
  if (lang === 'ru') return addr;
  if (addr.id === 'new-store') {
    return {
      ...addr,
      title: 'Жаңа құрылғылар дүкені',
      address: 'Василий Клочков көш., 119, 1 қабат (Бостандық ауданы, 050057)',
      description: '1 жыл ресми кепілдігі мен бөліп төлеуі бар тек жаңа мөрленген түпнұсқа Apple құрылғылары, Dyson стайлерлері және гаджеттер.',
      badge: 'Жаңа техника',
    };
  }
  return {
    ...addr,
    title: 'Қ/Б iPhone дүкені',
    address: 'Алматы қ., 2 қабат, 20 сектор, 23 витрина',
    description: 'Кепілдігі бар тексерілген Қ/Б iPhone-дар, көз алдыңызда жылдам диагностика және қолма-қол немесе Kaspi арқылы лезде есеп айырысу.',
    badge: 'Қ/Б iPhone',
  };
}

export function localizeBodyCondition(id: string, lang: Lang): { label: string; hint: string } {
  if (lang === 'ru') {
    switch (id) {
      case 'perfect': return { label: 'Идеальное', hint: 'Как новый, без следов' };
      case 'good': return { label: 'Хорошее', hint: 'Еле заметные потёртости' };
      case 'average': return { label: 'Среднее', hint: 'Мелкие царапины' };
      default: return { label: 'Плохое', hint: 'Заметные царапины, вмятины' };
    }
  }
  switch (id) {
    case 'perfect': return { label: 'Мінсіз', hint: 'Жаңа сияқты, ізі жоқ' };
    case 'good': return { label: 'Жақсы', hint: 'Сәл ғана білінетін іздер' };
    case 'average': return { label: 'Орташа', hint: 'Ұсақ сызаттар бар' };
    default: return { label: 'Нашар', hint: 'Байқалатын сызат, соққы' };
  }
}

export function localizeExtraLabel(id: string, fallback: string, lang: Lang): string {
  if (lang === 'ru') return fallback;
  switch (id) {
    case 'esim_only': return 'Тек eSIM (АҚШ)';
    case 'no_box': return 'Қорабы мен қуаттағышы жоқ';
    case 'broken_biometrics': return 'Face ID / Touch ID істемейді';
    case 'replaced_glass': return 'Артқы әйнегі ауыстырылған';
    case 'replaced_screen_orig': return 'Экраны ауыстырылған (түпнұсқа)';
    case 'replaced_screen': return 'Экраны ауыстырылған (түпнұсқа емес)';
    default: return fallback;
  }
}

export function localizeUsedModelLabel(label: string, lang: Lang): string {
  if (lang === 'ru') return label;
  if (label === 'Обычный') return 'Қарапайым';
  return label;
}

const COLOR_KK_MAP: Record<string, string> = {
  'Burgundy (Бургунди/Бордовый)': 'Burgundy (Бургунди/Бордо)',
  'Glacier (Светло-голубой)': 'Glacier (Ашық көгілдір)',
  'Silver (Серебристый)': 'Silver (Күміс түсті)',
  'Black (Чёрный)': 'Black (Қара)',
  'Lavender (Лавандовый)': 'Lavender (Лаванда)',
  'Sage (Зелёный шалфей)': 'Sage (Жасыл сәлбен)',
  'Mist Blue (Дымчато-голубой)': 'Mist Blue (Тұманды көгілдір)',
  'White (Белый)': 'White (Ақ)',
  'Sky Blue (Небесно-голубой)': 'Sky Blue (Аспан көк)',
  'Light Gold (Светло-золотистый)': 'Light Gold (Ашық алтын)',
  'Cloud White (Облачно-белый)': 'Cloud White (Бұлтты ақ)',
  'Space Black (Космический чёрный)': 'Space Black (Ғарыштық қара)',
  'Cosmic Orange (Космический оранжевый)': 'Cosmic Orange (Ғарыштық қызғылт сары)',
  'Deep Blue (Глубокий синий)': 'Deep Blue (Қою көк)',
  'Pure White (Белоснежный)': 'Pure White (Қардай ақ)',
  'Light Blue (Голубой)': 'Light Blue (Көгілдір)',
  'Pink (Розовый)': 'Pink (Қызғылт)',
  'Yellow (Лимонный)': 'Yellow (Лимон сары)',
  'Blue (Синий)': 'Blue (Көк)',
  'Purple (Фиолетовый)': 'Purple (Күлгін)',
  'Space Gray (Серый космос)': 'Space Gray (Ғарыштық сұр)',
  'Starlight (Сияющая звезда)': 'Starlight (Жарқыраған жұлдыз)',
  'Midnight Blue (Тёмно-синий)': 'Midnight Blue (Қара-көк)',
  'Starlight Gold (Золотистый)': 'Starlight Gold (Алтын түсті)',
  'Sky Blue (Небесный)': 'Sky Blue (Аспан түстес)',
  'Neo Blue (Нео-синий)': 'Neo Blue (Нео-көк)',
  'Neo Pink (Нео-розовый)': 'Neo Pink (Нео-қызғылт)',
  'Neo Silver (Серебристый)': 'Neo Silver (Күміс түсті)',
  'Neo Yellow (Солнечный)': 'Neo Yellow (Күн сәулелі)',
  'Jet Black (Глянцевый чёрный)': 'Jet Black (Жылтыр қара)',
  'Space Grey (Космический серый)': 'Space Grey (Ғарыштық сұр)',
  'Rose Pink (Розовый)': 'Rose Pink (Қызғылт)',
  'Midnight Black (Тёмная ночь)': 'Midnight Black (Түн қарасы)',
  'Starlight Gold (Сияющая звезда)': 'Starlight Gold (Жарқыраған жұлдыз)',
  'Ceramic Pink (Керамический розовый)': 'Ceramic Pink (Керамикалық қызғылт)',
  'Prussian Blue (Синий индиго)': 'Prussian Blue (Пруссия көгі)',
  'Red Velvet (Красный бархат)': 'Red Velvet (Қызыл барқыт)',
  'Jasper Plum (Яшмовая слива)': 'Jasper Plum (Қара өрік түстес)',
  'Apricot (Абрикосовый)': 'Apricot (Өрік түстес)',
  'Nickel / Copper (Никель и медь)': 'Nickel / Copper (Никель және мыс)',
  'Strawberry Bronze (Клубничная бронза)': 'Strawberry Bronze (Құлпынай қола)',
  'Серый (Silver Grey)': 'Сұр (Silver Grey)',
  'Черный (Black)': 'Қара (Black)',
  'Лимитированная серия': 'Шектеулі серия',
};

export function localizeColorName(name: string, lang: Lang): string {
  if (lang === 'ru') return name;
  return COLOR_KK_MAP[name] || name;
}

export function localizeProductName(name: string, lang: Lang): string {
  if (lang === 'ru') return name;
  return name
    .replace('(базовый)', '(негізгі)')
    .replace('(новый)', '(жаңа)')
    .replace('с беспроводной зарядкой', 'сымсыз қуаттаумен')
    .replace('Фотоаппарат ', 'Фотоаппарат ')
    .replace(' серый', ' сұр')
    .replace(' черный', ' қара')
    .replace(' лимит', ' лимиттелген')
    .replace('Яндекс станция лайт2', 'Яндекс Станция Лайт 2')
    .replace('Яндекс станция Стрит', 'Яндекс Станция Стрит')
    .replace('Яндекс станция Миди', 'Яндекс Станция Миди');
}

export function localizeSubcategory(subcat: string, lang: Lang): string {
  if (lang === 'ru') return subcat;
  return subcat
    .replace('(Базовый)', '(Негізгі)')
    .replace('(Новый)', '(Жаңа)');
}
