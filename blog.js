// Blog functionality
const blogData = [
    {
        id: 1,
        title: "Новый Mercedes E-Class 2025: полный обзор",
        excerpt: "Представляем обновленную версию легендарного бизнес-седана с революционными технологиями",
        image: "blog-mercedes-e-class.jfif",
        category: "reviews",
        date: "2024-01-15",
        readTime: "8 мин",
        views: 1247,
        likes: 342,
        fullContent: `
            <h2>Дизайн и экстерьер</h2>
            <p>Новый Mercedes E-Class 2025 года представляет собой эволюцию классического дизайна с акцентом на аэродинамику и современную эстетику. Линии кузова стали более плавными, а коэффициент лобового сопротивления снижен до рекордных 0.23.</p>
            <img src="blog-e-class-interior.jpg" alt="Интерьер E-Class" style="width:100%; border-radius:8px; margin:1.5rem 0;">
            <h2>Технологии и инновации</h2>
            <p>Основным обновлением стала система MBUX Superscreen, которая объединяет три дисплея в единую панель. Искусственный интеллект теперь лучше адаптируется к привычкам водителя.</p>
            <h2>Производительность</h2>
            <p>Линейка двигателей включает как гибридные, так и полностью электрические варианты. Флагманская версия E 450e предлагает 381 л.с. и запас хода на электротяге до 100 км.</p>
        `
    },
    {
        id: 2,
        title: "Mercedes представила концепт автономного автомобиля",
        excerpt: "Амбициозный проект Vision AVTR демонстрирует будущее автономного транспорта",
        image: "blog-concept-avtr.png",
        category: "news",
        date: "2024-01-10",
        readTime: "6 мин",
        views: 2156,
        likes: 489,
        fullContent: `
            <h2>Будущее мобильности</h2>
            <p>Концепт Vision AVTR представляет революционный подход к дизайну и технологиям автономного вождения.</p>
            <p>Автомобиль использует бионический дизайн, вдохновленный природой, и полностью автономную систему управления.</p>
        `
    },
    {
        id: 3,
        title: "Тест-драйв Mercedes-AMG SL 63",
        excerpt: "Спортивный родстер в новом поколении: мощь и элегантность",
        image: "blog-amg-sl63.png",
        category: "reviews",
        date: "2024-01-05",
        readTime: "10 мин",
        views: 1890,
        likes: 567,
        fullContent: "Полный текст статьи о Mercedes-AMG SL 63..."
    },
    {
        id: 4,
        title: "Mercedes-Benz на автосалоне в Женеве 2024",
        excerpt: "Новые модели и технологические демонстрации от немецкого автогиганта",
        image: "blog-geneva-show.jpg",
        category: "events",
        date: "2023-12-20",
        readTime: "5 мин",
        views: 1345,
        likes: 234,
        fullContent: "Полный текст статьи о автосалоне..."
    },
    {
        id: 5,
        title: "Экологичные технологии Mercedes-EQ",
        excerpt: "Как Mercedes развивает электрическую мобильность",
        image: "blog-eq-technology.jfif",
        category: "technology",
        date: "2023-12-15",
        readTime: "7 мин",
        views: 1789,
        likes: 412,
        fullContent: `<header class="article-header-content">
   
</header>

<div class="article-body">
    <h1>В погоне за Ягуаром и Audi: первый тест-драйв электрокроссовера Mercedes-Benz EQC</h1>
    
    <div class="article-subtitle">
        <div class="magazine-info">
            <span>Первая встреча | АР №11</span>
            <span>Автор: Юрий Ветров</span>
            <span>Фото: компания Daimler AG</span>
        </div>
    </div>
    
    <div class="intro-paragraph">
        <p>В Норвегии, куда я прилетел на ездовое знакомство с первым электрическим Мерседесом, было ощущение, что EQC опоздал. Весь этаж парковки в аэропорту Осло оказался забит «электричками»: Теслы, Ягуары, Фольксвагены, Audi, BMW, даже Hyundai с Kia. Каждое парковочное место оборудовано мощным зарядником — в том числе и поэтому там не было ни одного автомобиля с ДВС. Словом, светлое электробудущее в отдельно взятой стране уже наступило. Как в него вписался припозднившийся Mercedes-Benz EQC?</p>
    </div>
    
    <div class="main-car-image">
        <img src="Mercedes-EQ/doroga.jpg" alt="Mercedes-Benz EQC на дорогах Норвегии">
        <p class="image-caption">Mercedes-Benz EQC — первый электрический кроссовер немецкого бренда в тест-драйве по норвежским дорогам</p>
    </div>
    
    <div class="brand-explanation">
        <h2><i class="fas fa-brain"></i> EQ: Electric Intelligence</h2>
        <p>Новообразованный бренд EQ в Мерседесе расшифровывают как Electric Intelligence, очевидно намекая на IQ — коэффициент интеллекта. Уже засвечены в виде концептов EQA и EQB — последняя буква, согласно нынешней мерседесовской системе, обозначает класс машины. А EQC, стало быть, — это электрокроссовер С-класса, ближайший родственник Мерседеса GLC.</p>
    </div>
    
    <div class="era-change">
        <h2><i class="fas fa-history"></i> Смена эпох в Daimler AG</h2>
        <p>Daimler AG нынче переживает смену эпох. Уход в отставку председателя правления, харизматичного Дитриха Цетше, чьи роскошные усы годами служили таким же мощным идентификатором бренда, как и сама трехлучевая звезда, — гораздо больше, чем кадровая перестановка. Век двигателей внутреннего сгорания (ДВС) в Мерседесе, как и эпоха Цетше, клонится к закату.</p>
        
        <div class="executive-portraits">
            <div class="executive-card">
                <img src="Mercedes-EQ/Daimler-Dieter-Zetsche.jpg" alt="Дитрих Цетше">
                <div class="executive-info">
                    <h4>Дитрих Цетше</h4>
                    <p>Председатель правления Daimler AG (1998-2019)</p>
                    <p>Символ эпохи двигателей внутреннего сгорания</p>
                </div>
            </div>
            
            <div class="executive-card">
                <img src="Mercedes-EQ/2019_EQC_Oslo_Ola_Kaellenius_026.jpg" alt="Ула Кэллениус">
                <div class="executive-info">
                    <h4>Ула Кэллениус</h4>
                    <p>Преемник Цетше с 2019 года</p>
                    <p>Архитектор электрического будущего Mercedes</p>
                </div>
            </div>
        </div>
        
        <div class="strategy-highlights">
            <p>Преемник Дитриха, швед Ула Кэллениус, уже заявил:</p>
            <ul>
                <li><strong>К 2025 году</strong> — все Мерседесы с ДВС будут иметь гибридную составляющую с 48-вольтовой электросистемой</li>
                <li><strong>К 2030-му</strong> — доля электромобилей и подзаряжаемых гибридов в продукции концерна должна составлять не менее 50%</li>
                <li><strong>В 2040 году</strong> — мерседесовские водородные электромобили на топливных элементах станут крупносерийными</li>
            </ul>
            
            <div class="investment-note">
                <p><i class="fas fa-euro-sign"></i> <strong>10 миллиардов евро</strong> — инвестиции Mercedes в разработку электротехнологий за последние несколько лет</p>
            </div>
        </div>
    </div>
    
    <div class="battery-production">
        <h2><i class="fas fa-industry"></i> Производство батарей: глобальная экспансия</h2>
        <div class="battery-info-grid">
            <div class="battery-info">
                <h3>Текущее производство</h3>
                <p><i class="fas fa-map-marker-alt"></i> Каменц, Германия (под Дрезденом)</p>
                <p>Единственный завод, выпускающий батареи для EQC</p>
            </div>
            
            <div class="battery-info">
                <h3>Планы расширения</h3>
                <p><i class="fas fa-euro-sign"></i> Более 1 млрд евро инвестиций</p>
                <p>8 новых площадок: 4 в Германии, Польша, США, Таиланд, Китай</p>
            </div>
        </div>
        
        <div class="battery-image">
            <img src="Mercedes-EQ/009-1.jpg" alt="Литий-ионная батарея Mercedes EQC">
            <p class="image-caption">400-вольтовая литий-ионная батарея на 80 кВт·ч с жидкостным охлаждением — аналог решения Audi e-tron</p>
        </div>
    </div>
    
    <div class="platform-comparison">
        <h2><i class="fas fa-robot"></i> Архитектуры: EVA1 vs EVA2</h2>
        
        <div class="platform-comparison-grid">
            <div class="platform-card current">
                <div class="platform-header">
                    <h3>EVA1</h3>
                    <span class="platform-status">Текущая</span>
                </div>
                <ul>
                    <li><i class="fas fa-check"></i> Основана на платформе MRA</li>
                    <li><i class="fas fa-check"></i> 400-вольтовые батареи</li>
                    <li><i class="fas fa-check"></i> Асинхронные электромоторы</li>
                    <li><i class="fas fa-check"></i> Батарея не встроена в кузов</li>
                    <li><i class="fas fa-car"></i> Используется в EQC</li>
                </ul>
            </div>
            
            <div class="platform-card future">
                <div class="platform-header">
                    <h3>EVA2</h3>
                    <span class="platform-status">Будущая</span>
                </div>
                <ul>
                    <li><i class="fas fa-check"></i> Разработана с нуля</li>
                    <li><i class="fas fa-check"></i> 800-вольтовые батареи</li>
                    <li><i class="fas fa-check"></i> Синхронные электромоторы</li>
                    <li><i class="fas fa-check"></i> Батарея интегрирована в кузов</li>
                    <li><i class="fas fa-car"></i> Появится через 1-2 года</li>
                </ul>
            </div>
        </div>
        
        <div class="competitor-note">
            <p><strong>Аналогия с Audi:</strong> Та же история с e-tron на платформе MLB evo и будущей PPE для Taycan и e-tron GT</p>
        </div>
    </div>
    
    <div class="compartment-analysis">
        <h2><i class="fas fa-car"></i> Компоновка: дань традициям</h2>
        <div class="analysis-content">
            <div class="analysis-text">
                <p><strong>EQC — самый нерациональный серийный электрокроссовер по компоновке:</strong></p>
                <ul>
                    <li>Радиатор, инвертор и передний электродвигатель занимают все подкапотное пространство</li>
                    <li>В отличие от Jaguar I-Pace, Audi e-tron и Tesla</li>
                    <li>Бортовой зарядный преобразователь перенесен назад, сокращая объем багажника</li>
                </ul>
            </div>
            <div class="analysis-image">
                <img src="Mercedes-EQ/008-1.jpg" alt="Компоновка Mercedes EQC">
            </div>
        </div>
    </div>
    
    <div class="hydrogen-note">
        <div class="hydrogen-content">
            <h3><i class="fas fa-gas-pump"></i> Водородная альтернатива</h3>
            <p>Mercedes не оставляет идею электромобилей на топливных элементах — у EQC будет водородная модификация. Но в отсутствие развитой инфраструктуры водородных заправок все по-прежнему пока ограничится мелкими сериями и опытной эксплуатацией.</p>
        </div>
    </div>
    
    <div class="production-details">
        <h2><i class="fas fa-cogs"></i> Производство и поставки</h2>
        <div class="production-grid">
            <div class="production-location">
                <h4><i class="fas fa-industry"></i> Бремен, Германия</h4>
                <p>Производство началось в мае 2019</p>
                <p>На той же линии, где собирают C-класс и GLC</p>
            </div>
            
            <div class="production-location">
                <h4><i class="fas fa-industry"></i> Пекин, Китай</h4>
                <p>Совместное предприятие BBAC</p>
                <p>Производство начнется осенью 2019</p>
            </div>
            
            <div class="production-location">
                <h4><i class="fas fa-globe-americas"></i> США</h4>
                <p>Продажи начнутся только в 2020 году</p>
            </div>
        </div>
    </div>
    
    <div class="dimensions-comparison">
        <h2><i class="fas fa-ruler-combined"></i> Габариты и масса</h2>
        
        <table class="dimensions-table">
            <thead>
                <tr>
                    <th>Параметр</th>
                    <th>Mercedes EQC</th>
                    <th>Jaguar I-Pace</th>
                    <th>Audi e-tron</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Длина, мм</td>
                    <td>4656</td>
                    <td>4682</td>
                    <td>4901</td>
                </tr>
                <tr>
                    <td>Снаряженная масса, кг</td>
                    <td><strong>2495</strong></td>
                    <td>2208</td>
                    <td>2490</td>
                </tr>
                <tr>
                    <td>Коэффициент Сх</td>
                    <td>0,27-0,28</td>
                    <td>0,29</td>
                    <td>0,27-0,28</td>
                </tr>
            </tbody>
        </table>
        
        <div class="weight-explanation">
            <p><strong>Почему такой тяжелый?</strong> Инженеры Mercedes делают акцент на безопасности: кузов EQC прочнее и тяжелее конкурентов.</p>
        </div>
    </div>
    
    <div class="performance-specs">
        <h2><i class="fas fa-tachometer-alt"></i> Технические характеристики</h2>
        
        <div class="specs-grid">
            <div class="spec-card">
                <div class="spec-icon">
                    <i class="fas fa-bolt"></i>
                </div>
                <h3>Мощность</h3>
                <p class="spec-value">408 л.с. (300 кВт)</p>
                <p class="spec-note">Два асинхронных электродвигателя</p>
            </div>
            
            <div class="spec-card">
                <div class="spec-icon">
                    <i class="fas fa-cogs"></i>
                </div>
                <h3>Крутящий момент</h3>
                <p class="spec-value">760 Нм</p>
                <p class="spec-note">На 100 Нм больше, чем у Audi e-tron</p>
            </div>
            
            <div class="spec-card">
                <div class="spec-icon">
                    <i class="fas fa-rocket"></i>
                </div>
                <h3>Разгон 0-100 км/ч</h3>
                <p class="spec-value">5,1 с</p>
                <p class="spec-note">На 0,6 с быстрее Audi e-tron</p>
            </div>
            
            <div class="spec-card">
                <div class="spec-icon">
                    <i class="fas fa-tachometer-alt"></i>
                </div>
                <h3>Макс. скорость</h3>
                <p class="spec-value">180 км/ч</p>
                <p class="spec-note">Электронное ограничение</p>
            </div>
        </div>
        
        <div class="charging-info">
            <h3><i class="fas fa-charging-station"></i> Зарядка</h3>
            <div class="charging-details">
                <div class="charging-method">
                    <h4>Домашняя зарядка</h4>
                    <p><i class="far fa-clock"></i> 11 часов от wallbox</p>
                </div>
                <div class="charging-method">
                    <h4>Быстрая зарядка DC</h4>
                    <p><i class="fas fa-bolt"></i> 108 кВт: 63% за 42 мин</p>
                    <p><i class="fas fa-bolt"></i> 150 кВт: 80% за 40 мин</p>
                </div>
            </div>
            
            <div class="charging-port">
                <img src="Mercedes-EQ/rozetka.jpg" alt="Розетка зарядки EQC">
                <p class="image-caption">Розетка стандарта CCS — одна, без электропривода лючка</p>
            </div>
        </div>
    </div>
    
    <div class="interior-review">
        <h2><i class="fas fa-chair"></i> Интерьер: традиционный Mercedes</h2>
        
        <div class="interior-description">
            <p>EQC претендует на звание самого консервативного электромобиля — никакого авангардизма! Интерьер и по духу, и в деталях не отличается от Мерседесов с ДВС.</p>
            
            <div class="interior-highlights">
                <div class="highlight-item">
                    <h4><i class="fas fa-thumbs-up"></i> Плюсы</h4>
                    <ul>
                        <li>Роскошный и нарядный интерьер</li>
                        <li>Качество материалов на высоте</li>
                        <li>Привычная эргономика для владельцев Mercedes</li>
                        <li>Система MBUX с искусственным интеллектом</li>
                    </ul>
                </div>
                
                <div class="highlight-item">
                    <h4><i class="fas fa-thumbs-down"></i> Минусы</h4>
                    <ul>
                        <li>Слишком много кнопок для электромобиля</li>
                        <li>Кнопка "пуск" выглядит рудиментарно</li>
                        <li>Консервативный дизайн</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="interior-gallery">
            <img src="Mercedes-EQ/panel.jpg" alt="Панель приборов EQC">
            <p class="image-caption">Виртуальные приборы с круговым ваттметром вместо тахометра: верх — отдача, низ — рекуперация</p>
        </div>
    </div>
    
    <div class="driving-experience">
        <h2><i class="fas fa-road"></i> Впечатления от вождения</h2>
        
        <div class="driving-points">
            <div class="driving-point">
                <h3><i class="fas fa-leaf"></i> Рекуперация</h3>
                <p>Мерседесовская философия управления рекуперацией хороша. Подрулевыми лепестками можно выбрать любой режим — от D+ (свободный накат) до D-- c максимальной рекуперацией до 0,4g. Лучший режим — D Auto, когда EQC сам подбирает степень рекуперации.</p>
            </div>
            
            <div class="driving-point">
                <h3><i class="fas fa-robot"></i> Полуавтопилот</h3>
                <p>В Норвегии с ограничением 80 км/ч полуавтопилот Mercedes идеален: сам рекуперативно притормозит перед круговой развязкой, сам отцентрирует в полосе, сам плавно разгонится. «Наши сани едут сами».</p>
            </div>
            
            <div class="driving-point">
                <h3><i class="fas fa-tachometer-alt"></i> Расход энергии</h3>
                <p>Даже в оптимальных условиях (15-17°C) EQC расходовал 23,3 кВт·ч/100 км — сопоставимо с Audi e-tron в 30-градусную жару. Заявленные 19,7 кВт·ч/100 км достижимы только в лаборатории.</p>
            </div>
            
            <div class="driving-point">
                <h3><i class="fas fa-volume-mute"></i> Тишина в салоне</h3>
                <p>EQC тих, как и подобает настоящему Мерседесу — в отличие от Jaguar, не докучает паразитным дорожным шумом. Электродвигатели и электроника смонтированы на подрамниках для лучшей шумоизоляции.</p>
            </div>
            
            <div class="driving-point">
                <h3><i class="fas fa-car-side"></i> Плавность хода</h3>
                <p>Совместная работа с Bilstein над подвеской дала результат: EQC плывет по неровностям, как S-класс. И это при пружинной, а не пневматической подвеске!</p>
            </div>
            
            <div class="driving-point">
                <h3><i class="fas fa-gas-pump"></i> Запас хода</h3>
                <p>При расходе 31 кВт·ч/100 км на автобане (130 км/ч) запас хода около 250 км. Но с развитой сетью быстрых зарядок Ionity в Европе это не проблема: 40 минут на перерыв — и можно ехать дальше.</p>
            </div>
        </div>
    </div>
    
    <div class="trunk-space">
        <h2><i class="fas fa-suitcase"></i> Багажник</h2>
        <div class="trunk-details">
            <div class="trunk-image">
                <img src="Mercedes-EQ/bagaggg.jpg" alt="Багажник Mercedes EQC">
            </div>
            <div class="trunk-info">
                <p><strong>Объем: 500 литров</strong></p>
                <ul>
                    <li>Хорошая длина, но малая высота</li>
                    <li>Подполье занято электрическими компонентами</li>
                    <li>Докатки нет даже в качестве опции</li>
                    <li>Задний ряд складывается в пропорции 40:20:40</li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="safety-features">
        <h2><i class="fas fa-shield-alt"></i> Системы безопасности</h2>
        <div class="safety-content">
            <p>Автоторможение перед пешеходами для Мерседеса давно пройденный этап. Будущее — это автоматический объезд. Уже сейчас электроусилитель руля и система стабилизации EQC заточены под максимально быстрое изменение траектории именно перед пешеходом!</p>
            
            <div class="safety-image">
                <img src="Mercedes-EQ/tormoz.jpg" alt="Система безопасности EQC">
            </div>
        </div>
    </div>
    
    <div class="pricing-info">
        <h2><i class="fas fa-tag"></i> Цены и рынки</h2>
        
        <div class="pricing-grid">
            <div class="price-card">
                <h3>Германия</h3>
                <p class="price">71 281 €</p>
                <p class="price-note">На 7-9 тыс. € дешевле Jaguar I-Pace и Audi e-tron</p>
            </div>
            
            <div class="price-card">
                <h3>Россия (2020)</h3>
                <p class="price">~6,5 млн ₽</p>
                <p class="price-note">Планируемая стартовая цена</p>
            </div>
            
            <div class="price-card">
                <h3>Китай</h3>
                <p class="price">Осень 2019</p>
                <p class="price-note">Продажи начнутся осенью</p>
            </div>
        </div>
    </div>
    
    <div class="technical-specs-table">
        <h2><i class="fas fa-clipboard-list"></i> Технические характеристики</h2>
        
        <table class="full-specs-table">
            <thead>
                <tr>
                    <th colspan="2">Mercedes-Benz EQC 400 4Matic</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Тип кузова</td>
                    <td>Пятидверный универсал</td>
                </tr>
                <tr>
                    <td>Число мест</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Объем багажника</td>
                    <td>500 л</td>
                </tr>
                <tr>
                    <td>Снаряженная масса</td>
                    <td>2495 кг</td>
                </tr>
                <tr>
                    <td>Полная масса</td>
                    <td>2940 кг</td>
                </tr>
                <tr>
                    <td>Коэффициент Сх</td>
                    <td>0,27—0,28</td>
                </tr>
                <tr>
                    <td>Тип электромоторов</td>
                    <td>Асинхронные, переменного тока</td>
                </tr>
                <tr>
                    <td>Мощность</td>
                    <td>300 кВт (408 л.с.)</td>
                </tr>
                <tr>
                    <td>Крутящий момент</td>
                    <td>760 Нм</td>
                </tr>
                <tr>
                    <td>Тип батареи</td>
                    <td>Литий-ионная</td>
                </tr>
                <tr>
                    <td>Емкость батареи</td>
                    <td>80 кВт·ч</td>
                </tr>
                <tr>
                    <td>Масса батареи</td>
                    <td>652 кг</td>
                </tr>
                <tr>
                    <td>Привод</td>
                    <td>Подключаемый полный</td>
                </tr>
                <tr>
                    <td>Передняя подвеска</td>
                    <td>Независимая, пружинная, на двойных поперечных рычагах</td>
                </tr>
                <tr>
                    <td>Задняя подвеска</td>
                    <td>Независимая, пружинная, многорычажная</td>
                </tr>
                <tr>
                    <td>Максимальная скорость</td>
                    <td>180 км/ч*</td>
                </tr>
                <tr>
                    <td>Разгон 0—100 км/ч</td>
                    <td>5,1 с</td>
                </tr>
                <tr>
                    <td>Расход по NEDC</td>
                    <td>19,7—20,8 кВт·ч/100 км</td>
                </tr>
                <tr>
                    <td>Запас хода по NEDC</td>
                    <td>471 км</td>
                </tr>
                <tr>
                    <td>*Ограничена электроникой</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="conclusion">
        <h2><i class="fas fa-check-circle"></i> Выводы</h2>
        
        <div class="conclusion-content">
            <div class="verdict">
                <h3>Вердикт тест-драйва</h3>
                <p>Mercedes-Benz EQC — типичный представитель переходной эпохи. С одной стороны, это полноценный электромобиль с приличной динамикой и передовыми технологиями. С другой — слишком консервативный, тяжелый и не самый эффективный в своем классе.</p>
                
                <p>EQC опоздал на вечеринку электромобилей, но Mercedes компенсирует это традиционными преимуществами бренда: безупречным качеством, комфортом и статусом. Для тех, кто переходит с обычного Mercedes на электрический, это идеальный выбор — никакой адаптации не потребуется.</p>
            </div>
            
            <div class="pros-cons">
                <div class="pros">
                    <h4><i class="fas fa-plus-circle"></i> Преимущества</h4>
                    <ul>
                        <li>Безупречное качество сборки</li>
                        <li>Знакомый и удобный интерьер</li>
                        <li>Отличная система рекуперации</li>
                        <li>Тишина и плавность хода</li>
                        <li>Конкурентная цена в Европе</li>
                    </ul>
                </div>
                
                <div class="cons">
                    <h4><i class="fas fa-minus-circle"></i> Недостатки</h4>
                    <ul>
                        <li>Большой вес</li>
                        <li>Средний запас хода</li>
                        <li>Консервативная компоновка</li>
                        <li>Высокий расход энергии</li>
                        <li>Опоздание на рынок</li>
                    </ul>
                </div>
            </div>
            
            <div class="final-thought">
                <p><strong>Кому подойдет EQC?</strong> Тем, кто ценит традиционные ценности Mercedes и не готов к радикальным изменениям при переходе на электромобиль. Для пионеров и новаторов есть более интересные варианты вроде Tesla или Jaguar I-Pace, но для консервативных премиум-покупателей EQC — идеальный электрический Mercedes.</p>
            </div>
        </div>
    </div>
    
    <div class="article-footer">
        <div class="test-drive-details">
            <p><strong>Место тест-драйва:</strong> Норвегия (Осло и окрестности)</p>
            <p><strong>Пробег:</strong> 450 км</p>
            <p><strong>Условия:</strong> Город, трасса, загородные дороги</p>
            <p><strong>Температура:</strong> +15...+17°C</p>
        </div>
        
        <div class="competitor-mention">
            <h4>Основные конкуренты:</h4>
            <div class="competitor-logos">
                <span class="competitor-logo">Jaguar I-Pace</span>
                <span class="competitor-logo">Audi e-tron</span>
                <span class="competitor-logo">Tesla Model X</span>
                <span class="competitor-logo">BMW iX3</span>
            </div>
        </div>
    </div>
</div>`
    },
    {
        id: 6,
        title: "Интервью с главным дизайнером Mercedes",
        excerpt: "Гордон Вагенер рассказывает о философии дизайна марки",
        image: "blog-designer-interview.jpg",
        category: "news",
        date: "2023-12-10",
        readTime: "12 мин",
        views: 2567,
        likes: 689,
        fullContent: `<header class="article-header-content">
   
</header>

<div class="article-body">
    <h1>Интервью с главным дизайнером Mercedes-Benz Гордоном Вагенером</h1>
    
    <div class="interview-intro">
        <div class="interviewer-photo">
            <img src="interview/i.jfif" alt="Журналист на интервью">
        </div>
        <div class="intro-text">
            <p><strong>Во время международного Женевского автосалона</strong> главный дизайнер Mercedes-Benz Гордон Вагенер рассказал об идеальном S-классе, выходе марки в сегмент компактных внедорожников, философии дизайна немецкого бренда и о том, что готов взять на работу перспективных российских дизайнеров. В эксклюзивном интервью Вагенер также признался, что не испытывает ревности к тюнинговым ателье.</p>
        </div>
    </div>
    
    <div class="designer-portrait">
        <img src="interview/gordon.jpg" alt="Гордон Вагенер, главный дизайнер Mercedes-Benz">
        <div class="portrait-caption">
            <h3>Гордон Вагенер</h3>
            <p>Главный дизайнер Mercedes-Benz с 2008 года</p>
            <div class="designer-info">
                <span><i class="fas fa-graduation-cap"></i> Выпускник Королевского колледжа искусств, Лондон</span>
                <span><i class="fas fa-award"></i> Более 25 лет в автомобильном дизайне</span>
                <span><i class="fas fa-car"></i> Автор дизайна Mercedes S-Class, E-Class, C-Class</span>
            </div>
        </div>
    </div>
    
    <div class="interview-quote highlight">
        <blockquote>
            <p>«Машины будут больше похожи на компьютеры на колесах»</p>
            <footer>— Гордон Вагенер о будущем автомобильного дизайна</footer>
        </blockquote>
    </div>
    
    <div class="interview-qna">
        <div class="question">
            <div class="question-meta">
                <span class="question-number">Q1</span>
                <h3>Самый красивый автомобиль в истории Mercedes</h3>
            </div>
            <p><strong>— В одном из недавних интервью вы назвали новый спорткар Mercedes-Benz, известный под рабочим названием AMG-GT, самым красивым автомобилем в истории марки. Что делает этот автомобиль самым лучшим, с точки зрения дизайна, чем он важен для вас?</strong></p>
        </div>
        
        <div class="answer">
            <div class="answer-header">
                <div class="designer-avatar">
                    <img src="interview/gordon.jpg" alt="Гордон Вагенер">
                </div>
                <div class="answer-meta">
                    <span class="designer-name">Гордон Вагенер</span>
                    <span class="answer-time"><i class="far fa-clock"></i> Ответ из Женевы</span>
                </div>
            </div>
            <div class="answer-content">
                <p>— Это особенный момент для нас, так как с началом производства «Крыла чайки» мы наконец-то завершаем эру SLS. Final Edition всегда раскупается с огромным успехом, до последней модели. Она имеет огромную популярность, потому что это именно последняя модель. То есть классический облик «Крыла чайки» приобретает более современные черты. И это делает ее особенной.</p>
                
                <div class="car-image-comparison">
                    <div class="comparison-item">
                        <img src="interview/slsamg.jpg" alt="Mercedes SLS AMG Gullwing">
                        <p class="comparison-caption">SLS AMG Gullwing</p>
                    </div>
                    <div class="comparison-item">
                        <img src="interview/gt.jfif" alt="Mercedes AMG GT Concept">
                        <p class="comparison-caption">AMG GT Concept</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="interview-qna">
        <div class="question">
            <div class="question-meta">
                <span class="question-number">Q2</span>
                <h3>Международные дизайнерские центры и российские таланты</h3>
            </div>
            <p><strong>— В каких странах расположены основные дизайнерские центры? Работают ли там дизайнеры из России? Знаете ли вы каких-либо русских дизайнеров, которых хотели бы пригласить поработать в Mercedes-Benz?</strong></p>
        </div>
        
        <div class="answer">
            <div class="answer-header">
                <div class="designer-avatar">
                    <img src="interview/gordon.jpg" alt="Гордон Вагенер">
                </div>
                <div class="answer-meta">
                    <span class="designer-name">Гордон Вагенер</span>
                    <span class="answer-time"><i class="far fa-clock"></i> Ответ из Женевы</span>
                </div>
            </div>
            <div class="answer-content">
                <p>— Безусловно, мы работаем на глобальном уровне. У нас есть студии в Италии, в Германии, в Северной Америке, в Калифорнии, в Токио, есть две студии в Китае. И в середине года мы планируем открыть большую студию тюнинг-ателье в Китае. Но не будем забывать, что у нас еще есть и грузовики. Соответственно, в Европе, Портленде, Америке, Японии, Индии и в Южной Америке также работают наши ателье.</p>
                
                <div class="design-studios-map">
                    <div class="studio-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Италия</span>
                    </div>
                    <div class="studio-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Германия</span>
                    </div>
                    <div class="studio-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>США (Калифорния)</span>
                    </div>
                    <div class="studio-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Япония (Токио)</span>
                    </div>
                    <div class="studio-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Китай (2 студии)</span>
                    </div>
                </div>
                
                <p>Безусловно, наша компания многонациональна. Не могу припомнить сейчас русских дизайнеров, которые на нас работают. Но, безусловно, мы видим потенциал. Есть много студентов, мы это отмечаем. И повышается их профессиональный уровень. Поэтому мы с удовольствием примем талантливых русских дизайнеров, если кого-то заметим.</p>
            </div>
        </div>
    </div>
    
    <div class="interview-qna">
        <div class="question">
            <div class="question-meta">
                <span class="question-number">Q3</span>
                <h3>Необходимость множества дизайнерских центров</h3>
            </div>
            <p><strong>— Для чего нужно так много дизайнерских центров? Это же огромные траты. Ведущим компаниям мира необходимо иметь столько дизайнеров?</strong></p>
        </div>
        
        <div class="answer">
            <div class="answer-header">
                <div class="designer-avatar">
                    <img src="interview/gordon.jpg" alt="Гордон Вагенер">
                </div>
                <div class="answer-meta">
                    <span class="designer-name">Гордон Вагенер</span>
                    <span class="answer-time"><i class="far fa-clock"></i> Ответ из Женевы</span>
                </div>
            </div>
            <div class="answer-content">
                <p>— Дизайн для Mercedes-Benz как для премиум-бренда очень важен. У нас интернациональный бизнес. И разделяя таким образом дизайн-студии, мы получаем опыт дизайнеров с разных континентов. Они конкурируют между собой. Они будут вдохновлять друг друга, если их соединить в одном месте. Но разделяя студии таким образом, мы поддерживаем конкурентный дух. И побеждает лучший.</p>
            </div>
        </div>
    </div>
    
    <div class="interview-qna">
        <div class="question">
            <div class="question-meta">
                <span class="question-number">Q4</span>
                <h3>Свобода творчества дизайнеров</h3>
            </div>
            <p><strong>— Насколько свободно дизайнеры могут выражать свое видение будущих автомобилей марки? Насколько они ограничены требованиями к образу бренда?</strong></p>
        </div>
        
        <div class="answer">
            <div class="answer-header">
                <div class="designer-avatar">
                    <img src="interview/gordon.jpg" alt="Гордон Вагенер">
                </div>
                <div class="answer-meta">
                    <span class="designer-name">Гордон Вагенер</span>
                    <span class="answer-time"><i class="far fa-clock"></i> Ответ из Женевы</span>
                </div>
            </div>
            <div class="answer-content">
                <p>— Мы очень свободны в своем самовыражении. Наши дизайнеры — едва ли не самые свободные. Это можно показать на примере концепта GT-6. У Mercedes-Benz есть собственная философия, которую мы называем sensual clarity, которая отражает вид современного сегмента Luxury. И безусловно, дизайн должен совпадать с этой философией. Но если у дизайнеров появляются идеи, которые выходят за рамки данной философии, я лишь скажу им: докажите мне, что это сработает.</p>
            </div>
        </div>
    </div>
    
    <div class="design-philosophy">
        <h2><i class="fas fa-brain"></i> Философия дизайна Mercedes-Benz: Sensual Clarity</h2>
        
        <div class="philosophy-explanation">
            <div class="philosophy-pillar">
                <div class="pillar-icon">
                    <i class="fas fa-heart"></i>
                </div>
                <h3>Эмоции (Sensual)</h3>
                <p>Привлекательный, сексуальный и гламурный дизайн, вызывающий эмоциональный отклик</p>
            </div>
            
            <div class="philosophy-pillar">
                <div class="pillar-icon">
                    <i class="fas fa-cogs"></i>
                </div>
                <h3>Интеллект (Clarity)</h3>
                <p>Рациональный, чистый и функциональный подход к дизайну</p>
            </div>
        </div>
        
        <div class="philosophy-quote">
            <p>«Концепция sensual clarity состоит из двух столпов — это эмоции и интеллект. Эти составляющие присутствуют в нашем ДНК, при этом нужно соблюдать некий баланс. Несмотря на то что наши машины очень привлекательны, даже, скажем, сексуальны и гламурны, они все же не пошлые, они красивые, уравновешивают друг друга.»</p>
            <span class="quote-author">— Гордон Вагенер</span>
        </div>
    </div>
    
    <div class="design-signature">
        <h3><i class="fas fa-pen-nib"></i> Фирменный штрих Mercedes-Benz</h3>
        <p>Фамильной чертой автомобилей Mercedes-Benz стала ниспадающая линия, которая проходит по всем кузову и заканчивается уже на задней части машины. Ее можно видеть на новых C-классе и S-классе.</p>
        
        <div class="signature-line-demo">
            <img src="interview/line.jfif" alt="Фирменная ниспадающая линия Mercedes-Benz">
            <p class="demo-caption">Фирменная ниспадающая линия — ДНК дизайна Mercedes-Benz</p>
        </div>
    </div>
    
    <div class="interview-qna">
        <div class="question">
            <div class="question-meta">
                <span class="question-number">Q5</span>
                <h3>Экологичность и дизайн</h3>
            </div>
            <p><strong>— Установки или электродвигателя как-то влияет на дизайн автомобиля или сейчас это уже не так важно?</strong></p>
        </div>
        
        <div class="answer">
            <div class="answer-header">
                <div class="designer-avatar">
                    <img src="interview/gordon.jpg" alt="Гордон Вагенер">
                </div>
                <div class="answer-meta">
                    <span class="designer-name">Гордон Вагенер</span>
                    <span class="answer-time"><i class="far fa-clock"></i> Ответ из Женевы</span>
                </div>
            </div>
            <div class="answer-content">
                <p>— Нет, это никак не связано. Безусловно, экологичность и наличие этих установок — все это очень важно. Но на дизайне не отражается. Мы не делаем на этом акцента.</p>
            </div>
        </div>
    </div>
    
    <div class="interview-qna">
        <div class="question">
            <div class="question-meta">
                <span class="question-number">Q6</span>
                <h3>Новый GLA-класс</h3>
            </div>
            <p><strong>— В этом году на российский рынок выходит новый GLA-класс. Чем он нравится лично вам?</strong></p>
        </div>
        
        <div class="answer">
            <div class="answer-header">
                <div class="designer-avatar">
                    <img src="interview/gordon.jpg" alt="Гордон Вагенер">
                </div>
                <div class="answer-meta">
                    <span class="designer-name">Гордон Вагенер</span>
                    <span class="answer-time"><i class="far fa-clock"></i> Ответ из Женевы</span>
                </div>
            </div>
            <div class="answer-content">
                <p>— Этот автомобиль очень важен для нас. Потому что с ним мы приходим в новый сегмент — компактных внедорожников. Он соединяет в себе повседневность со спортивностью. Автомобиль очень выносливый, а его дизайн действительно завораживает. При этом он сохраняет традиционные черты семейства Mercedes-Benz.</p>
                
                <div class="car-showcase">
                    <img src="interview/gla.jfif" alt="Mercedes GLA-Class 2024">
                    <p class="showcase-caption">Mercedes-Benz GLA-класс 2024 года</p>
                </div>
            </div>
        </div>
    </div>
    
    <div class="interview-qna">
        <div class="question">
            <div class="question-meta">
                <span class="question-number">Q7</span>
                <h3>Новый S-класс — идеальный Mercedes</h3>
            </div>
            <p><strong>— Новый S-класс официально дебютировал на автосалоне в Женеве. Что вам нравится в этих автомобилях?</strong></p>
        </div>
        
        <div class="answer">
            <div class="answer-header">
                <div class="designer-avatar">
                    <img src="interview/gordon.jpg" alt="Гордон Вагенер">
                </div>
                <div class="answer-meta">
                    <span class="designer-name">Гордон Вагенер</span>
                    <span class="answer-time"><i class="far fa-clock"></i> Ответ из Женевы</span>
                </div>
            </div>
            <div class="answer-content">
                <p>— Это самый восхитительный автомобиль, самый настоящий Mercedes-Benz S-класс, который мы когда-либо создавали. У него очень модный дизайн, а интерьер просто завораживает. Соответственно, дизайн интерьера и экстерьера создает в себе такую идеальную картинку.</p>
                
                <div class="perfection-quote">
                    <p>«С его помощью мы выходим на новый уровень, можно сказать, на уровень Ferrari, Maserati. Это уже не обычный S-класс, это идеальный S-класс.»</p>
                </div>
                
                <div class="s-class-showcase">
                    <img src="interview/benz.jfif" alt="Mercedes S-Class на Женевском автосалоне">
                    <p class="showcase-caption">Mercedes-Benz S-класс на Женевском автосалоне 2024</p>
                </div>
            </div>
        </div>
    </div>
    
    <div class="interview-qna">
        <div class="question">
            <div class="question-meta">
                <span class="question-number">Q8</span>
                <h3>Отношение к тюнинговым ателье</h3>
            </div>
            <p><strong>— Как вы относитесь к тюнинговым ателье, которые пытаются переделать автомобили, которые порой кажутся совершенными? К примеру, на Женевском автосалоне немецкое ателье Wheelsandmore демонстрирует свою версию Mercedes-Benz SLS-AMG. Не чувствуете ли некоторой ревности?</strong></p>
        </div>
        
        <div class="answer">
            <div class="answer-header">
                <div class="designer-avatar">
                    <img src="interview/gordon.jpg" alt="Гордон Вагенер">
                </div>
                <div class="answer-meta">
                    <span class="designer-name">Гордон Вагенер</span>
                    <span class="answer-time"><i class="far fa-clock"></i> Ответ из Женевы</span>
                </div>
            </div>
            <div class="answer-content">
                <p>— Безусловно, когда мы создаем автомобили Mercedes-Benz, мы делаем их идеальными. Но у нас есть свое тюнинг-ателье, это Mercedes-AMG, которое делает автомобили более спортивными и агрессивными. Этот бренд очень дорогой и достаточно сильный. Еще один хороший пример тюнинг-ателье — Brabus, который делает интересные работы.</p>
                
                <div class="tuning-showcase">
                    <div class="tuning-item">
                        <img src="interview/amg.jpg" alt="Mercedes-AMG тюнинг">
                        <p class="tuning-caption">Mercedes-AMG</p>
                    </div>
                    <div class="tuning-item">
                        <img src="interview/brabus.jfif" alt="Brabus тюнинг">
                        <p class="tuning-caption">Brabus</p>
                    </div>
                </div>
                
                <p>Хорошо, что автомобиль Mercedes-Benz является неким каркасом, базой для экспериментов. Поэтому здесь абсолютно нет никакой ревности.</p>
            </div>
        </div>
    </div>
    
    <div class="interview-qna">
        <div class="question">
            <div class="question-meta">
                <span class="question-number">Q9</span>
                <h3>Авторитеты в автомобильном дизайне</h3>
            </div>
            <p><strong>— В мире автомобильного дизайна по-настоящему большую известность получили не так много людей. Чьи работы вызывают у вас восхищение? Кого вы считаете наиболее авторитетным в сфере автомобильного дизайна? Может быть, кого-то вы считаете необоснованно забытым или неоцененным?</strong></p>
        </div>
        
        <div class="answer">
            <div class="answer-header">
                <div class="designer-avatar">
                    <img src="interview/gordon.jpg" alt="Гордон Вагенер">
                </div>
                <div class="answer-meta">
                    <span class="designer-name">Гордон Вагенер</span>
                    <span class="answer-time"><i class="far fa-clock"></i> Ответ из Женевы</span>
                </div>
            </div>
            <div class="answer-content">
                <p>— Бруно Сакко, который работает на Mercedes-Benz уже 40 лет. На самом деле есть много дизайнеров, на которых мы могли бы посмотреть. Но лучше смотреть вперед, чтобы черпать новые идеи, а не оглядываться назад.</p>
                
                <div class="designer-tribute">
                    <img src="interview/bruno.jfif" alt="Бруно Сакко">
                    <div class="tribute-content">
                        <h4>Бруно Сакко</h4>
                        <p>Легендарный дизайнер Mercedes-Benz (1975-1999)</p>
                        <ul>
                            <li>Автор дизайна Mercedes 190E, 300E, 500E</li>
                            <li>Создатель стиля Mercedes-Benz 1980-90-х</li>
                            <li>Принцип «одна линия, одна поверхность»</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="interview-qna">
        <div class="question">
            <div class="question-meta">
                <span class="question-number">Q10</span>
                <h3>Будущее автомобильного дизайна</h3>
            </div>
            <p><strong>— Как вы думаете, что будет с автомобильным дизайном, каким он будет лет через 50? То есть за последние 50 лет проделали большую эволюцию машины. И, на ваш взгляд, к чему они идут, какими они будут?</strong></p>
        </div>
        
        <div class="answer">
            <div class="answer-header">
                <div class="designer-avatar">
                    <img src="interview/gordon.jpg" alt="Гордон Вагенер">
                </div>
                <div class="answer-meta">
                    <span class="designer-name">Гордон Вагенер</span>
                    <span class="answer-time"><i class="far fa-clock"></i> Ответ из Женевы</span>
                </div>
            </div>
            <div class="answer-content">
                <div class="future-prediction">
                    <p>— Я думаю, наше будущее будет очень интересным, потому что даже за последние 15 лет автомобили изменились просто принципиальным образом.</p>
                    
                    <div class="future-quote highlight">
                        <blockquote>
                            <p>«Скорее всего, через 50 лет мы уже не будем управлять автомобилями, это будет автономное управление. И машины будут больше похожи на компьютеры на колесах.»</p>
                            <footer>— Гордон Вагенер о будущем автомобилей</footer>
                        </blockquote>
                    </div>
                    
                    <div class="future-concepts">
                        <img src="interview/futurecar.jfif" alt="Концепт Mercedes-Benz будущего">
                        <p class="concept-caption">Концептуальный автомобиль Mercedes-Benz будущего: автономный «компьютер на колесах»</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="interview-conclusion">
        <h2><i class="fas fa-file-signature"></i> Послесловие журналиста</h2>
        
        <div class="conclusion-content">
            <div class="journalist-thoughts">
                <p>Интервью с Гордоном Вагенером показало, что Mercedes-Benz продолжает балансировать между традициями и инновациями. С одной стороны — уважение к наследию Бруно Сакко и фирменным линиям, с другой — готовность к радикальным изменениям в эпоху автономного транспорта.</p>
                
                <p>Вагенер предстал не просто главным дизайнером, а философом бренда, для которого дизайн — это не просто форма, а выражение ценностей компании. Его открытость к международным талантам, в том числе из России, говорит о глобальном подходе Mercedes-Benz к дизайну.</p>
            </div>
            
            <div class="key-insights">
                <h3>Ключевые инсайты интервью:</h3>
                <ul>
                    <li><strong>Философия Sensual Clarity</strong> — баланс эмоций и интеллекта в дизайне</li>
                    <li><strong>Глобальная сеть студий</strong> — 7+ дизайнерских центров по всему миру</li>
                    <li><strong>Открытость к российским талантам</strong> — готовность нанимать российских дизайнеров</li>
                    <li><strong>Конкурентная среда</strong> — студии соревнуются между собой</li>
                    <li><strong>Тюнинг как продолжение</strong> — отсутствие ревности к тюнинговым ателье</li>
                    <li><strong>Будущее — за автономией</strong> — автомобили как «компьютеры на колесах»</li>
                </ul>
            </div>
        </div>
        
        <div class="interview-footer">
            <div class="interview-details">
                <p><strong>Место проведения:</strong> Женевский международный автосалон, Швейцария</p>
                <p><strong>Дата:</strong> 5 марта 2024 года</p>
                <p><strong>Фото:</strong> Mercedes-Benz Media</p>
                <p><strong>Автор:</strong> Алексей Волков, автомобильный журналист</p>
            </div>
            
            <div class="share-interview">
                <h4>Поделиться интервью:</h4>
                <div class="share-buttons">
                    <button class="share-btn facebook"><i class="fab fa-facebook-f"></i></button>
                    <button class="share-btn twitter"><i class="fab fa-twitter"></i></button>
                    <button class="share-btn telegram"><i class="fab fa-telegram"></i></button>
                    <button class="share-btn vk"><i class="fab fa-vk"></i></button>
                </div>
            </div>
        </div>
    </div>
</div>
        `
    },
    {
        id: 7,
        title: "Mercedes-Maybach: роскошь нового уровня",
        excerpt: "Обзор флагманских моделей люксового подразделения",
        image: "blog-maybach-review.jfif",
        category: "reviews",
        date: "2023-12-05",
        readTime: "9 мин",
        views: 1987,
        likes: 512,
        fullContent: `<h2>Введение</h2>
<p>Mercedes-Benz представил миру новую вершину автомобильного люкса — Mercedes-Maybach S-Class 2025 года (индекс кузова Z223). Этот лимузин, созданный на базе новейшего S-Class (W223), дебютировал в рекордно короткие сроки, что подчеркивает феноменальный успех предыдущего поколения и стратегическую важность бренда Maybach для концерна.</p>
<p>Z223 — это не просто удлиненный седан, а самостоятельное произведение инженерного и дизайнерского искусства, задающее новые стандарты в сегменте ультра-премиальных автомобилей, особенно для ключевых рынков, включая Россию, Китай и США.</p>

<div class="article-image">
    <img src="maybach/ved-maybach.jfif" alt="Mercedes-Maybach S-Class 2025 - передний вид">
    <p class="image-caption">Mercedes-Maybach S-Class 2025: новый эталон роскоши</p>
</div>

<h2>Габариты</h2>
<p>Главный признак Maybach — исключительное пространство — достигнут за счет значительного увеличения габаритов:</p>
<ul>
    <li><strong>Общая длина:</strong> 5469 мм (увеличена на 16 мм по сравнению с предшественником).</li>
    <li><strong>Колесная база:</strong> 3396 мм. Это на 180 мм больше, чем у стандартного S-Class W223, и на 200 мм длиннее колесной базы предыдущего поколения Maybach. Такая база обеспечивает беспрецедентный простор, особенно для пассажиров второго ряда.</li>
    <li><strong>Ширина и высота</strong> остаются сопоставимыми со стандартным S-Class, подчеркивая элегантность и стремительность силуэта.</li>
</ul>

<h2>Экстерьер</h2>
<p>Дизайн нового Maybach следует фирменной философии, но с современными акцентами:</p>
<ul>
    <li>Удлиненные задние двери и дополнительные оконные секции в стойках кузова — визитная карточка Maybach.</li>
    <li>Эксклюзивная решетка радиатора с многочисленными тонкими вертикальными хромированными спицами и эмблемой Maybach.</li>
    <li>Уникальный передний бампер с хромированными вставками и оформлением воздухозаборников, отличающийся от S-Class.</li>
    <li>Выдвижные дверные ручки в базовом оснащении.</li>
    <li>Роскошные колесные диски диаметром 19, 20 или 21 дюйм эксклюзивного дизайна.</li>
</ul>

<div class="article-highlight">
    <p><strong>Главная новинка:</strong> Доступна двухцветная окраска кузова в шести изысканных комбинациях (черный, серый, серебристый, коричневый, синий + серебристый), недоступная для обычного S-Class. Также предлагается 13 вариантов однотонных окрасов.</p>
</div>

<ul>
    <li><strong>Передовая оптика:</strong> Опциональная матричная система Digital Light с 1.3 млн микрозеркал на фару, способная проецировать информацию и символы на дорогу.</li>
</ul>

<div class="article-image">
    <img src="maybach/optic-maybach.jfif" alt="Mercedes-Maybach S-Class экстерьер с двухцветной окраской">
    <p class="image-caption">Двухцветная окраска и фирменная решетка радиатора Maybach</p>
</div>

<h2>Интерьер</h2>
<p>Салон Z223 — это царство роскоши, комфорта и цифровизации, ориентированное на задних пассажиров:</p>

<h3>Цифровая архитектура</h3>
<p>Доминирует огромный вертикальный сенсорный дисплей MBUX, интегрированный с цифровой приборной панелью. Круглые дефлекторы и большинство физических кнопок ушли в прошлое.</p>

<h3>Революция второго ряда</h3>
<ul>
    <li>Исключительно два раздельных кресла премиум-класса.</li>
    <li>Угол наклона спинки регулируется от 19° до 43.5° (почти горизонтальное положение).</li>
    <li>Фирменные мягкие подушки на подголовниках и дополнительные подушки для спины.</li>
    <li>Подогрев шеи и плеч.</li>
    <li>Выдвижная подставка для ног со встроенным вибромассажером.</li>
    <li>Электропривод подачи ремней безопасности для максимального удобства.</li>
    <li>Кресла обиты кожей Nappa, доступны вентиляция, интенсивный подогрев и многокомпонентный массаж.</li>
</ul>

<div class="article-image">
    <img src="maybach/iner-maybach.jfif" alt="Роскошный интерьер Mercedes-Maybach S-Class">
    <p class="image-caption">Царство роскоши: задние кресла премиум-класса с массажем и подогревом</p>
</div>

<h3>Атмосфера и удобство</h3>
<ul>
    <li>Адаптивная светодиодная подсветка (253 LED) с настройкой яркости и цвета.</li>
    <li>Активное шумоподавление системы Burmester 4D.</li>
    <li>Сервоприводы задних дверей для бесшумного закрывания.</li>
</ul>

<h2>Технологичность и Безопасность</h2>
<p>Maybach S-Class оснащен по последнему слову техники:</p>
<ul>
    <li><strong>Плавность хода:</strong> Базовая пневмоподвеска, опционально — инновационная гидропневматическая E-Active Body Control (сканирует дорогу и адаптируется).</li>
    <li><strong>Маневренность:</strong> Полноуправляемое шасси (поворотные задние колеса) сокращает радиус разворота на 2 метра.</li>
    <li><strong>Система DRIVE PILOT:</strong> Предлагает условно-автономное вождение (уровень 3) на разрешенных участках дорог.</li>
    <li><strong>Проекционный дисплей:</strong> Широкоугольный дисплей с дополненной реальностью (проецирует подсказки навигации на дорогу).</li>
    <li><strong>Продвинутая навигация:</strong> Подробные подсказки по полосам движения.</li>
    <li><strong>Мультимедиа:</strong> Система MBUX с голосовым управлением, огромным экраном и расширенными функциями.</li>
    <li><strong>Безопасность:</strong> Передовые системы помощи водителю (активный круиз-контроль, аварийное торможение и т.д.).</li>
</ul>

<div class="article-highlight">
    <p><strong>Ключевая новинка для пассажиров:</strong> Фронтальные подушки безопасности для заднего ряда.</p>
</div>

<h2>Технические характеристики</h2>
<p>В основе — мощные двигатели и совершенная трансмиссия:</p>
<ul>
    <li><strong>Трансмиссия:</strong> Стандартные полный привод 4MATIC и 9-ступенчатая АКПП 9G-TRONIC.</li>
</ul>

<h3>Двигатели (все с системой 48V EQ Boost, +20 л.с., 180 Нм):</h3>

<table class="specs-table">
    <thead>
        <tr>
            <th>Модель</th>
            <th>Двигатель</th>
            <th>Мощность</th>
            <th>Крутящий момент</th>
            <th>Разгон 0-100 км/ч</th>
            <th>Рынки</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>S 480</td>
            <td>3.0L L6 бензин</td>
            <td>367 л.с.</td>
            <td>500 Нм</td>
            <td>5.6 с</td>
            <td>Китай и другие</td>
        </tr>
        <tr>
            <td>S 580</td>
            <td>4.0L V8 битурбо бензин</td>
            <td>503 л.с.</td>
            <td>700 Нм</td>
            <td>4.9 с</td>
            <td>Глобальный</td>
        </tr>
        <tr>
            <td>S 680</td>
            <td>6.0L V12 битурбо бензин</td>
            <td>611-630 л.с.</td>
            <td>900-1000 Нм</td>
            <td>4.5-4.7 с</td>
            <td>РФ, Китай, другие</td>
        </tr>
        <tr>
            <td>S 580 e (PHEV)</td>
            <td>3.0L L6 + электромотор</td>
            <td>~510 л.с.</td>
            <td>750 Нм</td>
            <td>5.2 с</td>
            <td>Глобальный</td>
        </tr>
    </tbody>
</table>

<div class="article-highlight">
    <p><strong>Важно:</strong> S 680 — это первая модель Maybach с двигателем V12, которая получила полный привод. Максимальная скорость для всех версий электронно ограничена 250 км/ч.</p>
</div>

<div class="article-image">
    <img src="maybach/engine-maybach.jfif" alt="Двигатель V12 Mercedes-Maybach S 680">
    <p class="image-caption">Легендарный двигатель V12 с полным приводом — исключительная особенность S 680</p>
</div>

<h2>Заключение</h2>
<p>Mercedes-Maybach S-Class 2025 года (Z223) — это не просто автомобиль, а утверждение высочайшего статуса и воплощение мечты о безупречном комфорте. Сохраняя ДНК легендарного бренда Maybach — удлиненный кузов, эксклюзивные детали, акцент на задних пассажирах — новинка сделала гигантский шаг вперед в технологиях, безопасности и роскоши интерьера.</p>
<p>Инновации вроде проекционной оптики Digital Light, системы E-Active Body Control, полноуправляемого шасси и беспрецедентно комфортабельных задних кресел с массажером в подставке для ног задают новые ориентиры в классе. Мощные и плавные двигатели, особенно легендарный V12 с полным приводом, обеспечивают достойную динамику.</p>
<p>Новый Maybach S-Class подтверждает свое лидерство как абсолютный эталон роскошного лимузина, созданный для самых взыскательных клиентов по всему миру.</p>

<div class="article-verdict">
    <h3>Вердикт эксперта:</h3>
    <p>Mercedes-Maybach S-Class 2025 устанавливает новый стандарт в сегменте ультра-люкс, сочетая традиционную роскошь с передовыми технологиями. Это автомобиль для тех, кто ценит исключительный комфорт, престиж и инновации.</p>
</div>`
    },
    {
        id: 8,
        title: "Системы безопасности нового поколения",
        excerpt: "Как Mercedes защищает водителей и пассажиров",
        image: "blog-safety-systems.jpg",
        category: "technology",
        date: "2023-11-28",
        readTime: "8 мин",
        views: 1678,
        likes: 378,
        fullContent: `<header class="article-header-content">
    
</header>

<div class="article-body">
    <h1>Современные системы безопасности в автомобилях Mercedes-Benz: интеллект на страже жизни</h1>
    
    <p class="lead">В автомобильной индустрии Mercedes-Benz уже десятилетиями остаётся эталоном инноваций. Компания не просто следует трендам — она сама их задаёт. Особенно это касается систем безопасности: именно Mercedes-Benz одним из первых начал интегрировать активные и пассивные технологии для защиты водителя и пассажиров.</p>
    
    <div class="article-image">
        <img src="systemb/v.jpg" alt="Системы безопасности Mercedes-Benz">
        <p class="image-caption">Интеллектуальные системы безопасности Mercedes-Benz защищают каждого пассажира</p>
    </div>
    
    <p>Сегодня каждая новая модель — будь то седан, внедорожник или микроавтобус — это не просто машина, а интеллектуальный помощник на дороге, способный принять решение быстрее человека в критический момент.</p>
    
    <p>Основа современной безопасности — предотвращение угрозы до её наступления. Системы Mercedes-Benz постоянно анализируют дорожную обстановку, используя данные с радаров, камер и датчиков. Они способны распознать опасность за доли секунды и автоматически инициировать меры защиты. Это не просто технологии — это философия, в которой человек всегда в центре внимания.</p>
    
    <div class="safety-features">
        <h2><i class="fas fa-shield-alt"></i> Ключевые особенности систем безопасности</h2>
        
        <div class="feature-grid">
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-car-crash"></i>
                </div>
                <h3>PRE-SAFE®</h3>
                <p>Интеллектуальная система, которая при угрозе столкновения автоматически натягивает ремни, регулирует положение сидений и закрывает окна.</p>
            </div>
            
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-braille"></i>
                </div>
                <h3>Active Brake Assist</h3>
                <p>Распознаёт препятствия впереди и при необходимости включает экстренное торможение, чтобы избежать ДТП или смягчить его последствия.</p>
            </div>
            
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-user-clock"></i>
                </div>
                <h3>Attention Assist</h3>
                <p>Отслеживает признаки усталости водителя и подаёт визуальный и звуковой сигнал на дисплее.</p>
            </div>
            
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-blind"></i>
                </div>
                <h3>Blind Spot Assist</h3>
                <p>Предупреждает о транспортных средствах в «мёртвой зоне», особенно при смене полосы движения.</p>
            </div>
            
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-road"></i>
                </div>
                <h3>Active Lane Keeping Assist</h3>
                <p>Помогает удерживать автомобиль в пределах разметки, предотвращая несанкционированный выезд.</p>
            </div>
        </div>
    </div>
    
    <h2>Инженерный подход к безопасности</h2>
    <p>Безопасность Mercedes-Benz — это результат синергии передовых материалов, точной инженерии и интеллектуального программного обеспечения. Кузов новых моделей спроектирован с учётом зон деформации: при ударе энергия поглощается в определённых частях, что минимизирует нагрузку на пассажиров. Такой подход позволяет снизить риск серьёзных травм даже в сложных авариях.</p>
    
    <div class="article-image">
        <img src="systemb/r-zones.jpg" alt="Зоны деформации Mercedes-Benz">
        <p class="image-caption">Инженерные зоны деформации поглощают энергию удара</p>
    </div>
    
    <p>Особое внимание уделяется уязвимым участникам движения: пешеходам, велосипедистам, мотоциклистам. Системы распознавания объектов работают в любых условиях — от яркого солнечного света до полной темноты. Благодаря комбинации радаров и камер, автомобиль «видит» не только движущиеся объекты, но и припаркованные машины, внезапно открывшие двери или выехавшие из боковых улиц транспортные средства.</p>
    
    <h2>Технологии, повышающие безопасность в движении</h2>
    
    <div class="technology-list">
        <div class="tech-item">
            <h3><i class="fas fa-lightbulb"></i> Adaptive Highbeam Assist Plus</h3>
            <p>Интеллектуальная система освещения, которая автоматически регулирует свет фар, не ослепляя других, но обеспечивая максимальный обзор.</p>
        </div>
        
        <div class="tech-item">
            <h3><i class="fas fa-traffic-light"></i> Traffic Sign Assist</h3>
            <p>Распознаёт дорожные знаки (ограничение скорости, запреты поворотов) и отображает их на приборной панели.</p>
        </div>
        
        <div class="tech-item">
            <h3><i class="fas fa-parking"></i> Active Parking Assist</h3>
            <p>Берёт на себя управление рулём и тормозами при парковке, облегчая манёвры даже в стеснённых условиях.</p>
        </div>
        
        <div class="tech-item">
            <h3><i class="fas fa-network-wired"></i> Car-to-X Communication</h3>
            <p>Технология обмена данными с другими автомобилями и инфраструктурой, позволяющая получать предупреждения об опасностях за поворотом или за холмом.</p>
        </div>
        
        <div class="tech-item">
            <h3><i class="fas fa-car-side"></i> ESP® (Electronic Stability Program)</h3>
            <p>Система динамической стабилизации, корректирующая траекторию в критических ситуациях, например, на скользкой дороге.</p>
        </div>
    </div>
    
    <div class="article-highlight">
        <h3><i class="fas fa-brain"></i> Единая экосистема безопасности</h3>
        <p>Mercedes-Benz создаёт не набор отдельных функций, а целостную экосистему безопасности. Все компоненты — от датчиков давления в шинах до блоков управления тормозной системой — работают в единой сети. Это позволяет автомобилю не просто реагировать, а предугадывать действия водителя и компенсировать человеческий фактор.</p>
    </div>
    
    <h2>Демократизация безопасности</h2>
    <p>Важно, что передовые системы устанавливаются не только на флагманские модели вроде S-Class, но и на автомобили среднего сегмента — C-Class, GLC, V-Class. Это делает безопасность доступной для большего числа владельцев. Помимо этого, компания предлагает расширенные программы технического обслуживания, включающие регулярную проверку всех систем активной и пассивной защиты.</p>
    
    <div class="safety-comparison">
        <h2><i class="fas fa-balance-scale"></i> Системы предварительной защиты</h2>
        
        <div class="comparison-grid">
            <div class="comparison-card">
                <h3>PRE-SAFE® PLUS</h3>
                <p>Активируется даже при стоянке: при угрозе удара сзади подготавливает автомобиль к столкновению.</p>
            </div>
            
            <div class="comparison-card">
                <h3>PRE-SAFE® Impulse Side</h3>
                <p>В случае бокового столкновения слегка смещает водителя или пассажира к центру салона, уменьшая воздействие удара.</p>
            </div>
            
            <div class="comparison-card">
                <h3>Evasive Steering Assist</h3>
                <p>Помогает выполнить манёвр уклонения, добавляя усилие на рулевом колесе в нужном направлении.</p>
            </div>
            
            <div class="comparison-card">
                <h3>Cross-Traffic Assist</h3>
                <p>Предупреждает о движущихся транспортных средствах при выезде задним ходом с парковки.</p>
            </div>
            
            <div class="comparison-card">
                <h3>Brake Assist Plus</h3>
                <p>При резком нажатии на тормоз увеличивает тормозное усилие, сокращая тормозной путь.</p>
            </div>
        </div>
    </div>
    
    <h2>Историческое лидерство и инновации</h2>
    <p>Mercedes-Benz не просто соответствует стандартам — он задаёт их. В 1950-х годах компания первой внедрила пассивные системы защиты, а сегодня лидирует в разработке активных технологий. Каждая новая версия программного обеспечения проходит тысячи километров испытаний и сотни краш-тестов. Инженеры тестируют системы в самых разных условиях — от городских пробок до загородных трасс с повышенным риском.</p>
    
    <div class="article-image">
        <img src="systemb/s-t.jpg" alt="Испытания систем безопасности Mercedes-Benz">
        <p class="image-caption">Строгие испытания каждой системы безопасности</p>
    </div>
    
    <p>Благодаря сбору анонимных данных с автомобилей клиентов Mercedes-Benz постоянно улучшает алгоритмы распознавания и реакции. Эта обратная связь помогает делать системы ещё более точными и надёжными.</p>
    
    <h2>Преимущества Mercedes-Benz на фоне других производителей</h2>
    
    <div class="advantages-grid">
        <div class="advantage-card">
            <div class="advantage-number">01</div>
            <h3>Полная интеграция</h3>
            <p>Все системы — от стабилизации до распознавания дорожных знаков — объединены в единую архитектуру.</p>
        </div>
        
        <div class="advantage-card">
            <div class="advantage-number">02</div>
            <h3>OTA обновления</h3>
            <p>Регулярные обновления через воздух: функции безопасности можно улучшать удалённо, даже после покупки авто.</p>
        </div>
        
        <div class="advantage-card">
            <div class="advantage-number">03</div>
            <h3>Ориентация на человека</h3>
            <p>Каждая система учитывает особенности восприятия, реакции и поведения водителя.</p>
        </div>
        
        <div class="advantage-card">
            <div class="advantage-number">04</div>
            <h3>Региональная адаптация</h3>
            <p>Технологии учитывают местные правила дорожного движения, климат и качество дорожного покрытия.</p>
        </div>
        
        <div class="advantage-card">
            <div class="advantage-number">05</div>
            <h3>Превентивный подход</h3>
            <p>Акцент сделан не на ликвидацию последствий, а на предотвращение аварий.</p>
        </div>
    </div>
    
    <h2>Будущее дорожной безопасности</h2>
    <p>Сегодня на дорогах всё чаще появляются не только автомобили, но и электросамокаты, велосипеды, грузовики. В таких условиях высокий уровень автоматизации становится необходимостью. Mercedes-Benz предлагает решения, которые позволяют чувствовать себя уверенно в плотном потоке, при резком торможении впереди идущего авто или при внезапном появлении пешехода.</p>
    
    <p>Технологии не только снижают риск ДТП, но и облегчают процесс вождения, особенно в длительных поездках. Адаптивный круиз-контроль, автоматическое удержание в полосе и поддержание дистанции позволяют водителю меньше уставать и сохранять концентрацию дольше.</p>
    
    <div class="benefits-section">
        <h2><i class="fas fa-check-circle"></i> Что получают владельцы Mercedes-Benz</h2>
        
        <ul class="benefits-list">
            <li><strong>Полный контроль ситуации</strong> даже в самых сложных условиях</li>
            <li><strong>Снижение утомляемости</strong> за счёт автоматизации рутинных задач</li>
            <li><strong>Комплексная защита для всех пассажиров</strong>, включая детей (специальные крепления, дополнительные подушки безопасности)</li>
            <li><strong>Мгновенный доступ к информации</strong>: всё необходимое отображается на дисплее или проецируется на лобовое стекло</li>
            <li><strong>Психологическое спокойствие</strong>: уверенность в том, что автомобиль всегда готов к неожиданностям</li>
        </ul>
    </div>
    
    <div class="article-highlight success">
        <h3><i class="fas fa-award"></i> Заключение: Безопасность как обязательство</h3>
        <p>Mercedes-Benz доказывает: безопасность — это не опция, а основа современного автомобиля. Каждая модель — результат многолетних исследований, глубокого анализа аварий и безупречного качества исполнения. В мире, где дорога может быть непредсказуемой, такие технологии — не привилегия, а необходимость.</p>
        <p>Именно поэтому Mercedes-Benz остаётся одним из самых безопасных брендов на рынке. Его системы продолжают задавать вектор развития всей автомобильной отрасли. Выбирая Mercedes, вы выбираете не просто комфорт или статус — вы делаете осознанный шаг к защите жизни.</p>
    </div>
    
    <div class="future-section">
        <h2><i class="fas fa-rocket"></i> Дополнительные возможности и будущее безопасности</h2>
        
        <p>В прошлом году компания представила обновлённые версии систем, которые теперь устанавливаются даже на модели среднего класса. Например, адаптивный круиз-контроль с функцией Stop&Go доступен не только в S-Class, но и в C-Class. Это большой шаг к демократизации передовых технологий.</p>
        
        <p>Новые алгоритмы автоматического торможения учитывают не только объекты впереди, но и движущиеся слева и справа — будь то велосипедист или мотоцикл. В критический момент, когда человек ещё не успел среагировать, автомобиль уже начинает снижать скорость или полностью останавливается.</p>
        
        <div class="article-image">
            <img src="systemb/safety-future.jpg" alt="Будущее систем безопасности Mercedes-Benz">
            <p class="image-caption">Инновационные системы безопасности будущего</p>
        </div>
        
        <p>Через официальный сайт, приложение и сервисные центры Mercedes-Benz собирает данные, которые помогают инженерам улучшать системы. На страницах сайта можно найти подробные обзоры, характеристики, фото и видео, а также прочитать статьи от экспертов. Это помогает покупателям сделать осознанный выбор.</p>
    </div>
    
    <div class="final-verdict">
        <h3><i class="fas fa-check-double"></i> Итог</h3>
        <p>Mercedes-Benz не просто продаёт автомобили — он формирует культуру ответственного вождения. Каждый элемент — от дизайна салона до программного обеспечения — проходит строгую проверку. В эпоху умной мобильности такие технологии становятся неотъемлемой частью повседневной жизни.</p>
        <p>Следите за новинками, читайте новости, изучайте тесты и обзоры — это поможет вам быть в курсе последних разработок. А официальные контакты, номера сервисов и страницы в соцсетях всегда предоставят необходимую информацию.</p>
        <p class="verdict-quote">Безопасность — это не просто функция. Это обязательство. И Mercedes-Benz выполняет его безупречно.</p>
    </div>
</div>`

    }
];

