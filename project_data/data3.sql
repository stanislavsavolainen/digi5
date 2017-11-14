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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device`
--

LOCK TABLES `device` WRITE;
/*!40000 ALTER TABLE `device` DISABLE KEYS */;
INSERT INTO `device` VALUES (1,'desktop ','my computer 1','M567','S234X23E8','no warranty','just worker pc',0,'Digitalents group',1,1,NULL,NULL,'127.0.0.1','Huuto.net',NULL),(2,'desktop','my computer 2xc','M65A','S23R45T2','lifetime','just another one computer',2,'Digitalents group',2,4,NULL,NULL,'127.0.0.1','Verkkokauppa.com',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `license`
--

LOCK TABLES `license` WRITE;
/*!40000 ALTER TABLE `license` DISABLE KEYS */;
INSERT INTO `license` VALUES (1,4,'S234FGSVBC','5','123456','Windows Xp SP3','34');
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Kalle2','Jokinen','2017-11-13 10:12:51','2017-11-21 22:00:00','Worker','worker','088 200 300 78',1,1,0,'kalle.jokinen@digitalents.fi',NULL,'Digitalents temporary employer',NULL,'Digitalents','http://url','none','facebook'),(2,'Ville','Kivinen','2017-11-14 22:00:00','2017-11-21 22:00:00','Worker','worker','088 981 234 65',1,0,0,'ville.kivinen@digitalents.fi',NULL,'Digitalents worker',NULL,'Digitalents','http://photo_url','none','linkedIn');
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

-- Dump completed on 2017-11-13 13:57:06
