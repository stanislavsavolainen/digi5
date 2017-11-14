-- MySQL dump 10.13  Distrib 5.7.20, for Linux (i686)
--
-- Host: localhost    Database: dbtest2
-- ------------------------------------------------------
-- Server version	5.7.20-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `dbtest2`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `dbtest2` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `dbtest2`;

--
-- Table structure for table `device`
--

DROP TABLE IF EXISTS `device`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `device` (
  `device_id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `model` varchar(45) DEFAULT NULL,
  `serial_number` varchar(45) DEFAULT NULL,
  `warranty` varchar(45) DEFAULT NULL,
  `about_device` varchar(100) DEFAULT NULL,
  `owner_id` int(11) DEFAULT NULL,
  `owner_group` varchar(45) DEFAULT NULL,
  `current_user_id` int(11) DEFAULT NULL,
  `last_user_id` int(11) DEFAULT NULL,
  `device_available` int(11) DEFAULT NULL,
  `available_after` varchar(45) DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `shop` varchar(45) DEFAULT NULL,
  `device_visible` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`device_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device`
--

LOCK TABLES `device` WRITE;
/*!40000 ALTER TABLE `device` DISABLE KEYS */;
/*!40000 ALTER TABLE `device` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `license`
--

DROP TABLE IF EXISTS `license`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `license` (
  `license_id` int(11) NOT NULL AUTO_INCREMENT,
  `device_id` int(11) DEFAULT NULL,
  `license_code` varchar(45) DEFAULT NULL,
  `user` varchar(45) DEFAULT NULL,
  `pass` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `comments` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`license_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `license`
--

LOCK TABLES `license` WRITE;
/*!40000 ALTER TABLE `license` DISABLE KEYS */;
/*!40000 ALTER TABLE `license` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `work_start` datetime DEFAULT NULL,
  `work_end` datetime DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `team` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `door_keys` tinyint(4) DEFAULT NULL,
  `lukoton` tinyint(4) DEFAULT NULL,
  `user_visible` tinyint(4) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `slack` int(11) DEFAULT NULL,
  `comments` varchar(45) DEFAULT NULL,
  `school` varchar(45) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `photo` varchar(45) DEFAULT NULL,
  `ad_user` varchar(45) DEFAULT NULL,
  `external_accounts` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-13 11:48:31
