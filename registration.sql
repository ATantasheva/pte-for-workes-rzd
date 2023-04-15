-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:8889
-- Время создания: Мар 29 2023 г., 10:47
-- Версия сервера: 5.7.34
-- Версия PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `registration`
--

-- --------------------------------------------------------

--
-- Структура таблицы `bookmarks`
--

CREATE TABLE `bookmarks` (
  `user` int(11) NOT NULL,
  `number` int(11) NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `bookmarks`
--

INSERT INTO `bookmarks` (`user`, `number`, `title`, `description`) VALUES
(31, 9, 'тест1', 'тест тест тест'),
(2, 14, 'тест-1', 'жного транспорта общего пользования <1> (далее - инфраструктура), железнодорожных путей необщего пользования <2>, железнодорожного подвижного состава <3> и определяют обязанности работников железнодорожного транспорта общего <4> и необщего пользования <5> (далее - железнодорожный транспорт, работники железнодорожного транспорта соотве'),
(31, 21, 'тест-1', 'Правила технической эксплуатации железных дорог Российской Федерации (далее - Правила) устанавливают систему организации движения поездов, требования к технической эксплуатации сооружений и устройств инфраструктуры железнодорожного транспорта общего пользования <1> (далее - инфраструктура), железнодорожных путей необщего пользования <2>, железнодорожного подвижного состава <3> и определяют обязанности работников железнодорожного транспорта общего <4> и необщего пользования <5> (далее - железнодорожный транспорт, работники железнодорожного транспорта соответственно).'),
(32, 27, 'тест2222', 'тест22222'),
(32, 29, 'тест 11111', '11111111111');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password2` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `password2`) VALUES
(1, 'Александра1', 'email-1@mail.ru', '123', '0'),
(2, 'Александра2', 'email-2@mail.ru', '456', '0'),
(31, 'Мария', 'user-chel-3@mail.ru', '1', '1'),
(32, 'Руслан Танташев', 'lune2242@mail.ru', '11', '000'),
(54, 'Иван123', 'ivan@mai.ru', '123', '123');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `bookmarks`
--
ALTER TABLE `bookmarks`
  ADD PRIMARY KEY (`number`),
  ADD UNIQUE KEY `number` (`number`),
  ADD KEY `id-user` (`user`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `bookmarks`
--
ALTER TABLE `bookmarks`
  MODIFY `number` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `bookmarks`
--
ALTER TABLE `bookmarks`
  ADD CONSTRAINT `bookmarks_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
