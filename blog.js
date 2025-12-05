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
        fullContent: "Полный текст о технологиях EQ..."
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
        fullContent: "Полное интервью с дизайнером..."
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