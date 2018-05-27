import './main.css' // Любые ассеты испортируем прямо из JS. Главное чтобы был лоадер для этого типа файлов

import { logger } from './logger' // ES6 Импорт из другого модуля приложения

const myCoolFeature = (...args) => {
    logger(...args);
};

myCoolFeature(1, 2, 3);