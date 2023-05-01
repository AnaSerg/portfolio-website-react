import Learn from '../images/how-to-learn-image.png';
import RussianTravel from '../images/russian-travel-image.png';
import Movies from '../images/movies-explorer-image.png';
import Mesto from '../images/mesto-image.png';

export const projects = [
    {
        id: 1,
        title: "Научиться учиться",
        image: Learn,
        techs: ['HTML', 'CSS', 'БЭМ', 'анимация', 'flex layout', 'YouTube API', 'доступность'],
        smallDescription: "Одностраничный лендинг об эффективных способах обучения.",
        githubLink: "https://github.com/AnaSerg/how-to-learn",
        link: "https://endearing-brigadeiros-de3204.netlify.app/"
    },
    /*
    {
        id: 2,
        title: "Notes",
        image: ,
        techs: [],
        smallDescription: "Описание",
        bigDescription: "Длинное описание",
        githubLink: "",
        link: ""
    },
    */
    {
        id: 3,
        title: "Путешествие по России",
        image: RussianTravel,
        techs: ['HTML', 'CSS', 'БЭМ', 'flex layout', 'grid', 'доступность', 'адаптив'],
        smallDescription: "Лендинг о путешествии по России с перечислением интересных мест, достойных посещения.",
        githubLink: "https://github.com/AnaSerg/russian-travel",
        link: "https://anaserg.github.io/russian-travel/"
    },
    /*
    {
        id: 4,
        title: "Портфолио",
        image: ,
        techs: [],
        smallDescription: "Описание",
        bigDescription: "Длинное описание",
        githubLink: "",
        link: ""
    },
    */
    {
        id: 5,
        title: "Mesto",
        image: Mesto,
        techs: ['CSS', 'React', 'Webpack', 'Node.js', 'Express.js', 'MongoDB', 'адаптив'],
        smallDescription: "Социальная сеть, где можно делиться фотографиями, ставить лайки на фото других пользователей.",
        githubLink: "https://github.com/AnaSerg/mesto-frontend",
        link: "https://creative-gumdrop-b6767e.netlify.app/"
    },
    {
        id: 6,
        title: "Movies Explorer",
        image: Movies,
        techs: ['CSS', 'React', 'Webpack', 'Node.js', 'Express.js', 'MongoDB', 'адаптив'],
        smallDescription: "Сервис по поиску фильмов с возможностью сохранения в личном кабинете.",
        githubLink: "",
        link: "https://movies-front.nomoredomains.club/"
    },
    /*
    {
        id: 7,
        title: "Дай 5!",
        image: ,
        techs: [],
        smallDescription: "Описание",
        bigDescription: "Длинное описание",
        githubLink: "",
        link: "https://daipyat.ru/"
    },
     */
]

export const aboutInfo = [
    {
        title: 'Образование',
        text:
            'Я имею высшее образование по профессии переводчик, а также ' +
            'прошла курсы переподготовки по не очень популярной в России ' +
            'профессии sustainability-менеджер в Cambridge Institute for ' +
            'Sustainability Leadership. Если говорить об образовании в IT, ' +
            'то я окончила обучение в Яндекс.Практикуме и курсы по верстке ' +
            'в онлайн-школе CodeCademy. Также сейчас прохожу курс «Продвинутый ' +
            'Реакт» от автора на YouTube UlbiTV и интенсив ' +
            'по UI/UX-дизайну от блогера ui ux ma.'
    },
    {
        title: 'Опыт',
        text:
            'Сейчас я работаю в проекте по ' +
            'созданию образовательной платформы для подготовки к ЕГЭ. На данный ' +
            'момент я реализовала страницу с прохождением тестов, в которых есть ' +
            'разные типы вопросов. Вопросы загружаются через админку на бэкенде. ' +
            'Также я сделала страницу с результатами тестов, на основе которой ' +
            'пользователь может приобрести курс. Кроме того, я подключила Яндекс.Метрику. ' +
            'Мне очень важен пользовательский опыт, полученный в результате взаимодействия ' +
            'с нашим продуктом, поэтому я активно участвую в разработке дизайна, ' +
            'так как не все решения дизайнеров оправданы с точки зрения пользователя и оптимизации кода. '
    },
    {
        title: 'Мотивация',
        text:
            'Я решила сменить вид деятельности, так как моя мечта - создавать ' +
            'сервисы, которые делают удобной жизнь и работу людей. При этом, ' +
            'конкретно фронтенд, среди прочих видов разработки, позволяет сразу ' +
            'видеть результат. Мне нравится создавать осязаемый продукт, ' +
            'который будет приносить деньги бизнесу и удобство пользователям. ' +
            'Если что-то можно автоматизировать, то я с удовольствием это сделаю.'
    },
    {
        title: 'Скиллы',
        text:
            'Я знаю английский и французский языки на уровне B2 и активно этим' +
            ' пользуюсь. Имею опыт публичных выступлений как в онлайн, так и в ' +
            'оффлайн-формате. Также я была спикером на онлайн-курсе по теме того, ' +
            'как сделать компанию более экологичной.'
    },
]