// DOM Elements
const blogGrid = document.getElementById('blog-grid');
const categoryButtons = document.querySelectorAll('.category-btn');
const searchInput = document.getElementById('blog-search');
const searchBtn = document.querySelector('.search-btn');
const loadMoreBtn = document.getElementById('load-more-btn');
const articleModal = document.createElement('div');
articleModal.className = 'article-modal';

// Initial variables
let currentCategory = 'all';
let currentPage = 1;
const itemsPerPage = 6;
let filteredArticles = [...blogData];

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('ru-RU', options);
}

// Create article card
function createArticleCard(article) {
    return `
        <div class="blog-card" data-category="${article.category}" data-id="${article.id}">
            <div class="blog-card-image">
                <img src="${article.image}" alt="${article.title}">
                <span class="blog-card-category">${getCategoryName(article.category)}</span>
            </div>
            <div class="blog-card-content">
                <div class="blog-card-date">
                    <i class="far fa-calendar"></i>
                    ${formatDate(article.date)}
                </div>
                <h3 class="blog-card-title">${article.title}</h3>
                <p class="blog-card-excerpt">${article.excerpt}</p>
                <div class="blog-card-footer">
                    <a href="#" class="blog-card-read-more" data-id="${article.id}">
                        Читать далее
                        <i class="fas fa-arrow-right"></i>
                    </a>
                    <div class="blog-card-stats">
                        <span class="blog-card-stat">
                            <i class="far fa-clock"></i>
                            ${article.readTime}
                        </span>
                        <span class="blog-card-stat">
                            <i class="far fa-eye"></i>
                            ${article.views.toLocaleString()}
                        </span>
                        <span class="blog-card-stat">
                            <i class="far fa-heart"></i>
                            ${article.likes}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Get category name in Russian
function getCategoryName(category) {
    const categories = {
        'news': 'Новости',
        'reviews': 'Обзоры',
        'events': 'События',
        'technology': 'Технологии'
    };
    return categories[category] || category;
}

// Filter articles by category
function filterArticlesByCategory(category) {
    if (category === 'all') {
        return [...blogData];
    }
    return blogData.filter(article => article.category === category);
}

// Filter articles by search
function filterArticlesBySearch(query) {
    const lowerQuery = query.toLowerCase();
    return blogData.filter(article => 
        article.title.toLowerCase().includes(lowerQuery) ||
        article.excerpt.toLowerCase().includes(lowerQuery)
    );
}

// Display articles
function displayArticles(articles, page = 1) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const articlesToShow = articles.slice(0, endIndex);
    
    blogGrid.innerHTML = articlesToShow.map(createArticleCard).join('');
    
    // Show/hide load more button
    if (endIndex >= articles.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-block';
    }
    
    // Add event listeners to read more buttons
    document.querySelectorAll('.blog-card-read-more').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const articleId = parseInt(btn.dataset.id);
            showArticleModal(articleId);
        });
    });
}

// Show article modal
function showArticleModal(articleId) {
    const article = blogData.find(a => a.id === articleId);
    if (!article) return;
    
    articleModal.innerHTML = `
        <div class="article-modal-content">
            <button class="close-article">
                <i class="fas fa-times"></i>
            </button>
            <div class="article-header">
                <img src="${article.image}" alt="${article.title}">
                <div class="article-header-content">
                    <span class="article-category">${getCategoryName(article.category)}</span>
                    <h1 class="article-title">${article.title}</h1>
                    <div class="article-meta">
                        <span><i class="far fa-calendar"></i> ${formatDate(article.date)}</span>
                        <span><i class="far fa-clock"></i> ${article.readTime} чтения</span>
                        <span><i class="far fa-eye"></i> ${article.views.toLocaleString()} просмотров</span>
                        <span><i class="far fa-heart"></i> ${article.likes} лайков</span>
                    </div>
                </div>
            </div>
            <div class="article-body">
                <div class="article-content">
                    ${article.fullContent}
                </div>
                <div class="article-footer">
                    <div class="article-tags">
                        <span class="article-tag">Mercedes</span>
                        <span class="article-tag">${getCategoryName(article.category)}</span>
                        <span class="article-tag">2024</span>
                    </div>
                    <div class="article-share">
                        <button class="article-share-btn" title="Поделиться в Facebook">
                            <i class="fab fa-facebook-f"></i>
                        </button>
                        <button class="article-share-btn" title="Поделиться в Twitter">
                            <i class="fab fa-twitter"></i>
                        </button>
                        <button class="article-share-btn" title="Поделиться в Telegram">
                            <i class="fab fa-telegram"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(articleModal);
    articleModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add event listeners
    articleModal.querySelector('.close-article').addEventListener('click', closeArticleModal);
    
    // Close modal on outside click
    articleModal.addEventListener('click', (e) => {
        if (e.target === articleModal) {
            closeArticleModal();
        }
    });
    
    // Add share functionality
    articleModal.querySelectorAll('.article-share-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            shareArticle(article);
        });
    });
}

