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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device`
--

LOCK TABLES `device` WRITE;
/*!40000 ALTER TABLE `device` DISABLE KEYS */;
INSERT INTO `device` VALUES (1,'desktop ','my computer 1','M567','S234X23E8','no warranty','just worker pc',0,'Digitalents group',1,1,NULL,NULL,'127.0.0.1','Huuto.net',1),(2,'desktop','my computer 2d','M65A','S23R45T2','lifetime','just another one computer',2,'Digitalents group',2,4,NULL,NULL,'127.0.0.1','Verkkokauppa.com',1),(4,'Tablet PC','tABLET sr','Samsung Galaxy 10','EERYYT','2 YEARS','SR Work computer',2,'5',4,5,NULL,NULL,'DHCP','Elia SHOP',NULL),(5,NULL,'Nice device 1',NULL,'F45S23D1',NULL,'testing1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1),(6,NULL,'t1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0),(7,NULL,'m1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1),(8,NULL,'m2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1),(9,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10,'nice','nicedevice1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1),(11,NULL,'n1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(12,NULL,'NH',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(13,NULL,'cvcv',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(14,NULL,'qwert',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(15,'gameconsole','Xbox',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(16,'VGA','Nvidia',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
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
  `license_visible` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`license_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `license`
--

LOCK TABLES `license` WRITE;
/*!40000 ALTER TABLE `license` DISABLE KEYS */;
INSERT INTO `license` VALUES (1,4,'S234FGSVBC','6','S34-67t-','Windows Xp SP3','34',1),(2,NULL,NULL,NULL,NULL,NULL,NULL,0),(3,5,'S123123XCV56','root','123123','Office2007','office general license',1),(4,NULL,'free',NULL,'','Linux','free software',0),(5,3,'S34342',NULL,NULL,'Office97',NULL,0),(6,3,'S34342',NULL,NULL,'Win7 -> Ville PC',NULL,0),(7,3,'S34342',NULL,NULL,'Win7 (deive) -> Jorma PC',NULL,1),(8,3,'S34342',NULL,NULL,'Win7',NULL,1),(9,3,'S34342',NULL,NULL,'Photoshop  ( Person Group  ) -> Mikke',NULL,1),(10,4,'Trial version',NULL,'don\'t need','Photoshop 6','Trial version',1),(11,NULL,NULL,NULL,NULL,'LL',NULL,NULL),(12,NULL,NULL,NULL,NULL,'ll2',NULL,NULL),(13,NULL,NULL,NULL,NULL,'Fsecure','anti-virus',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Kalle3','Jokinen','2017-11-13 10:12:51','2017-11-21 22:00:00','Worker','worker','088 200 300 78',1,1,0,'kalle.jokinen@digitalents.fi',NULL,'Digitalents temporary employer',NULL,'Digitalents','http://url','none','facebook'),(2,'Ville','Kivinen','2017-11-14 22:00:00','2017-11-21 22:00:00','Worker','worker','088 981 234 65',1,0,1,'ville.kivinen@digitalents.fi',NULL,'Digitalents worker',NULL,'Digitalents','http://photo_url','none','linkedIn'),(3,'Seppo','Rouhiainen','2017-09-24 21:00:00','2018-12-30 22:00:00','Head oft ICT','ICT',NULL,0,1,1,'seppo.rouhiainen@digitalentshelsinki.fi',NULL,NULL,NULL,'2 floor ICT room',NULL,'user0',NULL),(4,'Pekka','Valo',NULL,NULL,NULL,NULL,'456',1,1,1,'pekka.valo@digitalents.fi',NULL,'test',NULL,NULL,NULL,NULL,NULL),(5,'test3',NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6,'user1',NULL,NULL,NULL,NULL,NULL,NULL,0,0,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,'test4',NULL,NULL,NULL,NULL,NULL,NULL,0,0,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(8,'user5','1212',NULL,NULL,NULL,NULL,'312312',0,0,1,NULL,NULL,'fsdf',NULL,NULL,NULL,NULL,NULL),(9,'user6',NULL,NULL,NULL,NULL,NULL,NULL,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10,'432',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(11,'user100',NULL,NULL,NULL,NULL,'jk',NULL,0,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(12,'43423423','423423',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(13,'u1','q1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1234567890A1234567890B12345676890C',NULL,NULL,NULL,NULL,NULL),(14,'k1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(15,'y1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(16,'Kalle5',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(17,'aaa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(18,'first2','last2',NULL,NULL,NULL,'softdev_data',NULL,1,NULL,NULL,'m',NULL,'sofdev user',NULL,NULL,NULL,NULL,NULL),(19,'user68',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20,'123',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(21,'erewerwe',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(22,'Olli',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Futuirce, on oikeus lainata',NULL,NULL,NULL,NULL,NULL),(23,'user5',NULL,NULL,NULL,NULL,'support7',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(24,'user101',NULL,NULL,NULL,NULL,'support7',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(25,'Joku1',NULL,NULL,NULL,NULL,'helpdesk',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(26,'user5',NULL,NULL,NULL,NULL,'helpdesk',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
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

-- Dump completed on 2017-12-15 13:42:37
