CREATE DATABASE IF NOT EXISTS `examen_nocturna`;
USE examen_nocturna;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : lun. 03 juin 2024 à 17:47
-- Version du serveur : 5.7.39
-- Version de PHP : 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `examen_nocturna`
--

-- --------------------------------------------------------

--
-- Structure de la table `realisations`
--

CREATE TABLE `realisations` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `image_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `realisations`
--

INSERT INTO `realisations` (`id`, `title`, `description`, `image_url`) VALUES
(6, 'Vesperr.', 'Ceci est mon projet Vesperr.', '/uploads/1717406158991-t_vesperr.png'),
(7, 'Anwa', 'Ceci est mon projet Anwa.', '/uploads/1717406260444-t_anwa.png'),
(8, 'Cleanixer', 'Ceci est mon projet Cleanixer.', '/uploads/1717406282249-t_cleanixer.png'),
(13, 'Projet test 2024', 'C\'est un test', '/uploads/1717424929941-t_delicious.png');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`) VALUES
(12, 'test', '$2b$10$cH5Od78B8lTQx2kB7yfpXurBuurlZYa/qNXsdvdXGp3jlsnsFpTgu', 'test@test.fr'),
(1, 'admin', '$2b$10$3/1BM0D3qzA2La9YReeNKueGoxbx3wDqhQ0G68H1IQcQRdX1Rmgmu', 'admin@mail.fr'),
(13, 'email', '$2b$10$7iRLE5JkeAb7ck2Akcd32uszEp3GI2vct/xC1Q.SmHHhG.PgkeENu', 'email@mail.fr');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `realisations`
--
ALTER TABLE `realisations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `realisations`
--
ALTER TABLE `realisations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