function closeArticleModal() {
    articleModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function shareArticle(article) {
    const shareUrl = window.location.href.split('#')[0] + `#article-${article.id}`;
    const text = `Прочитайте статью: ${article.title}`;
    
    if (navigator.share) {
        navigator.share({
            title: article.title,
            text: article.excerpt,
            url: shareUrl,
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        navigator.clipboard.writeText(`${text} - ${shareUrl}`).then(() => {
            alert('Ссылка скопирована в буфер обмена!');
        });
    }
}

// Initialize blog
function initBlog() {
    // Display initial articles
    displayArticles(filteredArticles, currentPage);
    
    // Category filter
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter articles
            currentCategory = btn.dataset.category;
            filteredArticles = filterArticlesByCategory(currentCategory);
            currentPage = 1;
            displayArticles(filteredArticles, currentPage);
        });
    });
    
    // Search functionality
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Load more
    loadMoreBtn.addEventListener('click', () => {
        const spinner = loadMoreBtn.querySelector('.loading-spinner');
        spinner.style.display = 'block';
        loadMoreBtn.querySelector('span').textContent = 'Загрузка...';
        
        setTimeout(() => {
            currentPage++;
            displayArticles(filteredArticles, currentPage);
            spinner.style.display = 'none';
            loadMoreBtn.querySelector('span').textContent = 'Загрузить больше';
        }, 1000);
    });
    
    // Subscribe form
    const subscribeForm = document.getElementById('subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = subscribeForm.querySelector('input[type="email"]').value;
            
            // Simulate subscription
            const submitBtn = subscribeForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Подписываем...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = 'Подписано!';
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    subscribeForm.reset();
                    alert('Спасибо за подписку! Проверьте вашу почту для подтверждения.');
                }, 1500);
            }, 1500);
        });
    }
}

// Perform search
function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
        filteredArticles = filterArticlesBySearch(query);
        currentPage = 1;
        displayArticles(filteredArticles, currentPage);
        
        // Update category buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('.category-btn[data-category="all"]').classList.add('active');
        currentCategory = 'all';
    }
}

// Initialize blog when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (blogGrid) {
        initBlog();
    }
});